import getRandomNumber from '../randomNumber.js';
import createGameLogic from '../index.js';

const description = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEven = (number) => number % 2 === 0;

const startEven = () => {
  const question = getRandomNumber(1, 25);
  const answer = isEven(question) === true ? 'yes' : 'no';
  return [question, answer];
};

export default () => createGameLogic(description, startEven);
