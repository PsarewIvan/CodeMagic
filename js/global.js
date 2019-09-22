'use strict';

// Глобальные переменные и функции
window.global = (function () {
  return {
    ESC_KEYCODE: 27,
    ENTER_KEYCODE: 13,

    // Доступные цвета плащей
    COAT_COLORS: [
      'rgb(101, 137, 164)',
      'rgb(241, 43, 107)',
      'rgb(146, 100, 161)',
      'rgb(56, 159, 117)',
      'rgb(215, 210, 55)',
      'rgb(0, 0, 0)'
    ],

    // Доступные цвета глаз
    EYES_COLORS: [
      'black',
      'red',
      'blue',
      'yellow',
      'green'
    ],

    // Доступные цвета файрболов
    FIRABALL_COLORS: [
      '#ee4830',
      '#30a8ee',
      '#5ce6c0',
      '#e848d5',
      '#e6e848'
    ],

    // Вернет случайное значение из массива
    getRandomArrayValue: function (array) {
      return array[Math.floor(Math.random() * array.length)];
    },

    // Вернет строку по одному случайному значению из двух масивов
    getRandomStringFromTwoArray: function (firstArray, secondArray) {
      if (Math.round(Math.random())) {
        return this.getRandomArrayValue(firstArray) + ' ' + this.getRandomArrayValue(secondArray);
      } else {
        return this.getRandomArrayValue(secondArray) + ' ' + this.getRandomArrayValue(firstArray);
      }
    },

    // События клавиатуры
    isEscEvent: function (evt, action) {
      if (evt.keyCode == this.ESC_KEYCODE) {
        action();
      }
    },
    isEnterEvent: function (evt, action) {
      if (evt.keyCode == this.ENTER_KEYCODE) {
        action();
      }
    },

    // Переключение цвета
    colorize: function (element, color) {
      if (element.tagName.toLowerCase() === 'div') {
        element.setAttribute('style', 'background: ' + color + ';');
      } else {
        element.setAttribute('style', 'fill: ' + color + ';');
      }
    }
  };
})();
