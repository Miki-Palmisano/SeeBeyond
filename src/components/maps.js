import '../style/maps.css'
import React, {useState} from 'react';
import Map from '../functions/mapsCall.js'
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';

function Maps({ActivePage, onActivePage}){

    const handleGoBack = () => {
        onActivePage('Home');
    }

    const [isActive, setIsActive] = useState(false); //ceck testo label

    const [stringDestinazione, setStringDestinazione] = useState("INDIRIZZO RILEVATO");

    const commands = [
        {
            command: 'Via *',
            callback:() =>  {
                console.log(transcript);
                setStringDestinazione(transcript);
                SpeechRecognition.stopListening({continuous: false});
                resetTranscript();
            }
        },
        {
            command: 'Viale *',
            callback:() =>  {
                console.log(transcript);
                setStringDestinazione(transcript);
                SpeechRecognition.stopListening({continuous: false});
                console.log(stringDestinazione);
                resetTranscript();
            }
        }
    ];

    const {
        transcript,
        listening,
        resetTranscript,
        browserSupportsSpeechRecognition
    } = useSpeechRecognition({commands}); 

    return(
        <>  
        <div className="MapsBody">
            <div className="MapsInformation">
                <h1 className="MapsH1">MAPS</h1>
            </div>
            <button className="DestinazioneContainer">
                <h1 className="DestinazioneButton" onClick={() => {                                 
                    resetTranscript();
                    SpeechRecognition.startListening({continuous: true, language: 'it-IT'}); }}>
                        DESTINAZIONE
                </h1>
            </button>
            <input className="DestinazioneText" type="text" value={stringDestinazione} onChange={() => {}}/>
            <button className="MapsContainer">
                <h1 className="MapsButton" onClick={() => window.open("https://maps.google.com")}>AVVIA MAPS</h1>
            </button>
            <div className="MapsButtonContainer">
                <button className="MapsGoBackContainer">
                    <h1 className="MapsGoBack" onClick={() => handleGoBack()}>TORNA INDIETRO</h1>
                </button>
            </div>
        </div>
        </>
    );
}

export default Maps;
