const goods = {
  'Нямушка': {
    'с фуа-гра': {
      '0,5': 10,
      '2': null,
      '5': null,
    },
    'с рыбой': {
      '0,5': null,
      '2': 10,
      '5': null,
    },
    'с курой': {
      '0,5': null,
      '2': null,
      '5': 0,
    },

  },
  // 'Кусь': {
  //   'с фуа-гра': {
  //     '0,5': 11,
  //     '2': 0,
  //     '5': 0,
  //   },
  // },

}

const selectedCardText = {
  'с фуа-гра': 'Печень утки разварная с артишоками.',
  'с рыбой': 'Головы щучьи с чесноком да свежайшая сёмгушка.',
  'с курой': 'Филе из цыплят с трюфелями в бульоне.',

};

const defaultCardText = 'Чего сидишь? Порадуй котэ,';
const defaultCardTextBtn = 'купи.';

const defaultHoverTagline = 'Сказочное заморское яство';
const selectedHoverTagline = 'Котэ не одобряет?';




render(goods)

addTextOffers()
hoverCards()
selected()