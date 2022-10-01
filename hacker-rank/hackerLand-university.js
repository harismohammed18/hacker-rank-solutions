function gradingStudents(grades) {
  const minimumMark = 38;
  const length = grades[0];
  const output = [];
  for (let i = 1; i <= length; i++) {
    let mark = grades[i];
    const prevDivide = Math.floor(mark / 5);
    if ((prevDivide + 1) * 5 - mark < 3 && mark >= minimumMark) {
      mark = (prevDivide + 1) * 5;
    }
    output.push(mark);
  }
  return output;
}
console.log(gradingStudents([4, 73, 67, 38, 33]));
