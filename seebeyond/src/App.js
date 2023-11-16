import React, { Component , useState } from 'react';
import Home from './components/home';
import Info from './components/info'; // import Info component
import OCR from './components/ocr'; // import OCR component
import Maps from './components/maps'; // import Maps component

import InfoImage from './images/Info.png';
import OCRImage from './images/OCR.png';
import MapsImage from './images/Maps.png';
import VoiceImage from './images/Comando Vocale.png';
import OnOffImage from './images/OnOff.png';

function App(){
  const [ActivePage, setActivePage] = useState('Home');

  const [isActive, setIsActive] = useState(false);
      
  const buttons = [
    { id: 1, name: 'top-left', state: isActive, img: InfoImage },
    { id: 2, name: 'top-right', state: false, img: OCRImage },
    { id: 3, name: 'bottom-left', state: false, img: MapsImage },
    { id: 4, name: 'bottom-right', state: false, img: VoiceImage },
    { id: 5, name: 'center', state: true, img: OnOffImage },
  ];
  
  console.log(ActivePage);
  const handlePage = (page) => {
    setActivePage(page);
  }

  let activePage;

  switch(ActivePage){
    case 'Home':
      activePage = <Home  
        ActivePage={ActivePage}
        onActivePage={handlePage}
        buttons={buttons}
        isActive={isActive}
        setIsActive={setIsActive}
      />;
      break;
    case 'Info':
      activePage = <Info  
        ActivePage={ActivePage}
        onActivePage={handlePage}
        buttons={buttons}
        isActive={isActive}
        setIsActive={setIsActive}
      />;
      break;
    case 'OCR':
      activePage = <OCR  
        ActivePage={ActivePage}
        onActivePage={handlePage}
        buttons={buttons}
        isActive={isActive}
        setIsActive={setIsActive}
      />;
      break;
    case 'Maps':
      activePage = <Maps  
        ActivePage={ActivePage}
        onActivePage={handlePage}
        buttons={buttons}
        isActive={isActive}
        setIsActive={setIsActive}
      />;
      break;
    case 'Voice':
      // add code for Voice case
      break;
  }

  return activePage; // return activePage component
      
}

export default App;
