document.addEventListener("DOMContentLoaded", function () {
  const questions = document.querySelectorAll(".frame-58 .question");
  questions.forEach((question) => {
    question.addEventListener("click", function () {
      const answer = question.nextElementSibling.nextElementSibling; // Select the answer correctly
      answer.classList.toggle("show");
      answer.classList.toggle("drop-down");

      // Toggle margin-bottom for the next question
      const nextQuestion = question.parentElement.nextElementSibling;
      if (nextQuestion) {
        nextQuestion.style.marginTop = answer.classList.contains("show")
          ? "70px"
          : "0";
      }
    });
  });
});
