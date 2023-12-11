import '../style/ocr.css'
import React, {useState} from 'react';

function OCR({ActivePage, onActivePage}){

    const handleGoBack = () => {
        onActivePage('Home');
    }

    return(
        <>
        <div className="OcrBody">
            <div className="OcrInformation">
                <h1 className="OcrH1">OCR</h1>
            </div>
            <button className="OcrContainer">
                <h1 className="OcrButton">AVVIA OCR</h1>
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