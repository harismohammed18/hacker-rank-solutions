function findFibonacci(number) {
  if (number < 1) return 0;
  if (number < 2) return 1;
  return findFibonacci(number - 1) + findFibonacci(number - 2);
}

console.log(findFibonacci(3));
