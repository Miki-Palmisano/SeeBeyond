import '../style/ocr.css'
import React, {useState} from 'react';

function OCR({ActivePage, onActivePage}){

    const handleGoBack = () => {
        onActivePage('Home');
    }

    const [showNotify, setShowNotify] = useState(false);//check popup notifica


    return(
        <>
        {
        <div className="OcrBody">
            <div className="OcrInformation">
                <h1 className="OcrH1">OCR</h1>
            </div>
            <button className="OcrContainer">
                <h1 className="OcrButton" onClick={() => {setShowNotify(true);}}>AVVIA OCR</h1>
            </button>
            <div className="OcrButtonContainer">
                <button className="OcrGoBackContainer">
                    <h1 className="OcrGoBack" onClick={() => handleGoBack()}>TORNA INDIETRO</h1>
                </button>
            </div>
        </div>
        }
        {
        showNotify && (
            <div className="PopUpNotifyContainer" >
                <h1 className='PopUpNotifyTitle'>WORK IN PROGRESS stay tuned</h1>
                <button className="CloseNotifyContainer">
                    <h1 className="CloseNotify" onClick={() => setShowNotify(false)}>CHIUDI</h1>
                </button>
            </div>
        )   
        }
        </>
    )
}

export default OCR;