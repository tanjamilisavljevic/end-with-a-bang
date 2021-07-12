

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
        if (jumping === 0) { // Gravity
            bert.style.top = (bertTop + 4) + "px";
        }
    }
, 10)


