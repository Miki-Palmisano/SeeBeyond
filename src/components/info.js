import { useEffect, useState } from 'react';
import '../style/info.css'
import { set } from 'firebase/database';

function Info ({ActivePage, onActivePage}){

    const handleGoBack = () => {
        onActivePage('Home');
        window.speechSynthesis.cancel();
    }

    const [info, setInfo] = useState(`SeeBeyond è un progetto, ideato da un gruppo di studenti del politecnico di Bari, rivolto alle persone con acuità visiva che cercano soluzioni innovative ed efficaci per orientarsi in qualsiasi tipo di ambiente.
    L'app è strutturata in 6 funzioni, in ordine puoi trovare:
    - Informazioni Generali cliccando in alto a sinistra;
    - Lettura testo riconosciuto dall'OCR cliccando in alto a destra;
    - Assistente Vocale cliccando in basso a destra;
    - Assistente di Navigazione cliccando in basso a sinistra;
    - Abilitare o Disabilitare lettura oggetti cliccando due volte al centro;
    - Spegnere o Accendere l'app cliccando al centro una sola volta;`
    );
    

    useEffect(() => {
        let utterance = new SpeechSynthesisUtterance(info);
        window.speechSynthesis.speak(utterance);
        return () => {
            window.speechSynthesis.cancel();
        };
    }, []);
    

    return(
        <>
        <div className="InfoBody">
            <div className="InfoInformation">
                <h1 className="InfoH1">INFO PAGE</h1>
                <p className="InfoP" dangerouslySetInnerHTML={{__html: info.replace(/(?:\r\n|\r|\n)/g, '<br>')}}></p> 
            </div>
            <div className="InfoButtonContainer">
                <button className="InfoGoBackContainer">
                    <h1 className="InfoGoBack" onClick={() => handleGoBack()}>TORNA INDIETRO</h1>
                </button>
            </div>  
        </div>   
        </>
    );

}

export default Info;