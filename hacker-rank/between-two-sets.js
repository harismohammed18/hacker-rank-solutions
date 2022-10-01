function getTotalX(facArray, valueArray) {
  const valueFactAll = new Set();
  valueArray.forEach((element) => {
    for (let index = 1; index <= element; index++) {
      if (element % index === 0) {
        valueFactAll.add(index);
      }
    }
  });

  const valueFactCommon = new Set();

  valueFactAll.forEach((allFact) => {
    if (valueArray.every((element) => element % allFact === 0)) {
      valueFactCommon.add(allFact);
    }
  });

  const output = new Set();
  valueFactCommon.forEach((commonFact) => {
    if (facArray.every((element) => commonFact % element === 0)) {
      output.add(commonFact);
    }
  });

  return output.size;
}

console.log(getTotalX([3, 4], [24, 48]));
