import readlineSync from 'readline-sync';

const brainEvenGames = () => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  let i = 0;
  while (i < 3) {
    const getRandomNumber = () => Math.floor(Math.random() * (99 - 1) + 1);
    let randomNumber = getRandomNumber();
    console.log(`Question: ${randomNumber}`);
    if (randomNumber % 2 === 0) {
      randomNumber = 'yes';
    } else {
      randomNumber = 'no';
    }
    const answer = readlineSync.question('Your answer: ');
    if (answer === randomNumber) {
      console.log('Correct!');
    } else {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${randomNumber}'.`)
      console.log(`Let's try again, ${name}!`);
      return;
    }
    i += 1;
  }
  console.log(`Congratulations, ${name}!`);
};

export default brainEvenGames;
