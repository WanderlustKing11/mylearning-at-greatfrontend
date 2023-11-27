// Implement a function makeCounter that 
// accepts an optional integer value and 
// returns a function. When the returned 
// function is called initially, it returns 
// the initial value if provided, otherwise 
// 0. The returned function can be called 
// repeatedly to return 1 more than the 
// return value of the previous invocation.

// const counter = makeCounter();
// counter(); // 0
// counter(); // 1
// counter(); // 2

// const counter = makeCounter(5);
// counter(); // 5
// counter(); // 6
// counter(); // 7

export default function makeCounter(initialValue = 0) {
  let count = initialValue;

  return function() {
    return count++;
  }
}

const counter = makeCounter(5);
console.log(counter());
console.log(counter());
console.log(counter());
console.log(counter());
console.log(counter());

/////////////////////////////////

// function createMultiplier(multiplier) {
//   return function(number) {
//     return number * multiplier;
//   }
// }

// const double = createMultiplier(2);
// const triple = createMultiplier(3);

// console.log(double(5));
// console.log(triple(5));

//////////////////////////////////

// This works

// function yup(yesOrNo) {
//   return function () {
//     if (yesOrNo === 'yes') {
//       console.log("Yup!");
//     } else {
//       console.log("Nope!");
//     }
//   }
// }

// const myFunc = yup('no');
// myFunc();