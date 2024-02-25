import gameLogics from '../index.js';

const description = 'Answer "yes" if the number is even, otherwise answer "no".';
const generateRound = () => {
  const gameQuestion = Math.floor(Math.random() * (99 - 1) + 1);
  let correctAnswer = '';
  if (gameQuestion % 2 === 0) {
    correctAnswer = 'yes';
  } else {
    correctAnswer = 'no';
  }
  return [gameQuestion, correctAnswer];
};

const brainEvenGames = () => {
  gameLogics(description, generateRound);
};
export default brainEvenGames;
