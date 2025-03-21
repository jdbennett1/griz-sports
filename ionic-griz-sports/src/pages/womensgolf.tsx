import React from 'react';
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonButtons, IonButton, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle } from '@ionic/react';
import './mensbasketball.css';
import backgroundImage from '../assets/images/Landscape-Teams.png';

const Womensgolf: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar className="custom-header">
          <IonTitle className="custom-title">Griz Sports</IonTitle>
          <IonButtons slot="end">
            <IonButton fill="clear" className="link" routerLink="/home">Home</IonButton>
            <IonButton fill="clear" className="link" routerLink="/shd">Game Schedules</IonButton>
            <IonButton fill="clear" className="link" routerLink="/loc">Locations</IonButton>
            <IonButton fill="clear" className="link" routerLink="/modal">Calendar</IonButton>
          </IonButtons>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <div className="ion-content-background" style={{ backgroundImage: `url(${backgroundImage})` }}>
          <IonCard>
          <IonCardHeader>
        <IonCardTitle>Womens Golf</IonCardTitle>
        <IonCardSubtitle>2024-2025 season</IonCardSubtitle>
      </IonCardHeader>
      <IonCardContent>STATS</IonCardContent>
          </IonCard>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Womensgolf;
