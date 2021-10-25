function createDiv(obj) {
  let div = document.createElement("div");
  let divQuestion = obj.question;
  div.textContent = obj.points;
  div.className = obj.column;
  div.addEventListener("click", function () {
    questionText.textContent = divQuestion;
    console.log(obj.answer);
  });
  return div;
}

let jsonQuestions = [];

let jsonPaths1 = [
  "/json/animals.json",
  "/json/celebrities.json",
  "/json/entertainment_books.json",
  "/json/general_knowledge.json",
  "/json/geography.json",
  "/json/history.json",
];
let jsonPaths2 = [
  "/json/entertainment_film.json",
  "/json/mythology.json",
  "/json/politics.json",
  "/json/science_computers.json",
  "/json/sports.json",
  "/json/vehicles.json",
];

let finalJeopardyPath = "/json/final_jeopardy.json";

let qIndex = "";

let finalJeopardyQ = "";

let currentQuestion = ""

function fillColumn(grid, column, category, questions) {
  let header = document.createElement("div");
  header.className = "column";
  header.id = column;
  header.textContent = category;

  grid.appendChild(header);

  questions.forEach((element) => {
    let anchor = document.createElement("a");
    anchor.href = "#lightbox";
    grid.appendChild(anchor);
    anchor.appendChild(createDiv(element));

    anchor.addEventListener("click", function() {
        lightBox.style.display = "block";
        currentQuestion = element;
        console.log(currentQuestion);
    })
  });
}
