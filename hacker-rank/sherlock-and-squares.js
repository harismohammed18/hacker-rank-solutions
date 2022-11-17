/*
 * Complete the 'squares' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER a
 *  2. INTEGER b
 */

function squares(a, b) {
  let count = 0;
  for (let i = a; i <= b; i++) {
    if (Number.isInteger(Math.sqrt(i))) count += 1;
  }
  return count;
}

function squares(a, b) {
  let lower = Math.ceil(Math.sqrt(a));
  let upper = Math.floor(Math.sqrt(b));

  return lower > upper ? 0 : upper - lower + 1;
}

function squares(a, b) {
  const lower = Math.ceil(Math.sqrt(a));
  const higher = Math.floor(Math.sqrt(b));

  if (lower > higher) return 0;

  let count = 0;

  for (let i = lower; i <= higher; i++) {
    if (lower <= i * i <= higher) {
      count++;
    }
  }

  return count;
}
