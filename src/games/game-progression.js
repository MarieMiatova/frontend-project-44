import randomNumber from '../randomNumber.js';
import createGameLogic from '../index.js';

const startProgressionGame = () => {
  const description = 'What number is missing in the progression';
  const minNumber = 1;
  const maxNumber = 10;
  const minNumberOfStepProgression = 1;
  const maxNumberOfStepProgression = 5;
  const minNumberOfLengthProgression = 10;
  const maxNumberOfLengthProgression = 20;
  const minNumberOfIndex = 0;
  const maxNumberOfIndex = 10;

  const getProgression = (firstNumOfProg, stepOfProg, lengthOfProg) => {
    const arr = [firstNumOfProg];

    for (let i = 0; arr.length <= lengthOfProg; i += 1) {
      arr.push(arr[i] + stepOfProg);
    }

    return arr;
  };

  const getQuestionAndAnswer = () => {
    const progressionLength = randomNumber(
      minNumberOfLengthProgression,
      maxNumberOfLengthProgression,
    );
    const firstNumberProgression = randomNumber(minNumber, maxNumber);
    const progressionStep = randomNumber(minNumberOfStepProgression, maxNumberOfStepProgression);
    const progression = getProgression(firstNumberProgression, progressionStep, progressionLength);
    const randomIndexValue = randomNumber(minNumberOfIndex, maxNumberOfIndex);

    const expectedAnswer = String(progression[randomIndexValue]);
    progression[randomIndexValue] = '..';
    const question = progression.join(' ');

    return [question, expectedAnswer];
  };

  createGameLogic(description, getQuestionAndAnswer);
};

export default startProgressionGame;
