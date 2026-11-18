const form = document.getElementById('guessForm');
const input = document.getElementById('guessInput');
const message = document.getElementById('message');
const attemptCount = document.getElementById('attemptCount');
const resetButton = document.getElementById('resetButton');

let secretNumber;
let attempts;
let gameOver;

function startGame() {
  secretNumber = Math.floor(Math.random() * 100) + 1;
  attempts = 0;
  gameOver = false;
  attemptCount.textContent = attempts;
  message.textContent = 'Ayo mulai menebak!';
  message.className = 'message';
  input.disabled = false;
  input.value = '';
  resetButton.hidden = true;
  input.focus();
}

form.addEventListener('submit', (event) => {
  event.preventDefault();
  if (gameOver) return;

  const guess = Number(input.value);
  if (!Number.isInteger(guess) || guess < 1 || guess > 100) {
    message.textContent = 'Masukkan angka bulat dari 1 sampai 100.';
    message.className = 'message error';
    input.focus();
    return;
  }

  attempts += 1;
  attemptCount.textContent = attempts;

  if (guess === secretNumber) {
    message.textContent = `Benar! Angkanya ${secretNumber}. Kamu berhasil dalam ${attempts} percobaan!`;
    message.className = 'message success';
    gameOver = true;
    input.disabled = true;
    resetButton.hidden = false;
  } else {
    message.textContent = guess < secretNumber ? 'Terlalu kecil! Coba angka yang lebih besar.' : 'Terlalu besar! Coba angka yang lebih kecil.';
    message.className = 'message';
    input.select();
  }
});

resetButton.addEventListener('click', startGame);

startGame();
