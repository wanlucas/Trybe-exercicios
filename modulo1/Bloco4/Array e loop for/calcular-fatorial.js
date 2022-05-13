//o exercício pede a criação de um loop que calcule o fatorial de 10;

const number = 10;
let result = number;

for(let i = 1 ; i < number ; i++)
  result *= number - i;

console.log(result);