
const result = document.getElementById("result");
const keys = document.querySelector(".keys");


keys.addEventListener("click", event => {
  
  if (event.target.matches("button")) {
    
    const key = event.target;
    const keyValue = key.value;

    
    if (keyValue === "AC") {
      result.value = "";
    } else if (keyValue === "=") {
      try {
        result.value = eval(result.value);
      } catch (error) {
        result.value = "Erro";
      }
    } else {
      result.value += keyValue;
    }
  }
});


var audio = document.getElementById("myAudio");
  var volumeControl = document.querySelector("#myAudio + .controls-wrapper .volume-control input[type='range']");
  
  volumeControl.addEventListener("change", function() {
    audio.volume = this.value / 100;
  });