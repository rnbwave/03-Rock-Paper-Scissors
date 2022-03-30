//TODO: user chooses r,p, s
    //TODO: ask user via pop up what choice they want
    //TODO: save to a variable so we can reference later
    //TODO: EGDE CASE: user doenst pick r,p, or s
    //TODO: EGDE CASE: user leaves field blank
//TODO: computer chooses r,p,s
//TODO: determine winner, show to user
//TODO: display stats
//TODO: ask to play again

// alert("displays data");
// var promptAns = prompt("asks an open ended question");
// var answer = confirm("yes or no will be true or false");

alert("It's Rock, Paper, Scissors Gmae!!");

var rps = ["rock","paper","scissors"];
var userSco = 0;
var comSco = 0;
var result;

start();

function end() {}

function start() {
    var user = prompt("Please enter R, P, or S to signify my choice of rock, paper, or scissors");

    if (user === "R") {
        var userRPS = "rock";
    } else if (user === "P") {
        userRPS = "paper";
    } else if (user === "S") {
        userRPS = "scissors";
    } else {
        alert("Please restart this game.");
        restart();
    }

    var random = Math.floor(Math.random() * rps.length);
    var comRPS = rps[random];

    alert("you choose " + userRPS + " and computer choose " + comRPS + ".");

    if (userRPS === comRPS) {
        alert("you are tied.");
        alert(" Your score is " + userSco + " and Computer's score is " + comSco);
    } else if (userRPS == "rock") {
        if (comRPS == "paper") {
            result = "Computer Won";
            comSco++;
            alert(result + " Your score is " + userSco + " and Computer's score is " + comSco);
        } else {
            result = "User Won";
            userSco++;
            alert(result + " Your score is " + userSco + " and Computer's score is " + comSco);
        }
    } else if (userRPS == "scissors") {
        if (comRPS == "rock") {
            result = "Computer Won";
            comSco++;
            alert(result + " Your score is " + userSco + " and Computer's score is " + comSco);
        } else {
            result = "User Won";
            userSco++;
            alert(result + " Your score is " + userSco + " and Computer's score is " + comSco);
        }
    } else if (userRPS == "paper") {
        if (comRPS == "scissors") {
            result = "Computer Won";
            comSco++;
            alert(result + " Your score is " + userSco + " and Computer's score is " + comSco);
        } else {
            result = "User Won";
            userSco++;
            alert(result + " Your score is " + userSco + " and Computer's score is " + comSco);
        }
    }
    restart();

    function restart() {
        var answer = confirm("If you want to play again, press OK");
        if (answer === true) {
            start();
        } else {
            end();
        }
    }
}
