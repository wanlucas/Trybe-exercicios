// O exercício pede que eu crie uma função que receba um array de inteiros e retorne o inteiro que mais se repete.

// método otimizado

function mostRepeated(arr) {
  const rep = {};
  let mostRep = 0, res;

  for(const number of arr) {
    rep[number] ? rep[number]++ : rep[number] = 1;
  };
  
  for(const count in rep) {
    if(rep[count] > mostRep) {
      mostRep = rep[count];
      res = count;
    };
  };

  return res;
}

console.log(mostRepeated([1,1,4,5,6,7,5,4,3,3,3,3,3]));

// método conciso 

function mostRepeated2(arr) {
  const rep = new Object;

  for(num of arr) rep[num] ? rep[num]++ : rep[num] = 1;

  for(value in rep)
    if(rep[value] == Math.max(...Object.values(rep))) return value;
}

console.log(mostRepeated2([3,2,1,4,4,4,4,3,3]));

// O objetivo é criar uma função que receba um número romano e retorne-o convertido.

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

//A partir do array de frutas basket, retorne um objeto que contenha o nome da
//fruta como chave e a quantidade de vezes que ela aparece no array como valor.

const basket = [
  'Melancia', 'Abacate', 'Melancia', 'Melancia', 'Uva', 'Laranja',
  'Jaca', 'Pera', 'Melancia', 'Uva', 'Laranja', 'Melancia',
  'Banana', 'Uva', 'Pera', 'Abacate', 'Laranja', 'Abacate',
  'Banana', 'Melancia', 'Laranja', 'Laranja', 'Jaca', 'Uva',
  'Banana', 'Uva', 'Laranja', 'Pera', 'Melancia', 'Uva',
  'Jaca', 'Banana', 'Pera', 'Abacate', 'Melancia', 'Melancia',
  'Laranja', 'Pera', 'Banana', 'Jaca', 'Laranja', 'Melancia',
  'Abacate', 'Abacate', 'Pera', 'Melancia', 'Banana', 'Banana',
  'Abacate', 'Uva', 'Laranja', 'Banana', 'Abacate', 'Uva',
  'Uva', 'Abacate', 'Abacate', 'Melancia', 'Uva', 'Jaca',
  'Uva', 'Banana', 'Abacate', 'Banana', 'Uva', 'Banana',
  'Laranja', 'Laranja', 'Jaca', 'Jaca', 'Abacate', 'Jaca',
  'Laranja', 'Melancia', 'Pera', 'Jaca', 'Melancia', 'Uva',
  'Abacate', 'Jaca', 'Jaca', 'Abacate', 'Uva', 'Laranja',
  'Pera', 'Melancia', 'Jaca', 'Pera', 'Laranja', 'Jaca',
  'Pera', 'Melancia', 'Jaca', 'Banana', 'Laranja', 'Jaca',
  'Banana', 'Pera', 'Abacate', 'Uva',
];

function fruitRepetitions(array) {
  const list = new Object;

  for(const fruit of array) {
    if(!list[fruit]) list[fruit] = 0;
    
    list[fruit]++;
  }

  return list;
}

console.log(fruitRepetitions(basket));