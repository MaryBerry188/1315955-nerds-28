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

addressButton.addEventListener("click", function (evt) {
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

modalForm.addEventListener("submit", function (evt) {
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

modalClose.addEventListener("click", function (evt) {
    evt.preventDefault();
    modalFeedback.classList.remove("modal-show");
    modalFeedback.classList.remove("modal-error");
});

window.addEventListener("keydown", function (evt) {
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

ymaps.ready(function () {
    var myMap = new ymaps.Map('map', {
      center: [59.938635, 30.323118],
        zoom: 17
    }, {
        searchControlProvider: 'yandex#search'
    }),

    // Создаём макет содержимого.
    MyIconContentLayout = ymaps.templateLayoutFactory.createClass(
        '<div style="color: #FFFFFF; font-weight: bold;">$[properties.iconContent]</div>'
    ),

    myPlacemark = new ymaps.Placemark(myMap.getCenter(), {
        hintContent: 'Собственный значок метки',
        balloonContent: 'Это красивая метка'
    }, {
        // Опции.
        // Необходимо указать данный тип макета.
        iconLayout: 'default#image',
        // Своё изображение иконки метки.
        iconImageHref: 'img/map-marker.png',
        // Размеры метки.
        iconImageSize: [30, 42],
        // Смещение левого верхнего угла иконки относительно
        // её "ножки" (точки привязки).
        iconImageOffset: [-5, -38]
    }),

    myPlacemarkWithContent = new ymaps.Placemark([55.661574, 37.573856], {
        hintContent: 'Собственный значок метки с контентом',
        balloonContent: 'А эта — новогодняя',
        iconContent: '12'
    }, {
        // Опции.
        // Необходимо указать данный тип макета.
        iconLayout: 'default#imageWithContent',
        // Своё изображение иконки метки.
        iconImageHref: 'images/ball.png',
        // Размеры метки.
        iconImageSize: [48, 48],
        // Смещение левого верхнего угла иконки относительно
        // её "ножки" (точки привязки).
        iconImageOffset: [-24, -24],
        // Смещение слоя с содержимым относительно слоя с картинкой.
        iconContentOffset: [15, 15],
        // Макет содержимого.
        iconContentLayout: MyIconContentLayout
    });

    myMap.geoObjects
        .add(myPlacemark)
        .add(myPlacemarkWithContent);
  });
