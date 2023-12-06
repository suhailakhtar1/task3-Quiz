const quizData = [
    {
      question: "What is the capital of France?",
      options: ["Paris", "Berlin", "London", "Madrid"],
      answer: "Paris"
    },
    {
      question: "What is 2 + 2?",
      options: ["3", "4", "5", "6"],
      answer: "4"
    },
    // Add more questions here...
  ];
  
  const questionContainer = document.getElementById('question-container');
  const submitButton = document.getElementById('submit-btn');
  const resultContainer = document.getElementById('result');
  
  let currentQuestion = 0;
  let score = 0;
  
  function showQuestion() {
    const currentQuizData = quizData[currentQuestion];
    questionContainer.innerHTML = `<p>${currentQuizData.question}</p>
      <ul>${currentQuizData.options.map(option => `<li><input type="radio" name="answer" value="${option}">${option}</li>`).join('')}</ul>`;
  }
  
  function showResult() {
    resultContainer.style.display = 'block';
    resultContainer.innerHTML = `You scored ${score} out of ${quizData.length}`;
  }
  
  showQuestion();
  
  submitButton.addEventListener('click', () => {
    const answer = document.querySelector('input[name="answer"]:checked').value;
    if (answer === quizData[currentQuestion].answer) {
      score++;
    }
  
    currentQuestion++;
  
    if (currentQuestion < quizData.length) {
      showQuestion();
    } else {
      showResult();
    }
  });
  