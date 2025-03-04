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
import './Events.css';
const EventsPage: React.FC = () => {
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
                    Locations
                  </IonButton>
                  <IonRouterLink routerLink="/events" className="link">
                    <IonButton fill="clear" className="link" data-testid="events-button">
                      Events
                    </IonButton>
                  </IonRouterLink>
                </IonButtons>
              </IonToolbar>
            </IonHeader>
            <IonContent className="fixed-background">
  <h2 className="welcome-title">Upcoming Events</h2>
  

  {/* Container grid for the events*/}
  <div className="events-grid">
    {[...Array(6)].map((_, index) => (
      <div key={index} className="event-card">
        <p>Sample Data</p>
      </div>
    ))}
  </div>
</IonContent>

    </IonPage>
  );
};

export default EventsPage;
