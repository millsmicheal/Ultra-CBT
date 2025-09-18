
  let currentIndex = 0;
  const questions = document.querySelectorAll(".question");

  function showQuestion(index) {
    questions.forEach((q, i) => {
      q.style.display = i === index ? "block" : "none";
    });
  }

  function nextQuestion() {
    if (currentIndex < questions.length - 1) {
      currentIndex++;
      showQuestion(currentIndex);
    }
  }

  function prevQuestion() {
    if (currentIndex > 0) {
      currentIndex--;
      showQuestion(currentIndex);
    }
  }