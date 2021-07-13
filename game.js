let pipe = document.getElementById("pipe");
let hole = document.getElementById("hole");
let bert = document.getElementById("bert");
let jumping = 0;
let counter = 0;
//let highcounter = 0;

// Spawn Pipes
hole.addEventListener('animationiteration', () => {
    let score = document.querySelector(".score-container"); 
    let random = -((Math.random() * 317) + 383);
    hole.style.top = random  + "px";
    counter++;
    //highcounter++;
    score.innerHTML = "SCORE : " + counter;
    //highcounter.innerHTML = "HIGHSCORE : " + highcounter;
    console.log(random)
    console.log(counter)
    //console.log(highcounter)
});
// Gravity 
setInterval(function() {
    let bertTop = parseInt(window.getComputedStyle(bert).getPropertyValue("top"));
    let bertBottom = parseInt(window.getComputedStyle(bert).getPropertyValue("bottom"));
    if (jumping == 0) { // Gravity
        bert.style.top = ( bertTop + 6 ) + "px";
        bert.style.bottom = ( bertBottom + 100) + "px";
    }
    let pipeLeft = parseInt(window.getComputedStyle(pipe).getPropertyValue("left"));
    let holeTop = parseInt(window.getComputedStyle(hole).getPropertyValue("top"));
    var cTop = -(800 - bertTop);
    if(( bertTop > 780 )||(( pipeLeft < 20 ) && ( pipeLeft > -50 ) && (( cTop < holeTop )||( cTop > holeTop + 130 )))) {
        console.log("You suck . Score " + counter);
        bert.style.top = 100 + "px";
        counter = 0;
        //highcounter = 0; 
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


// Fix "Game Over" principle when touching bottom, character respawns on top now. 
// Create play again function when score < 10 level 1 , <25 level 2 , 30 (?) level 3
// Put each score in array per level, add plus operator per round => result is Highscore localStorage  !


	