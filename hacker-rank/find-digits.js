/*
 * Complete the 'findDigits' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts INTEGER n as parameter.
 */

function findDigits(n) {
  let output = 0;
  n = n.toString();
  for (let i = 0; i < n.length; i++) {
    const div = Number(n[i]);
    if (div !== 0 && n % div === 0) {
      output += 1;
    }
  }
  return output;
}
