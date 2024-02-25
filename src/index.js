import readlineSync from 'readline-sync';

const gameLogics = (description, generateRound) => {
  const roundNumber = 3;
  let round = 0;
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  console.log(description);
  while (round < roundNumber) {
    const [gameQuestion, correctAnswer] = generateRound();
    console.log(`Question: ${gameQuestion}`);
    const playerAnswer = readlineSync.question('Your answer: ');
    if (correctAnswer === playerAnswer) {
      console.log('Correct!');
    } else {
      console.log(`'${playerAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
      console.log(`Let's try again, ${name}!`);
      return;
    }
    round += 1;
  }
  console.log(`Congratulations, ${name}!`);
};

export default gameLogics;
