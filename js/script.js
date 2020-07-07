var addressButton = document.querySelector(".address-button");
var modalFeedback = document.querySelector(".modal-feedback");
var modalClose = modalFeedback.querySelector(".close-button");
var modalForm = modalFeedback.querySelector(".modal-form");
var modalLogin = modalFeedback.querySelector("[name=user-name]");
var modalEmail = modalFeedback.querySelector("[name=user-mail]");
var modalMessage = modalFeedback.querySelector("[name=user-message]");
let btnSubmitModal = document.querySelector(".modal-button");
var isStorageSupport = true;
var storageName = "";
var storageEmail = "";

try {
    storageName = localStorage.getItem("name");
    storageEmail = localStorage.getItem("email");
} catch (err) {
    isStorageSupport = false;
}

addressButton.addEventListener("click", function(evt) {
    evt.preventDefault();
    modalFeedback.classList.add("modal-show");
    modalLogin.focus();

    if (storageName) {
        modalLogin.value = storageName;
        modalEmail.focus();
    } else {
        modalLogin.focus();
    }
    if (storageEmail) {
        modalEmail.value = storageEmail;
        modalMessage.focus();
    }

});

modalForm.addEventListener("submit", function(evt) {
    if (!modalLogin.value || !modalEmail.value || !modalMessage.value) {
        evt.preventDefault();
        modalFeedback.classList.remove("modal-error");
        modalFeedback.offsetWidth = modalFeedback.offsetWidth;
        modalFeedback.classList.add("modal-error");
        modalLogin.required = true;
        modalEmail.required = true;
        modalMessage.required = true;
    } else {
        if (isStorageSupport) {
            localStorage.setItem("name", modalLogin.value);
            localStorage.setItem("email", modalEmail.value);
        }
    }
});

modalClose.addEventListener("click", function(evt) {
    evt.preventDefault();
    modalFeedback.classList.remove("modal-show");
    modalFeedback.classList.remove("modal-error");
});

window.addEventListener("keydown", function(evt) {
    if (evt.keyCode === 27) {
        if (modalFeedback.classList.contains("modal-show")) {
            evt.preventDefault();
            modalFeedback.classList.remove("modal-show");
            modalFeedback.classList.remove("modal-error");
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
                slide.classList.add("slider--active");
            } else {
                slide.classList.remove("slider--active");
            }
        })
    })
});