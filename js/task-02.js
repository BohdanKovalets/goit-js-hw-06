const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];



const ul = document.querySelector('#ingredients')

const result = [];

ingredients.forEach((el) => {
  const li = document.createElement('li')
  li.textContent = el;
  li.classList.add('item')
  result.push(li)
})

ul.append(...result)