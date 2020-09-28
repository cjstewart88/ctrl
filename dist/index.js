var instructions;
var moves;
var draw = function () {
    var c = document.getElementById("canvas");
    var ctx = c.getContext("2d");
    ctx.clearRect(0, 0, 800, 600);
    ctx.beginPath();
    moves.forEach(function (move) {
        ctx.lineTo(move[0], move[1]);
    });
    ctx.stroke();
    ctx.closePath();
};
var gatherIntructions = function () {
    moves = [[0, 0]];
    instructions = instructionsEl.value.split('\n');
    instructions.forEach(function (instruction, i) {
        var newMove = [];
        var prevX = 0;
        var prevY = 0;
        if (i !== 0) {
            prevX = moves[i][0];
            prevY = moves[i][1];
        }
        var instructionParts = instruction.split(' ');
        var direction = instructionParts[0];
        var distance = parseInt(instructionParts[1]);
        switch (direction) {
            case 'rt':
                newMove.push(prevX += distance, prevY);
                break;
            case 'lt':
                newMove.push(prevX -= distance, prevY);
                break;
            case 'up':
                newMove.push(prevX, prevY -= distance);
                break;
            case 'dn':
                newMove.push(prevX, prevY += distance);
                break;
        }
        moves.push(newMove);
    });
    draw();
};
var instructionsEl = document.getElementById('instructions');
var runBtn = document.getElementById('run');
runBtn.addEventListener('click', function () { return gatherIntructions(); });
gatherIntructions();
