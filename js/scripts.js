var vowels = ["a", "e", "i", "o", "u"];
var consonants = ["b", "c", "d", "f", "g", "h", "j", "k", "l", "m", "n", "p", "q", "r", "s", "t", "v", "w", "x", "y", "z"];
var illegalCharacters = ["@", "#", "$", "%", "^", "&", "*", "(", ")", "+", "=", "|", "\\", "/", "~", "[", "]", "{", "}"];
var illegalInput = false;
var multiWord = false;
var stringsArray = [];



  var pigLatin = function(sentence) {
    var string = sentence
    if (string.charAt(0)=== "q" && string.charAt(1) === "u") {
      string = string.slice(2) + string.slice(0,2)
    }
    else { while (consonants.includes(string.charAt(0))) {
      string =  string.slice(1) + string.slice(0,1)
    }}
    string += "ay"
    return string
    }

  var inputTranslator = function(sentence) {
    var string = sentence.toLowerCase();
    illegalInput = false;
    multiWord = false;
    for (i=0; i < string.length; i++) {
      if (illegalCharacters.includes(string.charAt(i))) {
        illegalInput = true;
      }
      else if (string.charAt(i) === " ") {
        multiWord = true;
      }
    };
    if (illegalInput) {
      alert("bad input");
    } else if (multiWord) {
      stringsArray = string.split(" ");
      var pigArray = [];
      pigArray = stringsArray.map(function(word) {
        return pigLatin(word);
      });
      var result = pigArray.join(' ');
      return result;
    } else {
        return pigLatin(string);
    }
  };

$(document).ready(function() {
  $('form#input').submit(function(event) {
    event.preventDefault();
    var sentence = $("input#sentence").val();
    var result = inputTranslator(sentence);
    $("#result").text(result);
  });
});
