export const DRINK_INGREDIENTS = [
  ['Galliano', '2 1/2 shots'],
  ['Ginger ale', null],
  ['Ice', null],
];

export const DRINK_INSTRUCTIONS = 'nibh praesent tristique magna sit amet purus gravida';

export const FOOD_RECOMMENDATIONS = [
  {
    alcoholic: '',
    categoryRecom: 'Side',
    category: 'Side',
    group: 'meals',
    id: '52977',
    image: 'https://www.themealdb.com/images/media/meals/58oia61564916529.jpg',
    ingredients: [
      ['Lentils', '1 cup'],
      ['Onion', '1 large'],
      ['Carrots', '1 large'],
      ['Tomato Puree', '1 tbs'],
      ['Cumin', '2 tsp'],
      ['Paprika', '1 tsp'],
      ['Mint', '1/2 tsp'],
      ['Thyme', '1/2 tsp'],
      ['Black Pepper', '1/4 tsp'],
      ['Red Pepper Flakes', '1/4 tsp'],
      ['Vegetable Stock', '4 cups'],
      ['Water', '1 cup'],
      ['Sea Salt', 'Pinch'],
    ],
    instructions: 'lorem dolor sed viverra ipsum.',
    nationality: 'Turkish',
    tags: ['Soup'],
    title: 'Corba',
    type: 'food',
    video: 'https://www.youtube.com/watch?v=VVnZd8A84z4',
  },
  {
    alcoholic: '',
    categoryRecom: 'Side',
    category: 'Side',
    group: 'meals',
    id: '53060',
    image: 'https://www.themealdb.com/images/media/meals/tkxquw1628771028.jpg',
    ingredients: [
      ['Filo Pastry', '1 Packet'],
      ['Minced Beef', '150g'],
      ['Onion', '150g'],
      ['Oil', '40g'],
      ['Salt', 'Dash'],
      ['Pepper', 'Dash'],
    ],
    instructions: 'leo a diam sollicitudin tempor',
    nationality: 'Croatian',
    tags: ['Streetfood', ' Onthego'],
    title: 'Burek',
    type: 'food',
    video: 'https://www.youtube.com/watch?v=YsJXZwE5pdY',
  },
  {
    alcoholic: '',
    categoryRecom: 'Side',
    category: 'Side',
    group: 'meals',
    id: '52978',
    image: 'https://www.themealdb.com/images/media/meals/mlchx21564916997.jpg',
    ingredients: [
      ['Potatoes', '2 large'],
      ['Butter', '2 tbs'],
      ['Cheese', '150g'],
      ['Onion', '1 large'],
      ['Red Pepper', '1 large'],
      ['Red Chile Flakes', 'Pinch'],
    ],
    instructions: 'nec nam aliquam sem et',
    nationality: 'Turkish',
    tags: ['SideDish'],
    title: 'Kumpir',
    type: 'food',
    video: 'https://www.youtube.com/watch?v=IEDEtZ4UVtI',
  },
  {
    alcoholic: '',
    categoryRecom: 'Vegetarian',
    category: 'Vegetarian',
    group: 'meals',
    id: '53026',
    image: 'https://www.themealdb.com/images/media/meals/n3xxd91598732796.jpg',
    ingredients: [
      ['Broad Beans', '3 cups'],
      ['Spring Onions', '6'],
      ['Garlic Clove', '4'],
      ['Parsley', '1/4 cup'],
      ['Cumin', '2 tsp'],
      ['Baking Powder', '1 tsp'],
      ['Cayenne Pepper', '1/2 tsp'],
      ['Flour', 'Spinkling'],
      ['Vegetable Oil', 'As required'],
    ],
    instructions: 'natoque penatibus et magnis dis',
    nationality: 'Egyptian',
    tags: [],
    title: 'Tamiya',
    type: 'food',
    video: 'https://www.youtube.com/watch?v=mulqW-J3Yy4',
  },
  {
    alcoholic: '',
    categoryRecom: 'Vegetarian',
    category: 'Vegetarian',
    group: 'meals',
    id: '52785',
    image: 'https://www.themealdb.com/images/media/meals/wuxrtu1483564410.jpg',
    ingredients: [
      ['Toor dal', '1 cup'],
      ['Water', '2-1/2 cups'],
      ['Salt', '1 tsp'],
      ['Turmeric', '1/4 tsp'],
      ['Ghee', '3 tbs'],
      ['Chopped tomatoes', '1 cup'],
      ['Cumin seeds', '1/2 tsp'],
      ['Mustard Seeds', '1/2 tsp'],
      ['Bay Leaf', '2'],
      ['Green Chili', '1 tbs chopped'],
      ['Ginger', '2 tsp shredded'],
      ['Cilantro', '2 tbs '],
      ['Red Pepper', '1/2 tsp'],
      ['Salt', '1/2 tsp'],
      ['Sugar', '1 tsp'],
    ],
    instructions: 'egestas erat imperdiet sed euismod',
    nationality: 'Indian',
    tags: ['Curry', 'Vegetarian', 'Cake'],
    title: 'Dal fry',
    type: 'food',
    video: 'https://www.youtube.com/watch?v=J4D855Q9-jg',
  },
  {
    alcoholic: '',
    categoryRecom: 'Miscellaneous',
    category: 'Miscellaneous',
    group: 'meals',
    id: '52804',
    image: 'https://www.themealdb.com/images/media/meals/uuyrrx1487327597.jpg',
    ingredients: [
      ['Vegetable Oil', 'Dash'],
      ['Beef Gravy', '1 Can'],
      ['Potatoes', '5 thin cut'],
      ['Cheese Curds', '2 cups'],
    ],
    instructions: 'praesent semper feugiat nibh sed',
    nationality: 'Canadian',
    tags: ['UnHealthy', 'Speciality', 'HangoverFood'],
    title: 'Poutine',
    type: 'food',
    video: 'https://www.youtube.com/watch?v=UVAMAoA2_WU',
  },
];

export const INITIAL_STATE_DRINK = {
  recipe: {
    currentRecipe: {
      alcoholic: 'Optional alcohol',
      category: 'Ordinary Drink',
      categoryRecom: 'Optional alcohol',
      group: 'cocktails',
      id: '15997',
      image: 'https://www.thecocktaildb.com/images/media/drink/vyxwut1468875960.jpg',
      ingredients: DRINK_INGREDIENTS,
      instructions: DRINK_INSTRUCTIONS,
      nationality: '',
      tags: [],
      title: 'GG',
      type: 'drink',
      video: '',
    },
    finishButtonDisabled: true,
    recommendations: FOOD_RECOMMENDATIONS,
    isFetching: false,
    error: null,
    inProgress: false,
  },
};
