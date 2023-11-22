import '../style/info.css'

function Info ({ActivePage, onActivePage}){

    const handleGoBack = () => {
        onActivePage('Home');
    }

    return(
        <>
        <div className="InfoBody">
            <div className="InfoInformation">
                <h1 className="InfoH1">INFO PAGE</h1>
                <p className="InfoP">
                    SeeBeyond &egrave; un progetto, ideato da un gruppo di studenti del politecnico di Bari, rivolto alle persone con acuit&agrave; visiva che cercano soluzioni innovative ed efficaci per orientarsi in qualsiasi tipo di ambiente.<br/>
                    Funzionalit&agrave; dell'App:<br/>
                    - Riconoscimento di oggetti e testo<br/>
                    - Assistente vocale<br/>
                    - Assistenza alla mobilit&agrave;
                </p>
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