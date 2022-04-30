function reverseString(str) {
  // type your code here
  return str.split('').reverse().join('')
}

if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: 'eurt'");
  console.log("=>", reverseString("true"))

  console.log("Expecting: 'ih'");
  console.log("=>", reverseString("hi"));

  console.log("");

  console.log("Expecting: 'ybabtac'");
  console.log("=>", reverseString("catbaby"));
}

module.exports = reverseString;

// Please add your pseudocode to this file

// And a written explanation of your solution
  // using .reverse() on an array will help immensly.
  //in order to use that, we first have to transform the string into an array, reverse, and then turn it back into a string.