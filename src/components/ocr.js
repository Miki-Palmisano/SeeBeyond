import '../style/ocr.css'
import React, {useState, useEffect} from 'react';
import { getDatabase, ref, child, get, set } from "firebase/database";

function OCR({ActivePage, onActivePage, database}){

    const handleGoBack = () => {
        onActivePage('Home');
    }

    const [isActive, setIsActive] = useState(false); //check bottone on/off AI, non usato al momento (bottone non presente per ora)

    useEffect(() => {
        if(isActive){
            const dbRef = ref(database);
            get(child(dbRef, `Testo Rilevato/Testo`)).then((snapshot) => {
                let utterance = new SpeechSynthesisUtterance(snapshot.val());
                window.speechSynthesis.speak(utterance);
            }).catch((error) => { console.error(error); });
            setIsActive(false);
        }
    }, [isActive]);

    return(
        <>
            <div className="OcrBody">
                <div className="OcrInformation">
                    <h1 className="OcrH1">OCR</h1>
                </div>
                <button className="OcrContainer">
                    <h1 className="OcrButton" onClick={() => { setIsActive(true); }}>AVVIA OCR</h1>
                </button>
                <div className="OcrButtonContainer">
                    <button className="OcrGoBackContainer">
                        <h1 className="OcrGoBack" onClick={() => handleGoBack()}>TORNA INDIETRO</h1>
                    </button>
                </div>
            </div>
        </>
    )
}

export default OCR;

/*
<button className={isActive ? "AiOnContainer" : "AiOffContainer"} onClick={() => {setIsActive(!isActive); } }>
    <h1 className="AiButton">{isActive ? "DISATTIVA AI" : "ATTIVA AI"}</h1>
</button>
*/