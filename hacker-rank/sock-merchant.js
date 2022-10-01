function sockMerchant(n, ar) {
  const hashMap = ar.reduce((acc, val) => {
    acc[val] = (acc[val] || 0) + 1;
    return acc;
  }, {});

  let pairs = 0;
  Object.values(hashMap).forEach((value) => {
    const pair = Math.floor(value / 2);
    if (pair > 0) {
      pairs = pairs + pair;
    }
  });
  return pairs;
}
