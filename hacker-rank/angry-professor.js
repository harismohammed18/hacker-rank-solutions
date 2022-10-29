function angryProfessor(k, a) {
  const studentsArrivedOnTime = a.filter((time) => time <= 0);
  if (studentsArrivedOnTime.length >= k) return "NO";
  return "YES";
}
console.log(angryProfessor(2, [0, -1, 2, 1]));
