import '../style/info.css'

function Info ({ActivePage, onActivePage}){

    const handleGoBack = () => {
        onActivePage('Home');
    }

    return(
        <>
        <div className="InfoBody">
            <div className="information">
                <h1>Info Pages</h1>
                <p>
                    SeeBeyond &egrave; un progetto, ideato da un gruppo di studenti del politecnico di Bari, rivolto alle persone con acuit&agrave; visiva che cercano soluzioni innovative ed efficaci per orientarsi in qualsiasi tipo di ambiente.
                </p>
            </div>
            <div className="ButtonContainer">
                <button className="InfoGoBackContainer">
                    <span className="GoBack" onClick={() => handleGoBack()}>Torna Indietro</span>
                </button>
            </div>  
        </div>   
        </>
    );

}

export default Info;