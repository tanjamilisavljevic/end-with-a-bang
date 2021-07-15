const pipe = document.getElementById("pipe");
const hole = document.getElementById("hole");
const bert = document.getElementById("bert");
let jumping = 0;
const flapSound = new Audio('sound/sfx_wing.mp3');
const scoreSound = new Audio('sound/sfx_point.mp3');
const swooshSound = new Audio('sound/sfx_swooshing.mp3');
const hitSound = new Audio('sound/sfx_hit.mp3');
const dieSound = new Audio('sound/sfx_die.mp3');


const counterUp = () => {
    if (typeof (Storage) !== "undefined") {
        if (localStorage.counter) {
            localStorage.counter = Number(localStorage.counter) + 1;
            // document.getElementById("highscore").innerHTML = `Highscore - ${localStorage.counter}`;
            // document.getElementById("highscore").classList.add('highscore');
        } else {
            localStorage.setItem("counter", 0);
        }
    }
};

const makePipesAppear = () => {
    scoreSound.play();
    let score = document.querySelector(".score");
    let random = -((Math.random() * 317) + 383);
    hole.style.top = random + "px";
    score.classList.add('score-container-extra');
    counterUp();
    score.innerHTML = "Score - " + `${localStorage.counter}`
    if (localStorage.counter > 25) {
        document.querySelector('.bossLink').style.visibility = 'visible'
        document.querySelector('.toBoss').style.visibility = 'visible'
    }
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
        hitSound.play();
        dieSound.play();
        document.querySelector('.youLost').style.visibility = 'visible';
        localStorage.removeItem('counter'); //reset score
        bert.style.top = 275 + "px"; // reset bert
        stopTheGame(); //stop the game
        document.getElementById('startButton').innerText = 'Play again'
    }
};

const jump = () => {
    flapSound.play();
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

const pauseAnimations = () => {
    document.getElementById("floor").style.animationPlayState = "paused";
    document.getElementById("hole").style.animationPlayState = "paused";
    document.getElementById("pipe").style.animationPlayState = "paused";
}
const resumeAnimations = () => {
    document.getElementById("floor").style.animationPlayState = "running";
    document.getElementById("hole").style.animationPlayState = "running";
    document.getElementById("pipe").style.animationPlayState = "running";
}

let gravity;

const stopTheGame = () => {
    hole.removeEventListener('animationiteration', makePipesAppear);
    clearInterval(gravity);
    document.removeEventListener('click', jump);
    document.removeEventListener('keydown', jump);
    pauseAnimations();
};

const startTheGame = () => {
    document.querySelector('.youLost').style.visibility = 'hidden'
    document.querySelector('.bossLink').style.visibility = 'hidden'
    document.querySelector('.toBoss').style.visibility = 'hidden'
    resumeAnimations();
// Pipes appear randomly
    hole.addEventListener('animationiteration', makePipesAppear);
// Gravity
    clearInterval(gravity);
    gravity = setInterval(gravityCallback, 10);
//Jumping
    document.addEventListener("click", jump);
    document.addEventListener("keydown", jump);
};

document.getElementById('startButton').addEventListener("click", startTheGame);

//TODO: fix highscore