import React, { useState, useEffect } from 'react';
import { IonCard, IonCardHeader, IonCardTitle, IonCardContent, IonSpinner } from '@ionic/react';
import '../pages/Home.css';

interface Event {
  id: number;
  title: string;
  time: string;
  location: string;
}

const EventContainer: React.FC = () => {

    //Below code is for Database connection use only...
//   const [events, setEvents] = useState<Event[]>([]);
//   const [loading, setLoading] = useState<boolean>(true);

//   useEffect(() => {
//     // Replace with our actual API endpoint
//     fetch('https://api-url.com/events')  
//       .then(response => response.json())
//       .then(data => {
//         setEvents(data);
//         setLoading(false);
//       })
//       .catch(error => {
//         console.error("Error fetching events:", error);
//         setLoading(false);
//       });
//   }, []);

//hardcode event data only for testing...   
    const [events] = useState<Event[]>([
    { id: 1, title: "Basketball Game", time: "6:00 PM", location: "Arena A" },
    { id: 2, title: "Soccer Match", time: "7:30 PM", location: "Field 2" },
    { id: 3, title: "Hockey Game", time: "8:00 PM", location: "Rink 1" },
    { id: 4, title: "Hockey Game", time: "8:00 PM", location: "Rink 1" },
    { id: 5, title: "Hockey Game", time: "8:00 PM", location: "Rink 1" },
    { id: 6, title: "Hockey Game", time: "8:00 PM", location: "Rink 1" },
    { id: 7, title: "Hockey Game", time: "8:00 PM", location: "Rink 1" },
    { id: 8, title: "Hockey Game", time: "8:00 PM", location: "Rink 1" },
    { id: 9, title: "Hockey Game", time: "8:00 PM", location: "Rink 1" },
    { id: 10, title: "Hockey Game", time: "8:00 PM", location: "Rink 1" },
    { id: 11, title: "Hockey Game", time: "8:00 PM", location: "Rink 1" }
  ]);

  return (
    <div className='upcoming-events'>
      <h3 className="event-title">Today's Events</h3>
      {/*below code for database use only...*/}
        {/*loading ? (
        <IonSpinner name="dots" />
      ) : ( */}
        <div className="event-list">
          {events.length > 0 ? (
            events.map(event => (
              <IonCard key={event.id} className="event-card">
                <IonCardHeader>
                  <IonCardTitle>{event.title}</IonCardTitle>
                </IonCardHeader>
                <IonCardContent>
                  <p><strong>Time:</strong> {event.time}</p>
                  <p><strong>Location:</strong> {event.location}</p>
                </IonCardContent>
              </IonCard>
            ))
          ) : (
            <p className="no-events">No events available.</p>
          )}
        </div>
       {/* below code for database use only... */} 
      {/* )} */}
    </div>
  );
};

export default EventContainer;
