var word = {
<<<<<<< HEAD
  secretWord: "",
  secretWordUnderscore: "",
  showSecretWordUnderscore: "",
  correctLetters: [],
  wrongLetters: [],
  wordList: ['ruby'],

  setSecretWord: function(){
    this.secretWord = _.shuffle(this.wordList)[0];
    console.log(this.secretWord);
    for ( var i = 0; i < this.secretWord.length; i++ ) {
      this.secretWordUnderscore += ("_");
    }
  },

  checkLetters: function(guessedLetters){
    correctLetters = _.intersection(this.secretWord, guessedLetters);
    wrongLetters = _.reject(guessedLetters, function(letter){
      return _.contains(correctLetters, letter);
      });
    return [correctLetters, wrongLetters];
    },

  showAnswer: function(guessedLetters) {
     for ( var i = 0; i < this.secretWord.length; i++ ) {
       if (_.isEqual(this.secretWord[i], guessedLetters)) {
        showSecretWordUnderscore = this.secretWordUnderscore.split("");
        showSecretWordUnderscore[i] = guessedLetters;
        this.secretWordUnderscore = showSecretWordUnderscore.join("");
       }
     }
     return showSecretWordUnderscore;
   }
=======
  // This is an attribute of the object word.
  secretWord: "model",
  wordList: ['ruby', 'rails', 'javascript', 'array', 'hash', 'underscore', 'sinatra', 'model', 'controller', 'view', 'devise', 'authentication', 'capybara', 'jasmine', 'cache', 'sublime', 'terminal', 'system', 'twitter', 'facebook', 'function', 'google', 'amazon', 'development', 'data', 'design', 'inheritance', 'prototype', 'gist', 'github', 'agile', 'fizzbuzz', 'route', 'gem', 'deployment', 'database'],

  // START HERE: Step 1
  // Selects a random word from the word list sets the secret word
  // it will set the secretWord attribute from Line 3
  setSecretWord: function(){
    //this.secretWord = this.wordList[Math.floor(Math.random() * this.wordList.length)];
    this.secretWord = this.wordList[_.random(this.wordList.length - 1)];
  },

  // This feels pretty hard- what can we do to make it easier, or fake it for the moment?
  // How do we deal with multiple, multiple occurrances of letters (ie. google)?
  // Takes an array of letters as input and returns an array of two items:
  // 1) A string with the parts of the secret word that have been guessed correctly and an underscore for the parts that haven't
  // 2) An array of all the guessed letters that were not in the secret word. This is my 'wrongLetters' array
  checkLetters: function(guessedLetters){
    // How can I check against 'model'?
    // I have an array of guessed letters
    // I have my secret word of 'model'
    // this.secretWord; => model
    // guessedLetters; => mq 
    var correct_letters = _.intersection(this.secretWord, guessedLetters);
    var wrongLetters = [];
    for(var i = 0; i < guessedLetters.length; i++) {
      for(var n = 0; n < this.secretWord.length; n++) {
        if(guessedLetters[i] !== this.secretWord[n]) {
          wrongLetters.push(guessedLetters[i]);
        }
      }
    }
    return ['m____',wrongLetters]; 
  }
>>>>>>> upstream/master
};

var player = {
  MAX_GUESSES: 8,
  guessedLetters: [],
  win: [],

  // Takes a new letter as input and updates the game
  makeGuess: function(letter){
    guessedLetters = letter;
    return guessedLetters;
  },

  // Check if the player has won and end the game if so
  checkWin: function(wordString){
    if (_.map(this.secretWord, function(wordString) { return wordString ;}) === this.word.showAnswer); {
      return true;
    }
  },

<<<<<<< HEAD
  checkLose: function(wrongLetters){
=======
  // Check if the player has lost and end the game if so
  // Assume they've guessed [x,z, k, p, q,s,t,v,7]
  // How can I test this? Where does wrongLetters come from?
  checkLose: function(wrongLetters){
    // if(!checkWin) {
    //   wrongLetters;
    // }
>>>>>>> upstream/master
    return wrongLetters.length >= this.MAX_GUESSES;
  }
};

var game = {
  // Resets the game
  resetGame: function(){},

  // Reveals the answer to the secret word and ends the game
  giveUp: function(){},

  // Update the display with the parts of the secret word guessed, the letters guessed, and the guesses remaining
  updateDisplay: function(secretWordWithBlanks, guessedLetters, guessesLeft){}
};

window.onload = function(){
<<<<<<< HEAD
  word.setSecretWord();

  // show word placeholders
  console.log(word.secretWordUnderscore);

  // shows answer as entered with underscores
  console.log(word.showAnswer("b"));

  // makes a guess
  console.log(player.makeGuess("r"));

  // shows correctLetters
  console.log(word.checkLetters("rux")[0]);
  // shows wrongLetters
  console.log(word.checkLetters("rux")[1]);

  // shows if game won?
  console.log(player.checkWin());

  // wrongLettersArray = word.checkLetters(['m, q'][1]);
  // console.log(word.checkLetters(['m, q'][1]));


  // checks if checkLose is working
  // console.log(player.checkLose('abcdefgh'));
  // console.log(player.checkLose(wrongLettersArray));

=======
  console.log(word.secretWord);
  console.log(word.checkLetters(['m', 'q'])[1]);

  // // Created a losing scenario
  // console.log(player.checkLose(wrongLettersArray));

  // Created a not yet losing scenario
  // console.log(player.checkLose(wrongLettersArray));
>>>>>>> upstream/master
  // Start a new game
  // Add event listener to the letter input field to grab letters that are guessed
  // Add event listener to the reset button to reset the game when clicked
  // Add event listener to the give up button to give up when clicked
};