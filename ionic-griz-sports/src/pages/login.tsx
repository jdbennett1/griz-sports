import React from 'react';
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonButtons, IonButton, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonInput, IonItem, IonList, IonText } from '@ionic/react';
import './Home.css';
import backgroundImage from '../assets/images/Landscape-Teams.png';

const Login: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar className="custom-header">
          <IonTitle className="custom-title">Griz Sports</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonCard>
            <IonCardHeader>
                <IonCardTitle>LOGIN </IonCardTitle>
            </IonCardHeader>
            <IonCardContent>
            <IonList>
                <IonItem>
                <IonInput labelPlacement="floating" value="">
                <div slot="label">
                    Email <IonText color="danger">(Required)</IonText>
                </div>
                </IonInput>
                </IonItem>
                <IonItem>
                <IonInput labelPlacement="floating" value="">
                <div slot="label">
                    Password <IonText color="danger">(Required)</IonText>
                </div>
                </IonInput>
                </IonItem>
             </IonList>
             <IonButton routerLink='/home'>Enter</IonButton>
            </IonCardContent>
        </IonCard>
      </IonContent>
    </IonPage>
  );
};

export default Login;
