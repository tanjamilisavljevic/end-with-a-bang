const userScore = 0;
const computerScore = 0;

document.getElementById('addHTMLelementForUserScore').innerHTML = '' + userScore;
document.getElementById('addHTMLelementForComputerScore').innerHTML = '' + computerScore;


//for function victory
document.getElementById('scoreUser').innerHTML= '' + ++userScore;

//for function defeat
document.getElementById('scoreUser').innerHTML= '' + ++computerScore;