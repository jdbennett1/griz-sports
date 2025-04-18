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
import './parking.css'; // Assuming you have a separate CSS file for parking styles
import MapComponent from '../components/MapComponent';

interface Event {
  id: string;
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
            <h2>Parking</h2>
            <center>
              <div> {/* I removed the Background div for the time being normally the className here would be parking-container */}

                {/* This will render the MapComponent */}
                <MapComponent />

              </div>
            </center>
          </>
        ) : (
          <div className="event-not-found">
            <h2>Event not found</h2>
          </div>
        )}

      </IonContent>
    </IonPage>
  );
};

export default EventsPage;
