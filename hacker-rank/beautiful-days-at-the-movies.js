/*
 * Complete the 'beautifulDays' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER i
 *  2. INTEGER j
 *  3. INTEGER k
 */

function beautifulDays(i, j, k) {
  let count = 0;
  for (let num = i; num <= j; num++) {
    const rNum = Number(`${num}`.split("").reverse().join(""));
    if (Math.abs(num - rNum) % k === 0) {
      count += 1;
    }
  }
  return count;
}

console.log(beautifulDays(20, 23, 6));
