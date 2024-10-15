

function random(min = 1, max = 4) {
  return Math.floor(Math.random() * (max + 1 - min) + min);
}

let num = +prompt("Введите количество примеров");

for (let i = 1; i <= num; i++) {
  let num1 = random(1, 4);
  let operator;

  if (num1 == 1) {
    operator = '*';
  } else if (num1 == 2) {
    operator = '+';
  } else if (num1 == 3) {
    operator = '-';
  } else if (num1 == 4) {
    operator = '/';
  }
  let operand1 = random(1, 10);
  let operand2 = random(1, 10);
  let correctAnswer;
  if (operator === '+') {
    correctAnswer = (operand1 + operand2);
  } else if (operator === '-') {
    correctAnswer = (operand1 - operand2);
  } else if (operator === '*') {
    correctAnswer = (operand1 * operand2);
  } else if (operator === '/') {
    correctAnswer = (operand1 / operand2);
  }
  let userAnswer = +prompt(operand1 + ' ' + operator + ' ' + operand2 + ' = ?');
  if (userAnswer == correctAnswer) {
    console.log('Ваш ответ верный: ' + userAnswer);
  } else {
    console.log('Ваш ответ неверный: ' + userAnswer + ' Правильный ответ: ' + correctAnswer);
  }
}
alert('Откройте консоль')
