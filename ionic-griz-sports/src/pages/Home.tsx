import React from 'react';
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonButtons, IonButton, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle } from '@ionic/react';
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
            <IonCard>
              <IonCardHeader>
              <IonCardTitle>Events</IonCardTitle>
              <IonCardSubtitle>Pick one</IonCardSubtitle>
              </IonCardHeader>
              <IonCardContent>
              <IonButton routerLink='/mbb'>Mens Basketball</IonButton><br></br>
              <IonButton routerLink='/wbb'>Womens Basketball</IonButton><br></br>
              <IonButton routerLink='/mt'>Mens Tennis</IonButton><br></br>
              <IonButton routerLink='/wt'>Womens Tennis</IonButton><br></br>
              <IonButton routerLink='/fb'>Football</IonButton><br></br>
              <IonButton routerLink='/so'>Soccer</IonButton><br></br>
              <IonButton routerLink='/mg'>Mens golf</IonButton><br></br>
              <IonButton routerLink='/wg'>Womens golf</IonButton><br></br>
              <IonButton routerLink='/tr'>Track</IonButton><br></br>

              </IonCardContent>
            </IonCard>
          </div>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Home;
