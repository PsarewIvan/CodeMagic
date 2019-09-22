'use strict';

// Работа с формой
(function () {
  var userName = document.querySelector('.setup-user-name');
  var playerSetup = document.querySelector('.setup-player');
  var wizardCoat = playerSetup.querySelector('.wizard-coat');
  var wizardCoatInput = playerSetup.querySelector('.js__input-coat-color');
  var wizardEyes = playerSetup.querySelector('.wizard-eyes');
  var wizardEyesInput = playerSetup.querySelector('.js__input-eyes-color');
  var fireballBlock = playerSetup.querySelector('.setup-fireball');
  var fireballWrapColor = playerSetup.querySelector('.setup-fireball-wrap');
  var fireballInput = playerSetup.querySelector('.js__input-fireball-color');

  // --------- Валидация формы ------------
  userName.addEventListener('invalid', function () {
    if (userName.validity.tooShort) {
      userName.setCustomValidity('Минимум 2 символа');
    } else if (userName.validity.tooLong) {
      userName.setCustomValidity('Максимум 25 символов');
    } else if (userName.validity.valueMissing) {
      userName.setCustomValidity('Обязательное поле');
    } else {
      userName.setCustomValidity('');
    }
  });

  // --------- Изменение цвета мантии персонажа ----------
  wizardCoat.addEventListener('click', function () {
    var randomColor = window.global.getRandomArrayValue(window.global.COAT_COLORS);
    wizardCoatInput.setAttribute('value', randomColor);
    window.global.colorize(wizardCoat, randomColor);
  });

  // --------- Изменение цвета глаз персонажа -----------
  wizardEyes.addEventListener('click', function () {
    var randomColor = window.global.getRandomArrayValue(window.global.EYES_COLORS);
    wizardEyesInput.setAttribute('value', randomColor);
    window.global.colorize(wizardEyes, randomColor);
  });

  // ---------- Изменение цвета фаерболла -----------
  fireballBlock.addEventListener('click', function () {
    var randomColor = window.global.getRandomArrayValue(window.global.FIRABALL_COLORS);
    fireballInput.setAttribute('value', randomColor);
    window.global.colorize(fireballWrapColor, randomColor);
  });
})();
