import React from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';

function MyComponent() {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Mein HTML-Code</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <p>Dies ist ein Beispieltext.</p>
        <button>Klick mich!</button>
      </IonContent>
    </IonPage>
  );
}

export default MyComponent;