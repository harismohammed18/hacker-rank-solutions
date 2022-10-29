function countingValleys(steps, path = "") {
  const step = {
    U: 1,
    D: -1,
  };
  let valleyCount = 0;
  let stepValue = 0;
  let isValley = false;
  for (let i = 0; i < steps; i++) {
    stepValue += step[path[i]];
    if (stepValue < 0 && isValley === false) {
      isValley = true;
      valleyCount++;
    } else if (stepValue === 0 && isValley === true) {
      isValley = false;
    }
  }
  return valleyCount;
}
console.log(countingValleys(12, "DDUUDDUDUUUD"));
