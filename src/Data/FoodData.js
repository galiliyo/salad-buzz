export function formatPrice(price) {
  return price.toLocaleString("en-US", {
    style: "currency",
    currency: "USD"
  });
}

const FOOD_ITEMS = [
  {
    section: "Salad",
    name: "Avu-cobb-O",
    desc:
      "Grilled chicken breast, hardwood-smoked bacon, Bleu cheese crumbles, hard-boiled eggs, tomatoes and avocado on mixed greens. Served with choice of dressing.",
    img: "/img/avo-cobb-o-217-300x300.jpg",
    price: 6.5
  },
  {
    section: "Soup",
    name: "Clam-Dwon-Chowder",
    desc:
      "A bowl of soup and a Bottomless mixed greens house salad with choice of dressing.",
    img: "/img/clamChowder_Salad_hr_120603-300x300.jpg",
    price: 6.5
  },
  {
    section: "Salad",
    name: "Crispy-Chicken",
    desc:
      "Chicken tenders, hard-boiled eggs, hardwood-smoked bacon crumbles, tomatoes, croutons and Cheddar on mixed greens. Served with choice of dressing.",
    img: "/img/crispy_Chicken_Salad_15-300x300.jpg",
    price: 5.5
  },
  {
    section: "Salad",
    name: "La House Salad",
    desc:
      " Crisp lettuce, Green Leef, cucumber, red onion, and tomatoes topped with crispy bacon and a homemade chunky blue cheese",
    img: "/img/house-salad-217.png",
    price: 7
  },
  {
    section: "Salad",
    name: "Caesar's-suprize",
    desc:
      "Chicken breast, romaine lettuce, croutons and shredded Parmesan with Caesar dressing.",
    img: "/img/mightyChickenCaesarSalad_16-300x300.jpg",
    price: 9.5
  },
  {
    section: "Soup",
    name: "Chicken Broth",
    desc: "Loveley Chicken Broth to cure all ailes",
    img: "/img/simplygrilledchickensalad-300x300.jpg",
    price: 4
  },
  {
    section: "Salad",
    name: "Mediterranean Health",
    desc:
      "An all-star Mediterranean salad! tomatoes, cucumbers, with fresh parsley and a light lemony dressing",
    img: "/img/southwestsalad-300x300.jpg",
    price: 3.5
  },
  {
    section: "Drinks",
    name: "Soda",
    price: 1,
    choices: ["Coke", "Sprite", "Root Beer"]
  }
];

export const foods = FOOD_ITEMS.reduce((res, item) => {
  res[item.section]
    ? res[item.section].push(item)
    : (res[item.section] = [item]);
  return res;
}, {});

export const TOPPINGS_LIST = [
  "Nuts",
  "Seeds",
  "Mushroom",
  "Parsley",
  "Grains",
  "Beans",
  "Pita Chips",
  "Feta Cheese"
];

export const PRICE_PER_TOPPING = 0.5;
