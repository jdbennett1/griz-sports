import React from 'react';
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonButtons, IonButton } from '@ionic/react';
<<<<<<< Updated upstream
import './Home.css';  
import backgroundImage from '../assets/images/washgrizstad.jpg'; 
=======
import './Home.css';
import EventContainer from '../components/EventContainer';
import Calendar from '../components/Calendar';
import SearchSortContainer from '../components/SearchSortContainer';
>>>>>>> Stashed changes

const Home: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar className="custom-header">
          <IonTitle className="custom-title">Griz Sports</IonTitle>
          <IonButtons slot="end">
            <IonButton fill="clear" className="link">Game Schedules</IonButton>
            <IonButton fill="clear" className="link">Locations</IonButton>
          </IonButtons>
        </IonToolbar>
      </IonHeader>
<<<<<<< Updated upstream
      <IonContent>
        <div className="ion-content-background" style={{ backgroundImage: `url(${backgroundImage})` }}>
          <div className="welcome-container">
            <h2 className="welcome-title">Welcome to Griz Sports!</h2>
            <p className="subtitle">Your hub for game schedules and locations</p>
          </div>
=======
      
      <IonContent className="fixed-background">
        <h2 className="welcome-title">Welcome to Griz Sports!</h2>
        <p className="subtitle">Your hub for game schedules and locations</p>
        <div className="container-wrapper">
          <div className="upcoming-events"><EventContainer /></div>
          <div className="bottom-section">
            <div className="calendar"><Calendar /></div>
            <div className="search-sort"><SearchSortContainer /></div>
        </div>
>>>>>>> Stashed changes
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Home;