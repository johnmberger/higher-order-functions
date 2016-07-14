any([8,9,10,11], greaterThan10);
// Returns true

sumTwoNumbers(3)(9);
// Returns 12

filter([1, 2, 3, 4], onlyOdd);
// // Returns [1, 3]

surprise()();
// Returns 'surprise!'

// ----- Functions -----

function any(arr, callback) {
  for (var i = 0; i < arr.length; i++) {
    if (callback(arr[i]) === true) {
      return true;
      break;
    } else {
      return false;
    }
  }
}

function greaterThan10(input) {
  if (input > 10) {
    return true;
  }
}

function surprise() {
  return function(){
    return 'surprise!';
  }
}

function onlyOdd(arr) {
  var result = [];
  for (i = 0; i<arr.length; i++) {
    if (i % 2 !== 1){
      result.push(arr[i]);
    }
  } return result;
}

function filter(arr, callback) {
  var result = callback(arr);
  return result;
}

function sumTwoNumbers(num) {
  return function(input) {
    return input + num;
  }
}
