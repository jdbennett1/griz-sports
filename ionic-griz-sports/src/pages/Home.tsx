import React from 'react';
import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonButtons,
  IonButton,
  IonRouterLink
} from '@ionic/react';
import './Home.css';
import EventContainer from '../components/EventContainer';
import Calendar from '../components/Calendar';



const Home: React.FC = () => {
  return (
    <IonPage style={{ position: 'fixed' }}>
      <IonHeader>
        <IonToolbar className="custom-header">
          <IonTitle className="custom-title">Griz Sports</IonTitle>
          <IonButtons slot="end">
            <IonButton fill="clear" className="link" data-testid="game-schedules-button">
              Game Schedules
            </IonButton>
            <IonButton routerLink="/parking">Parking
            </IonButton>

          </IonButtons>
        </IonToolbar>
      </IonHeader>

      <IonContent className="fixed-background">
        <h2 className="welcome-title">Welcome to Griz Sports!</h2>
        <p className="subtitle">Your hub for game schedules and locations</p>

        <div className="container-wrapper">
          <div className="upcoming-events">
            <EventContainer />
          </div>

          <div className="bottom-section">
            <div className="calendar">
              <Calendar />
            </div>

          </div>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Home;
