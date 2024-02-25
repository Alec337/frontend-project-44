import gameLogics from '../index.js';
import getRandomNumber from '../utilities/random-number.js';

const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (num) => {
  for (let i = 2, s = Math.sqrt(num); i <= s; i += 1) {
    if (num % i === 0) return 'no';
  }
  return 'yes';
};

const generateRound = () => {
  const questionNumber = getRandomNumber();
  const gameQuestion = questionNumber;
  const correctAnswer = String(isPrime(gameQuestion));
  return [gameQuestion, correctAnswer];
};

const brainPrimeGame = () => {
  gameLogics(description, generateRound);
};
export default brainPrimeGame;
