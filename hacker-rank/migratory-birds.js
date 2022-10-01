function migratoryBirds(arr) {
  const occurrenceMap = arr.reduce((acc, val) => {
    acc[val] = (acc[val] || 0) + 1;
    return acc;
  }, {});
  let maxKey = 0;
  Object.keys(occurrenceMap).forEach((key, index) => {
    if (index === 0) {
      maxKey = key;
    } else {
      if (occurrenceMap[maxKey] < occurrenceMap[key]) {
        maxKey = key;
      } else if (occurrenceMap[maxKey] === occurrenceMap[key]) {
        if (maxKey > key) {
          maxKey = key;
        }
      }
    }
  });
  return maxKey;
}

console.log(migratoryBirds([1, 4, 4, 4, 5, 3]));
