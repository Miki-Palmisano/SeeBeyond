import '../style/voice.css'
import React, {useState } from 'react';
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';

const Voice = ({ActivePage, onActivePage}) => {

    const [isActive, setIsActive] = useState(false); //check bottone avvia/stop assistente

    const [showPopUp, setShowPopUp] = useState(false);//check popup comandi

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
            command: 'Apri Ocr',
            callback:() => {
                onActivePage('Ocr');
                SpeechRecognition.stopListening({continuous: false});
            }
        },
        {
            command: 'Apri pagina Ocr',
            callback:() => {
                onActivePage('Ocr');
                SpeechRecognition.stopListening({continuous: false});
            }
        },
        {
            command: 'Apri Lettura',
            callback:() => {
                onActivePage('Ocr');
                SpeechRecognition.stopListening({continuous: false});
            }
        },
        {
            command: 'Apri pagina Lettura',
            callback:() => {
                onActivePage('Ocr');
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
        },
        {
            command: 'Che ora è',
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
        },
        {
            command: 'Che giorno è oggi',
            callback:() => {
                let date = new Date();
                let day = date.getDate();
                let month = date.getMonth();
                let year = date.getFullYear();
                var utterance = new SpeechSynthesisUtterance("Oggi è il " + day + " " + month + " " + year);
                setIsActive(!isActive);
                SpeechRecognition.stopListening({continuous: false});
                window.speechSynthesis.speak(utterance);
            }
        },
        {
            command: 'Ora e giorno',
            callback:() => {
                let date = new Date();
                let day = date.getDate();
                let month = date.getMonth();
                let year = date.getFullYear();
                let hours = date.getHours();
                let minutes = date.getMinutes();
                let time = hours + ":" + minutes;
                var utteranceHour = new SpeechSynthesisUtterance("Sono le ore " + time);
                var utteranceDate = new SpeechSynthesisUtterance("Oggi è il " + day + " " + month + " " + year);
                setIsActive(!isActive);
                SpeechRecognition.stopListening({continuous: false});
                window.speechSynthesis.speak(utteranceDate);
                window.speechSynthesis.speak(utteranceHour);
            }
        },
        {
            command: 'Giorno e ora',
            callback:() => {
                let date = new Date();
                let day = date.getDate();
                let month = date.getMonth();
                let year = date.getFullYear();
                let hours = date.getHours();
                let minutes = date.getMinutes();
                let time = hours + ":" + minutes;
                var utteranceHour = new SpeechSynthesisUtterance("Sono le ore " + time);
                var utteranceDate = new SpeechSynthesisUtterance("Oggi è il " + day + " " + month + " " + year);
                setIsActive(!isActive);
                SpeechRecognition.stopListening({continuous: false});
                window.speechSynthesis.speak(utteranceDate);
                window.speechSynthesis.speak(utteranceHour);
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
                            else SpeechRecognition.stopListening({continuous: false})
                        }
                    }>
                        <h1 className={isActive ? "Stop" : "Start"}>{isActive ? "STOP" : "AVVIA"}</h1>
                    </button>
                    <input className="ComandoText" type="text" value={transcript} readOnly onChange={() => {}}/>

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