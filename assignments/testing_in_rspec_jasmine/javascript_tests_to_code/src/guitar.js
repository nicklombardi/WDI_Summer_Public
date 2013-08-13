if (typeof Object.create !== 'function') {
	Object.create = function (o) {
		var F = function () {};
		F.prototype = o;
		return new F();
	};
}

var guitar = {
<<<<<<< HEAD

  name: "Fender Esquire",
  volume: 5,
  strings: 6,

  setName: function(name) {
    this.name = name;
  },

  numberOfStrings: 6,
  breakString: function() {
    this.numberOfStrings -= 1;
  },

  playRock: function() {
    if (this.numberOfStrings === 6) {
      this.volume = 11;
    } else if (this.numberOfStrings === 5) {
      this.volume = 8;
    } else if (this.numberOfStrings === 4) {
      this.volume = 6;
    } else if (this.numberOfStrings === 3) {
      this.volume = 4;
    } else if (this.numberOfStrings === 2) {
      this.volume = 3;
    } else if (this.numberOfStrings === 1) {
      this.volume = 1;
    } else {
      this.volume = 0;
    }
  },

  restring: function() {
    this.numberOfStrings = 6;
    this.volume = 5;
  },

  playBasicRhythm: function() {
    return "jug jigga jug jigga jug";
  },

  playHighStrings: function() {
    return "meedley meedley meedley meedley meedley meedley meedley meedley meedley meedley meedley meedley MEEEEEEEEEEEEEEEE. \'And the dragon comes in the NIIIiiiiIIIiiiiIIIIIIIIiiiiiiiiiiiIIIIIIIIiiiIIGGHH\'";
  }

=======
	name: "Fender Esquire",
	numberOfStrings: 6,
	volume: 5,
	setName: function(name) {
		this.name = name;
	},
	breakString: function() {
		if(this.numberOfStrings){
			this.numberOfStrings -= 1;
		};
		if(this.numberOfStrings === 0) {
			this.volume = 0;
		};
	},
	playRock: function() {
		if(this.numberOfStrings > 0) {
			this.volume = 11;
		}	
	},
	restring: function() {
		this.numberOfStrings = 6;
		this.volume = 5;
	},
	playBasicRhythm: function() {
		return "jug jigga jug jigga jug";
	},
	playHighStrings: function() {
		return "meedley meedley meedley meedley meedley meedley meedley meedley meedley meedley meedley meedley MEEEEEEEEEEEEEEEE. \'And the dragon comes in the NIIIiiiiIIIiiiiIIIIIIIIiiiiiiiiiiiIIIIIIIIiiiIIGGHH\'";
	}
>>>>>>> upstream/master
};