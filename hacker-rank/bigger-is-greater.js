/*
 * Complete the 'biggerIsGreater' function below.
 *
 * The function is expected to return a STRING.
 * The function accepts STRING w as parameter.
 */

function biggerIsGreater(w = "") {
  w = w.split("");

  let pivotItem = w.length - 1;
  while (pivotItem > 0 && w[pivotItem - 1] >= w[pivotItem]) pivotItem--;

  if (pivotItem <= 0) return "no answer";

  let rightSuccessor = w.length - 1;
  while (w[rightSuccessor] <= w[pivotItem - 1]) rightSuccessor--;

  const temp = w[pivotItem - 1];
  w[pivotItem - 1] = w[rightSuccessor];
  w[rightSuccessor] = temp;

  rightSuccessor = w.length - 1;
  while (pivotItem < rightSuccessor) {
    const temp = w[pivotItem];
    w[pivotItem] = w[rightSuccessor];
    w[rightSuccessor] = temp;
    pivotItem++;
    rightSuccessor--;
  }

  return w.join("");
}
["dkhc"].forEach((s) => console.log(biggerIsGreater(s)));
