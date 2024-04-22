import getRandomNumber from '../randomNumber.js';
import createGameLogic from '../index.js';

const evenLogic = (description) => {
  const minNumber = 1;
  const maxNumber = 25;

  const isEven = (number) => number % 2 === 0;

  const question = getRandomNumber(minNumber, maxNumber);
  const answer = isEven(question) ? 'yes' : 'no';

  return {
    description,
    question,
    answer,
  };
};

const startEvenGame = () => {
  const description = 'Answer "yes" if the number is even, otherwise answer "no".';
  const { description: gameDescription, question, answer } = evenLogic(description);
  createGameLogic(gameDescription, question, answer);
};

export default startEvenGame;
