/*
  Implement a function `countVowels` that takes a string as an argument and returns the number of vowels in the string.
  Note: Consider both uppercase and lowercase vowels ('a', 'e', 'i', 'o', 'u').

  Once you've implemented the logic, test your code by running
*/

function countVowels(str) {
  let vowels = ['a', 'e', 'i', 'o', 'u']
  let vowelCount = 0;
  let lowerCaseString = str.toLowerCase()
  for (let i = 0; i < lowerCaseString.length; i++) {
    if (vowels.includes(lowerCaseString[i]))
      vowelCount += 1;
  }
  return vowelCount;
}

module.exports = countVowels;