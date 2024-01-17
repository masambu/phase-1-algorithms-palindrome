
function isPalindrome(word) {
  // Pseudocode:
  // 1. Remove non-letter characters and convert to lowercase.
  // 2. Reverse the cleaned string.
  // 3. Check if the cleaned string is equal to its reverse.
  // 4. Return true if it is a palindrome, otherwise return false.


  cleanedWord = removeNonLettersAndLowercase(word);


  reversedWord = reverse(cleanedWord);


  return cleanedWord === reversedWord;
}

function removeNonLettersAndLowercase(str) {
  return str.replace(/[^a-z]/g, '').toLowerCase();
}


function reverse(str) {
  return str.split('').reverse().join('');
}


console.log("Expecting: true");
console.log("=>", isPalindrome("racecar"));

console.log("");

console.log("Expecting: false");
console.log("=>", isPalindrome("robot"));


module.exports = isPalindrome;
