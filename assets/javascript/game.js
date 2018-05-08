// alert("hello world");

$(document).ready(function() {


    
    
    var alphabet = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
    var p1Guess; 
    var pcGuess = alphabet[Math.floor(Math.random() * alphabet.length)];
    var pcGuess = pcGuess.toLowerCase();
    var lettersUsed = [];
    console.log("omg cheater: " + pcGuess);
    soFar = 0;
    guessesLeft = 10;
    wins = 0;
    loss = 0;
    
    function new_game(){

        guessesLeft = 10;
        pcGuess = 0;
        pcGuess = alphabet[Math.floor(Math.random() * alphabet.length)];
        soFar = 0;
        console.log("oh boi, here i go cheating again : " + pcGuess);
        lettersUsed = [];

    }

    function tip() {
        $("#tip").on("click", function() {
            if (pcGuess == "a" || pcGuess == "b" || pcGuess == "c" || pcGuess == "d" || pcGuess == "e" || pcGuess == "f" || pcGuess == "g" || pcGuess == "k" || pcGuess == "l" || pcGuess == "m"  ){
                $("#tip").text("I am on the first half of the alphabet");
            } else {
               $("#tip").text("I am on the second half of the alphabet");
                
            }
        });

    }
    tip();

    
    document.onkeypress = function(key_event){
        p1Guess = key_event.key;
        p1Guess = p1Guess.toLowerCase();
        soFar++;
        lettersUsed.push(p1Guess);



        if (p1Guess == pcGuess) {
            wins ++;
            guessesLeft = 10;
            alert("you have won");
            new_game();
            $("#tip").text("Get a tip");



            
        } else {
            guessesLeft --;
        }
        if (guessesLeft == 0) {
            loss ++;
            alert("you lose");
            new_game();
            $("#tip").text("Get a tip");

        }
        /* estas eran mis pruebas para ver si jalaba
        console.log("this is the losses " + loss);
        console.log("this is the wins " + wins);
        console.log("this are the guesses left " + guessesLeft);
        console.log("this are the guesses so far " + guessesSoFar);
        */


        $( "#wins" ).html("Wins: " + wins);
        $( "#loss" ).html("Losses: " + loss);
        $( "#guessesLeft" ).html("Guesses left: " + guessesLeft);
        $( "#soFar" ).html("Guesses so far: " + soFar);
        $("#lettersUsed").html("Your letters so far: " + lettersUsed);








    
    }
    
    
   
    
    
    
    
    });