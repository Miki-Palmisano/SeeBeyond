import '../style/voice.css'
import React, { useEffect, useState } from 'react';
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';

const Voice = ({ActivePage, onActivePage}) => {

    const [isActive, setIsActive] = useState(false); //ceck bottone avvia/stop assistente

    const [showPopUp, setShowPopUp] = useState(false);//ceck popup comandi

    const handleGoBack = () => {
        onActivePage('Home');
    }


    const commands = [
        {
            command: 'Torna indietro',
            callback:() =>  {
                handleGoBack();
                SpeechRecognition.stopListening({continuous: false});
            }
        },
        {
            command: 'Torna alla pagina precedente',
            callback:() =>  {
                handleGoBack();
                SpeechRecognition.stopListening({continuous: false});
            }
        },
        {
            command: 'Torna alla Home',
            callback:() =>  {
                handleGoBack();
                SpeechRecognition.stopListening({continuous: false});
            }
        },
        {
            command: 'Apri Home',
            callback:() =>  {
                handleGoBack();
                SpeechRecognition.stopListening({continuous: false});
            }
        },
        {
            command: 'Apri pagina Home',
            callback:() => {
                handleGoBack();
                SpeechRecognition.stopListening({continuous: false});
            }
        },
        {
            command: 'Apri Info',
            callback:() => {
                onActivePage('Info');
                SpeechRecognition.stopListening({continuous: false});
            }
        },
        {
            command: 'Apri pagina Info',
            callback:() => {
                onActivePage('Info');
                SpeechRecognition.stopListening({continuous: false});
            }
        },
        {
            command: 'Apri Maps',
            callback:() => {
                onActivePage('Maps');//window.open("https://maps.google.com")
                SpeechRecognition.stopListening({continuous: false});
            }
        },
        {
            command: 'Apri pagina Maps',
            callback:() => {
                onActivePage('Maps');//window.open("https://maps.google.com")
                SpeechRecognition.stopListening({continuous: false});
            }
        },
        {
            command: 'Lista Comandi',
            callback:() => {
                setShowPopUp(true);
                setIsActive(!isActive);
                SpeechRecognition.stopListening({continuous: false});
            }
        },
        {
            command: 'Quali sono i Comandi',
            callback:() => {
                setShowPopUp(true);
                setIsActive(!isActive);
                SpeechRecognition.stopListening({continuous: false});
            }
        },
        {
            command: 'Che ore sono',
            callback:() => {
                let date = new Date();
                let hours = date.getHours();
                let minutes = date.getMinutes();
                let time = hours + ":" + minutes;
                var utterance = new SpeechSynthesisUtterance("Sono le ore " + time);
                setIsActive(!isActive);
                SpeechRecognition.stopListening({continuous: false});
                window.speechSynthesis.speak(utterance);
            }
        }
    ]

    const {
        transcript,
        listening,
        resetTranscript,
        browserSupportsSpeechRecognition
    } = useSpeechRecognition({commands}); 

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
                    <p className="VoiceP">Microfono: {listening ? 'on' : 'off'}</p>
                    <button className="CommandContainer">
                        <span className="Command" onClick={() => {setShowPopUp(true);}}>COMANDI</span>
                    </button>
                </div>
                <div>
                    <button className={isActive ? "StopContainer" : "StartContainer"} onClick={() => {
                            setIsActive(!isActive); // Cambia lo stato quando il pulsante viene cliccato
                            if(!isActive){
                                resetTranscript();
                                SpeechRecognition.startListening({continuous: true, language: 'it-IT'});
                            }
                            else SpeechRecognition.stopListening({continuous: false})
                        }
                    }>
                        <h1 className={isActive ? "Stop" : "Start"}>{isActive ? "STOP" : "AVVIA"}</h1>
                    </button>
                    <p>{transcript}</p>
                </div>
                <div className="VoiceButtonContainer">
                    <button className="VoiceGoBackContainer">
                        <h1 className="VoiceGoBack" onClick={() => handleGoBack()}>TORNA INDIETRO</h1>
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
                        <li className="PopUpLi">Apri Maps</li>
                        <li className="PopUpLi">Torna indietro</li>
                        <li className="PopUpLi">Lista comandi</li>
                        <li className="PopUpLi">Che ore sono</li>
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