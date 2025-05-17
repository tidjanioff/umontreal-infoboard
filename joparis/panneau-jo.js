const eventDate = new Date('2024-07-26T19:30:00');

function updateCountdown() {
  const now = new Date();
  
  // Décalage horaire entre Paris et Montréal 
  const timeOffset = 6 * 60 * 60 * 1000; // 6 heures de décalage
  
  const montrealTime = now.getTime() + timeOffset;
  const montrealNow = new Date(montrealTime);
  
  const timeDifference = eventDate - montrealNow;

  // const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
  // const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  // const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
  // const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

  const days = 0;
  const hours = 0;
  const minutes = 0;
  const seconds = 0;

  document.getElementById('countdown').innerHTML = `${days} JOUR(S) ${hours} HEURE(S) ${minutes} MINUTE(S) ${seconds} SECONDE(S)`;


  setTimeout(updateCountdown, 1000);
}

updateCountdown();