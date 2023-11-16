import React, { Component } from 'react';
import '../style/button.css';

function Button({buttonState, buttonName, buttonImg, onSwitchButtonState, buttonID, onSwitchPage}){

        const buttonIsActive = buttonState ? "active" : "inactive";
        const ButtonClassName = "button " + buttonName + " " + buttonIsActive;
        const ImgClassName = "image-" + buttonName;
        const checkButton = (buttonID) => {
            if(buttonID==5){
                onSwitchButtonState();
            }else if(buttonState){
                onSwitchPage(buttonID);
            }
        }

        return (
        <>
            <button className={ButtonClassName} onClick={() => checkButton(buttonID)}>
                <img src={buttonImg} className={ImgClassName}/>    
            </button>
        </>
        );

}

export default Button;