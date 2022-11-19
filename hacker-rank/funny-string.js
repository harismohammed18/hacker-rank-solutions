/*
 * Complete the 'funnyString' function below.
 *
 * The function is expected to return a STRING.
 * The function accepts STRING s as parameter.
 */

function funnyString(s = "") {
  const strAsciValue = [];
  for (let i = 0; i < s.length; i++) {
    strAsciValue.push(s.charCodeAt(i));
  }
  const strRevAsciValue = [...strAsciValue].reverse();
  let output = "Funny";
  for (let i = 0; i < strAsciValue.length - 1; i++) {
    if (
      Math.abs(strAsciValue[i] - strAsciValue[i + 1]) !==
      Math.abs(strRevAsciValue[i] - strRevAsciValue[i + 1])
    ) {
      output = "Not Funny";
    }
  }
  return output;
}

console.log(funnyString("bcxz"));
console.log(funnyString("acxz"));
