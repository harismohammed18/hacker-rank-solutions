function getMoneySpent(keyboards = [], drives = [], b = 0) {
  const maxSize = Math.max(keyboards.length, drives.length);

  let price = -1;
  for (let i = 0; i < maxSize; i++) {
    for (let j = 0; j < maxSize; j++) {
      if (
        keyboards[i] &&
        drives[j] &&
        keyboards[i] + drives[j] <= b &&
        keyboards[i] + drives[j] > price
      ) {
        price = keyboards[i] + drives[j];
      }
    }
  }
  if (price === -1) {
    return -1;
  }
  return price;
}

console.log(getMoneySpent([3, 1], [5, 2, 8], 10));
