function catAndMouse(x, y, z) {
  const catA = Math.abs(z - x);
  const catB = Math.abs(z - y);

  if (catA === catB) {
    return "Mouse C";
  } else if (catA > catB) {
    return "Cat B";
  } else {
    return "Cat A";
  }
}

console.log(catAndMouse(1,2,3))
console.log(catAndMouse(1,3,2))
