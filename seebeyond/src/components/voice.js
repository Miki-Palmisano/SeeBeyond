import '../style/voice.css'

function Voice({ActivePage, onActivePage}){

    const handleGoBack = () => {
        onActivePage('Home');
    }

    //
    //

    return(
        <>
        <div className="information">
            <h1>Assistente Vocale</h1>
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