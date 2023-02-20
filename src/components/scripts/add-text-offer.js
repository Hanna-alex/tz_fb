function addTextOffers() {
  const cards = document.querySelectorAll('.card-food');
  const cardsWeight = document.querySelectorAll('.card-food__num');
  const cardsContainer = document.querySelectorAll('.card-food__offer')

  const offers = {
    '0,5': ['10 порций', 'мышь в подарок'],
    2: ['40 порций', '2 мыши в подарок'],
    5: ['100 порций', '5 мышей в подарок', 'заказчик доволен'],
  };


  for (let i = 0; i < cardsWeight.length; i++) {

    for (let key in offers) {
      if (key === cardsWeight[i].outerText) {
        offers[key].forEach(element => {

          let isNum = parseInt(element)
          if (isFinite(isNum)) {
            cardsContainer[i].insertAdjacentHTML('beforeend', `
      <span class="card-food__text"><b>${isNum} </b> ${element.replace(/[0-9]/g, '')} </span>
     `);

          } else {
            cardsContainer[i].insertAdjacentHTML('beforeend', `
      <span class="card-food__text"> ${element.replace(/[0-9]/g, '')} </span>
     `);

          }

        });

      }

    }

  }

}

addTextOffers()
