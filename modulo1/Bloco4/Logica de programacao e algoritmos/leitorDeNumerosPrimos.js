// O desafio consiste em criar uma função que retorne true caso o seu parâmetro seja um número primo.

function isPrimeNumber(number) {
  if(number < 2) return false;

  for(let num = 2; num < number ; num++) 
    if(number % num == 0) return false;

  return true;
}

console.log(isPrimeNumber(7));