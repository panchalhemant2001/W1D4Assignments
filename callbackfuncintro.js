// The second argument/parameter is expected to be a function
function findWaldo(arr, found) {
   //Implementing forEach

  /*
  //way 1
  arr.forEach(function(element, i) {
    if (element === "Waldo") {
      found(i));   // execute callback
    }
  });
  */

  //way2
  arr.forEach((element, i) => {
    if (element === "Waldo") {
      found(i);
    }
  });
}

function actionWhenFound(index) {
  console.log("Found Waldo at index", index);
}

findWaldo(["Alice", "Bob", "Waldo", "Winston"], actionWhenFound);


