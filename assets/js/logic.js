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
  
    