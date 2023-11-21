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
        <div className="ButtonContainer">   
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

/*
<iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d380100.9143671685!2d12.496365500000003!3d41.90278349999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sit!2sit!4v1700561337930!5m2!1sit!2sit" width="96%" height="5%" margin-left="5%" margin-right="5%"  loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>    

*/
