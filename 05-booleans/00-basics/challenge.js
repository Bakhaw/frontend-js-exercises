module.exports.equalStrings = function(stringOne, stringTwo) {
return stringOne == stringTwo
};

module.exports.notEqual = function(one, two) {
return one !== two
};

module.exports.inBetween = function(lower, middle, upper) {
if (middle > lower && middle < upper) return true;
return false
};

module.exports.outsideRanges = function(number) {
  // if (number == 10 || number == 20 || number == 75) {return false}
  // else if (number > 1 && number < 6) {
  //   return false
  // }
  // else if (number > 10 && number < 20) {
  //   return false
  // }
  // else if (number > 42 && number < 75) {
  //   return false
  // }
  // else {
  //   return true
  // }

  var inRange = (10 <= number && number <= 20)
                || (42 < number && number <= 75)
                || (1 < number && number < 6);
                return !inRange;
};

module.exports.nameAndPrice = function(name, price) {
  return (name === "NYTimes" || name === "LATimes") && (price >= 1)
};
