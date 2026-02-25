// ==========================================
// Activity 1: Idiomatic Code Transformation
// Language: JavaScript
// Objective: Improve code to be more idiomatic
// ==========================================


// ---------- Original Version ----------
// This version uses a traditional for loop
// to collect even numbers from an array.

function getEvenNumbersOld(arr) {
  let result = [];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      result.push(arr[i]);
    }
  }

  return result;
}


// ---------- Improved Idiomatic Version ----------
// This version uses modern JavaScript practices:
// - Arrow function
// - Array.prototype.filter()
// - Declarative style

const getEvenNumbers = (numbers) => {
  return numbers.filter(number => number % 2 === 0);
};


// ---------- Example Usage ----------
const sampleNumbers = [1, 2, 3, 4, 5, 6];

console.log("Old Version:", getEvenNumbersOld(sampleNumbers));
console.log("Improved Version:", getEvenNumbers(sampleNumbers));