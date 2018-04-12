/*
//Traditional Way of Solution works only for callback methods with # of parameters 2 or 3
//what about any number of parameters?
var wrapLog = function (callback, name) {

  //Traditional Way
  if(name == "area") {
    return function(x, y) {
      console.log(`${name}(${x}, ${y}) => ${callback(x, y)}`);
    }
  } else if (name == "volume") {
    return function(x, y, z) {
      console.log(`${name}(${x}, ${y}, ${z}) => ${callback(x, y, z)}`);
    }
  }
};
*/

var wrapLog = function (callback, name) {

   /* your code here */
  //arguments is the builtin object representing arguments of the function
  //each argument can be accessed like array however having only length property

  return function(...args) {
      //console.log(name, "(", arguments[0], ",", arguments[1], ",", arguments[2], ") => ", callback(arguments));

      var resultStr = "(";
      for(var i = 0; i < args.length; i++) {
        resultStr += args[i] + ",";
      }
      resultStr = resultStr.substring(0,resultStr.length-1);
      resultStr += ") => ";

      console.log(name + resultStr,callback(...args));
    }
};


var area = function (x, y) {
  //.log(name, "(", x, ",", y, ") => ", x*y);
  return x * y;
};
var logArea = wrapLog(area, "area");

logArea(5, 3); // area(5, 3) => 15
logArea(3, 2); // area(3, 2) => 6

var volume = function (x, y, z) {
  //console.log(name, "(", x, ",", y, ",", z, ") => ", x*y);
  return x * y * z;
};
var logVolume = wrapLog(volume, "volume");

logVolume(5, 3, 2); // volume(5, 3, 2) => 30
logVolume(3, 2, 4); // volume(3, 2, 4) => 24