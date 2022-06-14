const fatorial = (number) => {
  let result = number;

  for (let i = number - 1; i > 1; i--) result *= i;
  return result;
}

const MMC = (numbers) => {
  const dividers = [];
  let divider = 2;

  while (divider <= Math.max(...numbers)) {
    if (numbers.some((num) => num % divider === 0)) {
      numbers = numbers.map((num) => num % divider === 0 ? num / divider : num);
      dividers.push(divider);
    } else divider++;
  }

  return dividers.reduce((a, b) => a * b);
}

const removeItem = (arr, itemName) => {
  const newArr = [];

  for(const item of arr) {
    if (item !== itemName) newArr.push(item);
  }

  return newArr;
}

const professionalBoard = [
  {
    id: '8579-6',
    firstName: 'Ana',
    lastName: 'Gates',
    specialities: ['UX', 'Design'],
  },
  {
    id: '5569-4',
    firstName: 'George',
    lastName: 'Jobs',
    specialities: ['Frontend', 'Redux', 'React', 'CSS'],
  },
  {
    id: '4456-4',
    firstName: 'Leila',
    lastName: 'Zuckerberg',
    specialities: ['Context API', 'RTL', 'Bootstrap'],
  },
  {
    id: '1256-4',
    firstName: 'Linda',
    lastName: 'Bezos',
    specialities: ['Hooks', 'Context API', 'Tailwind CSS'],
  },
  {
    id: '9852-2-2',
    firstName: 'Jeff',
    lastName: 'Cook',
    specialities: ['Ruby', 'SQL'],
  },
  {
    id: '4678-2',
    firstName: 'Paul',
    lastName: 'Dodds',
    specialities: ['Backend'],
  },
];

const searchEmployee = (id, detail) => {
  for (let i = 0; i < professionalBoard.length; i++) {
    const employee = professionalBoard[i];

    if (employee.id === id) {
      return employee[detail] ? employee[detail] : 'Informação indisponível';
    };
  }
  return 'ID não identificada';
};

module.exports = { fatorial, MMC, removeItem, searchEmployee };