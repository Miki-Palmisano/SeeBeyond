import React, { Component } from 'react';
import '../style/button.css';

function Button({buttonState, buttonName, buttonImg, onSwitchButtonState, buttonID, onSwitchPage}){

        const buttonIsActive = buttonState ? "active" : "inactive"; //assegna le stringhe rispettivamente a true e false valore della props
        const ButtonClassName = "button " + buttonName + " " + buttonIsActive; //compone la stringa per la classe CSS del bottone
        const ImgClassName = "image-" + buttonName; //compone URL relativo all'immagine del bottone
        const checkButton = (buttonID) => { //controlla quale bottone viene premuto e richiama la funzione passata come props
            if(buttonID==5){ //se è il bottone di PowerState
                onSwitchButtonState();
            }else if(buttonState){ //se è qualsiasi altro bottone ma acceso
                onSwitchPage(buttonID);
            }
        }

        return ( //ritorno del componente bottone costruito dinamicamente
        <>
            <button className={ButtonClassName} onClick={() => checkButton(buttonID)}>
                <img src={buttonImg} className={ImgClassName}/>    
            </button>
        </>
        );

}

export default Button;