import React, { Component } from 'react';
import '../style/button.css';
import { clear } from '@testing-library/user-event/dist/clear';

function Button({buttonState, buttonName, buttonImgActive, buttonImgInactive, onSwitchButtonState, buttonID, onSwitchPage, objectReading, onStateObjectReading}){

        const buttonIsActive = buttonState ? "active" : "inactive"; //assegna le stringhe rispettivamente a true e false valore della props
        const ButtonClassName = "button " + buttonName + " " + buttonIsActive; //compone la stringa per la classe CSS del bottone
        const ImgClassName = "image-" + buttonName; //compone URL CSS relativo all'immagine del bottone
        const ButtonPath = buttonState ? buttonImgActive : buttonImgInactive; //assegna l'immagine attiva o inattiva in base al valore della props
        
        const [clickTimeout, setClickTimeout] = React.useState(null); //inizializza la variabile che tiene traccia del tempo tra due click

        const checkButton = (buttonID) => { //controlla quale bottone viene premuto e richiama la funzione passata come props
            if(buttonID===5){ //se è il bottone di PowerState
                onSwitchButtonState();
            }else if(buttonState){ //se è qualsiasi altro bottone ma acceso
                onSwitchPage(buttonID);
            }
        }

        const handleClick = (buttonID) => {
            if(clickTimeout && buttonID===5){ //se è il bottone di PowerState
                clearTimeout(clickTimeout);
                setClickTimeout(null);
                onStateObjectReading();
            } else {
                const timeoutId = setTimeout(() => {
                    checkButton(buttonID); // single click
                    setClickTimeout(null);
                  }, 200);
                  setClickTimeout(timeoutId);
            }
        }

        return ( //ritorno del componente bottone costruito dinamicamente
        <>
            <button className={ButtonClassName} onClick={() => handleClick(buttonID)}>
                <img src={ButtonPath} className={ImgClassName}/>    
            </button>
        </>
        );

}

export default Button;