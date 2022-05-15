//o exercício pede que eu crie um algorítmo que inverta uma string 
const string = 'cavalo';

//modo hard

let newString = '';

for(let i = string.length - 1; i >= 0; i--) {
  newString += string[i];
}

console.log(newString);


//modo easy 

console.log(string.split('').reverse().join(''));