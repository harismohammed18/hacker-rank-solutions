/*
 * Complete the 'birthday' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER_ARRAY s
 *  2. INTEGER d = sum
 *  3. INTEGER m pice count
 */

function birthday(s, d, m) {
  let count = 0;

  for (var i = 0; i < s.length; i++) {
    let sum = s.slice(i, m + i).reduce((prev, curr) => prev + curr);
    if (sum === d) {
      count++;
    }
  }
  return count;
}
console.log(
  birthday(
    [
      4, 1, 4, 3, 3, 5, 1, 2, 4, 2, 5, 1, 5, 1, 4, 1, 3, 1, 5, 2, 2, 2, 1, 1, 3,
      2, 5, 3, 1, 5, 4, 5, 2, 2, 1, 1, 2, 2, 4, 5, 4, 1, 5, 2, 1, 1, 2, 2, 1, 3,
      2, 4, 4, 1, 3, 2, 2, 3, 1, 5, 4, 4, 1, 4, 2, 1, 2, 1, 5, 1, 3, 3, 4, 2, 1,
      5, 5, 4, 2, 2, 3, 3, 4, 3, 1, 2, 1, 2, 4, 3,
    ],
    16,
    7
  )
);
