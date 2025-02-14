import React from 'react';
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonButtons, IonButton } from '@ionic/react';
import './Home.css';
import backgroundImage from '../assets/images/Landscape-Teams.png';

const Home: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar className="custom-header">
          <IonTitle className="custom-title">Griz Sports</IonTitle>
          <IonButtons slot="end">
            <IonButton fill="clear" className="link">Game Schedules</IonButton>
            <IonButton fill="clear" className="link">Locations</IonButton>
            <IonButton fill="clear" className="link" routerLink="/modal">Calendar</IonButton>
          </IonButtons>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <div className="ion-content-background" style={{ backgroundImage: `url(${backgroundImage})` }}>
          <div className="welcome-container">
            <h2 className="welcome-title">Welcome to Griz Sports!</h2>
            <p className="subtitle">Your hub for game schedules and locations</p>
          </div>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Home;
