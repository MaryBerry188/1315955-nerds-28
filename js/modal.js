var addressButton = document.querySelector(".address-button");
var modalForm = document.querySelector(".modal-feedback");
var closeButton = modalForm.querySelector(".close-button");
var feedbackForm = modalForm.querySelector(".modal-form");
var feedbackFormName = modalForm.querySelector(".feedback-form-name");
var feedbackFormEmail = modalForm.querySelector(".feedback-form-emai");
var messageUser = modalForm.querySelector(".message-user");
var modalButton = modalForm.querySelector(".modal-button");


addressButton.addEventListener("click", function (evt) {
  evt.preventDefault();
  modalForm.classList.add("modal-show");
  feedbackFormName.focus();
});

closeButton.addEventListener("click", function (evt) {
  evt.preventDefault();
  modalForm.classList.remove("modal-show");
});

feedbackForm.addEventListener("submit", function (evt) {
  if (!feedbackFormName.value) {
    evt.preventDefault();
    feedbackFormName.classList.add("modal-form-error");
  } else {
    feedbackFormName.classList.remove("modal-form-error");
  }
});

feedbackForm.addEventListener("submit", function (evt) {
  if (!feedbackFormEmail.value) {
    evt.preventDefault();
    feedbackFormEmail.classList.add("modal-form-error");
  } else {
    feedbackFormEmail.classList.remove("modal-form-error");
  }
});

feedbackForm.addEventListener("submit", function (evt) {
  if (!messageUser.value) {
    evt.preventDefault();
    feedbackText.classList.add("modal-form-error");
  } else {
    feedbackText.classList.remove("modal-form-error");
  }
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    if (modalForm.classList.contains("modal-show")) {
      evt.preventDefault();
      modalForm.classList.remove("modal-show");
    }
  }
});


var buttons = document.querySelectorAll(".slider-control");
var slides = document.querySelectorAll(".slider-item");

buttons.forEach((btn, btnIndex) => {
  btn.addEventListener("click", (evt) => {
    for (button of buttons) {
      button.classList.remove("slide--active");
    }

    evt.target.classList.add("slide--active");

    slides.forEach((slide, slideIndex) => {
      if (btnIndex === slideIndex) {
        slide.classList.add("slide--active");
      } else {
        slide.classList.remove("slide--active");
      }
    })
  })
});


var btnFilter = document.querySelectorAll(".button-filter");

btnFiltera.ddEventListener("click", function () {
  evt.preventDefault();
});
