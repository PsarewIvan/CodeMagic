'use strict'

var names = [
  'Иван',
  'Хуан Себастьян',
  'Мария',
  'Кристоф',
  'Виктор',
  'Юлия',
  'Люпита',
  'Вашингтон'
];
var surnames = [
  'да Марья',
  'Верон',
  'Мирабелла',
  'Вальц',
  'Онопко',
  'Топольницкая',
  'Нионго',
  'Ирвинг'
];
var coatColors = [
  'rgb(101, 137, 164)',
  'rgb(241, 43, 107)',
  'rgb(146, 100, 161)',
  'rgb(56, 159, 117)',
  'rgb(215, 210, 55)',
  'rgb(0, 0, 0)'
];
var eyesColors = [
  'black',
  'red',
  'blue',
  'yellow',
  'green'
];
var fireballColors = [
  '#ee4830',
  '#30a8ee',
  '#5ce6c0',
  '#e848d5',
  '#e6e848'
];
var numberOfWizards = 4;
var wizardsDomParent = document.querySelector('.setup-similar-list');
var template = document.querySelector('#similar-wizard-template')
    .content.querySelector('.setup-similar-item');

var getRandomArrayValue = function(array) {
  return array[Math.floor(Math.random() * array.length)];
};

var getRandomWizardName = function(firstArray, secondArray) {
  if ( Math.round(Math.random()) ) {
    return getRandomArrayValue(firstArray) + ' ' + getRandomArrayValue(secondArray);
  } else {
    return getRandomArrayValue(secondArray) + ' ' + getRandomArrayValue(firstArray);
  }
};

var getRandomWizards = function(count) {
  var wizards = []
  for (var i = 0; i < count; i++) {
    wizards[i] = {
      name: getRandomWizardName(names, surnames),
      coatColor: getRandomArrayValue(coatColors),
      eyesColor: getRandomArrayValue(eyesColors)
    }
  }
  return wizards;
};

var buildWizard = function(wizard) {
  var element = template.cloneNode(true);
  element.querySelector('.setup-similar-label').textContent = wizard.name;
  element.querySelector('.wizard-coat').setAttribute('fill', wizard.coatColor);
  element.querySelector('.wizard-eyes').setAttribute('fill', wizard.eyesColor);
  return element;
};

var fillingWizards = function(count) {
  var fragment = document.createDocumentFragment();
  var wizards = getRandomWizards(count);
  for (var i = 0; i < count; i++) {
    fragment.appendChild(buildWizard(wizards[i]));
  }
  return fragment;
};

wizardsDomParent.appendChild(fillingWizards(numberOfWizards));
document.querySelector('.setup-similar').classList.remove('hidden');

//-------- Открытие/закрытие окна настройки персонажа ------------
var ESC_KEYCODE = 27;
var ENTER_KEYCODE = 13;
var setupOpenBlock = document.querySelector('.setup-open');
var setupBlock = document.querySelector('.setup');
var setupCloseBlock = setupBlock.querySelector('.setup-close');

var openPopup = function() {
  setupBlock.classList.remove('hidden');
  document.addEventListener('keydown', onPopupEscPress);
};

var closePopup = function() {
  setupBlock.classList.add('hidden');
  document.removeEventListener('keydown', onPopupEscPress);
};

var onPopupEscPress = function (evt) {
  if (evt.keyCode === ESC_KEYCODE) {
    closePopup();
  }
};

var onPopupOpenBlockEnterPress = function(evt) {
  if (evt.keyCode === ENTER_KEYCODE) {
    openPopup();
  }
};

var onPopupCloseBlockEnterPress = function(evt) {
  if (evt.keyCode === ENTER_KEYCODE) {
    closePopup();
  }
};

setupOpenBlock.addEventListener('keydown', onPopupOpenBlockEnterPress);

setupCloseBlock.addEventListener('keydown', onPopupCloseBlockEnterPress);

setupOpenBlock.addEventListener('click', function() {
  openPopup();
});

setupCloseBlock.addEventListener('click', function() {
  closePopup();
});


// --------- Валидация формы ------------
var userName = document.querySelector('.setup-user-name');

userName.addEventListener('invalid', function() {
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
var playerSetup = document.querySelector('.setup-player');
var wizardCoat = playerSetup.querySelector('.wizard-coat');
var wizardCoatInput = playerSetup.querySelector('.js__input-coat-color');

var toggleWizardCoat = function() {
  var randomCoatColor = getRandomArrayValue(coatColors);
  wizardCoat.setAttribute('style', 'fill: ' + randomCoatColor + ';');
  wizardCoatInput.setAttribute('value', randomCoatColor);
};

wizardCoat.addEventListener('click', function() {
  toggleWizardCoat();
});

// --------- Изменение цвета глаз персонажа -----------
var wizardEyes = playerSetup.querySelector('.wizard-eyes');
var wizardEyesInput = playerSetup.querySelector('.js__input-eyes-color');

var toggleWizardEyes = function() {
  var randomEyesColor = getRandomArrayValue(eyesColors);
  wizardEyes.setAttribute('style', 'fill: ' + randomEyesColor + ';');
  wizardEyesInput.setAttribute('value', randomEyesColor);
};

wizardEyes.addEventListener('click', function() {
  toggleWizardEyes();
});

// ---------- Изменение цвета фаерболла -----------
var fireballBlock = playerSetup.querySelector('.setup-fireball');
var fireballWrapColor = playerSetup.querySelector('.setup-fireball-wrap');
var fireballInput = playerSetup.querySelector('.js__input-fireball-color');

var toggleFireballColor = function() {
  var randomFireballColor = getRandomArrayValue(fireballColors);
  fireballWrapColor.setAttribute('style', 'background: ' + randomFireballColor + ';');
  fireballInput.setAttribute('value', randomFireballColor);
};

fireballBlock.addEventListener('click', function() {
  toggleFireballColor();
});
