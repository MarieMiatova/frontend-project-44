import createGameLogic from '../index.js';
import getRandomNumber from '../randomNumber.js';

const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (num) => {
  for (let i = 2, max = Math.sqrt(num); i <= max; i += 1) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
};

const startPrime = () => {
  const randomPrime = getRandomNumber(2, 50);
  const answer = isPrime(randomPrime) === false ? 'no' : 'yes';
  return [String(randomPrime), answer];
};

export default () => createGameLogic(description, startPrime);
