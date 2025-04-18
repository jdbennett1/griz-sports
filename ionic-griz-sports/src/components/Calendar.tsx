import { useEffect, useState, useRef } from "react";
import { useHistory } from 'react-router-dom';
import { Eventcalendar, MbscCalendarEvent, setOptions } from "@mobiscroll/react";
import { loadPublicCalendarEvents } from "../services/googleCalendarService";
import "@mobiscroll/react/dist/css/mobiscroll.min.css";
import "./Calendar.css"; // Make sure this exists or remove it
import { s } from "vite/dist/node/types.d-aGj9QkWt";

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
        id: event.id,
        start: new Date(event.start.dateTime || event.start.date),
        end: new Date(event.end.dateTime || event.end.date),
        title: event.summary,
        location: (() => {
          const description = event.description || '';
          const locationMatch = typeof description === 'string' ? description.match(/Location:\s*(.*)/i) : null;
          const location = locationMatch ? locationMatch[1] : 'No Location';
          return location;
        })(),
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

  const history = useHistory();


  const onEventClick = (args: any) => {
    const event = args.event;
    if (event && event.id) {
      history.push({
        pathname: `/events/${event.id}`,
        state: {
          event: {
            id: event.id,
            title: event.title,
            time: (() => {
              const rawDate = event.start || event.start?.date;
              if (!rawDate) return 'No Time';

              const dateObj = new Date(rawDate);

              const formattedDate = dateObj.toLocaleDateString(undefined, {
                year: 'numeric',
                month: 'long',
                day: 'numeric',
              });
              const formattedTime = dateObj.toLocaleTimeString(undefined, {
                hour: 'numeric',
                minute: '2-digit',
                hour12: true,
              });

              return `${formattedDate} at ${formattedTime}`;
            })(),
            location: event.location || 'No Location',

          }
        }
      });
    } else {
      console.error("Event ID not found for the clicked event.");
    }
  }



  return (
    <div>
      <h1>Upcoming Events</h1>
      <Eventcalendar
        data={events}
        view={{ calendar: { type: "month" } }}
        onEventHoverIn={onEventHoverIn}
        onEventHoverOut={onEventHoverOut}
        onEventClick={onEventClick}
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
}

export default Calendar;
