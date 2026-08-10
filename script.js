/* ==========================================
   SELECT HTML ELEMENTS
========================================== */

// Question Elements
const questionNumber = document.getElementById("question-number");
const questionText = document.getElementById("question");
const optionsContainer = document.getElementById("options");

// Navigation Buttons
const previousButton = document.getElementById("previous-btn");
const nextButton = document.getElementById("next-btn");
const restartButton = document.getElementById("restart-btn");

// Result Elements
const resultSection = document.getElementById("result");
const scoreText = document.getElementById("score");
const percentageText = document.getElementById("percentage");


/* ==========================================
   QUIZ CLASS
========================================== */

class Quiz {

    // Constructor
    constructor() {

        // Stores the current question index
        this.currentQuestion = 0;

        // Stores the user's answers
        this.userAnswers = new Array(questions.length).fill(null);

    }

    /* ======================================
       DISPLAY QUESTION
    ====================================== */

    showQuestion() {

        // Get current question
        const current = questions[this.currentQuestion];

        // Display question number
        questionNumber.textContent =
            `Question ${this.currentQuestion + 1} of ${questions.length}`;

        // Update Progress Bar
        const progressBar = document.getElementById("progress-bar");

        progressBar.style.width =
        `${((this.currentQuestion + 1) / questions.length) * 100}%`;

        // Display question text
        questionText.textContent = current.question;

        // Clear previous options
        optionsContainer.innerHTML = "";

        // Loop through all answer options
        current.options.forEach((option, index) => {

            // Create label
            const label = document.createElement("label");

            label.className = "option-btn";

            // Create radio input
            const radio = document.createElement("input");

            radio.type = "radio";

            radio.name = "answer";

            radio.value = option;

            radio.style.marginRight = "12px";

            // Restore previous answer if available
            if (this.userAnswers[this.currentQuestion] === option) {

                radio.checked = true;

                label.classList.add("selected");

            }

            // Save selected answer
            radio.addEventListener("change", () => {

                this.userAnswers[this.currentQuestion] = option;

                document
                    .querySelectorAll(".option-btn")
                    .forEach(btn => btn.classList.remove("selected"));

                label.classList.add("selected");

            });

            // Add radio button
            label.appendChild(radio);

            // Add option text
            label.append(option);

            // Display option
            optionsContainer.appendChild(label);

        });

        // Disable Previous button on first question
        previousButton.disabled = this.currentQuestion === 0;

    }

    /* ======================================
       PREVIOUS QUESTION
    ====================================== */

    previousQuestion() {

        if (this.currentQuestion > 0) {

            this.currentQuestion--;

            this.showQuestion();

        }

    }

    /* ======================================
       NEXT QUESTION
    ====================================== */

    nextQuestion() {

        // Ensure an answer has been selected
        if (this.userAnswers[this.currentQuestion] === null) {

            alert("Please select an answer before continuing.");

            return;

        }

        // Move to next question
        if (this.currentQuestion < questions.length - 1) {

            this.currentQuestion++;

            this.showQuestion();

        }

        // Show result if quiz is complete
        else {

            this.showResult();

        }

    }

    /* ======================================
       DISPLAY RESULT
    ====================================== */

    showResult() {

        // Hide quiz elements
        questionNumber.style.display = "none";

        questionText.style.display = "none";

        optionsContainer.style.display = "none";

        previousButton.style.display = "none";

        nextButton.style.display = "none";

        // Calculate score
        let score = 0;

        for (let i = 0; i < questions.length; i++) {

            if (this.userAnswers[i] === questions[i].answer) {

                score++;

            }

        }

        // Calculate percentage
        const percentage = ((score / questions.length) * 100).toFixed(0);

        // Display results
        scoreText.textContent = `Final Score: ${score} / ${questions.length}`;

        percentageText.textContent = `Percentage: ${percentage}%`;

        // Show result section
        resultSection.classList.remove("hidden");

    }

    /* ======================================
       RESTART QUIZ
    ====================================== */

    restartQuiz() {

        // Reset values
        this.currentQuestion = 0;

        this.userAnswers = new Array(questions.length).fill(null);

        // Hide result
        resultSection.classList.add("hidden");

        // Show quiz elements
        questionNumber.style.display = "block";

        questionText.style.display = "block";

        optionsContainer.style.display = "flex";

        previousButton.style.display = "inline-block";

        nextButton.style.display = "inline-block";

        // Display first question
        this.showQuestion();

    }

}

/* ==========================================
   CREATE QUIZ OBJECT
========================================== */

const quiz = new Quiz();

/* ==========================================
   START APPLICATION
========================================== */

// Display first question
quiz.showQuestion();

// Previous Button
previousButton.addEventListener("click", () => {

    quiz.previousQuestion();

});

// Next Button
nextButton.addEventListener("click", () => {

    quiz.nextQuestion();

});

// Restart Button
restartButton.addEventListener("click", () => {

    quiz.restartQuiz();

});