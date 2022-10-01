/*
 * Complete the 'bonAppetit' function below.
 *
 * The function accepts following parameters:
 *  1. INTEGER_ARRAY bill
 *  2. INTEGER k
 *  3. INTEGER b
 */

function bonAppetit(bill, k, b) {
  let sum = bill.reduce((acc, val) => acc + val, 0);
  const toMinus = b - (sum - bill[k]) / 2;
  console.log(toMinus > 0 ? toMinus : "Bon Appetit");
}
