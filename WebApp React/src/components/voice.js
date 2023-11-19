import '../style/voice.css'
import React from 'react';
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';

const Voice = ({ActivePage, onActivePage}) => {

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
        <div className="buttonContainer">
            <button className="GoBackContainer">
                <span className="GoBack" onClick={() => handleGoBack()}>Torna Indietro</span>
            </button>
        </div>
        </>
    );
}

export default Voice;