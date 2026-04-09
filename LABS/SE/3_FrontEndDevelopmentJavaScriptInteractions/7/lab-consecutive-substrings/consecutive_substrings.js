// Create the function and initialize the empty substring
function consecutiveSubstrings(string) {
  let substrings = [];

  // Looping elements.
  for (let i = 0; i < string.length; i++) {
    for (let j = i; j < string.length; j++) {
      substrings.push(string.slice(i, j +1));
    }
}
return substrings;
}

if (require.main === module) {
  console.log("Expecting: ['a', 'ab', 'abc', 'b', 'bc', 'c']");
  console.log("=>", consecutiveSubstrings('abc'));
  console.log("");
  console.log("Expecting: ['a']");
  console.log("=>", consecutiveSubstrings('a'));

  // Test 1:  String with a space 
  console.log("Expecting: ['a', 'a ', 'a b', ' ', ' b', 'b']");
  console.log("=>", consecutiveSubstrings('a b'));
  console.log("");
}

module.exports = consecutiveSubstrings;


