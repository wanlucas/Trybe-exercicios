//o exercício pede a criação de um loop que calcule o fatorial de 10;


// solução 1
const factorial = 10;
let result = factorial;

for(let i = 1 ; i < number ; i++)
  result *= number - i;

console.log(result);

// solução 2
let factorial2 = 10;

for(let num = factorial2 - 1; num > 1; num--) 
  factorial2 *= num;

console.log(factorial2);

// solução desnecessariamente concisa
let factorial3 = 10;

for(let num = factorial3 - 1; num > 1; factorial3 *= num--);

console.log(factorial3);