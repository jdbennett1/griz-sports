import React, { useState } from 'react';
import { 
  IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonButton, 
  IonCard, IonCardContent, IonCardHeader, IonCardTitle, IonInput, IonItem, IonList, 
  IonText, IonModal, IonLabel 
} from '@ionic/react';
import './Home.css';
import { loginUser, registerUser } from '../services/apiService';

const RegisterForm: React.FC<{ onClose: () => void }> = ({ onClose }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleRegister = async () => {
    if (!username || !password || !fname || !lname || !email) {
      setMessage("All fields are required!");
      return;
    }

    console.log("Registering:", { username, password, fname, lname, email });

    const response = await registerUser(username, password, fname, lname, email);
    console.log("Registration response:", response);
    setMessage(response);

    if (response === "Registration successful!") {
      onClose(); // Close modal on successful registration
    }
  };

  return (
    <IonContent className="ion-padding" style={{ '--background': '#808080'}}>
      <IonList>
        <IonItem style={{ '--background': '#201D23' }}>
          <IonLabel position="floating">Username</IonLabel>
          <IonInput value={username} onIonInput={(e) => setUsername(e.detail.value!)} />
        </IonItem>
        <IonItem style={{ '--background': '#201D23' }}>
          <IonLabel position="floating">Password</IonLabel>
          <IonInput type="password" value={password} onIonInput={(e) => setPassword(e.detail.value!)} />
        </IonItem>
        <IonItem style={{ '--background': '#201D23' }}>
          <IonLabel position="floating">First Name</IonLabel>
          <IonInput value={fname} onIonInput={(e) => setFname(e.detail.value!)} />
        </IonItem>
        <IonItem style={{ '--background': '#201D23' }}>
          <IonLabel position="floating">Last Name</IonLabel>
          <IonInput value={lname} onIonInput={(e) => setLname(e.detail.value!)} />
        </IonItem>
        <IonItem style={{ '--background': '#201D23' }}>
          <IonLabel position="floating">Email</IonLabel>
          <IonInput type="email" value={email} onIonInput={(e) => setEmail(e.detail.value!)} />
        </IonItem>
      </IonList>
      {message && <IonText color="danger">{message}</IonText>}
      <br />
      <IonButton expand="full" className="custom-solid-button" onClick={handleRegister}>Create Account</IonButton>
      <IonButton expand="full" fill="outline" onClick={onClose}>Cancel</IonButton>
    </IonContent>
  );
};

const Login: React.FC = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [showSignUp, setShowSignUp] = useState(false); // Control modal

  const handleLogin = async () => {
    if (!username || !password) {
      setMessage("Username and password are required");
      return;
    }

    console.log("Login button clicked");

    const response = await loginUser(username, password);
    console.log("Login response:", response);
    setMessage(response);

    if (response === "Login successful!") {
      console.log("Redirecting to /Home");
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
            {message && <IonText color="danger">{message}</IonText>}
            <IonButton expand="full" fill="solid" className="custom-solid-button" onClick={handleLogin}>Enter</IonButton>
            <IonButton fill="outline" className="custom-outline-button" onClick={() => setShowSignUp(true)}>
              Sign Up
            </IonButton>
          </IonCardContent>
        </IonCard>
      </IonContent>

      <IonModal isOpen={showSignUp} onDidDismiss={() => setShowSignUp(false)}>
        <IonHeader>
          <IonToolbar style={{ '--background': '#282828' }}>
            <IonTitle style={{ fontSize: '64px' }}>Sign Up</IonTitle>
            <IonButton slot="end" className="custom-solid-button" onClick={() => setShowSignUp(false)}>Close</IonButton>
          </IonToolbar>
        </IonHeader>
        <RegisterForm onClose={() => setShowSignUp(false)} />
      </IonModal>
    </IonPage>
  );
};

export default Login;
