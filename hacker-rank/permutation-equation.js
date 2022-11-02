/*
 * Complete the 'permutationEquation' function below.
 *
 * The function is expected to return an INTEGER_ARRAY.
 * The function accepts INTEGER_ARRAY p as parameter.
 */

function permutationEquation1(p) {
  const size = p.length;
  const output = [];
  const getY = (num) => {
    const numIndex = p.indexOf(num);
    const indexNum = p.indexOf(numIndex + 1);
    return indexNum + 1;
  };
  for (let i = 1; i <= size; i++) {
    output.push(getY(i));
  }
  return output;
}
function permutationEquation2(p = []) {
  const output = [];
  for (let i = 1; i <= p.length; i++) {
    output.push(p.indexOf(p.indexOf(i) + 1) + 1);
  }
  return output;
}

console.log(permutationEquation2([4, 3, 5, 1, 2]));
