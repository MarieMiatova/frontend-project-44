import getRandomNumber from '../randomNumber.js';
import createGameLogic from '../index.js';

const description = 'What is the result of the expression?';
const marks = ['+', '-', '*'];
const minNumber = 0;
const maxNumber = 25;

const calc = (firstValue, secondValue, mark) => {
  switch (mark) {
    case '+':
      return String(firstValue + secondValue);
    case '-':
      return String(firstValue - secondValue);
    case '*':
      return String(firstValue * secondValue);
    default:
      throw new Error(`operation ${mark} is not supported`);
  }
};

const calcLogic = () => {
  const firstValue = getRandomNumber(minNumber, maxNumber);
  const secondValue = getRandomNumber(minNumber, maxNumber);
  const mark = marks[getRandomNumber(0, marks.length - 1)];
  const answer = String(calc(firstValue, secondValue, mark));
  const question = `${firstValue} ${mark} ${secondValue}`;
  return [question, answer];
};

const startCalcGame = () => {
  createGameLogic(description, calcLogic);
};

export default startCalcGame;
