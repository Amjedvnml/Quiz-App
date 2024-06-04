const questions = [
    {
        question: "1.What is the capital of France?",
        answers: [
            { text: "Paris", correct: true },
            { text: "London", correct: false },
            { text: "Berlin", correct: false },
            { text: "Madrid", correct: false }
        ]
    },
    {
        question: "2.The First PM of India?",
        answers: [
            { text: "Balaganthara Tilak", correct: false },
            { text: "Mahatma Gandhi", correct: false },
            { text: "Dr.S Radhakrishnan", correct: false },
            { text: "Jawaharlal Nehru", correct: true }
        ]
    },
    {
        question: "3.Which one is not east flowing?",
        answers: [
            { text: "Kabani", correct: false },
            { text: "Mahanadi", correct: false },
            { text: "Periyar", correct: true },
            { text: "Godavari", correct: false }
        ]
    },
    {
        question: "4.Who reached southern tip of Africa in the hope of finding a new Searoute to India?",
        answers: [
            { text: "Vasco-da-Gama", correct: false },
            { text: "Columbus", correct: false },
            { text: "Amerigo", correct: false },
            { text: "Bartolomo Dias", correct: true }
        ]
    },
    {
        question: "5.Who is known as the 'Napolean of India'?",
        answers: [
            { text: "Harshavardhana", correct: false },
            { text: "Samudhragupta", correct: true },
            { text: "Chandragupta Maurya", correct: false },
            { text: "Ashoka", correct: false }
        ]
    },
    {
        question: "6.Dal Lake is situated in?",
        answers: [
            { text: "Delhi", correct: false },
            { text: "Kashmir", correct: true },
            { text: "Himachal", correct: false },
            { text: "Punjab", correct: false }
        ]
    },
    {
        question: "7.Who founded Asiatic Society of bengal?",
        answers: [
            { text: "Max Muller", correct: false },
            { text: "Lord Dalhousie", correct: false },
            { text: "William Jones", correct: false },
            { text: "Lord Bentinck", correct: true }
        ]
    },
    {
        question: "8.Kanchenjunga is situated in which state?",
        answers: [
            { text: "Himachal Pradesh", correct: false },
            { text: "Assam", correct: false },
            { text: "Sikkim", correct: true },
            { text: "West Bengal", correct: false }
        ]
    },
    {
        question: "9.Vasco-da-Gama landed at Calicut in ?",
        answers: [
            { text: "1488", correct: false },
            { text: "1498", correct: true },
            { text: "1505", correct: false },
            { text: "1495", correct: false }
        ]
    },
    {
        question: "10.Where did the Industrial Revolution started?",
        answers: [
            { text: "France", correct: false },
            { text: "Italy", correct: false },
            { text: "Great Britain", correct: true },
            { text: "America", correct: false }
        ]
    },
    {
        question: "11.Parambikkulam National Park located in ?",
        answers: [
            { text: "Palakkad", correct: true },
            { text: "Wayanad", correct: false },
            { text: "Idukki", correct: false },
            { text: "Thiruvananthapuram", correct: false }
        ]
    },
    {
        question: "12.Tolkappiyam was written by?",
        answers: [
            { text: "Kumaranashan", correct: false },
            { text: "Tolkappiyar", correct: true },
            { text: "Sattanar", correct: false },
            { text: "Senguvettan", correct: false }
        ]
    },
    {
        question: "13.Which team won 10th season of ISL?",
        answers: [
            { text: "KBFC", correct: false },
            { text: "Jamshedpur", correct: false },
            { text: "ATK Mohan Bagan", correct: true },
            { text: "Odisha", correct: false }
        ]
    },
    {
        question: "14.Who led the Atomic Mission of India?",
        answers: [
            { text: "Homi Jahangir Babha", correct: true },
            { text: "APJ Abdul Kalam", correct: false },
            { text: "Vikram Sara Bhai", correct: false },
            { text: "CV.Raman", correct: false }
        ]
    },
    {
        question: "15.'Long Walk to Freedom'is an autobiography of?",
        answers: [
            { text: "Kofi Annan", correct: false },
            { text: "John F Kennedy", correct: false },
            { text: "Abraham Lincoln", correct: true },
            { text: "Nelson Mandela", correct: false }
        ]
    },
]

const questionElement = document.getElementById('question');
const answerButtonsElement = document.getElementById('answer-buttons');
const nextButton = document.getElementById('next-btn');
const quizContainer = document.querySelector('.quiz-container'); // Add a class to the container

let currentQuestionIndex = 0;

function startQuiz() {
    currentQuestionIndex = 0;
    nextButton.innerText = 'Next';
    showQuestion(questions[currentQuestionIndex]);
    resetBackgroundColor(); // Reset the background color at the start of the quiz
}

function showQuestion(question) {
    resetState();
    questionElement.innerText = question.question;
    question.answers.forEach(answer => {
        const button = document.createElement('button');
        button.innerText = answer.text;
        button.classList.add('btn', 'border', 'border-white', 'rounded', 'p-2', 'm-2', 'text-white', 'bg-gray-800','w-[450px]');
        if (answer.correct) {
            button.dataset.correct = answer.correct;
        }
        button.addEventListener('click', selectAnswer);
        button.addEventListener('mouseenter', () => button.classList.add('bg-gray-600'));
        button.addEventListener('mouseleave', () => button.classList.remove('bg-gray-600'));
        answerButtonsElement.appendChild(button);
    });
}

function resetState() {
    nextButton.classList.add('hide');
    while (answerButtonsElement.firstChild) {
        answerButtonsElement.removeChild(answerButtonsElement.firstChild);
    }
    document.body.classList.remove('correct', 'wrong');
}

function selectAnswer(e) {
    const selectedButton = e.target;
    const correct = selectedButton.dataset.correct === "true";
    setStatusClass(selectedButton, correct);
    Array.from(answerButtonsElement.children).forEach(button => {
        setStatusClass(button, button.dataset.correct === "true");
    });
    if (questions.length > currentQuestionIndex + 1) {
        nextButton.classList.remove('hide');
    } else {
        nextButton.innerText = 'Restart';
        nextButton.classList.remove('hide');
    }
}

function setStatusClass(element, correct) {
    clearStatusClass(element);
    if (correct) {
        element.classList.add('bg-green-500');
    } else {
        element.classList.add('bg-red-500');
    }
}

function clearStatusClass(element) {
    element.classList.remove('bg-green-500');
    element.classList.remove('bg-red-500');
    element.classList.add('bg-gray-800');
}

function changeBackgroundColor() {
    const colors = ['#8f00ff'];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    document.body.style.backgroundColor = randomColor;
}

nextButton.addEventListener('click', () => {
    if (questions.length > currentQuestionIndex + 1) {
        currentQuestionIndex++;
        showQuestion(questions[currentQuestionIndex]);
    } else {
        startQuiz();
    }
    changeBackgroundColor();
});

startQuiz();