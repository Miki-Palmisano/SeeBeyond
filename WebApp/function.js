function buttonState() {
    let  state = getCookies("info");
    if (state == 1){
        for (var i = 0; i < buttons.length-1; i++) {
            buttons[i].classList.toggle("inactive");
            buttons[i].classList.toggle("active");
        }
    }
}