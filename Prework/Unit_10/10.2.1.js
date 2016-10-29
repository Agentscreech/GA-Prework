var fizzbuzz = function(num) {
  for (var i = 0; i < num; i += 1) {
    if (i % 3 === 0 && i % 5 === 0) {
      result = "fizzbuzz";
    } else if (i % 5 === 0) {
      result = "buzz";
    } else if (i % 3 === 0) {
      result = "fizz";
    } else {
      result = i;
    }
    console.log(result);
  }
};
