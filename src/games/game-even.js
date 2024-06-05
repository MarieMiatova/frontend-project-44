import getRandomNumber from '../randomNumber.js';
import createGameLogic from '../index.js';

const isEven = (number) => number % 2 === 0;

const startEvenGame = () => {
  const description = 'Answer "yes" if the number is even, otherwise answer "no".';
  const minNumber = 1;
  const maxNumber = 25;

  const evenLogic = () => {
    const question = getRandomNumber(minNumber, maxNumber);
    const answer = isEven(question) ? 'yes' : 'no';
    return [question, answer];
  };

  createGameLogic(description, evenLogic);
};

export default startEvenGame;
