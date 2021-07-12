document.getElementsByTagName("BODY")[0].style.display = "none";

greetPlayer = () => {
    const player = prompt("Enter your name, pal:")

    if (player === 'Bert' || player === 'bert') {
        document.getElementById('greetingMessage').innerText = `Ah, Bert, we've been expecting you... 😈 `

    } else if (player === '') {
        document.getElementById('greetingMessage').innerText = `Ok, we get it, you're soo mysterious 🥱 Just pick a level... `
    } else {
        document.getElementById('greetingMessage').innerText = `Hello, ${player}! Pick a level! 🐤 `
    }
    document.getElementsByTagName("BODY")[0].style.display = "block";
}
greetPlayer();


window.addEventListener("load", function(){
    const delay = 2;
    const allElementsWithAnimateClass = document.querySelectorAll
    (".animate");
    for(let i=0; i < allElementsWithAnimateClass.length; i++){
        const words = allElementsWithAnimateClass[i].innerText.split(" ");
        allElementsWithAnimateClass[i].innerHTML = "";

        for(let i2=0; i2 < words.length; i2++){
            const item = document.createElement("span");
            item.innerText = words[i2];
            const calculation = (delay+((allElementsWithAnimateClass.length + i2)/3));
            item.style.animationDelay = calculation+"s";
            allElementsWithAnimateClass[i].appendChild(item);
        }
    }
});

