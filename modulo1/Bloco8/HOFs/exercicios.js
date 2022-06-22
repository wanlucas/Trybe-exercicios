//As HOF são definidas como funções que aceitam funções
// como parâmetro e/ou retorna a função como saída.


// estrutura básica de uma HOF:

const wakingUp = () => 'Acordando!';
const morningMessage = () => 'Bora tomar café!';
const eveningMessage = () => 'Partiu dormir!';
const doingThings = (f) => console.log(f());

// doingThings(wakingUp);
// doingThings(morningMessage);
// doingThings(eveningMessage);


//Exercícios

/* Crie uma função que retorne um objeto no formato { nomeCompleto, email } representando
uma nova pessoa contratada. Passe sua função como parâmetro da HOF newEmployees para criar
cada pessoa contratada em seu respectivo id. A sua função deve receber como parâmetro o nome
completo da pessoa funcionária e a partir dele gerar automaticamente um email no formato
nome_da_pessoa@trybe.com.*/

const newEmployee = (name) => ({ nomeCompleto: name, email: `${name.replace(' ', '')}@trybe.com` });;
const newEmployees = (f) => {
  const employees = {
    id1: f('Pedro Guerra'),
    id2: f('Luiza Drumond'),
    id3: f('Carla Paiva'),
  };
  
  return employees;
}

// console.log(newEmployees(newEmployee));

/*Desenvolva uma HOF que retorna o resultado de um sorteio. Esta HOF irá gerar
um número aleatório entre 1 e 5 recebendo como parâmetros o número apostado e
uma função que checa se o número apostado é igual ao número sorteado. O retorno
da sua HOF deve ser uma string (Ex: "Tente novamente" ou "Parabéns você ganhou"). */


const check = (bet, drawn) => bet === drawn ? 'Parabéns você ganhou' : 'Tente novamente';
const raffle = (bet, f) => f(bet, Math.round((Math.random() * 4)) + 1);

// console.log(raffle(3, check));

