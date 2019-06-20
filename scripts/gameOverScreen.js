const gameContainer = document.querySelector(".gameContainer");
const endScreenScore = document.querySelector(".endScreenScore");
const endScreenContainer = document.querySelector(".endScreenContainer")

const endScreenButtonYes = document.querySelector(".endScreenButtonYes");
const endScreenButtonNo = document.querySelector(".endScreenButtonNo");

endScreenButtonYes.addEventListener("click", handleRestartButton);
endScreenButtonNo.addEventListener("click", () => {

            window.close();
        
})

function gameOverScreen(){
    endScreenContainer.classList.remove("unactive");
    gameContainer.classList.add("blur");
    endScreenScore.textContent = score;
}