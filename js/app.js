'use strict';

var questionCorrect = 0;
// var arrayYes = ['YES', 'Y', 'YEAH', 'TRUE', 'T'];
// var nameArray = ['TIM', 'TIMOTHY'];

// var userName = prompt('Can I catch your name first?');
// if (nameArray.includes(userName.toUpperCase())) {
//   alert('Oh cool my name is also Tim');
// } else {
//   alert('Alright ' + userName + ' let\'s get to the game, preferrably answer using yes or no.');
// }

// var guessCat = prompt('Do I like cats?').toUpperCase();
// console.log(guessCat);
// if (arrayYes.includes(guessCat)) {
//   questionCorrect++;
//   alert('Yes I really love cats');
// } else {
//   alert('You chose poorly');
// }

// var guessSeattle = prompt('Am I native Seattleite.').toUpperCase();
// if (arrayYes.includes(guessSeattle)) {
//   questionCorrect++;
//   alert('I am in fact a native Seattleite, good job');
// } else {
//   alert('All hair king of the losers - Age of Empires II, we are savage here.');
// }

// var guessLacross = prompt('Have I played Lacross?').toUpperCase();
// if (arrayYes.includes(guessLacross)) {
//   alert('You got it wrong');
// } else {
//   questionCorrect++;
//   alert('I have never, ever played Lacross, good guess');
// }

// var guessClimber = prompt('Have I ever climbed Mt Rainier?').toUpperCase();
// if (arrayYes.includes(guessClimber)) {
//   alert('You got it wrong, bucko.');
// } else {
//   questionCorrect++;
//   alert('You guessed right');
// }

// var guessDessert = prompt('Do I like dessert?').toUpperCase();
// if (arrayYes.includes(guessDessert)) {
//   alert('Wrong, I tend to prefer seconds rather than sweets');
// } else {
//   questionCorrect++;
//   alert('Correct, throw away the cake grab be another steak');
// }

// var guessLanguage = prompt('Do I prefer compiled language?').toUpperCase();
// if (arrayYes.includes(guessLanguage)) {
//   questionCorrect++;
//   alert('Java is a jam!');
// } else {
//   alert('That is wrong, I love compiled languages');
// }

// let guessGearTriesVal = 4;

// while (guessGearTriesVal !== 0) {
//   var guessGear = prompt('How many samplers and synthesizers do I own?');
//   if (guessGear <= '6') {
//     alert('It is higher');
//     guessGearTriesVal--;
//   } else if (guessGear >= '8') {
//     alert('It is lower');
//     guessGearTriesVal--;
//   } else if (guessGear === '7') {
//     alert('You guessed right');
//     questionCorrect++;
//     break;
//   }
// }

// if (guessGearTriesVal === 0) {
//   alert('You ran out of guesses, time to move on');
// }

let nationArray = ['CANADA', 'GERMANY', 'DENMARK', 'FRANCE', 'ITALY', 'IRELAND', 'AFGHANISTAN', 'KYRGYZSTAN', 'KUWAIT', 'BELGIUM', 'NETHERLANDS'];
let nationTries = 6;
while (nationTries !== 0) {
  let guessNations = prompt('Can you guess a few places I have been in my travels abroad?').toUpperCase();
  if (nationArray.includes(guessNations)) {
    questionCorrect++;
    alert('You guessed right!');
    break;
  } else {
    nationTries--;
    alert('Please try again you have ' + nationTries + ' remaining.');
  }
}
if (nationTries === 0) {
  alert('Thank you for trying, the correct answers included, Canada, Germany, Denmark, France, Italy, Ireland, Afghanistan, Kuwait, Belgium, the Netherlands, and Kyrgyzstan!');
}


if (questionCorrect >= 3) {
  alert('Congratuations you got half or more right with ' +questionCorrect+ ' out of 8');
} else {
  alert('Oof you got more than half wrong with ' +questionCorrect+ ' out of 8');
}
