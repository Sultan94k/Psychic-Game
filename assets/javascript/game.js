alert('You have 10 guess. Guess 1-10');

var alphabet = ["a", "b","c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "y", "z"];
var compIndex = Math.floor(Math.random() * alphabet.length);
console.log("compIndex" + compIndex);
var compChoice = alphabet[compIndex];
console.log("secret answer:" + compChoice);

document.onkeyup = function(event){
    var letter = event.key.toLocaleLowerCase();
    console.log(letter);
    if (letter === compChoice){
        alert("You win!");
    } else{
        alert("You Lost!");
    }
}

// for (let i=0; i<10; i++) {
// if (answer == guess) {
//     alert('You guessed correctly');
//     break;
// }else{
//     guess=prompt("Sorry Try Again");
//     //break;
// }
// }