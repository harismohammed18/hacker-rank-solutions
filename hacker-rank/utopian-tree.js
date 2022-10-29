function utopianTree(n) {
  let h = 1;
  for (let i = 1; i <= n; i++) {
    if (i % 2 === 0) {
      h += 1;
    } else {
      h = h * 2;
    }
  }
  return h;
}
