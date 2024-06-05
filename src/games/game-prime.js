import getRandomNumber from '../randomNumber.js';
import createGameLogic from '../index.js';

// Функция для проверки, является ли число простым
const isPrime = (num) => {
  for (let i = 2, max = Math.sqrt(num); i <= max; i += 1) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
};

// Функция для начала игры на определение простого числа
const startPrimeGame = () => {
  const description = 'Answer "yes" if a given number is prime. Otherwise answer "no".';
  const minNumber = 2;
  const maxNumber = 150;

  const getQuestionAndAnswer = () => {
    const question = getRandomNumber(minNumber, maxNumber);
    const expectedAnswer = isPrime(question) ? 'yes' : 'no';

    return [question, expectedAnswer];
  };

  createGameLogic(description, getQuestionAndAnswer);
};

export default startPrimeGame;
