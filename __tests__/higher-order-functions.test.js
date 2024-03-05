// @ts-check

import { test, expect, jest } from '@jest/globals';
import higherOrderFunctions from '../index.js';

test('task 1', () => {
  console.log = jest.fn();
  const arr = ['Иван', 'Мария', 'Алексей', 'Ольга', 'Сергей', 'Анна'];
  higherOrderFunctions.hi(arr);
  expect(console.log).toHaveBeenCalledWith('Привет, Иван');
  expect(console.log).toHaveBeenCalledWith('Привет, Мария');
  expect(console.log).toHaveBeenCalledWith('Привет, Алексей');
  expect(console.log).toHaveBeenCalledWith('Привет, Ольга');
  expect(console.log).toHaveBeenCalledWith('Привет, Сергей');
  expect(console.log).toHaveBeenCalledWith('Привет, Анна');
});

test('task 2', () => {
  const arr = [1, 2, 3, 4, 5];
  const result = higherOrderFunctions.multiply(arr);
  expect(result).toEqual([10, 20, 30, 40, 50]);
});

test('task 3', () => {
  const arr = [5, 12, 8, 130, 44];
  const result = higherOrderFunctions.filterMoreThan10(arr);
  expect(result).toEqual([12, 130, 44]);
});

test('task 4', () => {
  const arr = [
    { name: 'Иван', age: 23 },
    { name: 'Мария', age: 18 },
    { name: 'Алексей', age: 32 },
    { name: 'Ольга', age: 24 },
    { name: 'Сергей', age: 17 },
    { name: 'Анна', age: 21 },
  ];
  const result = higherOrderFunctions.filterByAgeMoreThan18AndToString(arr);
  expect(result).toEqual([
    'Иван (23 лет)',
    'Алексей (32 лет)',
    'Ольга (24 лет)',
    'Анна (21 лет)',
  ]);
});

test('task 5', () => {
  const arr = [
    { product: 'Телефон', price: 50000, quantity: 1 },
    { product: 'Чехол', price: 1500, quantity: 2 },
    { product: 'Зарядное устройство', price: 2500, quantity: 1 },
  ];
  const result = higherOrderFunctions.totalPrice(arr);
  expect(result).toEqual(55500);
});
