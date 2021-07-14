const pipe = document.getElementById("pipe");
const hole = document.getElementById("hole");
const bert = document.getElementById("bert");
let jumping = 0;

const counterUp = () => {
    if (typeof (Storage) !== "undefined") {
        if (localStorage.counter) {
            localStorage.counter = Number(localStorage.counter) + 1;
            document.getElementById("highscore").innerHTML = `Highscore - ${localStorage.counter}`;
        } else {
            localStorage.setItem("counter", 0);
        }
    }
};

const makePipesAppear = () => {
    let score = document.querySelector(".score-container");
    let random = -((Math.random() * 317) + 383);
    hole.style.top = random + "px";
    score.classList.add('score-container-extra');
    counterUp();
    score.innerHTML = "Score - " + `${localStorage.counter}`
};

const gravityCallback = () => {
    let bertTop = parseInt(window.getComputedStyle(bert).getPropertyValue("top"));
    if (jumping === 0) {
        bert.style.top = (bertTop + 3) + "px"
    }
    let pipeLeft = parseInt(window.getComputedStyle(pipe).getPropertyValue("left"));
    let holeTop = parseInt(window.getComputedStyle(hole).getPropertyValue("top"));
    let cTop = -(800 - bertTop);

    if ((bertTop > 640) || ((pipeLeft < 20) && (pipeLeft > -50) && ((cTop < holeTop) || (cTop > holeTop + 120)))) { //3 dif statements if all true = game over

        alert("You lose, bud. Score -  " + `${localStorage.counter}`);
        localStorage.removeItem('counter'); //reset score
        bert.style.top = 100 + "px"; // reset bert
        stopTheGame(); //stop the game
    }
};

const jump = () => {
    jumping = 1;
    let jumpCount = 0;
    let jumpInterval = setInterval(function () {
        let bertTop = parseInt(window.getComputedStyle(bert).getPropertyValue("top"));
        if ((bertTop > 6) && (jumpCount < 15)) {
            bert.style.top = (bertTop - 5) + "px";
        }
        if (jumpCount > 20) {
            clearInterval(jumpInterval);
            jumping = 0;
            jumpCount = 0
        }
        jumpCount++;
    }, 10);
};

let gravity;

const stopTheGame = () => {
    hole.removeEventListener('animationiteration', makePipesAppear);
    clearInterval(gravity);
    document.removeEventListener('click', jump);
    document.removeEventListener('keydown', jump);
};

const startTheGame = () => {
// Pipes appear randomly
    hole.addEventListener('animationiteration', makePipesAppear);
// Gravity
    gravity = setInterval(gravityCallback, 10);
//Jumping
    document.addEventListener("click", jump);
    document.addEventListener("keydown", jump);
};

document.getElementById('startButton').addEventListener("click", startTheGame);
