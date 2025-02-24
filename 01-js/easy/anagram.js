/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

function isAnagram(str1, str2) {
  str1 = str1.replace(" ", "").toLowerCase();
  str2 = str2.replace(" ", "").toLowerCase();

  if (str1.length !== str2.length) {
    return false;
  }

  let charCount = {};

  for (let i = 0; i < str1.length; i++) {
    let char = str1[i];
    charCount[char] = (charCount[char] || 0) + 1;
  }

  for (let i = 0; i < str2.length; i++) {
    let char = str2[i];
    if (!charCount[char]) {
      return false;
    } else {
      charCount[char]--;
    }
  }
  
  if (Object.values(charCount).some((val) => val !== 0)) {
    return false;
  }

  return true;
}

module.exports = isAnagram;