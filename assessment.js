// assessment.js
const categories = {
  anxiety: [
    "How often do you feel anxious?",
    "Do you often feel nervous?",
    "Are you having difficulty sleeping due to anxiety?",
    "Do you feel overwhelmed by your anxiety?",
    "Is your anxiety affecting your daily life?",
  ],
  depression: [
    "How often do you feel sad or hopeless?",
    "Do you find it hard to enjoy activities?",
    "Are you experiencing changes in appetite or weight?",
    "Do you have trouble concentrating on tasks?",
    "Do you feel fatigued without physical exertion?",
  ],
  mindfulness: [
    "How aware are you of your thoughts and feelings?",
    "Do you practice mindfulness in daily activities?",
    "How often do you feel present in the moment?",
    "Do you regularly practice meditation?",
    "How often do you respond rather than react?",
  ],
};

const categorySelect = document.getElementById("categorySelect");
const assessmentProgress = document.getElementById("assessmentProgress");
const assessmentQuestion = document.getElementById("assessmentQuestion");
const assessmentResults = document.getElementById("assessmentResults");
const questionTitle = document.getElementById("questionTitle");
const answerSelect = document.getElementById("answerSelect");
const currentQuestionSpan = document.getElementById("currentQuestion");
const totalQuestionsSpan = document.getElementById("totalQuestions");
const progressElement = document.getElementById("progress");
const nextButton = document.getElementById("nextButton");
const resultText = document.getElementById("resultText");

let currentCategory = "";
let currentQuestionIndex = 0;
let answers = [];

categorySelect.addEventListener("change", function () {
  currentCategory = categorySelect.value;
  if (currentCategory) {
    resetAssessment();
    assessmentProgress.style.display = "block";
    assessmentQuestion.style.display = "block";
    showQuestion();
  } else {
    assessmentProgress.style.display = "none";
    assessmentQuestion.style.display = "none";
    assessmentResults.style.display = "none";
  }
});

answerSelect.addEventListener("change", function () {
  nextButton.disabled = answerSelect.value === "";
});

nextButton.addEventListener("click", function () {
  answers.push(answerSelect.value);
  currentQuestionIndex++;
  if (currentQuestionIndex < categories[currentCategory].length) {
    showQuestion();
  } else {
    processResults();
  }
});

function showQuestion() {
  const totalQuestions = categories[currentCategory].length;
  questionTitle.textContent = categories[currentCategory][currentQuestionIndex];
  currentQuestionSpan.textContent = currentQuestionIndex + 1;
  totalQuestionsSpan.textContent = totalQuestions;

  const progressPercent = ((currentQuestionIndex + 1) / totalQuestions) * 100;
  progressElement.style.width = `${progressPercent}%`;

  answerSelect.value = "";
  nextButton.disabled = true;
}

function processResults() {
  assessmentQuestion.style.display = "none";
  assessmentResults.style.display = "block";
  const score = answers.reduce((total, answer) => {
    switch (answer) {
      case "rarely":
        return total + 1;
      case "sometimes":
        return total + 2;
      case "often":
        return total + 3;
      case "always":
        return total + 4;
      default:
        return total;
    }
  }, 0);

  if (score < 10) {
    resultText.textContent = "You seem to have healthy mental health.";
  } else if (score < 15) {
    resultText.textContent =
      "There might be mild concerns. Monitor your wellbeing.";
  } else {
    resultText.textContent =
      "Consider seeking help from a mental health professional.";
  }
}

function resetAssessment() {
  currentQuestionIndex = 0;
  answers = [];
  assessmentResults.style.display = "none";
  progressElement.style.width = "0";
}
