let j = 1;
let indexes = [];

answerButton.addEventListener("click", function () {
  if (
    answerInput.value.toUpperCase() === currentQuestion.answer.toUpperCase()
  ) {
    console.log("correct");
  } else {
    console.log("wrong");
  }
  lightBox.style.display = "none"
  answerInput.value = "";

});

jsonPaths2.forEach((element) => {
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

        console.log(questionObj.question);
        category_qs.push(questionObj);
      }
      fillColumn(
        grid2,
        category_qs[0].column.slice(2),
        category_qs[0].category,
        category_qs
      );
      j++;
    });
});
