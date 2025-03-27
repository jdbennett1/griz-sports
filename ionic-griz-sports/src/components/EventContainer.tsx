import React, { useState } from 'react';
import { IonCard, IonCardHeader, IonCardTitle, IonCardContent } from '@ionic/react';
import { Link } from 'react-router-dom';
import '../pages/Home.css';

interface Event {
  id: number;
  title: string;
  time: string;
  location: string;
}

const EventContainer: React.FC = () => {
  const [events] = useState<Event[]>([
    { id: 1, title: "Basketball Game", time: "6:00 PM", location: "Arena A" },
    { id: 2, title: "Soccer Match", time: "7:30 PM", location: "Field 2" },
    { id: 3, title: "Hockey Game", time: "8:00 PM", location: "Rink 1" }
    
  ]);

  return (
    <div className='upcoming-events'>
      <h3 className="event-title">Today's Events</h3>
      <div className="event-list">
        {events.map(event => (
          <Link
            key={event.id}
            to={{
              pathname: `/events/${event.id}`,
              state: { event }
            }}
            className="event-link"
            style={{ textDecoration: 'none' }} 
          >
            <IonCard className="event-card">
              <IonCardHeader>
                <IonCardTitle>{event.title}</IonCardTitle>
              </IonCardHeader>
              <IonCardContent>
                <p><strong>Time:</strong> {event.time}</p>
                <p><strong>Location:</strong> {event.location}</p>
              </IonCardContent>
            </IonCard>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default EventContainer;
