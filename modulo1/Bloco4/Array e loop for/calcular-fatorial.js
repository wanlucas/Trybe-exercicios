//o exercício pede a criação de um loop que calcule o fatorial de 10;


// solução 1
const number = 10;
let result = number;

for(let i = 1 ; i < number ; i++)
  result *= number - i;

console.log(result);

// solucao 2
let factorial = 10;

for(let num = factorial - 1; num > 1; num--) 
  factorial *= num;

console.log(factorial);

// solução desnecessariamente concisa
let factorial2 = 10;

for(let num = factorial2 - 1; num > 1; factorial2 *= num--);

console.log(factorial2);