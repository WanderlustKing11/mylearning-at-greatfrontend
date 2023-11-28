// `Array.prototype.filter creates a new 
// array populated with the results of 
// calling a provided function on every 
// element in the calling array.`


// Examples:
// [1, 2, 3, 4].filter((value) => value % 2 == 0); // [2, 4]
// [1, 2, 3, 4].filter((value) => value < 3); // [1, 2]

// Here is an example I created to understand how to use 
// the `thisArg` argument:
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// const threshold = {
//     min: 3,
// }

// const oddNumbers = numbers.filter(function(value) {
//     if (value > this.min) {
//       return value % 2 !== 0;
//     }
// }, threshold);

// console.log(oddNumbers);

// Array.prototype.filter = function (callbackFn, thisArg) {
//     const len = this.length;
//     const results = [];
  
//     for (let i = 0; i < len; i++) {
//       // Cache value in case the callback function modifies it.
//       const iValue = this[i];
//       if (
//         // Ignore index if value is not defined for index (e.g. in sparse arrays).
//         Object.hasOwn(this, i) &&
//         callbackFn.call(thisArg, iValue, i, this)
//       ) {
//         results.push(iValue);
//       }
//     }
  
//     return results;
//   };

Array.prototype.myFilter = function (callbackFn, thisArg) {
    const len = this.length;
    const results = [];
  
    for (let i = 0; i < len; i++) {
      const iValue = this[i];
      if (
        Object.hasOwn(this, i) &&
        callbackFn.call(thisArg, iValue, i, this) 
      ) {
        results.push(iValue);
      }
    }
    return results;
  };

const oddNumbers = numbers.myFilter(function(number) {
  return number % 2 !== 0;
});

console.log(oddNumbers);