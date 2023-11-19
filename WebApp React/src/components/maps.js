import '../style/maps.css'

function Maps({ActivePage, onActivePage}){

    const handleGoBack = () => {
        onActivePage('Home');
    }

    return(
        <>
        <div className="information">
            <h1>Maps</h1>
        </div>
        <div className="buttonContainer">
            <button className="MapsContainer">
                <span className="MapsButton" onClick={() => window.open("https://maps.google.com")}>Avvia Maps</span>
            </button>
            <button className="GoBackContainer">
                <span className="GoBack" onClick={() => handleGoBack()}>Torna Indietro</span>
            </button>
        </div>
        </>
    );
}

export default Maps;