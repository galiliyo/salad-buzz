const foodItem = [
  {
    section: "Salad",
    name: "Avu-cobb-O",
    img: "/img/avo-cobb-o-217-300x300.jpg",
  },
  {
    section: "Soup",
    name: "Clam-Dwon-Chowder",
    img: "/img/clamChowder_Salad_hr_120603-300x300.jpg",
  },
  {
    section: "Salad",
    name: "Crispy-Chicken",
    img: "/img/crispy_Chicken_Salad_15-300x300.jpg",
  },
  { section: "Salad", name: "La House Salad", img: "/img/house-salad-217.png" },
  {
    section: "Salad",
    name: "Caesar's-suprize",
    img: "/img/mightyChickenCaesarSalad_16-300x300.jpg",
  },
  {
    section: "Soup",
    name: "Griled Chicken",
    img: "/img/simplygrilledchickensalad-300x300.jpg",
  },
  {
    section: "Salad",
    name: "Avu-cobb-O Salad",
    img: "/img/southwestsalad-300x300.jpg",
  },
]

export const foods = foodItem.reduce((res, item) => {
  res[item.section]
    ? res[item.section].push(item)
    : (res[item.section] = [item])
  return res
}, {})
