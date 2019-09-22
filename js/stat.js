'use strict';

// Работа с облаком статистики при завершении уровня
(function () {
  var CLOUD_WIDTH = 420;
  var CLOUD_HEIGHT = 270;
  var CLOUD_FILL = '#fff';
  var CLOUD_SHADOW_FILL = 'rgba(0, 0, 0, 0.7)';
  var SHADOW_OFFSET = 10;
  var BAR_WIDTH = 40;
  var BAR_HEIGHT = 150;
  var PLAYER_BAR_COLOR = 'rgba(255, 0, 0, 1)';
  var PLAYER_BAR_NAME = 'Вы';

  var barStartCoord = [150, 240];
  var barHorizontalOffset = 50;
  var textStartCoord = [110, 40];
  var textVerticalOffset = 20;
  var textFontStyle = '16px "PT Mono"';
  var textColor = '#000';
  var cloudStartCoord = [100, 10];
  var playersNamesOffset = 15;
  var playersValuesOffset = 10;

  var renderCloud = function (ctx, cloudCoord) {
    ctx.fillStyle = CLOUD_SHADOW_FILL;
    ctx.fillRect(cloudCoord[0] + SHADOW_OFFSET, cloudCoord[1] + SHADOW_OFFSET, CLOUD_WIDTH, CLOUD_HEIGHT);

    ctx.fillStyle = CLOUD_FILL;
    ctx.fillRect(cloudCoord[0], cloudCoord[1], CLOUD_WIDTH, CLOUD_HEIGHT);
  };

  var getMaxValue = function (times) {
    var maxValue = times[0];
    for (var i = 0; i < times.length; i++) {
      if (times[i] > maxValue) {
        (maxValue = times[i]);
      }
    }
    return maxValue;
  };

  var getRandomBlueColorHSL = function () {
    var randomSaturation = Math.floor(Math.random() * 101);
    return 'hsl(240, ' + randomSaturation + '%, 50%)';
  };

  // Метод вызывается при прохождении уровня
  //  ctx - канвас на котором рисуется игра
  //  names - массив имен (случайный)
  //  times - массив по длине такой же как names, содержит время прохождения
  window.renderStatistics = function (ctx, names, times) {
    renderCloud(ctx, cloudStartCoord);

    ctx.fillStyle = textColor;
    ctx.font = textFontStyle;
    ctx.fillText('Ура вы победили!', textStartCoord[0], textStartCoord[1]);
    ctx.fillText('Список результатов:', textStartCoord[0], textStartCoord[1] + textVerticalOffset);

    var heightRatio = getMaxValue(times) / BAR_HEIGHT;
    for (var i = 0; i < names.length; i++) {
      var barWidth = barStartCoord[0] + i * (BAR_WIDTH + barHorizontalOffset);
      var barHeight = -Math.floor(times[i] / heightRatio);

      ctx.fillStyle = (names[i] == PLAYER_BAR_NAME) ?
          PLAYER_BAR_COLOR :
          getRandomBlueColorHSL();
      ctx.fillRect(barWidth, barStartCoord[1], BAR_WIDTH, barHeight);

      ctx.fillStyle = '#000';
      ctx.fillText(names[i], barWidth, barStartCoord[1] + playersNamesOffset);
      ctx.fillText(Math.floor(times[i]), barWidth, barStartCoord[1] + barHeight - playersValuesOffset);
    }
  };
})();
