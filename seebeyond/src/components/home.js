import React, { Component , useState } from 'react';

import Button from '../components/button';

function Home({ActivePage, onActivePage, buttons, isActive, setIsActive}){
      
        //funzione che cambia lo stato del bottone, richiama la funziona passata come props
        const handleSwitchButtonState = () => {
          setIsActive(!isActive);
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
            
        }
      
        //ritorna i button passati
        return (
          <>
            <title>SeeBeyond - Guarda Oltre</title>
            {buttons.map((button) => ( //ciclo che richiama il componente button per ogni button passato dall'array di struct
              <Button //richiamo il componente button passando le props necessarie
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