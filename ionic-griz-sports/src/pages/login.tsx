import React, { useState } from 'react';

import { 
  IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonButtons, IonButton, 
  IonCard, IonCardContent, IonCardHeader, IonCardTitle, IonInput, IonItem, IonList, 
  IonText, IonModal, IonLabel 
} from '@ionic/react';
import './Home.css';


const Login: React.FC = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleLogin = async () => {
    if (!username || !password) {
      setMessage("Username and password are required");
      return;
    }

    console.log("Login button clicked");

    const response = await loginUser(username, password);
    console.log("login response:", response);
    setMessage(response);

    if (response === "Login successful!") {
      console.log("redirecting to /Home");
      window.location.href = "http://localhost:8100/home"; // Adjust for your domain
    }
  };

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
                <IonInput labelPlacement="floating" value={username} onIonInput={(e) => setUsername(e.detail.value!)}>
                <div slot="label">
                    Username <IonText color="danger">(Required)</IonText>
                </div>
                </IonInput>
                </IonItem>
                <IonItem>
                <IonInput type="password" labelPlacement="floating" value={password} onIonInput={(e) => setPassword(e.detail.value!)}>
                <div slot="label">
                Password <IonText color="danger">(Required)</IonText>
                  </div>
                </IonInput>

                </IonItem>
             </IonList>
             <IonButton expand="full" onClick={handleLogin}>Enter</IonButton>
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
