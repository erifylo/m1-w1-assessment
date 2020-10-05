// Write a function that returns the product of 2 numbers
function product(x, y) {
  return x*y;
}

// Write a function that returns whether a given number is even
function isEven(num) {
  if (num % 2 === 0) {
    return true}
  else
    {return false;}
  
}

// Return the largest of 2 numbers
function maxOfTwoNumbers(a, b) { 
   return Math.max (a,b) }
   

// Return the largest of 3 numbers
function maxOfThreeNumbers(a, b, c) {
  return Math.max (a,b,c)
}

// Calculate the sum of an array of numbers
function sumArray(numbers) {
   return numbers.reduce((a, b) => a + b, 0)
}

// Return the largest number of a non-empty array
function maxOfArray(numbers) {
  return Math.max(...numbers)
  
}

// Return the longest string in an array
function longestString(strings) {
  return strings.sort(function (a, b) { return b.length - a.length; })[0];
}

// Return whether a word is in an array
function doesWordExist(wordsArr, word) {
  if (wordsArr.includes(word)) {
    return true
  } else {
    return false
  }
}

// Finding the first non-duplicate (non-repeating) word in an array
function findUnique(wordsArr) {}
 
// Get the fullName from the object { firstName: 'Tony', lastName: 'Stark'}
function getFullName(personObj) {
  // return `${firstName.personObj}`  `${lastName.personObj}`
 let x = Object.values(personObj);
 return JSON.stringify(x); // no me funciona
}

// Return the largest number in a two dimensional array
function maxTwoDimArray(matrix) {
  let maxRow = matrix.map(function(row){ return Math.max.apply(Math, row); });
  return max = Math.max.apply(null, maxRow); 
}
