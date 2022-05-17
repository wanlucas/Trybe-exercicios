// o exercício pede que eu crie uma função que receba um array de inteiros e retorne o inteiro que mais se repete.

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
