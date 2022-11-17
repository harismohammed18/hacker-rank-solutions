/*
 * Complete the 'jumpingOnClouds' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts INTEGER_ARRAY c as parameter.
 */

function jumpingOnClouds(c = []) {
  let jumpCount = 0;
  const size = c.length;
  let i = 0;
  while (i <= size) {
    if (c[i + 2] === 1) {
      i += 1;
    } else {
      i += 2;
    }
    jumpCount++;
  }
  return --jumpCount;
}
