import React, { useState } from 'react';
import { 
  IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonButtons, IonButton, 
  IonCard, IonCardContent, IonCardHeader, IonCardTitle, IonInput, IonItem, IonList, 
  IonText, IonModal, IonLabel 
} from '@ionic/react';
import './Home.css';


const Login: React.FC = () => {
  const [showSignUp, setShowSignUp] = useState(false); //control modal 

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
            <IonCardTitle>LOGIN</IonCardTitle>
          </IonCardHeader>
          <IonCardContent>
            <IonList>
              <IonItem>
                <IonInput labelPlacement="floating">
                  <div slot="label">
                    Email <IonText color="danger">(Required)</IonText>
                  </div>
                </IonInput>
              </IonItem>
              <IonItem>
                <IonInput labelPlacement="floating" type="password">
                  <div slot="label">
                    Password <IonText color="danger">(Required)</IonText>
                  </div>
                </IonInput>
              </IonItem>
            </IonList>
            <IonButton fill="solid" className="custom-solid-button" routerLink='/home'>Enter</IonButton>
            <IonButton fill="outline" className="custom-outline-button" onClick={() => setShowSignUp(true)} >
              Sign Up
            </IonButton>
          </IonCardContent>
        </IonCard>
      </IonContent>

      <IonModal isOpen={showSignUp} onDidDismiss={() => setShowSignUp(false)}>
        <IonHeader>
          <IonToolbar style={{ '--background': '#282828' }}>
            <IonTitle style={{ fontSize: '64px'}}>Sign Up</IonTitle>
            <IonButton slot="end" className="custom-solid-button" onClick={() => setShowSignUp(false)}>Close</IonButton>
          </IonToolbar>
          
        </IonHeader>
        <IonContent className="ion-padding" style={{ '--background': '#808080'}}>
          <IonList >
          <IonItem style={{ '--background': '#201D23' }}>
              <IonLabel position="floating">Username</IonLabel>
              <IonInput type="text" />
            </IonItem>
            <IonItem style={{ '--background': '#201D23' }}>
              <IonLabel position="floating">Password</IonLabel>
              <IonInput type="password" />
            </IonItem>
            <IonItem style={{ '--background': '#201D23' }}>
              <IonLabel position="floating">First Name</IonLabel>
              <IonInput type="text" />
            </IonItem>
            <IonItem style={{ '--background': '#201D23' }}>
              <IonLabel position="floating">Last Name</IonLabel>
              <IonInput type="text" />
            </IonItem>
            <IonItem style={{ '--background': '#201D23' }}>
              <IonLabel position="floating">Email</IonLabel>
              <IonInput type="email" />
            </IonItem>
          </IonList>
          <br></br>
          <IonButton expand="full" className="custom-solid-button" onClick={() => setShowSignUp(false)}>Create Account</IonButton>
        </IonContent>
      </IonModal>

    </IonPage>
  );
};

export default Login;
