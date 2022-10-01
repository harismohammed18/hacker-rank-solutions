/*
 * Complete the 'pageCount' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER n
 *  2. INTEGER p
 */

function pageCount(n, p) {
  let count = 0;
  let page = 1;
  while (page < p) {
    count++;
    page += 2;
  }
  if (n % 2 !== 0) {
    page = n - 1;
  } else {
    page = n;
  }
  let countTwo = 0;
  while (page > p) {
    countTwo++;
    page -= 2;
  }
  return Math.min(...[count, countTwo]);
}

console.log(pageCount(6, 2));
