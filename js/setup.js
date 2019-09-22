'use strict';

// Показ/скрытие попапа
(function () {
  // global ---
  window.setup = {
    setupBlock: document.querySelector('.setup')
  };
  // end global ---

  var setupOpenBlock = document.querySelector('.setup-open');
  var setupCloseBlock = document.querySelector('.setup-close');
  var startPopupCords = {
    x: window.setup.setupBlock.style.left,
    y: window.setup.setupBlock.style.top
  };

  var openPopup = function () {
    window.setup.setupBlock.classList.remove('hidden');
    document.addEventListener('keydown', onPopupEscPress);
  };

  var closePopup = function () {
    window.setup.setupBlock.classList.add('hidden');
    document.removeEventListener('keydown', onPopupEscPress);

    // Отрисовка попапа на штатном месте
    window.setup.setupBlock.style.top = startPopupCords.x;
    window.setup.setupBlock.style.left = startPopupCords.y;
  };

  var onPopupEscPress = function (evt) {
    window.global.isEscEvent(evt, closePopup);
  };

  setupOpenBlock.addEventListener('keydown', function(evt) {
    window.global.isEnterEvent(evt, openPopup);
  });

  setupCloseBlock.addEventListener('keydown', function(evt) {
    window.global.isEnterEvent(evt, closePopup);
  });

  setupOpenBlock.addEventListener('click', function () {
    openPopup();
  });

  setupCloseBlock.addEventListener('click', function () {
    closePopup();
  });
})();
