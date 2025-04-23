import { useEffect, useState, useRef } from "react";
import { useHistory } from 'react-router-dom';
import { Eventcalendar, MbscCalendarEvent, setOptions } from "@mobiscroll/react";
import { loadPublicCalendarEvents } from "../services/googleCalendarService";
import "@mobiscroll/react/dist/css/mobiscroll.min.css";
import "./Calendar.css";


setOptions({
  theme: "ios",
  themeVariant: "light",
});

// Extended type to include sport
interface MyCalendarEvent extends MbscCalendarEvent {
  sport: string;
}

const Calendar: React.FC = () => {
  const [events, setEvents] = useState<MyCalendarEvent[]>([]);
  const [selectedSport, setSelectedSport] = useState<string>("All");
  const tooltipRef = useRef<HTMLDivElement | null>(null);
  const [tooltipAnchor, setTooltipAnchor] = useState();
  const [tooltipColor, setTooltipColor] = useState<string>('');

  // Helper function to extract sport from summary
  const getSportType = (summary: string): string => {
    const match = summary.match(/Griz (\w+)/i);
    return match ? match[1] : 'Unknown';
  };

  useEffect(() => {
    const fetchEvents = async () => {
      const fetchedEvents = await loadPublicCalendarEvents();
      console.log("Fetched raw events:", fetchedEvents); // Add this line


      const formattedEvents: MyCalendarEvent[] = fetchedEvents.map((event: any) => ({
        id: event.id,
        start: new Date(event.start.dateTime || event.start.date),
        end: new Date(event.end.dateTime || event.end.date),
        title: event.summary,
        location: (() => {
          const description = event.description || '';
          const locationMatch = typeof description === 'string' ? description.match(/Location:\s*(.*)/i) : null;
          return locationMatch ? locationMatch[1] : 'No Location';
        })(),
        sport: getSportType(event.summary), // Extract sport type from summary
        color: "#70002e"
      }));


      setEvents(formattedEvents);
    };

    fetchEvents();
  }, []);

  const uniqueSports = Array.from(new Set(events.map(e => e.sport))).sort();

  const filteredEvents = selectedSport === "All"
    ? events
    : events.filter(e => e.sport === selectedSport);

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
      <div className="event-title">Event Calendar</div>
      <label htmlFor="sport-filter" style={{ marginRight: "10px" }}>Filter by sport:</label>
      <select
        id="sport-filter"
        value={selectedSport}
        onChange={(e) => setSelectedSport(e.target.value)}
      >
        <option value="All">All Sports</option>
        {uniqueSports.map(sport => (
          <option key={sport} value={sport}>{sport}</option>
        ))}
      </select><br></br>
      <br></br>
      <Eventcalendar
        data={filteredEvents}
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
