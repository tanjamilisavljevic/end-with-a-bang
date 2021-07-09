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




