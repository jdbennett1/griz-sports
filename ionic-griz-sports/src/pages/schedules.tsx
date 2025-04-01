import React from 'react';
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonButtons, IonButton, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle } from '@ionic/react';

import backgroundImage from '../assets/images/Landscape-Teams.png';

const Schedules: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar className="custom-header">
          <IonTitle className="custom-title">Griz Sports</IonTitle>
          <IonButtons slot="end">
            <IonButton fill="clear" className="link" routerLink="/home">Home</IonButton>
            <IonButton fill="clear" className="link">Game Schedules</IonButton>
            <IonButton fill="clear" className="link" routerLink="/loc">Locations</IonButton>
            <IonButton fill="clear" className="link" routerLink="/modal">Calendar</IonButton>
          </IonButtons>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonCard>
        <IonCardHeader>
        <IonCardTitle>Mens Basketball</IonCardTitle>
        <IonCardSubtitle>home games</IonCardSubtitle>
        </IonCardHeader>
        <IonCardContent>Schedule itself</IonCardContent>
        </IonCard>

        <IonCard>
        <IonCardHeader>
        <IonCardTitle>Womens Basketball</IonCardTitle>
        <IonCardSubtitle>home games</IonCardSubtitle>
        </IonCardHeader>
        <IonCardContent>Schedule itself</IonCardContent>
        </IonCard>

        <IonCard>
        <IonCardHeader>
        <IonCardTitle>Mens Golf</IonCardTitle>
        <IonCardSubtitle>home games</IonCardSubtitle>
        </IonCardHeader>
        <IonCardContent>Schedule itself</IonCardContent>
        </IonCard>

        <IonCard>
        <IonCardHeader>
        <IonCardTitle>Womens Golf</IonCardTitle>
        <IonCardSubtitle>home games</IonCardSubtitle>
        </IonCardHeader>
        <IonCardContent>Schedule itself</IonCardContent>
        </IonCard>

        <IonCard>
        <IonCardHeader>
        <IonCardTitle>Mens Tennis</IonCardTitle>
        <IonCardSubtitle>home games</IonCardSubtitle>
        </IonCardHeader>
        <IonCardContent>Schedule itself</IonCardContent>
        </IonCard>

        <IonCard>
        <IonCardHeader>
        <IonCardTitle>Womens Tennis</IonCardTitle>
        <IonCardSubtitle>home games</IonCardSubtitle>
        </IonCardHeader>
        <IonCardContent>Schedule itself</IonCardContent>
        </IonCard>

        <IonCard>
        <IonCardHeader>
        <IonCardTitle>Football</IonCardTitle>
        <IonCardSubtitle>home games</IonCardSubtitle>
        </IonCardHeader>
        <IonCardContent>Schedule itself</IonCardContent>
        </IonCard>

        <IonCard>
        <IonCardHeader>
        <IonCardTitle>Soccer</IonCardTitle>
        <IonCardSubtitle>home games</IonCardSubtitle>
        </IonCardHeader>
        <IonCardContent>Schedule itself</IonCardContent>
        </IonCard>

        <IonCard>
        <IonCardHeader>
        <IonCardTitle>Track</IonCardTitle>
        <IonCardSubtitle>home games</IonCardSubtitle>
        </IonCardHeader>
        <IonCardContent>Schedule itself</IonCardContent>
        </IonCard>
      </IonContent>
    </IonPage>
  );
};

export default Schedules;
