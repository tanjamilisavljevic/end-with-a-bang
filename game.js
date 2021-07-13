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

    if (jumping == 0) { // Gravity
        bert.style.top = ( bertTop + 3 ) + "px"; // pushed bert 6 px down when not clicked => gravity
    }
    let pipeLeft = parseInt(window.getComputedStyle(pipe).getPropertyValue("left"));
    let holeTop = parseInt(window.getComputedStyle(hole).getPropertyValue("top"));
    let cTop = -(800 - bertTop); // OG top is a negative , here we convert this to same but positive

    if(( bertTop > 640 )||(( pipeLeft < 20 ) && ( pipeLeft > -50 ) && (( cTop < holeTop )||( cTop > holeTop + 130 )))) { //3 dif statements if all true = game over
        alert("You suck . Score " + counter);
        bert.style.top = 100 + "px"; // reset character
        counter = 0; //reset counter after you lose
        //highcounter = 0; 
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


// Fix "Game Over" principle when touching bottom, character respawns on top now. 
// Create play again function when score < 10 level 1 , <25 level 2 , 30 (?) level 3
// Put each score in array per level, add plus operator per round => result is Highscore localStorage  !


	