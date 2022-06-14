function isSquare(n) {
  let pow = 0;
  let i = 2;

  while (pow < n) {
    pow = i ** 2;
    if (pow === n) return true;
    i++;
  }

  return false;
}
