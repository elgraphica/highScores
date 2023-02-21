// Define the quiz questions as an array of objects
const quizQuestions = [
    {
      question: "What is the capital of France?",
      choices: ["Paris", "London", "Madrid", "Rome"],
      answer: "Paris"
    },
    {
      question: "What is the largest planet in our solar system?",
      choices: ["Mars", "Jupiter", "Venus", "Saturn"],
      answer: "Jupiter"
    },
    {
      question: "What is the largest mammal in the world?",
      choices: ["Elephant", "Whale", "Giraffe", "Hippopotamus"],
      answer: "Whale"
    },
    {
        question: "Which planet in our solar system is closest to the sun??",
        choices: ["Mars", "Earth", "Mercury", "Venus"],
        answer: "Mercury"
      },
      {
        question: "How many continents are there on Earth?",
        choices: ["6", "7", "8", "9"],
        answer: "7"
      },
      {
        question: "What is the name of the largest rainforest in the world?",
        choices: ["Amazon Rainforest", "Congo Rainforest", "Daintree Rainforest", "Sinharaja Forest Reserve"],
        answer: "Amazon Rainforest"
      }
  ];
  
  // Set the initial values of the quiz timer and score
  let timeLeft = 60;
  let score = 0;
  
  // Start the quiz function
  function startQuiz() {
    // Hide the start screen and show the question screen
    document.getElementById("start-screen").classList.add("hide");
    document.getElementById("questions").classList.remove("hide");
  
    // Start the timer
    const timer = setInterval(function() {
      timeLeft--;
      document.getElementById("time").textContent = timeLeft;
      if (timeLeft <= 0) {
        clearInterval(timer);
        endQuiz();
      }
    }, 1000);
  
    // Initial question index to 0
let currentQuestionIndex = 0;
  
// Define the function to load the current question
function loadQuestion() {
  const currentQuestion = quizQuestions[currentQuestionIndex];

  // Display the current question
  document.getElementById("question-title").textContent = currentQuestion.question;

  // Display the answer choices for the current question
  const choicesContainer = document.getElementById("choices");
  choicesContainer.innerHTML = "";
  for (let i = 0; i < currentQuestion.choices.length; i++) {
    const choice = currentQuestion.choices[i];
    const choiceButton = document.createElement("button");
    choiceButton.textContent = choice;
    choiceButton.addEventListener("click", function() {
      if (choice === currentQuestion.answer) {
        // If the answer is correct, add 10 points to the score and load the next question
        score += 10;
        currentQuestionIndex++;
        if (currentQuestionIndex < quizQuestions.length) {
          loadQuestion();
        } else {
          // If all questions have been answered, end the quiz
          endQuiz();
        }
      } else {
        // If the answer is incorrect, subtract 10 seconds from the timer and load the next question
        timeLeft -= 10;
        currentQuestionIndex++;
        if (currentQuestionIndex < quizQuestions.length) {
          loadQuestion();
        } else {
          // If all questions have been answered, end the quiz
          endQuiz();
        }
      }
    });
    choicesContainer.appendChild(choiceButton);
  }
}

// Load the first question
loadQuestion();
}
// Define the function to end the quiz
function endQuiz() {
    // Hide the question screen and show the end screen
    document.getElementById("questions").classList.add("hide");
    document.getElementById("end-screen").classList.remove("hide");
    
    // Display the final score
    document.getElementById("final-score").textContent = score;
    }
    
    // Attach the startQuiz function to the start button
    document.getElementById("start").addEventListener("click", startQuiz);

    // Save the user's initials and score
document.getElementById("submit").addEventListener("click", function() {
    const initialsInput = document.getElementById("initials");
    const initials = initialsInput.value.trim();
    if (initials) {
      const highScores = JSON.parse(localStorage.getItem("highscores") || "[]");
      highScores.push({ initials, score });
      localStorage.setItem("highscores", JSON.stringify(highScores));
      initialsInput.value = "";
      window.location.href = "highscores.html";
    }
  });
  

    