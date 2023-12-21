import getRandomNumber from '../randomNumber.js';
import createGameLogic from '../index.js';

const description = 'Answer "yes" if the number is even, otherwise answer "no".';
const minNumber = 1;
const maxNumber = 25;
<<<<<<< HEAD

const isEven = (number) => number % 2 === 0;

const evenLogic = () => {

=======
const isEven = (number) => number % 2 === 0;

const evenLogic = () => {
>>>>>>> parent of cb0aaa8 (Initial commit)
  const question = getRandomNumber(minNumber, maxNumber);
  const answer = isEven(question) ? 'yes' : 'no';
  return [question, answer];
};
const startEvenGame = () => {
  createGameLogic(description, evenLogic);
};
export default startEvenGame;
