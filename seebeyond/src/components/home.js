import React, { Component , useState } from 'react';

import Button from '../components/button';

function Home({ActivePage, onActivePage, buttons, isActive, setIsActive}){
      
        const handleSwitchButtonState = () => {
          setIsActive(!isActive);
        };

        const handleSwitchPage = (buttonID) => {
          switch(buttonID){
              case 1:
                  onActivePage('Info');
                  break;
              case 2:
                  onActivePage('OCR');
                  break;
              case 3:
                  onActivePage('Maps');
                  break;
              case 4:
                  onActivePage('Voice');
                  break;
            }
            
        }
      
        return (
          <>
            <title>SeeBeyond - Guarda Oltre</title>
            {buttons.map((button) => (
              <Button
                buttonID={button.id}
                buttonName={button.name}
                buttonState={button.state}
                buttonImg={button.img}
                onSwitchButtonState={handleSwitchButtonState}
                onSwitchPage={handleSwitchPage}
              />
            ))}
          </>
        );
      }

export default Home;