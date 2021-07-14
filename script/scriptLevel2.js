
// TODO: click to start game

/*playGame = () => {*/
    document.querySelector(".btn-entergame").addEventListener("click", () =>{

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
            
            /*var timeLeft = 3;
            var seconds = document.getElementById("startGame");

            var timerId = setInterval(countdown, 1000);

            const countdown = () => {
                if (timeLeft == -1) {
                    clearTimeout(timerId);
                    doSomething();
                } else {
                    seconds.innerHTML = timeLeft;
                    timeLeft--;
                }
            };*/
            

            // start game when pressing start

        let pipe = document.querySelector(".pipe");
        let hole = document.querySelector(".hole");
        let bert = document.querySelector(".bert");
        let jumping = 0;
        let counter = 0;


        // PIPES
        hole.addEventListener('animationiteration', () => {
            // random position of the hole
            let score = document.querySelector(".score-container"); 
            let random = -((Math.random() * 317) + 383);
            hole.style.top = random + "px";
            counter++;
            score.innerHTML = "SCORE : " + counter;
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

        if(( bertTop > 640 )||(( pipeLeft < 20 ) && ( pipeLeft > -50 ) && (( cTop < holeTop )||( cTop > holeTop + 120 )))) {
                alert("You suck mate. Only " + counter + " points");
                location.reload();
                bert.style.top = 100 + "px";
                counter = 0;
            }

        }, 10);



        // Make Bert jump
        document.onclick = function jump(){
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
