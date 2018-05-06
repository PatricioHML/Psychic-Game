// alert("hello world");

$(document).ready(function() {


var alphabet = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
var p1Guess; // está abajo
var pcGuess = alphabet[Math.floor(Math.random() * alphabet.length)];

document.onkeypress = function(key_event){
    var p1Guess = key_event.key;
    if (p1Guess == pcGuess) {
        alert("u gots it");
    } else {
        alert("u chose...poorly");
    }

}


if (pcGuess == p1Guess) {
    console.log("sup");
}

else {
    console.log("not sup");
}




});
