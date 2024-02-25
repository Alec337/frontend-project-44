import gameLogics from '../index.js';

const getRandomNumber = () => Math.floor(Math.random() * (99 - 1) + 1);
const description = 'Find the greatest common divisor of given numbers.';
const gcd = (a, b) => {
  if (!b) {
    return a;
  }
  return gcd(b, a % b);
};

const generateRound = () => {
  const firstNumber = getRandomNumber();
  const secondNumber = getRandomNumber();
  const gameQuestion = `${firstNumber} ${secondNumber}`;
  const correctAnswer = String(gcd(firstNumber, secondNumber));
  return [gameQuestion, correctAnswer];
};

const brainGcdGames = () => {
  gameLogics(description, generateRound);
};
export default brainGcdGames;
