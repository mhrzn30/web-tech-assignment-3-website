function calculateQuizScore() {
  let score = 0;
  let answers = document.querySelectorAll('input[type="radio"]:checked');

  answers.forEach((answer) => {
    score += parseInt(answer.value);
  });

  let result = document.getElementById("result");
  if (score <= 5) {
    result.textContent =
      "Mild stress levels. Keep monitoring your mental health.";
  } else if (score <= 10) {
    result.textContent =
      "Moderate stress levels. Consider speaking to a professional.";
  } else {
    result.textContent = "High stress levels. Immediate action is advised.";
  }
}
