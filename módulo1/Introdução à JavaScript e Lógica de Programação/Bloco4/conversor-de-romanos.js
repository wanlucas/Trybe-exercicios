//o objetivo é criar uma função que receba um número romano e retorne-o convertido.

function convertNumber([...number]) {
  const reference = { 
    'i': 1, 'v': 5, 'x': 10, 'l': 50, 'c': 100, 'd': 500, 'm':1000
  };
  let convertedNumber = 0;

  number.forEach((c, i) => {
    const value = reference[c.toLowerCase()];
    
    if(number.slice(i).some((c) => reference[c] > value ))
      convertedNumber -= value
    else convertedNumber += value;
  });

  return convertedNumber;
}

//a minha função percorre por cada número já convertido e verifica se há algum 
//número com valor maior à sua direita; caso haja, o atual número é subtraído do valor total
//, caso contrário ele é somado, resultando assim o número desejado. 