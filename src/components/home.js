import React, { Component , useState } from 'react';

import Button from '../components/button';

import '../style/home.css';

import { GetCookie, SetCookie } from '../functions/cookie.js'; //se ne importo solo una mi da errore

import { initializeApp } from "firebase/app";
import { getDatabase, ref, child, get, set } from "firebase/database";

function Home({ActivePage, onActivePage, buttons, isActive, setIsActive}){

  //prova db (connessione + lettura)
  const firebaseConfig = { databaseURL: "https://seebeyond-8bdb7-default-rtdb.europe-west1.firebasedatabase.app/" };
  const app = initializeApp(firebaseConfig);
  const database = getDatabase(app);
  
  /* lettura (disabilitata in quanto utile solo per verifica)
  const dbRef = ref(getDatabase(app));
  get(child(dbRef, `Impostazioni/Status`)).then((snapshot) => {
    if (snapshot.val() === "ON") {
      console.log(snapshot.val());
    }
  }).catch((error) => {
    console.error(error);
  });
  */

  const writeUserData = (value) => {
    set(ref(database, 'Impostazioni/'), {
      Status : value
    });
  };
  //fine prova db

  //funzione che cambia lo stato del bottone, richiama la funziona passata come props
  const handleSwitchButtonState = () => {

    const newState = !isActive;

    SetCookie('buttonState', !isActive, 2); //cambio il valore del cookie
    setIsActive(!isActive);

    if(newState === true){
      writeUserData("ON");
    }
    else{
      writeUserData("OFF");
    }
  };  

  //funzione che cambia la pagina attiva, richiama la funziona passata come props
  const handleSwitchPage = (buttonID) => { 
    switch(buttonID){
        case 1: //dato che il bottone con ID 1 corrisponde a info, passo la stringa 'info' che verrà setacciata dallo switch in App.js
            onActivePage('Info');
            break;
        case 2: //analogamente al caso precedente
            onActivePage('OCR');
            break;
        case 3: //analogamente al caso precedente
            onActivePage('Maps');
            break;
        case 4: //analogamente al caso precedente
            onActivePage('Voice');
            break;
      }
      
  };

  //ritorna i button passati
  return (
    <>
      <title>SeeBeyond - Guarda Oltre</title>
      {buttons.map((button) => ( //ciclo che richiama il componente button per ogni button passato dall'array di struct
        <Button //richiamo il componente button passando le props necessarie
          buttonID={button.id} 
          buttonName={button.name}
          buttonState={button.state}
          buttonImgActive={button.img_active}
          buttonImgInactive={button.img_inactive}
          onSwitchButtonState={handleSwitchButtonState}
          onSwitchPage={handleSwitchPage}
        />
      ))}
    </>
  );
}

export default Home;