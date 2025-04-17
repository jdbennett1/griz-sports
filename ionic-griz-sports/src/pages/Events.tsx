import React from 'react';
import { useParams, useLocation } from 'react-router-dom';
import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonButtons,
  IonButton
} from '@ionic/react';
import './Events.css';


interface Event {
  id: number;
  title: string;
  time: string;
  location: string;
}

const EventsPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const location = useLocation<{ event?: Event }>();

  const event = location.state?.event;

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar className="custom-header">
          <IonTitle className="custom-title">Griz Sports</IonTitle>
          <IonButtons slot="end">
            <IonButton routerLink="/home">Back</IonButton>
          </IonButtons>
        </IonToolbar>
      </IonHeader>

      <IonContent className="fixed-background-events">
        {event ? (
          <>
            <h2 className="event-title">{event.title}</h2>
            <h4 className="event-subheading">Time: {event.time}</h4>
            <h4 className="event-subheading">Location: {event.location}</h4>

            {/* 🚗 Parking Location Container Placeholder */}
            <div className="parking-container">
              <p>Location Container (Map API)</p>
            </div>
          </>
        ) : (
          <p>Event not found. Try accessing this page from the home screen.</p>
        )}
      </IonContent>
    </IonPage>
  );
};

export default EventsPage;
