/*
 * Complete the 'repeatedString' function below.
 *
 * The function is expected to return a LONG_INTEGER.
 * The function accepts following parameters:
 *  1. STRING s
 *  2. LONG_INTEGER n
 */

function repeatedString(s, n) {
  // Write your code here
  const count = (s.match(/a/g) || []).length;
  const repeatCount = Math.floor(n / s.length);
  const pendingString = s.substring(0, n - repeatCount * s.length);
  return repeatCount * count + (pendingString.match(/a/g) || []).length;
}
console.log(repeatedString("a", 1000000000000));
