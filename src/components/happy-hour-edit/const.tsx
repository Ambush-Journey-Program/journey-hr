export let guestsList = [
  { name: 'Mariana', id: '1', from: 'design', numb: 24 },
  { name: 'Marcello', id: '2', from: 'Ruby', numb: 24 },
  { name: 'Lucas', id: '3', from: 'Java', numb: 24 },
  { name: 'Claudia da Silva', id: '4', from: 'design', numb: 24 },
];

const employees = [
  { name: 'Ana', id: '5', from: 'design', numb: 24 },
  { name: 'Caio', id: '6', from: 'Ruby', numb: 24 },
  { name: 'Dan', id: '7', from: 'Java', numb: 24 },
  { name: 'Bruna', id: '8', from: 'design', numb: 24 },
];

const filter = employees.find((el) => (el.name = 'Ana'));
guestsList.unshift(filter);
console.log(guestsList);
