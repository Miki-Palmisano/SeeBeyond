import '../style/info.css'

function Info ({ActivePage, onActivePage}){

    const handleGoBack = () => {
        onActivePage('Home');
    }

    return(
        <>
        <div className="information">
            <h1>Info Page</h1>
            <p>
                SeeBeyond &egrave; un progetto, ideato da un gruppo di studenti del politecnico di Bari, rivolto alle persone con acuit&agrave; visiva che cercano soluzioni innovative ed efficaci per orientarsi in qualsiasi tipo di ambiente.
            </p>
        </div>
        <div className="ButtonContainer">
            <button className="GoBackContainer">
                <span className="GoBack" onClick={() => handleGoBack()}>Torna Indietro</span>
            </button>
        </div>     
        </>
    );

}

export default Info;