'use strict';

var userPic = document.querySelector('.upload');

userPic.addEventListener('mousedown', function(evt) {
  evt.preventDefault();

  var startCords = {
    x: evt.clientX,
    y: evt.clientY
  };

  var dragged = false;

  var onMouseMove = function(moveEvt) {
    moveEvt.preventDefault();
    dragged = true;

    var shift = {
      x: startCords.x - moveEvt.clientX,
      y: startCords.y - moveEvt.clientY
    };

    startCords = {
      x: moveEvt.clientX,
      y: moveEvt.clientY
    };

    setupBlock.style.top = (setupBlock.offsetTop - shift.y) + 'px';
    setupBlock.style.left = (setupBlock.offsetLeft - shift.x) + 'px';
  };

  var onMouseUp = function(upEvt) {
    upEvt.preventDefault();

    if (dragged) {
      var onClickPreventDefault = function(evt) {
        evt.preventDefault();
        userPic.removeEventListener('click', onClickPreventDefault);
      };
      userPic.addEventListener('click', onClickPreventDefault);
    }

    document.removeEventListener('mousemove', onMouseMove);
    document.removeEventListener('mouseup', onMouseUp);
  };

  document.addEventListener('mousemove', onMouseMove);
  document.addEventListener('mouseup', onMouseUp);
});
