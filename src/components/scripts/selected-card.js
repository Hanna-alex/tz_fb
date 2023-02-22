const defaultCardText = 'Чего сидишь? Порадуй котэ,';
const defaultCardTextBtn = 'купи.';

const selectedCardText = {
  'с фуа-гра': 'Печень утки разварная с артишоками.',
  'с рыбой': 'Головы щучьи с чесноком да свежайшая сёмгушка.',
  'с курой': 'Филе из цыплят с трюфелями в бульоне.',

};


const foodCards = document.querySelectorAll('.card-food');
const containDescription = document.querySelectorAll('.card-food__description');


containDescription.forEach(elem => {
  elem.insertAdjacentHTML('beforeend', `<p class="description__text">
   ${defaultCardText} </p> <button class="card-food__btn">${defaultCardTextBtn}</button>`)
})


containDescription.forEach(elem => {
  elem.addEventListener('click', (event) => {

    const target = event.target.className

    if (target === 'card-food__btn') selected(elem)

  })
})


foodCards.forEach(elem => {
  elem.addEventListener('click', (event) => {

    const target = event.target.className

    if (target === 'card-food__info') selected(elem)

  })

});



function selected(card) {
  const cardFood = card.closest('.card-food');
  const borderElems = cardFood.querySelectorAll('.back__elem');
  const price = cardFood.querySelector('.card-food__price');

  cardFood.classList.toggle('card-food_selected')
  borderElems.forEach(borderElem => {
    borderElem.classList.toggle('back__elem_selected');
  })

  price.classList.toggle('card-food__price_selected');

  addTextSelected(card)

}


function addTextSelected(elem) {

  const cardFood = elem.closest('.card-food');
  const textContainer = cardFood.querySelector('.card-food__description');;
  const cardIngregient = cardFood.querySelector('.card-food__subtitle').textContent;


  if (cardFood.classList.contains('card-food_selected')) {

    for (let key in selectedCardText) {

      if (key === cardIngregient) {

        textContainer.innerHTML = ''
        textContainer.insertAdjacentHTML('beforeend', `<p class="description__text">
         ${selectedCardText[key]} </p>`);

      }
    }

  } else {

    textContainer.innerHTML = '';
    textContainer.insertAdjacentHTML('beforeend', `<p class="description__text">
   ${defaultCardText} </p> <button class="card-food__btn">${defaultCardTextBtn}</button>`);
  }

}


