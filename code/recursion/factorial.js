function findFactorial(number) {

  if (number < 0) return undefined;
  if (number <= 1) return BigInt(1);

  return BigInt(number) * findFactorial(number - 1);
}

console.log(findFactorial(4000));
