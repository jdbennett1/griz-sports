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
          const mappedEvents = data.map((item: any) => ({
            id: item.id,
            title: item.summary || 'No Title',
            time: item.start?.dateTime || item.start?.date || 'No Time',
            location: item.description || 'No Location',
          }));
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
          <IonCard key={event.id} className="event-card">
            <IonCardHeader>
              <IonCardTitle>{event.title}</IonCardTitle>
            </IonCardHeader>
            <IonCardContent>
              <p><strong>Time:</strong> {event.time}</p>
              <p><strong>Location:</strong> {event.location}</p>
              <Link
                to={{
                  pathname: `/events/${event.id}`,
                  state: { event }
                }}
                className="event-link"
                style={{ textDecoration: 'none', color: 'blue' }}
              >
                View Details
              </Link>
            </IonCardContent>
          </IonCard>
        ))}
      </div>
    </div>
  );
};

export default EventContainer;