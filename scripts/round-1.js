let j = 1;
let indexes = [];

// Determines the mode of the game
var onePlayer;

// Player scores
var playerOneScore = 0;
var playerTwoScore = 0;

// Turn for two player game
let turn = 1;

// Gamemode determined by URL
let gameMode = document.location.href.split("#")[1];

console.log(gameMode);

// Two player href, carrying player scores
roundTwoLink.href =
  roundTwoLink.href +
  "#playerOne=" +
  playerOneScore +
  "#playerTwo=" +
  playerTwoScore;

// One player format
if (gameMode === "oneplayer") {
  onePlayer = true;
  playerTwo.style.display = "none";
}

// Two player format
if (gameMode === "twoplayer") {
  onePlayer = false;
}

console.log(onePlayer);

// Adjusts score based on player's answer, oscillating from player one to player two based on turn
answerButton.addEventListener("click", function () {
  if (
    answerInput.value.toUpperCase() === currentQuestion.answer.toUpperCase()
  ) {
    if (onePlayer) {
      console.log("correct");
      playerOneScore = playerOneScore + currentQuestion.points;
      playerOne.innerText = "Player One: " + playerOneScore;
    } else {
      console.log("correct");
      if (turn % 2 === 1) {
        playerOneScore = playerOneScore + currentQuestion.points;
        console.log(playerOneScore);
        playerOne.innerText = "Player One: " + playerOneScore;
      } else {
        playerTwoScore = playerTwoScore + currentQuestion.points;
        playerTwo.innerText = "Player Two: " + playerTwoScore;
      }
    }
  } else {
    if (onePlayer) {
      console.log("wrong");
      playerOneScore = playerOneScore - currentQuestion.points;
      playerOne.innerText = "Player One: " + playerOneScore;
    } else {
      console.log("wrong");
      if (turn % 2 === 1) {
        playerOneScore = playerOneScore - currentQuestion.points;
        playerOne.innerText = "Player One: " + playerOneScore;
        titleHeader.innerText = "Player Two's Turn";
      } else {
        playerTwoScore = playerTwoScore - currentQuestion.points;
        playerTwo.innerText = "Player Two: " + playerTwoScore;
        titleHeader.innerText = "Player One's Turn";
      }
      turn++;
    }
    roundTwoLink.href =
      roundTwoLink.href +
      "playerOne=" +
      playerOneScore +
      "playerTwo=" +
      playerTwoScore;
  }
  lightBox.style.display = "none";
  answerInput.value = "";
});

// Player relinquishes turn
passButton.addEventListener("click", function () {
  lightBox.style.display = "none";
  answerInput.value = "";
  if (turn % 2 === 1) {
    titleHeader.innerText = "Player Two's Turn";
  } else {
    titleHeader.innerText = "Player One's Turn";
  }
  turn++;
});

// Fills columns for each Json file in array, also formats ASCII codes into readable strings
jsonPaths1.forEach((element) => {
  // Fills each category array with it's questions
  let category_qs = [];
  fetch(element)
    .then(function (response) {
      return response.json();
    })
    .then(function (json) {
      jsonQuestions = json;
    })
    .then(function () {
      for (let i = 1; i <= 5; i++) {
        let questionObj = {};
        let randomNum = Math.floor(Math.random() * jsonQuestions.length);
        qIndex = jsonQuestions[randomNum];
        questionObj.question = qIndex.question;
        if (!indexes.includes(randomNum)) {
          while (questionObj.question.includes("&quot;")) {
            questionObj.question = questionObj.question.replace("&quot;", "'");
          }
          while (questionObj.question.includes("&#039;")) {
            questionObj.question = questionObj.question.replace("&#039;", "'");
          }
          while (questionObj.question.includes("&ldquo;")) {
            questionObj.question = questionObj.question.replace("&ldquo;", "'");
          }

          questionObj.answer = qIndex.correct_answer;
          while (questionObj.answer.includes("&quot;")) {
            questionObj.answer = questionObj.answer.replace("&quot;", "'");
          }
          while (questionObj.answer.includes("&#039;")) {
            questionObj.answer = questionObj.answer.replace("&#039;", "'");
          }
          while (questionObj.answer.includes("&ldquo;")) {
            questionObj.answer = questionObj.answer.replace("&ldquo;", "'");
          }

          questionObj.category = qIndex.category;
          questionObj.points = i * 100;
          questionObj.column = "q column" + j;
        }

        //console.log(questionObj);
        category_qs.push(questionObj);
      }

      fillColumn(
        grid1,
        category_qs[0].column.slice(2),
        category_qs[0].category,
        category_qs
      );
      j++;
    });
});
