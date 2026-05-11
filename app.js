// Stores user's score
let userScore = 0;

// Stores system/computer score
let systemScore = 0;

// Selects all choice elements (rock, paper, scissors)
const choices = document.querySelectorAll(".choice");

// Selects message display paragraph
const msg = document.querySelector("#msg");

// Selects user score element
const userScoreID = document.querySelector("#userscore");

// Selects system score element
const systemScoreID = document.querySelector("#systemscore");

/*
    Function to generate random system choice

    Math.random() generates random decimal values:
    Example: 0.12, 0.87, 0.45

    Multiplying by 3 changes range:
    0 → 0.999  TO  0 → 2.999

    Math.floor() removes decimal values and converts
    them into whole numbers:
    0, 1, or 2

    These numbers act as array indexes:
    0 -> rock
    1 -> paper
    2 -> scissors
*/

const genSystemChoice = () => {

    const options = ["rock", "paper", "scissors"];

    const randomIdx = Math.floor(Math.random() * 3);

    return options[randomIdx];
};

/*
    Main game logic function

    Receives user's selected choice
*/

const playGame = (userChoice) => {

    console.log(`User choice = ${userChoice}`);

    // Generates random computer choice
    const systemChoice = genSystemChoice();

    console.log(`System choice = ${systemChoice}`);

    // Draw condition
    if (userChoice === systemChoice) {

        console.log("Game Draw");

        msg.innerText = "Game Draw";

        msg.style.backgroundColor = "#081b31";
    }

    // User winning conditions
    else if (

        (userChoice === "rock" && systemChoice === "scissors") ||

        (userChoice === "paper" && systemChoice === "rock") ||

        (userChoice === "scissors" && systemChoice === "paper")

    ) {

        console.log("Congratulations, You Won!!");

        msg.innerText = `Congratulations, You Won!! Your ${userChoice} beats ${systemChoice}`;

        msg.style.backgroundColor = "green";

        // Increases user score
        userScore++;

        // Updates score on webpage
        userScoreID.innerText = userScore;
    }

    // System winning condition
    else {

        console.log("Oops, System Won!!");

        msg.innerText = `Oops, You lose!! System's ${systemChoice} beats ${userChoice}`;

        msg.style.backgroundColor = "red";

        // Increases system score
        systemScore++;

        // Updates score on webpage
        systemScoreID.innerText = systemScore;
    }

    // Prints scores in console
    console.log("User Score:", userScore);

    console.log("System Score:", systemScore);
};

/*
    Adds click event listener to all choices

    forEach() loops through every choice element
*/

choices.forEach((choice) => {

    choice.addEventListener("click", () => {

        // Gets id of clicked choice
        const userChoice = choice.getAttribute("id");

        // Starts game
        playGame(userChoice);
    });

});