var stringPrinter = function( starterString ) {
  $('#output').html( starterString )
}

var funnySentence = function( noun, adjective, verb, adverb ) {
var sentence = "The " + adjective + " " + noun + " " + verb + " " + adverb + ".";

stringPrinter(sentence);

};
