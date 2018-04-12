var input = [
  { x: 3, y: 4 },
  { x: 12, y: 5 },
  { x: 8, y: 15 }
];
var result = input.map(obj => {
  var x = obj["x"];
  var y = obj["y"];

  z = Math.sqrt((x*x) + (y*y));
  return z;
});


console.log(result);
console.log(result[0] === 5);
console.log(result[1] === 13);
console.log(result[2] === 17);