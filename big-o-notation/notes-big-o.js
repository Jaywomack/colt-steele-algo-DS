// Write a function that calculates the sum of all numbers from 1 up to and including some number "n"

// function addUpTo(n) {
//   let total = 0;
//   for (let i = 0; i <= n; i++) {
//     total += i;
//   }
//   return total;
// }

// function addUpTo2(n) {
//   return (n * (n + 1)) / 2;
// }

// When benchmarking with time there are multiple reasons why time is not going to be the best and there is other ways that can be a better benchmark

// Different machines take different times
// the same  machine can take different times

// Rather than time the benchmark can be how many simple operations a computer needs to make to do something
// the original function addUpTo grows in the time that it takes to use the function by the amount of n. the loop that us used makes it to where each time the loop goes through the computer has to redo the simple calculations to execute the function

// The second function addUpTo2 is much faster as the operations are reduced significantly by not looping to accomplish what needs to be done.

/***
 * Introducing BIG O
 *
 * Big O notations is a way to formalize fuzzy counting
 *
 * it allows us to talk formally about how the runtime of an algorithm grows as the inputs grow
 */

// We say that an algorithm is O(f(n)) if the number of simple operations the computer has to do is eventually less than a constant times f(n), as n increases

// f(n) could be linear (f(n)=n)
// f(n) could be quadratic (f(n) = n2)
// f(n) could be constant (f(n) = 1)
// f(n) could be something entirely different

// // number of operations is eventually bounded by a multiple of n(say, 10n) O(n)
// function addUpTo(n) {
//   let total = 0;
//   for (let i = 0; i <= n; i++) {
//     total += i;
//   }
//   return total;
// }

// Always has three operations O(1)
// function addUpTo2(n) {
//   return (n * (n + 1)) / 2;
// }

// // Count up and down
// function countUpAndDown(n) {
//   console.log('Going up!');
//   for (let i = 0; i < n; i++) { // O(n)
//     console.log(i);
//   }
//   console.log('At the top!\nGoing down...');
//   for (let j = n - 1; j >= 0; j--) {// O(n)
//     console.log(j);
//   }
//   console.log('Back down. Bye!');
// }

// countUpAndDown(20);

// function printAllPairs(n) {
//   for (var i = 0; i < n; i++) {
//     for (var j = 0; j < n; j++) { // O(n^2) because the loop is nested inside another loop
//       console.log(i, j);
//     }
//   }
// }

// printAllPairs(10);

/***
 * Simplifying Big O Expressions
 */

//  Big o notation can be simplified greatly just O(n) O(n^2) O(1)

function logAtleast(n) {
  for (let i = 1; i <= Math.max(5, n); i++) {
    console.log(i);
  }
}
// Because n will be what determines how long this function will take to run the O(n) is the big O notation used
logAtleast(10);

// This function below is O(1) because the value is constant due to the highest the number can be is set by the min so it will never be higher than 5
function logAtMost(n) {
  for (let i = 1; i <= Math.min(5, n); i++) {
    console.log(i);
  }
}
// Wont log more than 5 so O(1)
logAtMost(19);
