const bgTrack = new Audio("sound/crack3.mp3"); 
const flapSound = new Audio("sound/sfx_wing.mp3");
const scoreSound = new Audio("sound/energy3.wav"); 
const swooshSound = new Audio("sound/sfx_swooshing.mp3");
const hitSound  = new Audio("sound/sfx_hit.mp3"); 
const dieSound = new Audio("sound/unfect.ogg");
const gamovrSound = new Audio("sound/laugh.wav")
let hole = document.getElementById("hole");
let pipe = document.getElementById("pipe");
let bert = document.getElementById("bert");
let jumping = 0;


const resetStorage = () => {
    swooshSound.play();
    localStorage.removeItem("counter");
}

document.querySelector(".btn-entergame").addEventListener("click", () =>{
    resetStorage(); 
    let enterScreen = document.querySelector(".entergame");
    enterScreen.style.opacity = "0.9";
    setTimeout(() =>{ enterScreen.remove()}, 1000);

    //create highscore library (inspect)
    const counterUp = () => {
        if ( typeof( Storage ) !== "undefined") {
            if ( localStorage.counter ) {
                localStorage.counter = Number( localStorage.counter ) + 1;
                //document.getElementById("highscore").innerHTML = `Highscore ${localStorage.counter}`;
            } else {
                localStorage.setItem("counter", 0);
            }
        }
    }
    
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
        score.innerHTML = "SCORE : " + `${localStorage.counter}`; 
        console.log(`${localStorage.counter}`);
    });


    setInterval(function() {
        let bertTop = parseInt(window.getComputedStyle(bert).getPropertyValue("top"));
        let gameEnd = false;
        if (jumping == 0) { // Gravity
            bert.style.top = ( bertTop + 3 ) + "px"; // pushed bert 6 px down when not clicked => gravity
        }
        let pipeLeft = parseInt(window.getComputedStyle(pipe).getPropertyValue("left"));
        let holeTop = parseInt(window.getComputedStyle(hole).getPropertyValue("top"));
        let cTop = -(800 - bertTop);

        if(( bertTop > 640 )||(( pipeLeft < 20 ) && ( pipeLeft > -50 ) && (( cTop < holeTop )||( cTop > holeTop + 120 )))) {
            hitSound.play();
            dieSound.play();
            gamovrSound.play();
            const startOver = confirm ("GET REKT " + localStorage.counter + " points. Do you want to GIT GUD ?");
                
                if ( startOver == true ) {
                    location.reload() ;
                }
                else {
                    document.location.href = "index.html";
                }

            resetStorage();
            bert.style.top = 100 + "px";
        }

        const pauseAnimations = () => {
            document.getElementById("floor").style.animationPlayState = "paused";
            document.getElementById("hole").style.animationPlayState = "paused";
            document.getElementById("pipe").style.animationPlayState = "paused";
        }

        if(localStorage.counter == 2){
            pauseAnimations();
            gameEnd = true;
            const levelWin = confirm( "BERT IS FREE NOW & RESTS IN ETERNAL GRATITUDE");
           
        }

        if(gameEnd){
            location.reload();
        }
    }, 10);

})



	