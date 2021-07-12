const pipe = document.getElementById("pipe");
const hole = document.getElementById("hole");
const bert = document.getElementById("bert");
let jumping = 0;
let counter = 0;
// Spawn Pipes
hole.addEventListener('animationiteration', () => {
    const random = -((Math.random()*300)+150);
    hole.style.top = random + "px";
    counter++;
    console.log(random)
    console.log(counter)
});
// Gravity
setInterval(function() {
    let bertTop = parseInt(window.getComputedStyle(bert).getPropertyValue("top"));
    if (jumping === 0) { // Gravity
        bert.style.top = ( bertTop + 6 ) + "px";
    }
    let pipeLeft = parseInt(window.getComputedStyle(pipe).getPropertyValue("left"));
    let holeTop = parseInt(window.getComputedStyle(hole).getPropertyValue("top"));
    let cTop = -(500 - bertTop);
    if(( bertTop > 480 )||(( pipeLeft < 20 ) && ( pipeLeft > -50 ) && (( cTop < holeTop )||( cTop > holeTop + 100 )))) {
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
