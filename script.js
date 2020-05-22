function computerPlay() {
    const options = ["rock", "paper", "scissors"];
    return options[randomNum(3)];
}

function randomNum(upperLimit) {
    return Math.floor(Math.random()*upperLimit);
}

function humanPlay() {
    return promptHuman();
}

function promptHuman() {
    return check(prompt("Please choose rock, paper or scissors...").toLowerCase());
    // this needs altering to return differently!
}

function check(choice) {
    if (choice == "rock") {
        return choice;
    } else if (choice == "paper") {
        return choice;
    } else if (choice == "scissors") {
        return choice;
    } else {
        return promptHuman();
    }
}


function calculateWinner(choice1, choice2) {
    const combo = [choice1, choice2];
    if (same(combo) == true) {
        return "draw";
    } else if (combo[0] == "rock" && combo[1] == "paper") {
        return "computer";
    } else if (combo[0] == "rock" && combo[1] == "scissors") {
        return "human";
    } else if (combo[0] == "paper" && combo[1] == "rock") {
        return "human";
    } else if (combo[0] == "paper" && combo[1] == "scissors") {
        return "computer";
    } else if (combo[0] == "scissors" && combo[1] == "rock") {
        return "computer";
    } else if (combo[0] == "scissors" && combo[1] == "paper") {
        return "human";
    }
}

function same(arr) {
    if (arr[0] == arr[1]) {
        return true;
    } else {
        return false;
    }
}


function mainGameplay() {
    const human = humanPlay();
    const computer = computerPlay();
    if (prompt(`Winner: ${calculateWinner(human, computer)}. Play again? 'y' for yes 'return' for no`) == "y") {
        mainGameplay();
    }
}

mainGameplay();
