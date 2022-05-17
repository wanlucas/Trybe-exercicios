

// O exercício pede que eu crie um algorítmo que retorne uma string invertida.

function invertString(string) {
  let newString = '';

  for(let i = string.length - 1; i >= 0; i--) 
    newString += string[i];

  return newString;
}

console.log(invertString('cavalo'));

// O desafio consiste em criar uma função que retorne true caso o seu parâmetro seja um número primo.

function isPrimeNumber(number) {
  if(number < 2) return false;

  for(let num = 2; num < number; num++) 
    if(!(number % num)) return false;

  return true;
}

console.log(isPrimeNumber(9));

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

//o objetivo é criar uma função que receba um número romano e retorne-o convertido.

function romanNumeralConverter([...number]) {
  const ref = { 
    'i': 1, 'v': 5, 'x': 10, 'l': 50, 'c': 100, 'd': 500, 'm':1000
  };
  let convertedNumber = 0;

  number.forEach((c, i) => {
    const value = ref[c.toLowerCase()];
    
    if(number.slice(i).some((c) => ref[c.toLowerCase()] > value ))
      convertedNumber -= value;
    else convertedNumber += value;
  });

  return convertedNumber; 
} 

console.log(romanNumeralConverter('XIV'));
