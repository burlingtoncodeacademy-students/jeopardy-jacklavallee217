// Starts a one player game
player1Button.addEventListener("click", function() {
    onePlayer = true;
    startGameLink.href = startGameLink.href + "#oneplayer"
    player1Button.style.display = "none"
    player2Button.style.display = "none"
    startGame.style.display = "block"
})

// Starts a two player game
player2Button.addEventListener("click", function() {
    onePlayer = false;
    startGameLink.href = startGameLink.href + "#twoplayer"
    player1Button.style.display = "none"
    player2Button.style.display = "none"
    startGame.style.display = "block"

})
