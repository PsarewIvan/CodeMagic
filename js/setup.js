'use strict'

document.querySelector('.setup').classList.remove('hidden');
document.querySelector('.setup-similar').classList.remove('hidden');

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
var numberOfWizards = 4;
var wizardsDomParent = document.querySelector('.setup-similar-list');
var template = document.querySelector('#similar-wizard-template')
    .content.querySelector('.setup-similar-item');

var getRandomArrayValue = function(array) {
  return array[Math.floor(Math.random() * array.length)];
};

var getRandomWizardName = function(firstArray, secondArray) {
  if ( Boolean(Math.round(Math.random())) ) {
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
console.log(buildWizard(getRandomWizards(2)[0]));
