//DOM variables to feed the results back to the front-end
var winsElement = document.getElementById ("wins-count");
var lossesElement = document.getElementById ("losses-count");
var guessesLeftElement = document.getElementById ("guesses-left");
var actualGuessesElement = document.getElementById ("actual-guesses");

//starting variables of zero wins and losses at the start of the game
var wins = 0;
var losses = 0;
//each round of the game starts off with 10 guesses available
var guesses = 10;
//variable for storing the actual letter guesses
var guessarray = [];

//computer guesses a random lowercase letter
ComputerGuess = function () {
    //the letter variable starts as nothing to begin with
    var ComputerGuessLetter = "";
    //the possible variable is the whole lowercase alphabet
    var possible = "abcdefghijklmnopqrstuvwxyz";
    //sets ComputerGuessLetter as a randomly selected letter from the Possible range
    ComputerGuessLetter += possible.charAt(Math.floor(Math.random() * possible.length));
    //returns the result for any call to the function
    return ComputerGuessLetter;
}

//sets the inital computer guess
var cguess = ComputerGuess();

//any keystroke starts the game
document.onkeyup = function(event) {

        // sets variable of letter upon any keystroke and makes lowercase if entered otherwise
        var letter = event.key.toLowerCase();
        // sets a guess array variable and as empty
        

    //keeps the game going until there are no more guesses
    if (guesses > 0) {

        // A Win is determined by the following conditional wherein a user guess ("letter") is equal to the computer guess (randomly determined by ComputerGuess function above).
        if (letter === cguess) {
            //alerts player that they won
            alert("YOU WIN! The computer's guess was: " + cguess);
            //increases the win count by 1
            wins++;
        }
        // else it declares the computer the winner
        else {
            //sends the letters guessed to the array of guessed letters
            guessarray.push(letter);
            //deducts a guess from the count; if it reaches 0, see 
            guesses--;
        }
    }   

    //end of the round of the game if guesses gets to 0
    if (guesses === 0) {
        //alerts player that they lost
        alert("YOU LOSE! The computer's guess was: " + cguess);
        //turns the losses counter when the guesses total 0
        losses++;
        //alerts of new game, and then resets guesses
        alert ("New Game!");
        //resets guess count to 10 and clears out the previous letters guessed
        guesses = 10;
        guessarray = [];
        //generates a new computer guess
        cguess = ComputerGuess();
    }  

    //feeds the wins count to the html page
    winsElement.textContent = wins;
    //feeds the guess count to the html page
    guessesLeftElement.textContent = guesses;
    //feeds the loss count to the html page
    lossesElement.textContent = losses;
    //feeds the letters guessed to the html page
    actualGuessesElement.textContent = guessarray;
}