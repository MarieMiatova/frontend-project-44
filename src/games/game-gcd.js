import getRandomNumber from '../randomNumber.js';
import createGameLogic from '../index.js';

const description = 'Find the greatest common divisor of given numbers.';
const minNumber = 1;
const maxNumber = 50;

const getGcd = (x, y) => {
  if (y === 0) {
    return x;
  }
  return getGcd(y, x % y);
};

const getQuestionAndAnswer = () => {
  const firstValue = getRandomNumber(minNumber, maxNumber);
  const secondValue = getRandomNumber(minNumber, maxNumber);

  const question = `${firstValue} ${secondValue}`;

  const expectedAnswer = getGcd(firstValue, secondValue);

  return [question, String(expectedAnswer)];
};
const startGcdGame = () => {
  createGameLogic(description, getQuestionAndAnswer);
};
export default startGcdGame;
