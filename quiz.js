let questions = [
    { question: "What’s my favorite color?", correct: "purple", options: ["Purple", "Red", "Blue"] },
    { question: "What’s my favorite food?", correct: "sweets", options: ["Sweets", "Fruits", "Chips"] },
    { question: "When is my birthday?", correct: "july 17, 2008", options: ["July 17, 2008", "May 17, 2007", "July 29, 2007"] },
    { question: "What’s my favorite animal?", correct: "both", options: ["Cat", "Dog", "Both"] },
    { question: "What’s my favorite word?", correct: "tite", options: ["Burat", "Tite", "Ulol"] },
    { question: "What's my always response when being complimented?", correct: "ediwow", options: ["Thank you", "Noo, I'm not", "Ediwow"] },
    { question: "What's my favorite flower?", correct: "lavender", options: ["Sunflower", "Roses", "Lavender"] },
    { question: "What's my Love language?", correct: "Act of Service", options: ["Physical Touch", " Act of Service", "Quality Time"]}
];

let currentQuestion = 0;
let score = 0;

function displayQuestion() {
    let questionElement = document.getElementById('question');
    let optionsElement = document.getElementById('options');
    questionElement.textContent = questions[currentQuestion].question;
    optionsElement.innerHTML = '';
    questions[currentQuestion].options.forEach(option => {
        let button = document.createElement('button');
        button.textContent = option;
        button.onclick = () => checkAnswer(option.toLowerCase());
        optionsElement.appendChild(button);
    });
    updateProgress();
}

function checkAnswer(answer) {
    if (answer.toLowerCase() === questions[currentQuestion].correct) {
        document.getElementById('quizResult').innerText = 'Correct! 🎉';
        document.getElementById('correctSound').play();
        score++;
    } else {
        document.getElementById('quizResult').innerText = 'Oops! Try again. 😅';
        document.getElementById('wrongSound').play();
    }
    updateScore();
}

function nextQuestion() {
    currentQuestion++;
    if (currentQuestion < questions.length) {
        displayQuestion();
        document.getElementById('quizResult').innerText = '';
    } else {
        document.getElementById('question').innerText = 'Quiz completed!';
        document.getElementById('options').innerHTML = '';
        document.getElementById('quizResult').innerText = '';
        document.getElementById('progress').innerText = '';
    }
}

function updateProgress() {
    document.getElementById('progress').innerText = `Question ${currentQuestion + 1} of ${questions.length}`;
}

function updateScore() {
    document.getElementById('score').innerText = `Score: ${score}`;
}

window.onload = displayQuestion;