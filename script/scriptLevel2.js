
// TODO: click to start game

/*playGame = () => {*/
    let hole = document.querySelector(".hole");

    const resetStorage = () => {

        localStorage.removeItem("counter");
    };

    /*countDownFunction = () => {
        const timeLeft = 3;
        const seconds = document.querySelector(".countdown");

        const timerId = setInterval(countDownSeconds, 1000);

        const countDownSeconds = () => {
            if (timeLeft == -1) {
                clearTimeout(timerId);
                doSomething();
            } else {
                seconds.innerHTML = timeLeft;
                timeLeft--;
            }
        };
    };
    countDownFunction();*/

    // click button and button disappears and game starts
    document.querySelector(".btn-entergame").addEventListener("click", () =>{


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

            //  5 SECOND COUNTDOWN
            const timeleft = 5;
            const timer = setInterval(function(){
                if(timeleft <= 0){
                    clearInterval(timer);
                    document.querySelector(".countdown").innerHTML = "Finished";
                } else {
                    document.querySelector(".countdown").innerHTML = timeleft + " seconds remaining";
                    timeleft--;
                }
            }, 500);
    
            console.log(timer);
            

            // start game when pressing start

        let pipe = document.querySelector(".pipe");
        let bert = document.querySelector(".bert");
        let jumping = 0;

        
        // Makes Bert jump 
        document.onclick = jump = () => {

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
                    document.getElementById("highscore").innerHTML = "HIGHSCORE : " + localStorage.counter;
                } else {
                    localStorage.setItem("counter", 1);
                }
            };
        };

        // PIPES
        hole.addEventListener('animationiteration', () => {
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
            if(localStorage.counter == 10){

                // confirm text
                const levelWin = confirm( "CONGRATULATIONS dude or dudette ! Press OK to go to the next level ! The next level is waiting for you. Cancel means back to the main page")
                
                // OK go to next level
                if(localStorage.counter == 10){
                    document.location.href = "level3.html";
                }

                // cancel go to home page
                else {
                    document.location.href = "index.html";
                }
            }

        }, 10);

        /*
        // TODO : restart game when pressing restart ( when you lost)
        // Play again page
        let playAgainScreen = document.querySelector(".playagain");

        function playAgain(){

            setTimeout(() =>{ playAgainScreen.style.display = 'block'; }, 3500 );

            document.querySelector(".btn-playagain").addEventListener("click", () => {

                //playagain btn fade out slowly after click
                playAgainScreen.style.opacity = "0.7";
                setTimeout(() =>{ playAgainScreen.style.opacity = "0.5";}, 100);
                setTimeout(() =>{ playAgainScreen.style.opacity = "0.3";}, 200);
                setTimeout(() =>{ playAgainScreen.style.display = "none";}, 300);
                setTimeout(() =>{ location.reload();},400);

            });
            
        };
        });
        */
    });
