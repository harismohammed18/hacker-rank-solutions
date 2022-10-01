function breakingRecords(scores) {
  let min = 0;
  let max = 0;
  let maxBreakCount = 0;
  let minBreakCount = 0;
  scores.forEach((element, index) => {
    if (index === 0) {
      max = element;
      min = element;
    } else {
      if (element > max) {
        maxBreakCount++;
        max = element;
      } else if (element < min) {
        minBreakCount++;
        min = element;
      }
    }
  });
  return [maxBreakCount, minBreakCount];
}
console.log(breakingRecords([3, 4, 21, 36, 10, 28, 35, 5, 24, 42]));
