import React, { useState } from 'react';
import { IonCard, IonCardHeader, IonCardTitle, IonCardContent } from '@ionic/react';
import { Link } from 'react-router-dom';
import '../pages/Home.css';
import { loadPublicCalendarEvents } from "../services/googleCalendarService";

interface Event {
  id: string;
  title: string;
  time: string;
  location: string;
}

const EventContainer: React.FC = () => {
  const [events, setEvents] = useState<Event[]>([]);

  React.useEffect(() => {
    const fetchEvents = async () => {
      try {
        const data = await loadPublicCalendarEvents(); // This returns the items array directly
        console.log("Fetched data:", data);
        console.log("Full data response:", data);

        if (data && data.length > 0) {
          const mappedEvents = data
            .map((item: any) => {
              const dateTime = item.start?.dateTime || item.start?.date || 'No Time';
              const dateObj = new Date(dateTime);
              const today = new Date();
              if (dateObj < today) {
                return null; // Skip past events
              }
              const formattedDate = `${dateObj.getMonth() + 1}/${dateObj.getDate()}/${dateObj.getFullYear().toString().slice(-2)}`;
              const formattedTime = dateObj.toLocaleTimeString([], { hour: 'numeric', minute: '2-digit', hour12: true }).toLowerCase();

              const locationMatch = item.description?.match(/Location:\s*(.*)/i);
              const location = locationMatch ? locationMatch[1] : 'No Location';
              return {
                id: item.id,
                title: item.summary || 'No Title',
                time: `${formattedDate} ${formattedTime}`,
                location: location,
              };
            })
            .filter((event: null) => event !== null); // Filter out null values
          setEvents(mappedEvents);
        } else {
          console.warn('No events found in the response.');
        }
      } catch (error) {
        console.error('Error fetching events:', error);
      }
    };

    fetchEvents();
  }, []);

  return (
    <div className='upcoming-events'>
      <h3 className="event-title">Upcoming Events</h3>
      <div className="event-list">
        {events.map(event => (
          <IonCard
            key={event.id}
            className="event-card"
            style={{ textAlign: 'left', whiteSpace: 'pre-wrap', width: '300px', height: '250px' }}
          >
            <IonCardHeader>
              <IonCardTitle style={{ fontSize: '1rem', color: '#70002e' }}>{event.title}</IonCardTitle>
            </IonCardHeader>
            <IonCardContent style={{ overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
              <p style={{ margin: '0', fontSize: '0.9rem' }}><strong>Time:</strong> {event.time}</p>
              <p style={{ margin: '0', fontSize: '0.9rem', whiteSpace: 'pre-wrap' }}><strong>Location:</strong> {event.location}</p>
              <Link
                to={{
                  pathname: `/events/${event.id}`,
                  state: { event }
                }}
                className="event-link"
                style={{ textDecoration: 'none', color: '#70002e', fontSize: '0.9rem' }}
              >
                View Details
              </Link>
            </IonCardContent>
          </IonCard>

        ))
        }
      </div >
    </div >
  );
};

export default EventContainer;