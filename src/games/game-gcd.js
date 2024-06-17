import createGameLogic from '../index.js';
import getRandomNumber from '../randomNumber.js';

const description = 'Find the greatest common divisor of given numbers.';

const getGcd = (a, b) => {
  if (!(a && b)) {
    return b;
  }
  const max = Math.max(a, b);
  const min = Math.min(a, b);
  return getGcd(max % min, min);
};

const startGcd = () => {
  const randomNumber1 = getRandomNumber(1, 25);
  const randomNumber2 = getRandomNumber(1, 25);
  const result = getGcd(randomNumber1, randomNumber2);
  const numberNod = `${randomNumber1} ${randomNumber2}`;
  return [numberNod, String(result)];
};

export default () => createGameLogic(description, startGcd);
