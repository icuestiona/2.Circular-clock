function updateClock() {
  const now = new Date();
  const hours = now.getHours() % 12;
  const minutes = now.getMinutes();
  const seconds = now.getSeconds();

  const hourHand = document.querySelector(".hour-hand");
  const minuteHand = document.querySelector(".minute-hand");
  const secondHand = document.querySelector(".second-hand");

  const hourRotation = (360 / 12) * (hours + minutes / 60) + 90;
  const minuteRotation = (360 / 60) * (minutes + seconds / 60) + 90;
  const secondRotation = (360 / 60) * seconds + 90;

  hourHand.style.transform = `translate(-50%, -50%) rotate(${hourRotation}deg)`;
  minuteHand.style.transform = `translate(-50%, -50%) rotate(${minuteRotation}deg)`;
  secondHand.style.transform = `translate(-50%, -50%) rotate(${secondRotation}deg)`;
}

setInterval(updateClock, 1000);
updateClock();
