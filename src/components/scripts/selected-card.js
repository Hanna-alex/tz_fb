function selected() {
  const foodCards = document.querySelectorAll('.card-food');
  const containDescriptions = document.querySelectorAll('.card-food__description');


  containDescriptions.forEach(elem => {
    elem.addEventListener('click', (event) => {

      const target = event.target.className

      if (target === 'card-food__btn' || target === 'card-food__btn_text') selected(elem)

    })
  })


  foodCards.forEach(elem => {
    elem.addEventListener('click', (event) => {

      const target = event.target.className

      if (target === 'card-food__info' && !elem.classList.contains('card-food_disabled')) selected(elem)

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

    const backElems = cardFood.querySelectorAll('.back__elem');
    backElems.forEach(backElem => {
      backElem.classList.remove('back__elem_selected-hover');
    })

    const price = cardFood.querySelector('.card-food__price');
    price.classList.remove('card-food__price_selected-hover');
    let tagline = cardFood.querySelector('.card-food__tagline')

    tagline.innerText = '';
    tagline.innerText = defaultHoverTagline;
    tagline.style.color = ' #666666';

    textContainer.innerHTML = '';
    textContainer.insertAdjacentHTML('beforeend', `<p class="description__text">
                                      ${defaultCardText} </p> 
                                    <button class="card-food__btn"> <span class="card-food__btn_text"> ${defaultCardTextBtn}</span>.
                                    </button>`);




  }

}


