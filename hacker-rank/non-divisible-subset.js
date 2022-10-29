/*
 * Complete the 'nonDivisibleSubset' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER k
 *  2. INTEGER_ARRAY s
 */

function nonDivisibleSubset(k, s) {
  let values = new Array(k).fill(0);
  let result = 0;

  s.reduce((target, item, index) => {
    values[item % k] += 1;

    return target;
  }, []);

  for (let i of Array.from(
    { length: (k + 1) / 2 - 1 },
    (value, index) => index + 1
  )) {
    result += Math.max(values[i], values[k - i]);
  }

  !(k % 2) && !!values[k / 2] && (result += 1);

  values[0] && (result += 1);

  return result;
}
console.log(
  nonDivisibleSubset(
    7,
    // [278, 496, 727, 410, 124, 209, 718, 771, 575, 576, 338, 149, 702, 282, 436]
    [278, 576, 496, 727, 410, 124, 338, 149, 209, 702, 282, 718, 771, 575, 436]
  )
);
