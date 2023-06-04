const empty = document.querySelector(".empty-text");
const loginButton = document.querySelector(".login-button");
const pswEmpty = document.querySelector(".password-empty");

const inputText = document.querySelector(".input");
const repeatText = document.querySelector(".psw-repeat");
const pswText = document.querySelector(".psw-input");
const repeatPsw = document.querySelector(".repeat-psw");

loginButton.addEventListener("click", function (event) {
  if (inputText.value === "") {
    empty.style.display = "block";
    event.preventDefault();
  } else {
    empty.style.display = "none";
  }
  if (pswText.value === "") {
    pswEmpty.style.display = "block";
    event.preventDefault();
  } else {
    pswEmpty.style.display = "none";
  }
  if (repeatText.value === "") {
    repeatPsw.style.display = "block";
    event.preventDefault();
  } else {
    repeatPsw.style.display = "none";
  }

  if (repeatText.value !== pswText.value) {
    // document.querySelector(".login-button").style.margin = "0 auto 0";
    document.querySelector(".match").style.display = "block";
    event.preventDefault();
  } else {
    document.querySelector(".match").style.display = "none";
  }
});
