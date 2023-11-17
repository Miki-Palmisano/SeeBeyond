var buttons = document.querySelectorAll(".button");

function initButtonState() {
    var buttonState = getCookie('buttonState');
    if(buttonState === 'on'){
        for(var i = 0; i < buttons.length-1; i++){
            buttons[i].classList.toggle("active");
            buttons[i].classList.toggle("inactive");
        }
    }
}

function setCookie(name, value, days) {
    var expires = "";
    if (days) {
      var date = new Date();
      date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
      expires = "; expires=" + date.toUTCString();
    }
    document.cookie = name + "=" + value + expires + "; path=/";
  }

  function getCookie(name) {
    var nameEQ = name + "=";
    var ca = document.cookie.split(';');
    for (var i = 0; i < ca.length; i++) {
      var c = ca[i];
      while (c.charAt(0) === ' ') c = c.substring(1, c.length);
      if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length, c.length);
    }
    return null;
  }

powerButton.addEventListener("click", toggleButton);

infoButton.addEventListener("click", function(){
    if(infoButton.classList.contains("active")){
        window.location.href="./info/info.html";
    }
})

function toggleButton() {
    var buttonState = getCookie('buttonState');
    if (buttonState === 'off') {
      setCookie('buttonState', 'on', 2);
      for (var i = 0; i < buttons.length-1; i++) {
        buttons[i].classList.toggle("inactive");
        buttons[i].classList.toggle("active");
        }
    } else {
      setCookie('buttonState', 'off', 2);
      for (var i = 0; i < buttons.length-1; i++) {
        buttons[i].classList.toggle("inactive");
        buttons[i].classList.toggle("active");
    }
    }
  }

  initButtonState();