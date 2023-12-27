import { set } from 'firebase/database';
import '../style/maps.css'
import React, {useEffect, useState} from 'react';
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';

function Maps({ActivePage, onActivePage}){

    const handleGoBack = () => {
        onActivePage('Home');
    }

    const [isActive, setIsActive] = useState(false); //ceck testo label

    const [stringDestinazione, setStringDestinazione] = useState("");

    const {
        transcript,
        listening,
        resetTranscript,
    } = useSpeechRecognition({}); 

    useEffect(() => {
        let timeoutId;
        let transcript_old = "";

        if (listening) {
            timeoutId = setTimeout(() => {
                if(transcript === transcript_old){
                    setStringDestinazione(transcript);
                    SpeechRecognition.stopListening();
                    setIsActive(false);
                }
            }, 3000);
            transcript_old = transcript;
        }

        return () => {
            clearTimeout(timeoutId);
        };
    }, [listening, transcript]);

    return(
        <>  
        <div className="MapsBody">
            <div className="MapsInformation">
                <h1 className="MapsH1">MAPS</h1>
            </div>
            <button className={isActive ? "FineDestinazioneContainer" : "DestinazioneContainer"} onClick={() => {
                    setIsActive(!isActive); // Cambia lo stato quando il pulsante viene cliccato
                    if(!isActive){
                        resetTranscript();
                        SpeechRecognition.startListening({continuous: true, language: 'it-IT'});
                    }
                    else {
                        setStringDestinazione(transcript);
                        SpeechRecognition.stopListening();
                    }}}>
                <h1 className="DestinazioneButton">DESTINAZIONE</h1>
            </button>
            <input className="DestinazioneText" type="text" value={stringDestinazione} readOnly onChange={() => {}}/>
            <button className="MapsContainer">
                <h1 className="MapsButton" onClick={() =>  {
                    const destination = encodeURIComponent(stringDestinazione);
                    var url = `https://www.google.com/maps/dir/?api=1&destination=${destination}`;
                    window.location.href = url;}}>
                        AVVIA MAPS
                </h1>
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
