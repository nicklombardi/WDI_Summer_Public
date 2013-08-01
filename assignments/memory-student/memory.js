//Global Variables

//Time that increments in the game
var timerId = 0,
    time = 0;

//arrays with letters in them.
var lettersSmall  = ['A', 'A', 'B', 'B', 'C', 'C', 'D', 'D', 'E', 'E'],
    lettersMedium = ['A', 'A', 'B', 'B', 'C', 'C', 'D', 'D', 'E', 'E',
                     'F', 'F', 'G', 'G', 'H', 'H', 'I', 'I', 'J', 'J'],
    lettersLarge  = ['A', 'A', 'B', 'B', 'C', 'C', 'D', 'D', 'E', 'E',
                     'F', 'F', 'G', 'G', 'H', 'H', 'I', 'I', 'J', 'J',
                     'K', 'K', 'L', 'L', 'M', 'M', 'N', 'N', 'O', 'O',
                     'P', 'P', 'Q', 'Q', 'R', 'R', 'S', 'S', 'T', 'T'];

//array of letters. will change based on size of game.
var letters;

//last card/letter you clicked on. comes from the letter divs.
var lastId = '',
    lastCard = '';

//Code In Here gets executed once code is ready. ie hovering, clicking events//
$(function() {

  $('#small').click(startGame);

});



// Initializes the game and creates the board
function startGame() {
  _.each(lettersSmall, function (val, i) {
    lastId = i;
    letters = val;
    $('#game').append('<div id='+ i + '><span>' + letters +'</span></div');
    $('#game div').addClass('column');
    $('#game span').addClass('hide');

      console.log(lastId + letters);

  }),

    $('.column').click(cardClick);
}

// Flips a card and checks for a match
function cardClick() {
  // _.each(lastId, alert)
  var thisId = $(this).attr("id");
  console.log(thisId);

  var guessOne = $('#game span:nth('+thisId+')').addClass('show');
  var guessTwo = $('#game span:nth('+thisId+')').addClass('show');

  console.log(guessOne);
  console.log(guessTwo);


  if (guessOne.text() === guessTwo.text());





}

//Add hoverclass to cards.
function hovering() {

}

//Start the timer
function startTime() {

}

//Increment the timer and display the new time
function updateTime() {

}