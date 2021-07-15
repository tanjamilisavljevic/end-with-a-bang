let playing = false;
let startButton;
document.querySelector(".btn-entergame").addEventListener("click", () =>{
    let enterScreen = document.querySelector(".entergame");
    enterScreen.style.opacity = "0.9";
    setTimeout(() =>{ enterScreen.style.opacity = "0.7";},200);
    setTimeout(() =>{ enterScreen.style.opacity = "0.6";},300);
    setTimeout(() =>{ enterScreen.style.opacity = "0.5";},400);
    setTimeout(() =>{ enterScreen.style.opacity = "0.4";},500);
    setTimeout(() =>{ enterScreen.style.opacity = "0.3";},600);
    setTimeout(() =>{ enterScreen.style.opacity = "0.2";},700);
    setTimeout(() =>{ enterScreen.style.opacity = "0.1";},800);
    setTimeout(() =>{ enterScreen.remove()},1000);
    //function startGame() {
        //let pipeDown = document.getElementById("pipeDown");
        let playing = true;
        let pipe = document.getElementById("pipe");
        let hole = document.getElementById("hole");
        let bert = document.getElementById("bert");
        let jumping = 0;

        document.onclick = function jump(){
            jumping = 1;
            let jumpCount = 0;
            let jumpInterval = setInterval(function(){
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
        }
        //create highscore libary (inspect)
        const counterUp = () => {
            if (typeof (Storage) !== "undefined") {
                if (localStorage.counter) {
                    localStorage.counter = Number(localStorage.counter) + 1;
                    document.getElementById("highscore").innerHTML = `highscore ${localStorage.counter}`;
                } else {
                    localStorage.setItem("counter", 0);
                }
            }
        }
        // Spawn Pipes
        hole.addEventListener('animationiteration', () => {
            let random = -((Math.random() * 317) + 383);
            hole.style.top = random + "px";
            let score = document.querySelector(".score");
            counterUp();
            score.innerHTML = "SCORE : " + `${localStorage.counter}`;
            //console.log(random)
            console.log(`${localStorage.counter}`);
        });
        // Gravity
        setInterval(function () {
            let bertTop = parseInt(window.getComputedStyle(bert).getPropertyValue("top"));
            if (jumping == 0) { // Gravity
                bert.style.top = (bertTop + 3) + "px";
            }
            let pipeLeft = parseInt(window.getComputedStyle(pipe).getPropertyValue("left"));
            let holeTop = parseInt(window.getComputedStyle(hole).getPropertyValue("top"));
            let cTop = -(800 - bertTop);
            if ((bertTop > 640) || ((pipeLeft < 20) && (pipeLeft > -50) && ((cTop < holeTop) || (cTop > holeTop + 120)))) {
                alert("Level1 to hard? Go play with toys again. " + `${localStorage.counter}`);
                const resetStorage = () => {
                    localStorage.removeItem("counter");
                }
                resetStorage();
                bert.style.top = 100 + "px";
            }

        }, 10);
})






