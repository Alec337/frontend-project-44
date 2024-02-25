import gameLogics from '../index.js';

const getRandomNumber = () => Math.floor(Math.random() * (99 - 1) + 1);
const description = 'What is the result of the expression?';
const operators = ['+', '-', '*'];
const randomOperators = () => {
  const min = Math.ceil(0);
  const max = Math.floor(3);
  return Math.floor(Math.random() * (max - min) + min);
};

const calc = (operator, operand1, operand2) => {
  switch (operator) {
    case '+':
      return operand1 + operand2;
    case '-':
      return operand1 - operand2;
    case '*':
      return operand1 * operand2;
    default:
      return 'Error';
  }
};

const generateRound = () => {
  const firstOperand = getRandomNumber();
  const secondOperand = getRandomNumber();
  const operator = operators[randomOperators()];
  const gameQuestion = `${firstOperand} ${operator} ${secondOperand}`;
  const correctAnswer = String(calc(operator, firstOperand, secondOperand));
  return [gameQuestion, correctAnswer];
};

const brainCalcGames = () => {
  gameLogics(description, generateRound);
};

export default brainCalcGames;
