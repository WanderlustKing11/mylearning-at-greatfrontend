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

// export default function makeCounter(initialValue) {
//     if (initialValue) {
//       return function (value) {
//         return value += 1;
//       }
//     } else {
//       return function(value) {
//         value = 0;
//         return value += 1;
//       }
//     }
// }

// const counter = makeCounter();
// counter();

// function addNum(a,b)
// {
 
//   //nested function
//   function logToConsole(message)
//   {
//     console.log(message);
//   }
 
//   let result=a+b;
 
//   //invoking the nested function
//   logToConsole("result is "+result)
// }
 
// addNum(1,2)

function yup(yesOrNo) {
  return function () {
    if (yesOrNo === 'yes') {
      console.log("Yup!");
    } else {
      console.log("Nope!");
    }
  }
}

const myFunc = yup('yes');
myFunc();