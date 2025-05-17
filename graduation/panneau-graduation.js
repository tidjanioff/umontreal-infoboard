const targetDate = new Date('2024-08-19T10:00:00');

function updateCountdown() {
  const now = new Date();
  const timeDifference = targetDate - now;

  // const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
  const days = 0;

  document.getElementById('countdown2').innerHTML = ` JJ- ${days}`;

  setTimeout(updateCountdown, 1000);
}

updateCountdown();
