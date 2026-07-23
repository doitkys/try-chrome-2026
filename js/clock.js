const clock = document.querySelector('h2#clock');
function getClock() {
  const date = new Date();
  const year = String(date.getFullYear());
  const month = String(date.getMonth() + 1);
  const day = String(date.getDate());

  const hour = String(date.getHours()).padStart(2, '0');
  const minutes = String(date.getMinutes()).padStart(2, '0');
  const seconds = String(date.getSeconds()).padStart(2, '0');
  const WEEKDAY = ['월', '화', '수', '목', '금', '토', '일'];
  let week = WEEKDAY[date.getDay()];
  clock.innerText = `
  ${year}년 ${month}월 ${day}일 ${week}요일
  ${hour}:${minutes}:${seconds}`;
}
getClock();
setInterval(getClock, 1000);

//5초마다 갱신하여 보여줌
// setInterval(sayHello, 5000);

//4초후 한번 보여줌
// setTimeout(sayHello, 4000);

//getHours getMinutes getSeconds
