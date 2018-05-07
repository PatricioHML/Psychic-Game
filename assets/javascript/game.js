// alert("hello world");

$(document).ready(function() {


    
    
    var alphabet = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
    var p1Guess; // está abajo
    var pcGuess = alphabet[Math.floor(Math.random() * alphabet.length)];
    var pcGuess = pcGuess.toLowerCase();
    console.log("omg cheater: " + pcGuess);
    soFar = 0;
    guessesLeft = 10;
    wins = 0;
    loss = 0;
    function new_game(){

        guessesLeft = 10;
        pcGuess = 0;
        pcGuess = alphabet[Math.floor(Math.random() * alphabet.length)];
        console.log("oh boi, here i go cheating again : " + pcGuess);


    }

    
    document.onkeypress = function(key_event){
        var p1Guess = key_event.key;
        var p1Guess = p1Guess.toLowerCase();
        soFar ++;

        if (p1Guess == pcGuess) {
            wins ++;
            guessesLeft = 10;
            alert("you have won");
            new_game();


            
        } else {
            guessesLeft --;
        }
        if (guessesLeft == 0) {
            loss ++;
            guessesLeft = 10;
        }
        /* estas eran mis pruebas para ver si jalaba
        console.log("this is the losses " + loss);
        console.log("this is the wins " + wins);
        console.log("this are the guesses left " + guessesLeft);
        console.log("this are the guesses so far " + guessesSoFar);
        */

        $("guessesLeft").html("Guesses left " + guessesLeft);
        $( "soFar" ).html("Guesses so far " + soFar);
        $( "wins").html("Your wins " + wins);
        $( "loss").html("Your losses " + loss);




        $( "#wins" ).html("Wins: " + wins);
        $( "#loss" ).html("Losses: " + loss);
        $( "#guessesLeft" ).html("Guesses left: " + guessesLeft);
        $( "#soFar" ).html("Guesses so far: " + soFar);








    
    }
    
    
   
    
    
    
    
    });