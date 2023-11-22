//Nella cartella 'images' ci vanno tutte le immagini usate nel progetto
//Nella cartella 'style' ci vanno tutti i file css usati nel progetto
//Nella cartella 'components' ci vanno tutti i componenti del progetto
//Nella cartella 'functions' ci vanno tutte le funzioni del progetto (si esatto quelle dei cookie ad esempio)
//eventualmente creare le cartelle mancanti
//import NOMEFUNZIONE from 'PATTERNFUNZIONE.js' per importare una funzione specifica
//le 'variabili' passate ai figli si chiamano Props, le variabili definite nei padri si chiamano State
//è consigliato rispettare la nomenclatura HANDLEnome per la funzione padre e ONnome per la funzione figlio

//PROPRIETà DI SEEBEYOND, TUTTI I DIRITTI E USI RISERVATI

//import librerie React
import React, { Component , useState } from 'react';

//import functions
import {GetCookie, SetCookie} from './functions/cookie.js'; //se ne importo solo una mi da errore

//import componenti, ad ogni componente è associata una pagina
import Home from './components/home.js';
import Info from './components/info.js';
import OCR from './components/ocr.js'; 
import Maps from './components/maps.js';
import Voice from './components/voice.js';

//import delle immagini, ad ogni immagine è associato un bottone
import InfoImage from './images/Info.png';
import OCRImage from './images/OCR.png';
import MapsImage from './images/Maps.png';
import VoiceImage from './images/Comando Vocale.png';
import OnOffImage from './images/OnOff.png';

function App(){
  
  //funzione react, ActivePage è letteralmente la pagina attiva e viene inizializzata a Home
  const [ActivePage, setActivePage] = useState('Home');

  //assegno a buttonState il valore del cookie, convertendolo in booleano (essendo String)
  var buttonState = false;
  if(GetCookie('buttonState') == 'true') { var buttonState = true; }

  //funzione react, isActive è letteralmente lo stato del bottone e viene inizializzato al valore della variabile buttonState
  const [isActive, setIsActive] = useState(buttonState);
      
  //Vettore di Strutture dati, sono i dati di ogni singolo bottone, aggiungere elementi qua corrisponde ad aggiungere bottoni
  //alla pagina home
  const buttons = [
    { id: 1, name: 'top-left', state: isActive, img: InfoImage },
    { id: 2, name: 'top-right', state: false, img: OCRImage },
    { id: 3, name: 'bottom-left', state: isActive, img: MapsImage },
    { id: 4, name: 'bottom-right', state: isActive, img: VoiceImage },
    { id: 5, name: 'center', state: true, img: OnOffImage },
  ];
  
  //console log di quel attributo serve a  vedere i report (eventuali errori) facendo Ispezione Elemento -> Console
  console.log(isActive);

  //funzione che cambia la pagina attiva
  const handlePage = (page) => {
    setActivePage(page);
  }

  let activePage;

  //ogni pagina ha un bottone che la richiama, il bottone è associato ad una funzione che cambia la pagina attiva
  switch(ActivePage){
    case 'Home':
      activePage = <Home  //Home è il componente home.js 
        ActivePage={ActivePage} 
        onActivePage={handlePage} 
        buttons={buttons} 
        isActive={isActive}  
        setIsActive={setIsActive} 
      />;
      break;
    case 'Info':
      activePage = <Info  //Info è il componente info.js
        ActivePage={ActivePage}
        onActivePage={handlePage}
        buttons={buttons}
        isActive={isActive}
        setIsActive={setIsActive}
      />;
      break;
    case 'OCR':
      activePage = <OCR  //OCR è il componente ocr.js
        ActivePage={ActivePage}
        onActivePage={handlePage}
        buttons={buttons}
        isActive={isActive}
        setIsActive={setIsActive}
      />;
      break;
    case 'Maps':
      activePage = <Maps  //Maps è il componente maps.js
        ActivePage={ActivePage}
        onActivePage={handlePage}
        buttons={buttons}
        isActive={isActive}
        setIsActive={setIsActive}
      />;
      break;
    case 'Voice':
      activePage = <Voice  //Voice è il componente voice.js
        ActivePage={ActivePage}
        onActivePage={handlePage}
        buttons={buttons}
        isActive={isActive}
        setIsActive={setIsActive}
      />;
      break;
  }

  return activePage; //ritorna il componente selezionato dallo switch
      
}

export default App;