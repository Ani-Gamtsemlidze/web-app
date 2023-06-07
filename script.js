const empty = document.querySelector(".empty-text");
const loginButton = document.querySelector(".login-button");
const pswEmpty = document.querySelector(".password-empty");

const inputText = document.querySelector(".input");
const repeatText = document.querySelector(".psw-repeat");
const pswText = document.querySelector(".psw-input");
const repeatPsw = document.querySelector(".repeat-psw");

const email = document.querySelector("#signup-email");

const validateEmail = (email) => {
  var regex =
    /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return regex.test(String(email).toLowerCase());
};

loginButton.addEventListener("click", function (event) {
  if (inputText.value === "") {
    empty.style.display = "block";
    inputText.style.borderBottomColor = "#FC4747";
    event.preventDefault();
  } else {
    empty.style.display = "none";
    inputText.style.borderBottomColor = "#FFF";
  }
  if (pswText.value === "") {
    pswEmpty.style.display = "block";
    pswText.style.borderBottomColor = "#FC4747";
    event.preventDefault();
  } else {
    pswEmpty.style.display = "none";
    pswText.style.borderBottomColor = "#FFF";
  }
  if (repeatText.value === "") {
    repeatText.style.borderBottomColor = "#FC4747";
    event.preventDefault();
  } else {
    repeatText.style.borderBottomColor = "#FFF";
  }

  if (repeatText.value !== pswText.value) {
    document.querySelector(".match").style.display = "block";
    document.querySelector(".email-empty").style.transform = "translateY(-30%)";
    repeatText.style.borderBottomColor = "#FC4747";
    pswText.style.borderBottomColor = "#FC4747";

    document.querySelector(".signup-empty").style.top = "35%";
    event.preventDefault();
  } else {
    document.querySelector(".match").style.display = "none";

    document.querySelector(".email-empty").style.transform = "translateY(-21%)";
    document.querySelector(".signup-empty").style.top = "41%";
  }

  if (!validateEmail(email.value)) {
    event.preventDefault();
    empty.style.display = "block";
    inputText.style.borderBottomColor = "#FC4747";

    document.querySelector(".valid-email").textContent =
      "It's not a valid email";
  }

  if (inputText.value === "") {
    document.querySelector(".valid-email").textContent = "Can't be empty";
    event.preventDefault();
  }
});
