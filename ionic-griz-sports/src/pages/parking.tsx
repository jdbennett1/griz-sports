import React from 'react';
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonButtons, IonButton } from '@ionic/react';
import './parking.css';
import MapComponent from '../components/MapComponent'; // Adjust import path

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
        <h2>Parking</h2>
      <center>
        <div> {/* I removed the Background div for the time being normally the className here would be parking-container */}
          
          {/* This will render the MapComponent */}
          <MapComponent />
          
        </div>
      </center>
      </IonContent>
    </IonPage>
  );
};

export default parkingPage;
