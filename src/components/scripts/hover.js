function hoverCards() {

  const foodCards = document.querySelectorAll('.card-food');
  const containDescription = document.querySelectorAll('.card-food__description');
  const cardBtn = document.querySelectorAll('.card-food__btn');


  containDescription.forEach(elem => {
    elem.addEventListener('mouseover', (event) => {
      const targetClass = event.target.className

      if (targetClass === 'card-food__btn') mouseOver(elem)
    })
  })

  containDescription.forEach(elem => {
    elem.addEventListener('mouseout', (event) => {
      const targetClass = event.target.className

      if (targetClass === 'card-food__btn') mouseLeave(elem)
    })
  })

  foodCards.forEach(elem => {

    const back = elem.querySelector('.back');

    back.addEventListener('mouseenter', () => {
      mouseOver(back)
    });

  });


  foodCards.forEach(elem => {

    const back = elem.querySelector('.back');

    back.addEventListener('mouseleave', () => {

      mouseLeave(back)
    });
  });



  const defaultHoverTagline = 'Сказочное заморское яство';
  const selectedHoverTagline = 'Котэ не одобряет?';


  function mouseOver(elem) {
    // console.log(elem);
    const elems = elem.closest('.card-food');
    const backElems = elems.querySelectorAll('.back__elem');
    const price = elems.querySelector('.card-food__price');


    if (elems.classList.contains('card-food_selected')) {
      let tagline = elems.querySelector('.card-food__tagline')

      tagline.innerText = '';
      tagline.innerText = defaultHoverTagline;
      tagline.style.color = '#666666';

      price.classList.add('card-food__price_selected-hover')

      backElems.forEach(backElem => {
        backElem.classList.add('back__elem_selected-hover');

      })

    } else {

      price.classList.add('card-food__price_hover')

      backElems.forEach(backElem => {
        backElem.classList.add('back__elem_hover')
      })

    }

  }


  function mouseLeave(elem) {

    const elems = elem.closest('.card-food');
    const backElems = elems.querySelectorAll('.back__elem');
    const price = elems.querySelector('.card-food__price');



    if (elems.classList.contains('card-food_selected')) {

      let tagline = elems.querySelector('.card-food__tagline')

      tagline.innerText = '';
      tagline.innerText = selectedHoverTagline;
      tagline.style.color = '#E62E7A';

      price.classList.remove('card-food__price_selected-hover')

      backElems.forEach(backElem => {
        backElem.classList.remove('back__elem_selected-hover');

      })

    } else {

      price.classList.remove('card-food__price_hover', 'card-food__price_selected-hover');

      backElems.forEach(backElem => {
        backElem.classList.remove('back__elem_hover', 'back__elem_selected-hover');
      })

    }

  }
}

