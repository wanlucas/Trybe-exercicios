const fatorial = (number) => {
  let result = number;

  for (let i = number - 1; i > 1; i--) result *= i;
  return result;
}

const MMC = (numbers) => {
  const dividers = [];
  let divider = 2;

  while (divider <= Math.max(...numbers)) {
    if (numbers.some((num) => num % divider === 0)) {
      numbers = numbers.map((num) => num % divider === 0 ? num / divider : num);
      dividers.push(divider);
    } else divider++;
  }

  return dividers.reduce((a, b) => a * b);
}

module.exports = { fatorial, MMC };