import createGameLogic from '../index.js';
import getRandomNumber from '../randomNumber.js';

const description = 'What is the result of the expression?';

const calc = (number1, number2, operator) => {
  switch (operator) {
    case '+':
      return number1 + number2;
    case '-':
      return number1 - number2;
    case '*':
      return number1 * number2;
    default:
      throw new Error(`Operation ${operator} is not supported`);
  }
};

const startCalc = () => {
  const randomNumber1 = getRandomNumber(0, 25);
  const randomNumber2 = getRandomNumber(0, 25);
  const operators = ['+', '-', '*'];
  const randomOperator = operators[getRandomNumber(0, operators.length - 1)];
  const question = `${randomNumber1} ${randomOperator} ${randomNumber2}`;
  const result = calc(randomNumber1, randomNumber2, randomOperator);

  return [question, String(result)];
};

export default () => createGameLogic(description, startCalc);
