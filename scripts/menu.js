const restartButton = document.querySelector("button.restart");
const startStopButton = document.querySelector("button.startStop");
startStopButton.addEventListener("click", handleStartStopButton);
restartButton.addEventListener("click", handleRestartButton);

var buttonStartStopState = true;

function handleStartStopButton () {
    console.log("Start/Stop");

    if(buttonStartStopState === true){
        cancelAnimationFrame(animation);
        startStopButton.textContent = "Start";
    
    } else {
        
        draw();
        startStopButton.textContent = "Stop";
        
    }

    buttonStartStopState = !buttonStartStopState;

}

function handleRestartButton () {
    document.location.reload();
}