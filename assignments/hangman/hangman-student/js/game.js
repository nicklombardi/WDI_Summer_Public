var word = {
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

  checkLose: function(wrongLetters){
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

  // Start a new game
  // Add event listener to the letter input field to grab letters that are guessed
  // Add event listener to the reset button to reset the game when clicked
  // Add event listener to the give up button to give up when clicked
};