function divisibleSumPairs(n, k, ar) {
  let count = 0;
  for (i = 0; i < ar.length; i++) {
    for (j = i; j < ar.length; j++) {
      if ((ar[i] + ar[j]) % k === 0 && i !== j) {
        console.log([i, j]);
        count++;
      }
    }
  }
  return count;
}

console.log(divisibleSumPairs(6, 3, [1, 3, 2, 6, 1, 2]));
