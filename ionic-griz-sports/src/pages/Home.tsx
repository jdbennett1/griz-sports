import React from 'react';
import { 
  IonPage, 
  IonHeader, 
  IonToolbar, 
  IonTitle, 
  IonContent, 
  IonButtons, 
  IonButton 
} from '@ionic/react';
import './Home.css';
import EventContainer from '../components/EventContainer';
import Calendar from '../components/Calendar';
import SearchSortContainer from '../components/SearchSortContainer';

const Home: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar className="custom-header">
          <IonTitle className="custom-title">Griz Sports</IonTitle>
          <IonButtons slot="end">
            <IonButton fill="clear" className="link" data-testid="game-schedules-button">
              Game Schedules
            </IonButton>
            <IonButton fill="clear" className="link" data-testid="locations-button">
              Parking
            </IonButton>
          </IonButtons>
        </IonToolbar>
      </IonHeader>
      
      <IonContent className="fixed-background">
        <h2 className="welcome-title">Welcome to Griz Sports!</h2>
        <p className="subtitle">Your hub for game schedules and locations</p>

        <div className="container-wrapper">
          <div className="upcoming-events">
            {/*This renders a list of upcoming games */}
            <EventContainer />
          </div>

          <div className="bottom-section">
            <div className="calendar">
              <Calendar />
            </div>

            <div className="search-sort">
              <SearchSortContainer />
            </div>
          </div>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Home;
