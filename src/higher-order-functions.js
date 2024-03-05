// @ts-check

// task 1
const hi = (arr) => {
  arr.forEach((name) => {
    console.log(`Привет, ${name}`);
  });
};

// task 2
const multiply = (arr) => arr.map((num) => num * 10);

// task 3
const filterMoreThan10 = (arr) => arr.filter((num) => num > 10);

// task 4
const filterByAgeMoreThan18AndToString = (arr) => arr
  .filter((person) => person.age > 18)
  .map(({ name, age }) => `${name} (${age} лет)`);

// task 5
const totalPrice = (arr) => arr.reduce((acc, next) => acc + next.price * next.quantity, 0);

export default {
  hi,
  multiply,
  filterMoreThan10,
  filterByAgeMoreThan18AndToString,
  totalPrice,
};
