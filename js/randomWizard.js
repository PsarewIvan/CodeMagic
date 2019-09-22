'use strict';

(function () {
  var NAMES = [
    'Иван',
    'Хуан Себастьян',
    'Мария',
    'Кристоф',
    'Виктор',
    'Юлия',
    'Люпита',
    'Вашингтон'
  ];
  var SURNAMES = [
    'да Марья',
    'Верон',
    'Мирабелла',
    'Вальц',
    'Онопко',
    'Топольницкая',
    'Нионго',
    'Ирвинг'
  ];
  var NUMBER_OF_WIZARD = 4;
  var wizardsDomParent = document.querySelector('.setup-similar-list');
  var template = document.querySelector('#similar-wizard-template')
    .content.querySelector('.setup-similar-item');

  var getRandomWizards = function (count) {
    var wizards = []
    for (var i = 0; i < count; i++) {
      wizards[i] = {
        name: window.global.getRandomStringFromTwoArray(NAMES, SURNAMES),
        coatColor: window.global.getRandomArrayValue(window.global.COAT_COLORS),
        eyesColor: window.global.getRandomArrayValue(window.global.EYES_COLORS)
      }
    }
    return wizards;
  };

  var buildWizard = function (wizard) {
    var element = template.cloneNode(true);
    element.querySelector('.setup-similar-label').textContent = wizard.name;
    element.querySelector('.wizard-coat').setAttribute('fill', wizard.coatColor);
    element.querySelector('.wizard-eyes').setAttribute('fill', wizard.eyesColor);
    return element;
  };

  var fillingWizards = function (count) {
    var fragment = document.createDocumentFragment();
    var wizards = getRandomWizards(count);
    for (var i = 0; i < count; i++) {
      fragment.appendChild(buildWizard(wizards[i]));
    }
    return fragment;
  };

  wizardsDomParent.appendChild(fillingWizards(NUMBER_OF_WIZARD));
  document.querySelector('.setup-similar').classList.remove('hidden');
})();
