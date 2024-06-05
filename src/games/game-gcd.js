import getRandomNumber from '../randomNumber.js';
import createGameLogic from '../index.js';

const calculateGcd = (x, y) => {
  if (y === 0) {
    return x;
  }
  return calculateGcd(y, x % y);
};

const startGcdGame = () => {
  const description = 'Find the greatest common divisor of given numbers.';
  const minNumber = 1;
  const maxNumber = 50;

  const getQuestionAndAnswer = () => {
    const firstNumber = getRandomNumber(minNumber, maxNumber);
    const secondNumber = getRandomNumber(minNumber, maxNumber);

    const question = `${firstNumber} ${secondNumber}`;
    const expectedAnswer = calculateGcd(firstNumber, secondNumber);

    return [question, String(expectedAnswer)];
  };

  createGameLogic(description, getQuestionAndAnswer);
};

export default startGcdGame;
