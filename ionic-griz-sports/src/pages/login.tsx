import React, { useState } from 'react';
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonButtons, IonButton, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonInput, IonItem, IonList, IonText } from '@ionic/react';
import { loginUser } from '../services/apiService';
import './Home.css';
import backgroundImage from '../assets/images/Landscape-Teams.png';

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
                <IonCardTitle>LOGIN </IonCardTitle>
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
    </IonPage>
  );
};

export default Login;
