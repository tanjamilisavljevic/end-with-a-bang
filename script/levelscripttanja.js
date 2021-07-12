

const hole = document.getElementById("hole");
const pipe = document.getElementById("pipe");
const bert = document.getElementById("bert");
let jumping = 0;
let counter = 0;


hole.addEventListener("animationiteration",  () => {
    const random = -((Math.random() * 25) +10);
    hole.style.top = random + "vw";
})

// Gravity
setInterval(function() {
        let bertTop = parseInt(window.getComputedStyle(bert).getPropertyValue("top"));
        if (jumping === 0) {
            bert.style.top = (bertTop + 3) + "px";
        }
    }
, 10)

jump = () => {
    jumping = 1;
    let jumpCount = 0;
    let jumpInterval = setInterval(function (){
        let bertTop = parseInt(window.getComputedStyle(bert).getPropertyValue("top"));
        bert.style.top = (bertTop - 5) + "px";
        if (jumpCount > 15){
            clearInterval(jumpInterval);
            jumping = 0;
            jumpCount = 0;
        }
    jumpCount++
    }, 10);

}

