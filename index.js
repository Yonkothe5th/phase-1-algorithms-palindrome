function isPalindrome(word) {
  // Write your algorithm here
  const reverse = word.split('').reverse().join('');
  if (word === reverse)  {
    return true;
  } else {
    return false
  }
}

/* 
  Add your pseudocode here
  the inut should be a string
  the function should take the string and rearrange the charaters from back to front
  the function should check if the resulting string is a alidrome of the original input
  if it is should output boolean true
  if it isnt output should be boolean false 
*/

/*
  Add written explanation of your solution here
  the function parses a string as the arguement and thus takes the string and splits the
  charaters into individual letter and rearranges them in a reverse order thus creating a different array.
  it then rejoins the array to form a string and checks the sting to see if it is similar to the input.
  if so it returns true and if not it returns false.
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
