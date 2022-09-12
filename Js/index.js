"use strict";

const div1 = document.getElementById("countdown");
const timer = setInterval(function countDownTimer(month,day) {
  const now = new Date().getTime();
  const after = new Date(`${month} ${day}, 2023 00:00:00`).getTime();
  const difference = after - now;
  let remaining ;
  if (difference > 0) {
     const days = Math.floor(difference / (1000 * 60 * 60 * 24));
     const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
     const minutes = Math.floor((difference / 1000 / 60) % 60);
     const seconds = Math.floor((difference / 1000) % 60);
    remaining = `${days}օր  ${hours}ժամ ${minutes}րոպե ${seconds}վայրկյան `;
  } else if(difference === 0) {
    remaining = "Շնորհավոր Նոր Տարի";
  } else {
    clearInterval(timer);
    remaining = "Բարի գալուստ 2023 թվական";
  }
  div1.innerHTML = remaining;
}, 1000);
timer.countDownTimer(0,1);



