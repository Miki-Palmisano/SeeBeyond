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
            callback:() => handleGoBack()
        },
        {
            command: 'Torna alla home',
            callback:() => handleGoBack()
        },
        {
            command: 'Torna alla pagina precedente',
            callback:() => handleGoBack()
        },
        {
            command: 'Apri Home',
            callback:() => handleGoBack()
        },
        {
            command: 'Apri pagina Home',
            callback:() => handleGoBack()
        },
        {
            command: 'Apri Maps',
            callback:() => onActivePage('Maps')//window.open("https://maps.google.com")
        },
        {
            command: 'Apri Info',
            callback:() => onActivePage('Info')
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
            <p>Microphone: {listening ? 'on' : 'off'}</p>
            <button onClick={() => SpeechRecognition.startListening({continuous: true, language: 'it-IT'})}>Start</button>
            <button onClick={() => SpeechRecognition.stopListening({continuous: false})}>Stop</button>
            <button onClick={resetTranscript}>Reset</button>
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