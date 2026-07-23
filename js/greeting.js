//나의 이름을 묻는 폼이 있다
//나의 이름을 입력시 이 폼은 사라지고 내 이름이 화면에 떠야한다
//새로고침을 해도 그대로 떠야한다. (값을 localStorage에 저장한다.)
const logoutForm = document.querySelector('#logout-form');
const loginForm = document.querySelector('#login-form');
const loginInput = document.querySelector('#login-form input');
const greeting = document.querySelector('#greeting');
const HIDDEN_CLASSNAME = 'hidden';
const USERNAME_KEY = 'username';
function onLoginSubmit(event) {
  event.preventDefault();
  const username = loginInput.value;
  loginForm.classList.add(HIDDEN_CLASSNAME);
  localStorage.setItem(USERNAME_KEY, username);
  paintGreeting(username);
}

function paintGreeting(username) {
  greeting.innerText = `hello ${username}`;
  greeting.classList.remove(HIDDEN_CLASSNAME);
  logoutForm.classList.remove(HIDDEN_CLASSNAME);
}

const savedUsername = localStorage.getItem(USERNAME_KEY);

console.log(savedUsername);

//로그아웃
function logoutSubmit(event) {
  event.preventDefault();

  localStorage.removeItem(USERNAME_KEY);
  window.location.reload();
}

if (savedUsername === null) {
  //show the form
  loginForm.classList.remove(HIDDEN_CLASSNAME);
  loginForm.addEventListener('submit', onLoginSubmit);
} else {
  //show the greeting

  // logoutForm.classList.remove(HIDDEN_CLASSNAME);
  paintGreeting(savedUsername);
}
logoutForm.addEventListener('submit', logoutSubmit);
