import React from 'react';
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonButtons, IonButton, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle } from '@ionic/react';
import './mensbasketball.css';
import backgroundImage from '../assets/images/Landscape-Teams.png';

const Locations: React.FC = () => {
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
        <IonCard>
        <IonCardHeader>
        <IonCardTitle>Campus</IonCardTitle>
        <IonCardSubtitle>address</IonCardSubtitle>
        </IonCardHeader>
        <IonCardContent>Events held at this location</IonCardContent>
        </IonCard>

        <IonCard>
        <IonCardHeader>
        <IonCardTitle>Dornblaser</IonCardTitle>
        <IonCardSubtitle>address</IonCardSubtitle>
        </IonCardHeader>
        <IonCardContent>Events held at this location</IonCardContent>
        </IonCard>

        <IonCard>
        <IonCardHeader>
        <IonCardTitle>The Peak</IonCardTitle>
        <IonCardSubtitle>address</IonCardSubtitle>
        </IonCardHeader>
        <IonCardContent>Events held at this location</IonCardContent>
        </IonCard>

      </IonContent>
    </IonPage>
  );
};

export default Locations;
