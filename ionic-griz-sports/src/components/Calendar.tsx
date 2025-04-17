import { useEffect, useState, useRef } from "react";
import { Eventcalendar, MbscCalendarEvent, setOptions } from "@mobiscroll/react";
import { loadPublicCalendarEvents } from "../services/googleCalendarService";
import "@mobiscroll/react/dist/css/mobiscroll.min.css";
import "./Calendar.css"; // Make sure this exists or remove it

setOptions({
  theme: "ios",
  themeVariant: "light",
});

const Calendar: React.FC = () => {
  const [events, setEvents] = useState<MbscCalendarEvent[]>([]);
  const tooltipRef = useRef<HTMLDivElement | null>(null);
  const [tooltipAnchor, setTooltipAnchor] = useState();
  const [tooltipColor, setTooltipColor] = useState<string>('');


  useEffect(() => {
    const fetchEvents = async () => {
      const fetchedEvents = await loadPublicCalendarEvents();

      const formattedEvents: MbscCalendarEvent[] = fetchedEvents.map((event: any) => ({
        start: new Date(event.start.dateTime || event.start.date),
        end: new Date(event.end.dateTime || event.end.date),
        title: event.summary,
        color: "#70002e"
      }));


      setEvents(formattedEvents);
    };

    fetchEvents();
  }, []);



  const onEventHoverIn = (args: any) => {
    if (tooltipRef.current) {
      tooltipRef.current.innerHTML = `
        <strong>${args.event?.title || 'No Title'}</strong><br>
        ${args.event?.start ? new Date(args.event.start).toLocaleString() : 'No Start Time'} - ${args.event?.end ? new Date(args.event.end).toLocaleString() : 'No End Time'}<br>
        ${args.event?.description || 'No Description'}
      `;
      tooltipRef.current.style.left = `${args.domEvent.pageX + 20}px`;
      tooltipRef.current.style.top = `${args.domEvent.pageY + 20}px`;
      tooltipRef.current.style.display = "block";
    }
  };

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
      <div
        ref={tooltipRef}
        style={{
          position: "fixed",
          backgroundColor: "white",
          border: "1px solid gray",
          padding: "10px",
          borderRadius: "5px",
          display: "none",
          pointerEvents: "none",
          zIndex: 10,
        }}
      />
    </div>
  );
};

export default Calendar;
