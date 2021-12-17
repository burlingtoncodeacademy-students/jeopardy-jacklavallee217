// Create individual div based on generated question, adds all data and eventlisteners
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

// Set of questions pertaining to a categories json questions
let jsonQuestions = [];

// Round 1 questions and categories
let jsonPaths1 = [
  "/json/animals.json",
  "/json/celebrities.json",
  "/json/entertainment_books.json",
  "/json/general_knowledge.json",
  "/json/geography.json",
  "/json/history.json",
]

// Round 2 questions and categories
let jsonPaths2 = [
  "/json/entertainment_film.json",
  "/json/mythology.json",
  "/json/politics.json",
  "/json/science_computers.json",
  "/json/sports.json",
  "/json/vehicles.json",
]

// Final jeopardy json file
let finalJeopardyPath = "/json/final_jeopardy.json";

// question index variable
let qIndex = "";

// final jeopardy question
let finalJeopardyQ = "";

// Selected question data
let currentQuestion = ""

// Fills an entire category of questions for each Jeopardy
  // @grid - grid for either round one or two
  // @column - the number of the column on the grid i.e "column1"
  // @category - title of the column's topic
  // @questions - 5 questions for the category
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
        //console.log(currentQuestion);
    })
  });
}
