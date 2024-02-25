import gameLogics from '../index.js';

const description = 'What number is missing in the progression?';
const getRandomElement = () => Math.floor(Math.random() * (9 - 1) + 1);
const getRandomNumber = () => Math.floor(Math.random() * (99 - 1) + 1);
let hiddenNumber = '';

const progressionGame = (RandomNumber, progressionElement, randomElement) => {
  const progression = [RandomNumber];
  let i = 1;
  while (progression.length < 10) {
    progression.push(RandomNumber + progressionElement * i);
    i += 1;
  }
  hiddenNumber = progression[randomElement];
  progression[randomElement] = '..';
  return progression.join(' ');
};

const generateRound = () => {
  const RandomNumber = getRandomNumber();
  const progressionElement = getRandomElement();
  const randomElement = getRandomElement();
  const gameQuestion = progressionGame(RandomNumber, progressionElement, randomElement);
  const correctAnswer = String(hiddenNumber);
  return [gameQuestion, correctAnswer];
};

const brainProgressionGame = () => {
  gameLogics(description, generateRound);
};
export default brainProgressionGame;
