import { useEffect, useState } from "react";
import { Eventcalendar, MbscEvent, MbscCalendarEvent, setOptions } from "@mobiscroll/react";
import { loadPublicCalendarEvents } from "../services/googleCalendarService";
import "./Calendar.css"; // Import your CSS file for styling

setOptions({
    theme: "ios",
    themeVariant: "light",
});

const Calendar: React.FC = () => {
    const [events, setEvents] = useState<MbscEvent[]>([]);

    useEffect(() => {
        const fetchEvents = async () => {
            const fetchedEvents = await loadPublicCalendarEvents();

            // Convert Google Calendar events to Mobiscroll format
            const formattedEvents: MbscCalendarEvent[] = fetchedEvents.map(event => ({
                start: new Date(event.start.dateTime || event.start.date),
                end: new Date(event.end.dateTime || event.end.date),
                title: event.summary,
                color: event.color || "#70002e"
            }));

            setEvents(formattedEvents);
        };

        fetchEvents();
    }, []);

    // Handle hover-in event
    const onEventHoverIn = (args: any) => {
        if (tooltipRef.current) {
            tooltipRef.current.innerHTML = `
        <strong>${args.event.title}</strong><br>
        ${new Date(args.event.start).toLocaleString()} - ${new Date(args.event.end).toLocaleString()}<br>
        ${args.event.description}
      `;
            tooltipRef.current.style.left = `${args.domEvent.pageX + 20}px`;
            tooltipRef.current.style.top = `${args.domEvent.pageY + 20}px`;
            tooltipRef.current.style.display = "block";
        }
    };

    // Handle hover-out event
    const onEventHoverOut = () => {
        if (tooltipRef.current) {
            tooltipRef.current.style.display = "none";
        }
    };

    return (
        <div>
            <h1>Upcoming Events</h1>
            <Eventcalendar data={events} view={{ calendar: { type: "month" } }} />
        </div>
    );
};

export default Calendar;
