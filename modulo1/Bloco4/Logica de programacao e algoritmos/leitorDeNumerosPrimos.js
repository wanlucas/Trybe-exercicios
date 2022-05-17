// O desafio consiste em criar uma função que retorne true caso o seu parâmetro seja um número primo.

function isPrimeNumber(number) {
  if(number < 2) return false;

  for(let num = 2; num < number ; num++) 
    if(number % num == 0) return false;

  return true;
}

console.log(isPrimeNumber(7));

// agora o desafio é encontrar o maior número primo entre 2 e um número passado.

function biggerPrimeNumber(limit) {
  for(let max = limit; max > 0; max--) {
    const middle = Math.floor(max / 2);
    
    for(let number = 2; number <= middle; number++) {
      if(max % number == 0) break;
      if(number == middle) return max;
    };
  }
}

console.log(biggerPrimeNumber(90));
