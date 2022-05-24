function createDaysOfTheWeek() {
  const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
  const weekDaysList = document.querySelector('.week-days');

  for (let index = 0; index < weekDays.length; index += 1) {
    const days = weekDays[index];
    const dayListItem = document.createElement('li');
    dayListItem.innerHTML = days;

    weekDaysList.appendChild(dayListItem);
  };
};

createDaysOfTheWeek();

function createDaysOfTheMonth() {
  const daysList = document.getElementById('days');
  const dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];
  const holiDays = [24, 25, 31], fridays = [4, 11, 18, 25];

  for(const day of dezDaysList) {
    const li = document.createElement('li');

    li.classList.add('day'); 
    li.innerText = day;

    if(holiDays.includes(day)) li.classList.add('holiday');
    if(fridays.includes(day)) li.classList.add('friday');

    daysList.appendChild(li);
  }
}

createDaysOfTheMonth();

function createButton(name) {
  const container = document.querySelector('.buttons-container');
  const button = document.createElement('button');

  button.innerText = name;
  button.addEventListener('click', () => {
    const elements = document.getElementsByClassName('holiday'); 

    for(const element of elements)
      element.classList.toggle('selected');
  });
  
  button.id = 'btn-holiday';
  container.appendChild(button);
}

createButton('Feriados');