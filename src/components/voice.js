import '../style/voice.css'
import React, {useState, useCallback } from 'react';
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';


const commands = require('./utils/commands.json');

const Voice = ({ActivePage, onActivePage}) => {

    const [isActive, setIsActive] = useState(false); //check bottone avvia/stop assistente

    const [showPopUp, setShowPopUp] = useState(false);//check popup comandi

    const [response, setResponse] = useState(''); //risposta assistente

    const speakTime = useCallback(() => {
        let date = new Date();
        let hours = date.getHours();
        let minutes = date.getMinutes();
        let time = hours + ":" + minutes;
        setResponse("Sono le ore " + time);
      }, []);

      const speakDate = useCallback(() => {
        let date = new Date();
        let months = date.getMonth();
        let months_string = ['Gennaio', 'Febbraio', 'Marzo', 'Aprile', 'Maggio', 'Giugno', 'Luglio', 'Agosto', 'Settembre', 'Ottobre', 'Novembre', 'Dicembre']
        let day = date.getDate();
        let year = date.getFullYear();
        let data = day + " " + months_string[months] + " " + year;
        setResponse("Oggi è il " + data);
      }, []);

      const speakDateTime = useCallback(() => {
        speakDate();
        speakTime();
      }, [speakDate, speakTime]);
    
      const commandCallback = useCallback({
        onActivePage,
        speakTime,
        speakDate,
        setShowPopUp,
        speakDateTime
      }, [onActivePage, speakTime, speakDate, setShowPopUp, speakDateTime]);
    

    const executeCommand = (callback, args) => {
        const callbackFunction = commandCallback[callback];

        if (args && typeof callbackFunction === 'function') {
            callbackFunction(args);
        } else if (typeof callbackFunction === 'function') {
            callbackFunction();
        } else {
            setResponse(callback);
        }    
    }

    const {
        transcript,
        listening,
        resetTranscript,
        browserSupportsSpeechRecognition,
      } = useSpeechRecognition({
        commands: commands.map((cmd) => ({
          command: cmd.command,
          callback: () => {
            executeCommand(cmd.callback, cmd.args);
          },
        })),
    });

    if (!browserSupportsSpeechRecognition) {
            return <span>Browser doesn't support speech recognition.</span>;
    }
    return(
        <>
        {
            <div className="VoiceBody">
                <div className="VoiceInformation">
                    <h1 className="VoiceH1">ASSISTENTE VOCALE</h1>
                </div>
                <div className="VoiceRiga1">
                    <p className="VoiceP">MIC: {listening ? 'ON' : 'OFF'}</p>
                    <button className="CommandContainer">
                        <h1 className="Command" onClick={() => {setShowPopUp(true);}}>COMANDI</h1>
                    </button>
                </div>
                <div>
                    <button className={isActive ? "StopContainer" : "StartContainer"} onClick={() => {
                            setIsActive(!isActive); // Cambia lo stato quando il pulsante viene cliccato
                            if(!isActive){
                                resetTranscript();
                                SpeechRecognition.startListening({continuous: true, language: 'it-IT'});
                            }
                            else {
                                SpeechRecognition.stopListening();
                                let utterance = new SpeechSynthesisUtterance(response);
                                window.speechSynthesis.speak(utterance);
                            }
                        }
                    }>
                        <h1 className={isActive ? "Stop" : "Start"}>{isActive ? "STOP" : "AVVIA"}</h1>
                    </button>
                    <input className="ComandoText" type="text" value={transcript} readOnly onChange={() => {}}/>

                </div>
                <div className="VoiceButtonContainer">
                    <button className="VoiceGoBackContainer">
                        <h1 className="VoiceGoBack" onClick={() => onActivePage('Home')}>TORNA INDIETRO</h1>
                    </button>
                </div>
            </div>
        }
        {showPopUp && (
            <div className="PopUpContainer" >
                <h1 className='PopUpTitle'>Comandi Abilitati:</h1>
                <ul className="PopUpUl">
                    <li className="PopUpLi">Apri Home</li>
                    <li className="PopUpLi">Apri Info</li>
                    <li className="PopUpLi">Apri Lettura</li>
                    <li className="PopUpLi">Apri Maps</li>
                    <li className="PopUpLi">Torna indietro</li>
                    <li className="PopUpLi">Lista comandi</li>
                    <li className="PopUpLi">Giorno e/o ora</li>
                </ul>
                <p className="PopUpText" margin-left="5%" margin-right="5%">valgono alcune formule simili per gli stessi comandi </p>
                <button className="CloseContainer">
                    <h1 className="Close" onClick={() => setShowPopUp(false)}>CHIUDI</h1>
                </button>
            </div>
        )}
        </>

    );
}

export default Voice;