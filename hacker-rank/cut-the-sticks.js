/*
 * Complete the 'cutTheSticks' function below.
 *
 * The function is expected to return an INTEGER_ARRAY.
 * The function accepts INTEGER_ARRAY arr as parameter.
 */

function cutTheSticks(arr = []) {
  const output = [];
  while (arr.length >= 1) {
    output.push(arr.length);
    const min = Math.min(...arr);
    arr = arr.map((el) => el - min).filter((el) => el > 0);
  }
  return output;
}

console.log(cutTheSticks([5, 4, 4, 2, 2, 8]));
