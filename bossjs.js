let pipe = document.getElementById("pipe");
let hole = document.getElementById("hole");
let bert = document.getElementById("bert");
let jumping = 0;
let counter = 0;


// Spawn Pipes
hole.addEventListener('animationiteration', () => {
    let score = document.querySelector(".score-container"); 
    let random = -((Math.random() * 317) + 383);
    hole.style.top = random  + "px";
    counter++;
    score.innerHTML = "SCORE : " + counter;
    //console.log(random)
    //console.log(counter)
});
// Create localStorage - get Highscore
const counterUp = () => {
    if ( typeof( Storage ) !== "undefined") {
        if ( localStorage.counter ) {
            localStorage.counter = Number( localStorage.counter ) + 1;
            console.log(localStorage.counter);
            document.querySelector(".highscore").innerHTML = `Highscore ${localStorage.counter}`;
        } else {
            localStorage.setItem("highscore", 0);
        }
    }
}
// Gravity 
setInterval(function() {
    let bertTop = parseInt(window.getComputedStyle(bert).getPropertyValue("top"));

    if (jumping == 0) { // Gravity
        bert.style.top = ( bertTop + 3 ) + "px"; // pushed bert 6 px down when not clicked => gravity
    }
    let pipeLeft = parseInt(window.getComputedStyle(pipe).getPropertyValue("left"));
    let holeTop = parseInt(window.getComputedStyle(hole).getPropertyValue("top"));
    let cTop = -(800 - bertTop); // OG top is a negative , here we convert this to same but positive

    if(( bertTop > 640 )||(( pipeLeft < 20 ) && ( pipeLeft > -50 ) && (( cTop < holeTop )||( cTop > holeTop + 120 )))) { //3 dif statements if all true = game over
        alert("You suck . Score " + counter);
        counter = 0; //reset counter after you lose
        bert.style.top = 100 + "px"; // reset character
    }

}, 10);

function jump(){
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


// Create play again function when score < 10 level 1 , <25 level 2 , 30 (?) level 3
// Put each score in array per level, add plus operator per round => result is Highscore localStorage  !


	