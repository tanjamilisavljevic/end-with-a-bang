document.querySelector(".btn-entergame").addEventListener("click", function(){

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

      //  5 SECOND COUNTDOWN
    
    var timeLeft = 3;
    var elem = document.getElementById('startGame');

    var timerId = setInterval(countdown, 1000);

    function countdown() {
        if (timeLeft == -1) {
            clearTimeout(timerId);
            doSomething();
        } else {
            elem.innerHTML = timeLeft;
            timeLeft--;
        }
    };

    // start game when pressing start

// restart game when pressing restart ( when you lost)

// continuing with level 3 when beating level 2
let pipe = document.getElementById("pipe");
let hole = document.getElementById("hole");
let bert = document.getElementById("bert");
let jumping = 0;
let counter = 0;
// Spawn Pipes
hole.addEventListener('animationiteration', () => {
    let random = -((Math.random()*300)+150);
    hole.style.top = random + "px";
    counter++;
    console.log(random)
    console.log(counter)
});
// Gravity 
setInterval(function() {
    let bertTop = parseInt(window.getComputedStyle(bert).getPropertyValue("top"));
    if (jumping == 0) { // Gravity
        bert.style.top = ( bertTop + 6 ) + "px";
    }
    let pipeLeft = parseInt(window.getComputedStyle(pipe).getPropertyValue("left"));
    let holeTop = parseInt(window.getComputedStyle(hole).getPropertyValue("top"));
    var cTop = -(800 - bertTop);
    if(( bertTop > 780 )||(( pipeLeft < 20 ) && ( pipeLeft > -50 ) && (( cTop < holeTop )||( cTop > holeTop + 130 )))) {
        console.log("You suck . Score " + counter);
        bert.style.top = 100 + "px";
        counter = 0; 
    }

}, 10);

function jump(){
    jumping = 1;
    let jumpCount = 0;
    let jumpInterval = setInterval(function(){
        let bertTop = parseInt(window.getComputedStyle(bert).getPropertyValue("top"));
        if (( bertTop > 12 ) && ( jumpCount < 30 )) {
            bert.style.top = ( bertTop - 5 ) + "px" ;
        }
        if ( jumpCount > 20 ) {
            clearInterval( jumpInterval );
            jumping = 0 ;
            jumpCount = 0 ;
        }
        jumpCount++ ;
    }, 10);
}

function score () {
    let score = document.querySelector(".score"); 
    // add innerHTML after break. display counter, which is the score (see console log above)
}

// Play again page
let matchScreen = document.querySelector(".match");
let playAgainScreen = document.querySelector(".playagain");

function playAgain(){

    setTimeout(() =>{ playAgainScreen.style.display = 'block'; }, 3500 );

    document.querySelector(".btn-playagain").addEventListener("click", function(){

        //playagain btn fade out slowly after click
        playAgainScreen.style.opacity = "0.7";
        setTimeout(() =>{ playAgainScreen.style.opacity = "0.5";}, 100);
        setTimeout(() =>{ playAgainScreen.style.opacity = "0.3";}, 200);
        setTimeout(() =>{ playAgainScreen.style.display = "none";}, 300);
        setTimeout(() =>{ location.reload();},400);

    });
    
};

});  
	