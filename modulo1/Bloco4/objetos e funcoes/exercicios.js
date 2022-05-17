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

