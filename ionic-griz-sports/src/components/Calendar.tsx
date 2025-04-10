import { useEffect, useState, useRef } from "react";
import { Eventcalendar, MbscCalendarEvent, setOptions } from "@mobiscroll/react";
import { loadPublicCalendarEvents } from "../services/googleCalendarService";
import "../components/Calendar.css"; // Import your CSS file for styling

setOptions({
    theme: "ios",
    themeVariant: "light",
});

const Calendar: React.FC = () => {
    const [events, setEvents] = useState<MbscCalendarEvent[]>([]);
    const tooltipRef = useRef<HTMLDivElement | null>(null); // ✅ FIXED TOOLTIP REF
    interface GoogleCalendarEvent {
        start: { dateTime?: string; date?: string };
        end: { dateTime?: string; date?: string };
        summary: string;
        description?: string;
        color?: string;
    }

    useEffect(() => { 
        const fetchEvents = async () => {
            const fetchedEvents = await loadPublicCalendarEvents();

            // Convert Google Calendar events to Mobiscroll format
            const formattedEvents: MbscCalendarEvent[] = fetchedEvents.map((event: GoogleCalendarEvent) => ({
                start: new Date(event.start.dateTime || event.start.date!),
                end: new Date(event.end.dateTime || event.end.date!),
                title: event.summary,
                description: event.description || "", // ✅ Ensure description exists
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
                ${args.event.description || "No description"}
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
            <Eventcalendar
                data={events}
                view={{ calendar: { type: "month" } }}
                onEventHoverIn={onEventHoverIn}
                onEventHoverOut={onEventHoverOut}
            />
            <div ref={tooltipRef} className="tooltip" style={{ position: "absolute", display: "none", background: "#fff", padding: "10px", border: "1px solid #ccc", borderRadius: "5px", boxShadow: "0px 0px 5px rgba(0,0,0,0.2)" }}></div>
        </div>
    );
};

export default Calendar;