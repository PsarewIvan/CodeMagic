'use strict'

var CLOUD_WIDTH = 420;
var CLOUD_HEIGHT = 270;
var CLOUD_FILL = '#fff';
var CLOUD_SHADOW_FILL = 'rgba(0, 0, 0, 0.7)';
var SHADOW_OFFSET = 10;
var BAR_WIDTH = 40;
var PLAYERS_BAR_COLOR = 'rgba(255, 0, 0, 1)';
var BAR_START_COORD = []

var cloudStartCoord = [100, 10];

var renderCloud = function(ctx, cloudCoord) {
    ctx.fillStyle = CLOUD_SHADOW_FILL;
    ctx.fillRect(cloudCoord[0] + SHADOW_OFFSET, cloudCoord[1] + SHADOW_OFFSET, CLOUD_WIDTH, CLOUD_HEIGHT);

    ctx.fillStyle = CLOUD_FILL;
    ctx.fillRect(cloudCoord[0], cloudCoord[1], CLOUD_WIDTH, CLOUD_HEIGHT);
}

var renderBar = function(ctx, barCoord, barHeight, color) {
    ctx.fillStyle = color;
    ctx.fillRect(barCoord[0], barCoord[1], BAR_WIDTH, barHeight)
}

window.renderStatistics = function(ctx, names, times) {
    renderCloud(ctx, cloudStartCoord);

    ctx.fillStyle = '#000';
    ctx.font = '16px "PT Mono"';
    ctx.fillText('Ура вы победили!', 110, 40);
    ctx.fillText('Список результатов:', 110, 60);



    this.console.log(names);
    this.console.log(times);
}
