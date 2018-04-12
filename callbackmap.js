var words = ["ground", "control", "to", "major", "tom"];


function map(words, getArray) {
  var result = [];

  words.forEach((element) => {
    result.push(getArray(element));
  });

  return result;
}

function getLength(word) {
  return word.length;
}


function getUcase(word) {
  return word.toUpperCase();
}

function getLcase(word) {
  return word.split('').reverse().join('');
}


console.log(map(words, getLength));
console.log(map(words, getUcase));
console.log(map(words, getLcase));