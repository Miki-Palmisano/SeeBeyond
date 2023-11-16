// Funzione JavaScript per accendere/spegnere i bottoni
var buttons = document.querySelectorAll(".button");
var control = 1;

powerButton.addEventListener("click", function() {  
    if(control==1){
        for (var i = 0; i < buttons.length-1; i++) {
            buttons[i].classList.toggle("inactive");
            buttons[i].classList.toggle("active");
        }
        if(infoButton.classList.contains("active")){
            document.cookie = "info=1;";
        } else {
            document.cookie = "info=0;";
        }
    }
});

infoButton.addEventListener("click", function(){
    if(infoButton.classList.contains("active")){
        window.location.href="./info/info.html";
    }
})