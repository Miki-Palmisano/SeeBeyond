import '../style/voice.css'
import React, { useEffect, useState } from 'react';
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';

const Voice = ({ActivePage, onActivePage}) => {

    const [isActive, setIsActive] = useState(false); // Aggiungi questo stato

    const [showModal, setShowModal] = useState(false); // Aggiungi questo stato

    useEffect(() => {
        const timer = setTimeout(() => {
            setShowModal(true); // Mostra il modale dopo un ritardo
        }); // Imposta un ritardo di 2000 millisecondi (2 secondi)
    
        return () => clearTimeout(timer); // Pulisce il timer quando il componente viene smontato
    }, []); // L'array vuoto come secondo argomento significa che useEffect verrà eseguito solo una volta, quando il componente viene montato
    

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
            command: 'Torna alla home',
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
            command: 'Apri Maps',
            callback:() => {
                onActivePage('Maps');//window.open("https://maps.google.com")
                SpeechRecognition.stopListening({continuous: false});
            }
        },
        {
            command: 'Apri Info',
            callback:() => {
                onActivePage('Info');
                SpeechRecognition.stopListening({continuous: false});
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
        {showModal && (
            <body>
            <div className="Modal">
                <p className='PopUpText'>Comandi Abilitati:</p>
                <ul>
                    <li>Apri Home</li>
                    <li>Apri Info</li>
                    <li>Apri Maps</li>
                    <li>Torna indietro</li>
                </ul>
                <p >valgono formule diverse per gli stessi comandi </p>
                <button className="CloseContainer">
                    <span className="Close" onClick={() => setShowModal(false)}>Chiudi</span>
                </button>
            </div>
            </body>
        )}
        {
        <body>
        <div className="Information">
            <h1>Assistente Vocale</h1>
        </div>
        <div className="Riga1">
            <p>Microfono: {listening ? 'on' : 'off'}</p>
            <button className="CommandContainer">
                <span className="Command" onClick={() => setShowModal(true)}>Comandi</span>
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
                <span className={isActive ? "Stop" : "Start"}>{isActive ? "STOP" : "AVVIA"}</span>
            </button>
            <p>{transcript}</p>
        </div>
        <div className="ButtonContainer">
            <button className="GoBackContainer">
                <span className="GoBack" onClick={() => handleGoBack()}>Torna Indietro</span>
            </button>
        </div>
        </body>
        }
        </>
    );
}

export default Voice;

/*
return(
        <>
        <div className="information">
            <h1>Assistente Vocale</h1>
        </div>
        <div>
            <p>Microfono: {listening ? 'on' : 'off'}</p>
        </div>
        <div>
            <button className="StartContainer"> 
                <span className="Start" onClick={() => SpeechRecognition.startListening({continuous: true, language: 'it-IT'})}>AVVIA</span>
            </button>
            <button className="StopContainer"> 
                <span className="Stop" onClick={() => SpeechRecognition.stopListening({continuous: false})}>STOP</span>
            </button>
            <button className="ResetContainer"> 
                <span className="Reset" onClick={resetTranscript}>RESET</span>
            </button>
            <p>{transcript}</p>
        </div>
        <div className="ButtonContainer">
            <button className="GoBackContainer">
                <span className="GoBack" onClick={() => handleGoBack()}>Torna Indietro</span>
            </button>
        </div>
        </>
    );
*/