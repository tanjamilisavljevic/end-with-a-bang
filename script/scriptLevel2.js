
// TODO: click to start game

/*playGame = () => {*/
    let hole = document.querySelector(".hole");

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


    countdownFunction = () => {
        var timeleft = 3;
        var timer = setInterval(() => {
            if(timeleft <= 0){
                clearInterval(timer);
                document.querySelector(".countdown").innerHTML = "BEGIN ! 🏁";
            } else {
                document.querySelector(".countdown").innerHTML = timeleft + " seconds remaining";
            }
            timeleft -= 1;
        }, 1000);
    }; 

    const resetStorage = () => {

        localStorage.removeItem("counter");
    };

    // click button and button disappears and game starts
    document.querySelector(".btn-entergame").addEventListener("click", () =>{

            countdownFunction();
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

            // start game when pressing start

        let pipe = document.querySelector(".pipe");
        let bert = document.querySelector(".bert");
        let jumping = 0;

        
        // Makes Bert jump 
        document.onclick = jump = () => {
            flapSound.play();
            jumping = 1;
            let jumpCount = 0;
            let jumpInterval = setInterval(() =>{

                let bertTop = parseInt(window.getComputedStyle(bert).getPropertyValue("top"));

                if (( bertTop > 6 ) && ( jumpCount < 15 )) {
                    bert.style.top = ( bertTop - 5 ) + "px" ;
                }
                if ( jumpCount > 20 ) {
                    clearInterval( jumpInterval );
                    jumping = 0 ;
                    jumpCount = 0 ;
                }
                jumpCount++ ;
            }, 10);
        };
        
        //HIGHSCORE STORAGE
        const counterUp = () => {

            if ( typeof( Storage ) !== "undefined") {

                if ( localStorage.counter ) {
                    localStorage.counter = Number( localStorage.counter ) + 1;
                } else {
                    localStorage.setItem("counter", 1);
                }
            };
        };

        // PIPES
        hole.addEventListener('animationiteration', () => {
            scoreSound.play();
            // random position of the pipes and hole
            let score = document.querySelector(".score"); 
            let random = -((Math.random() * 317) + 383);
            hole.style.top = random + "px";
            counterUp();
            score.innerHTML = "SCORE : " + localStorage.counter;
            console.log(localStorage.counter);
            });




        // GRAVITY 
        setInterval(() => {
            // makes Bert come down (gravity)
            let bertTop = parseInt(window.getComputedStyle(bert).getPropertyValue("top"));

            if (jumping == 0) {
                bert.style.top = ( bertTop + 3 ) + "px";
            }

            let pipeLeft = parseInt(window.getComputedStyle(pipe).getPropertyValue("left"));
            let holeTop = parseInt(window.getComputedStyle(hole).getPropertyValue("top"));
            var cTop = -(800 - bertTop);

            //Define spots you hit
            if(( bertTop > 640 )||(( pipeLeft < 20 ) && ( pipeLeft > -50 ) && (( cTop < holeTop )||( cTop > holeTop + 120 )))) {
                hitSound.play();
                dieSound.play();
                // what happens when you hit
                // confirm text
                const startOver = confirm ("You suck mate. Only " + localStorage.counter + " points. Do you want to try again?");

                    // OK reload page
                    if(startOver == true){
                        location.reload();
                    }

                    // cancel go back to home page
                    else {
                        document.location.href = "index.html";
                    }
                
                bert.style.top = 100 + "px";
            }

            // Define when  you win and go on to next level
            if(localStorage.counter == 2){

                // confirm text
                const levelWin = confirm( "CONGRATULATIONS dude or dudette ! Press OK to go to the next level ! The next level is waiting for you. Cancel means back to the main page")
                
                // OK go to next level
                if(localStorage.counter == 2){
                    document.location.href = "level3.html";
                }

                // cancel go to home page
                else {
                    document.location.href = "index.html";
                }
            }

        }, 10);
    });
