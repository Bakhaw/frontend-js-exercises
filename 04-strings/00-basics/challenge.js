module.exports.formLetter = function(firstName, senderName, message) {
  return "Hello " + firstName + "," + "\n\n" + message + "\n\n" + "Sincerely," + "\n" + senderName
};

module.exports.sliceItAndCombineIt = function(bigString, startA, endA, startB, endB) {
  return bigString.slice(startA, endA) + bigString.slice(startB, endB);
};

module.exports.findFirstMatch = function(text, searchString) {

};

module.exports.findLastMatch = function(text, searchString) {

};

module.exports.substringBetweenMatches = function(text, searchString) {

};