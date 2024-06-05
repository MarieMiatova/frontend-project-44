import randomNumber from '../randomNumber.js';
import createGameLogic from '../index.js';

// Функция для генерации арифметической прогрессии
const generateArithmeticProgression = (firstNum, step, length) => {
  const progression = [firstNum];

  for (let i = 0; progression.length < length; i += 1) {
    progression.push(progression[i] + step);
  }

  return progression;
};

// Функция для запуска игры на определение пропущенного числа в прогрессии
const startProgressionGame = () => {
  const description = 'What number is missing in the progression';
  const minNum = 1;
  const maxNum = 10;
  const minStep = 1;
  const maxStep = 5;
  const minLength = 10;
  const maxLength = 20;
  const minIndex = 0;
  const maxIndex = 10;

  const getQuestionAndAnswer = () => {
    const progressionLength = randomNumber(minLength, maxLength);
    const firstNumProgression = randomNumber(minNum, maxNum);
    const progressionStep = randomNumber(minStep, maxStep);

    // eslint-disable-next-line max-len
    const progression = generateArithmeticProgression(firstNumProgression, progressionStep, progressionLength);
    const randomIndex = randomNumber(minIndex, maxIndex);

    const expectedAnswer = String(progression[randomIndex]);
    progression[randomIndex] = '..';
    const question = progression.join(' ');

    return [question, expectedAnswer];
  };

  createGameLogic(description, getQuestionAndAnswer);
};

export default startProgressionGame;
