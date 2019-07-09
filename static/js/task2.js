
let isPlay = confirm(`Do you want to play a game?`);
const game = {
  initPrize: 100,
  currentPrize: 0,
  totalPrize: 0,
  currentAttempts: 3,
  attempts: 3,
  prizeInc: 2,
  minNum: 0,
  maxNum: 8,
  rangeInc: 4,
  rangeMaxInc: 1,
  try: false
}

while (isPlay) {
  const randomNum = Math.floor(Math.random() * (game.maxNum + game.rangeMaxInc));
  console.log(randomNum);
  game.currentPrize = game.initPrize;
  while (game.currentAttempts > 0) {
    const userInput = +prompt(`
    Chose a roullete pocket number from ${game.minNum} to ${game.maxNum}
    Attempts left: ${game.currentAttempts}
    Total prize: ${game.totalPrize}$
    Possible prize on current attempt: ${game.currentPrize}$
    `, '');
    if (userInput === randomNum) {
      game.totalPrize += game.currentPrize;
      game.try = true;
      break;
    } else {
      game.try = false;
      game.currentAttempts--;
      game.currentPrize /= game.prizeInc;
    }
  }

  if (game.try) {
    isPlay = confirm(`
      Congratulation, you won! Your prize is: ${game.totalPrize}$.
      Do you want to continue?
    `);
    game.initPrize *= game.prizeInc;
    game.maxNum += game.rangeInc;
  } else {
    isPlay = confirm(`
      Thank you for your participation. Your prize is: ${game.totalPrize}$.
      Do you want to start the game again?
    `);
    game.totalPrize = 0;
    game.initPrize = 100;
    game.maxNum = 8;
  }

  game.currentAttempts = game.attempts;
}

if (!isPlay) {
  alert(`You did not become a billionaire, but can.`);
}
