import React, { useState, useRef } from 'react';
import {
    IonButtons,
    IonButton,
    IonModal,
    IonHeader,
    IonContent,
    IonToolbar,
    IonTitle,
    IonPage,
    IonItem,
    IonInput,
} from '@ionic/react';
import { OverlayEventDetail } from '@ionic/core/components';
import Calendar from './Calendar';

function Modal() {
    const modal = useRef<HTMLIonModalElement>(null);
    const input = useRef<HTMLIonInputElement>(null);

    const [message, setMessage] = useState(
        'This modal example uses triggers to automatically open a modal when the button is clicked.'
    );

    function confirm() {
        modal.current?.dismiss(input.current?.value, 'confirm');
    }

    function onWillDismiss(event: CustomEvent<OverlayEventDetail>) {
        if (event.detail.role === 'confirm') {
            setMessage(`Hello, ${event.detail.data}!`);
        }
    }

    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonTitle>Calendar</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent >
                <Calendar />
            </IonContent>
        </IonPage>
    );
}

export default Modal;