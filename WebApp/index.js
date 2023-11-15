// Funzione JavaScript per accendere/spegnere i bottoni
var buttons = document.querySelectorAll(".button");
var control = 1;

powerButton.addEventListener("click", function() {  
    if(control==1){
        for (var i = 0; i < buttons.length-1; i++) {
            buttons[i].classList.toggle("inactive");
            buttons[i].classList.toggle("active");
        }
    }
});

googleButton.addEventListener("click", function() {
    if (googleButton.classList.contains("active")) {
        // Mostra un popup con il testo "Google"
        alert("Sono Attivo");
    }
    else alert("Sono Disattivo");
});

infoButton.addEventListener("click", function(){
    if(infoButton.classList.contains("active")){
        window.location.href="./info/info.html";
    }
})