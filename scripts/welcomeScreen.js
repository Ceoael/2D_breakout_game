var startNewGame = false;

const animateElements = document.querySelectorAll(".animate");

const welcomeScreenStartButton = document.querySelector(".welcomeScreenStartButton");
const welcomeScreenContainer = document.querySelector(".welcomeScreenContainer");

welcomeScreenStartButton.addEventListener('click', () => {
    startNewGame = true;
    gameContainer.classList.remove("blur");
    welcomeScreenContainer.classList.add("unactive");

    animateElements.forEach(element => {

        element.classList.remove("animate");
        
    });
})