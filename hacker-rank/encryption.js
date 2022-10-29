/*
 * Complete the 'encryption' function below.
 *
 * The function is expected to return a STRING.
 * The function accepts STRING s as parameter.
 */

function encryption(s = "") {
  s = s.replace(/^\s/g, "");
  const inputArray = s.split("");
  const column = Math.ceil(Math.sqrt(inputArray.length));
  const output = [];

  for (let i = 0; i < column; i++) {
    let j = i,
      str = "";
    while (j < inputArray.length) {
      str += inputArray[j];
      j += column;
    }
    output.push(str);
  }
  return output.join(" ");
}

console.log(encryption("chillout"));
