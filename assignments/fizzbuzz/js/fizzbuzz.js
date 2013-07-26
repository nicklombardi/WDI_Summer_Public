var list = _.range(1,101);

var fizzBuzzList = _.map(list, function(number) {
  if (number % 3 ===0 && number % 5 === 0) {
    return ("fizzbuzz");
  } else if (number % 3 === 0 ){
    return ("fizz");
  } else if (number % 5 === 0 ){
    return ("buzz");
  } else {
    return (number);
  }
});

