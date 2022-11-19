/*
 * Complete the 'alternatingCharacters' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts STRING s as parameter.
 */

function alternatingCharacters(s = "") {
  let deletionCount = 0;
  for (let i = 0; i < s.length; i++) {
    if (s[i] === s[i + 1]) {
      deletionCount += 1;
    }
  }
  return deletionCount;
  // Write your code here
}

console.log(alternatingCharacters("AAAA"));