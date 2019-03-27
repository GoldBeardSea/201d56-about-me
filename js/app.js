'use strict';

var questionCorrect = 0;
var arrayYes = ['YES', 'Y', 'YEAH', 'TRUE', 'T'];
var nameArray = ['TIM', 'TIMOTHY'];

var userName = prompt('Can I catch your name first?');
if (nameArray.includes(userName.toUpperCase())) {
  alert('Oh cool my name is also Tim');
} else {
  alert('Alright ' + userName + ' let\'s get to the game, preferrably answer using yes or no.');
}

var guessCat = prompt('Do I like cats?').toUpperCase();
console.log(guessCat);
if (arrayYes.includes(guessCat)) {
  questionCorrect++;
  alert('Yes I really love cats');
} else {
  alert('You chose poorly');
}

var guessSeattle = prompt('Am I native Seattleite.').toUpperCase();
if (arrayYes.includes(guessSeattle)) {
  questionCorrect++;
  alert('I am in fact a native Seattleite, good job');
} else {
  alert('All hair king of the losers - Age of Empires II, we are savage here.');
}

var guessLacross = prompt('Have I played Lacross?').toUpperCase();
if (arrayYes.includes(guessLacross)) {
  alert('You got it wrong');
} else {
  questionCorrect++;
  alert('I have never, ever played Lacross, good guess');
}

var guessClimber = prompt('Have I ever climbed Mt Rainier?').toUpperCase();
if (arrayYes.includes(guessClimber)) {
  alert('You got it wrong, bucko.');
} else {
  questionCorrect++;
  alert('You guessed right');
}

var guessDessert = prompt('Do I like dessert?').toUpperCase();
if (arrayYes.includes(guessDessert)) {
  alert('Wrong, I tend to prefer seconds rather than sweets');
} else {
  questionCorrect++;
  alert('Correct, throw away the cake grab be another steak');
}

var guessLanguage = prompt('Do I prefer compiled language?').toUpperCase();
if (arrayYes.includes(guessLanguage)) {
  questionCorrect++;
  alert('Java is a jam!');
} else {
  alert('That is wrong, I love compiled languages');
}

if (questionCorrect >= 3) {
  alert('Congratuations you got half or more right with ' +questionCorrect+ ' out of 6');
} else {
  alert('Oof you got more than half wrong with ' +questionCorrect+ ' out of 6');
}
