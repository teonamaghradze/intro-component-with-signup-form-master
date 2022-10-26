const inputs = document.querySelectorAll("input");

const claimBtn = document.querySelector(".claim-btn");

const err = document.querySelectorAll(".err");

const mail = document.querySelector(".mail");

const errMail = document.querySelector(".err-mail");

const wrongEmail = document.querySelector(".err-wrong-email");

const container = document.querySelector(".container");

const body = document.querySelector("body");

claimBtn.addEventListener("click", function (e) {
  e.preventDefault();

  inputs.forEach((input) => {
    let regex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;

    if (input.value === "") {
      input.nextElementSibling.style.display = "block";
      input.style.borderColor = "red";
      input.classList.add("input-pad-err");
    } else {
      input.style.borderColor = "blue";
      input.nextElementSibling.style.display = "none";
      input.classList.remove("input-pad-err");
    }

    if (regex.test(mail.value)) {
      mail.style.borderColor = "blue";
    } else {
      mail.style.borderColor = "red";
      mail.classList.add("input-pad-err");
    }

    if (input.value !== "" && regex.test(mail.value)) {
      container.style.display = "none";
      body.style.backgroundColor = "white";
    }
  });
});
