let hole = document.getElementById("hole");
const bgTrack = new Audio();
const flapSound = new Audio();
const scoreSound = new Audio();
const swooshSound = new Audio();
const hitSound  = new Audio();
const dieSound = new Audio();
bgTrack.src = "sound/crack3.mp3";
flapSound.src ="sound/sfx_wing.mp3";
scoreSound.src = "sound/sfx_point.mp3";
swooshSound.src = "sound/sfx_swooshing.mp3";
hitSound.src = "sound/sfx_hit.mp3";
dieSound.src = "sound/sfx_die.mp3";

const resetStorage = () => {
    swooshSound.play();
    localStorage.removeItem("counter");
}

document.querySelector(".btn-entergame").addEventListener("click", () =>{
    resetStorage();
    let enterScreen = document.querySelector(".entergame");
    enterScreen.style.opacity = "0.9";
    setTimeout(() =>{ enterScreen.style.opacity = "0.7";}, 200);
    setTimeout(() =>{ enterScreen.style.opacity = "0.6";}, 300);
    setTimeout(() =>{ enterScreen.style.opacity = "0.5";}, 400);
    setTimeout(() =>{ enterScreen.style.opacity = "0.4";}, 500);
    setTimeout(() =>{ enterScreen.style.opacity = "0.2";}, 600);
    setTimeout(() =>{ enterScreen.style.opacity = "0.1";}, 700);
    setTimeout(() =>{ enterScreen.style.opacity = "0";}, 800);
    setTimeout(() =>{ enterScreen.remove()}, 1000);

    //create highscore library (inspect)
    const counterUp = () => {
        if ( typeof( Storage ) !== "undefined") {
            if ( localStorage.counter ) {
                localStorage.counter = Number( localStorage.counter ) + 1;
                document.getElementById("highscore").innerHTML = `Highscore ${localStorage.counter}`;
            } else {
                localStorage.setItem("counter", 0);
            }
        }
    }


    let pipe = document.getElementById("pipe");
    let bert = document.getElementById("bert");
    let jumping = 0;


    document.onclick = function jump(){
        flapSound.play();
        jumping = 1;
        let jumpCount = 0;
        let jumpInterval = setInterval(function(){
            let bertTop = parseInt(window.getComputedStyle(bert).getPropertyValue("top"));
            if (( bertTop > 6 ) && ( jumpCount < 15 )) { // change count for harder or easier gravity response
                bert.style.top = ( bertTop - 4 ) + "px" ;
            }
            if ( jumpCount > 20 ) {
                clearInterval( jumpInterval );
                jumping = 0 ;
                jumpCount = 0
            }
            jumpCount++ ;
        }, 10);
    }

    // Spawn Pipes
    hole.addEventListener('animationiteration', () => {
        scoreSound.play();
        let random = -((Math.random() * 317) + 383);
        hole.style.top = random  + "px";
        let score = document.querySelector(".score");
        counterUp();
        score.innerHTML = "SCORE : " + `${localStorage.counter}`; //revise
        //console.log(random)
        console.log(`${localStorage.counter}`);
    });

    // Gravity
    setInterval(function() {
        let bertTop = parseInt(window.getComputedStyle(bert).getPropertyValue("top"));

        if (jumping == 0) { // Gravity
            bert.style.top = ( bertTop + 3 ) + "px"; // pushed bert 6 px down when not clicked => gravity
        }
        let pipeLeft = parseInt(window.getComputedStyle(pipe).getPropertyValue("left"));
        let holeTop = parseInt(window.getComputedStyle(hole).getPropertyValue("top"));
        let cTop = -(800 - bertTop); // OG top is a negative , here we convert this to same but positive

        if(( bertTop > 640 )||(( pipeLeft < 20 ) && ( pipeLeft > -50 ) && (( cTop < holeTop )||( cTop > holeTop + 120 )))) {
            hitSound.play();
            dieSound.play();
            const startOver = confirm ("You suck mate. Only " + localStorage.counter + " points. Do you want to try again?");
            if ( startOver == true ) {
                location.reload() ;
            }
            else {
                document.location.href = "index.html";
            }

            resetStorage();
            bert.style.top = 100 + "px";
        }

        if(localStorage.counter == 30){
            const levelWin = confirm( "BERT IS FREE NOW & RESTS IN ETERNAL GRATITUDE")
        }
        // callback onPageLoad reset()
    }, 10);


})

/*window.onload = function () {
    startGame();
}*/



/*function onPageLoad () {
    // Start of the page - static
    // Keypress / click to start
    // if lose -> alert
    // game stops
    // go back to beginning point
}*/


// Create play again function when score < 10 level 1 , <25 level 2 , 30 (?) level 3
// Put each score in array per level, add plus operator per round => result is Highscore localStorage  !


