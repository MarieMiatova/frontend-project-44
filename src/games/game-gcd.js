import getRandomNumber from '../randomNumber.js';
import createGameLogic from '../index.js';

// Функция для нахождения наибольшего общего делителя двух чисел
const getGcd = (x, y) => {
  if (y === 0) {
    return x;
  }
  return getGcd(y, x % y);
};

// Функция для запуска игры на нахождение НОД
const startGcdGame = () => {
  const description = 'Find the greatest common divisor of given numbers.';
  const minNumber = 1;
  const maxNumber = 50;

  const getQuestionAndAnswer = () => {
    const firstValue = getRandomNumber(minNumber, maxNumber);
    const secondValue = getRandomNumber(minNumber, maxNumber);

    const question = `${firstValue} ${secondValue}`;

    const expectedAnswer = getGcd(firstValue, secondValue);

    return [question, String(expectedAnswer)];
  };

  createGameLogic(description, getQuestionAndAnswer);
};

export default startGcdGame;
