fetch(finalJeopardyPath)
  .then(function (response) {
    return response.json();
  })
  .then(function (json) {
    finalJeopardyQ = json[Math.floor(Math.random() * json.length)];
  })
  .then(function () {
    console.log(finalJeopardyQ);

    while (finalJeopardyQ.question.includes("&quot;")) {
      finalJeopardyQ.question = finalJeopardyQ.question.replace("&quot;", "'");
    }
    while (finalJeopardyQ.question.includes("&#039;")) {
      finalJeopardyQ.question = finalJeopardyQ.question.replace("&#039;", "'");
    }
    while (finalJeopardyQ.question.includes("&ldquo;")) {
      finalJeopardyQ.question = finalJeopardyQ.question.replace("&ldquo;", "'");
    }
    finalJeopardyQuestion.textContent = finalJeopardyQ.question;

    while (finalJeopardyQ.correct_answer.includes("&quot;")) {
      finalJeopardyQ.correct_answer = finalJeopardyQ.correct_answer.replace(
        "&quot;",
        "'"
      );
    }
    while (finalJeopardyQ.correct_answer.includes("&#039;")) {
      finalJeopardyQ.correct_answer = finalJeopardyQ.correct_answer.replace(
        "&#039;",
        "'"
      );
    }
    while (finalJeopardyQ.correct_answer.includes("&ldquo;")) {
      finalJeopardyQ.correct_answer = finalJeopardyQ.correct_answer.replace(
        "&ldquo;",
        "'"
      );
    }
    finalJeopardyCategory.textContent = finalJeopardyQ.category;
  });
