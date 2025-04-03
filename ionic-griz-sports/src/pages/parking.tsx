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
import './parking.css';

interface Event {
  id: number;
  title: string;
  time: string;
  location: string;
}

const parkingPage: React.FC = () => {
  
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

      <IonContent className="fixed-background-park">
        
            <h2> Parking</h2>
            

            {/* Location Container Placeholder */}
            <div className="parking-container">
              <p>Location Container (Park API)</p>
            </div>
          
        ) : (
          
        )
      </IonContent>
    </IonPage>
  );
};

export default parkingPage;
