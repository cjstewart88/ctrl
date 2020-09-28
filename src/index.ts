let instructions;
let moves;

const draw = () => {
  const c = document.getElementById("canvas");
  const ctx = c.getContext("2d");
  ctx.clearRect(0, 0, 800, 600);
  ctx.beginPath();
  moves.forEach(move => {
    ctx.lineTo(move[0], move[1]);
  })
  ctx.stroke();
  ctx.closePath();
}

const gatherIntructions = () => {
  moves = [[0, 0]];
  instructions = instructionsEl.value.split('\n');
  instructions.forEach((instruction, i) => {
    let newMove = [];
    let prevX = 0;
    let prevY = 0;

    if (i !== 0) {
      console.log(i)
      prevX = moves[i][0];
      prevY = moves[i][1];
    }

    const instructionParts = instruction.split(' ');
    const direction = instructionParts[0];
    const distance = parseInt(instructionParts[1]);
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

const instructionsEl = document.getElementById('instructions');
const runBtn = document.getElementById('run');
runBtn.addEventListener('click', () => gatherIntructions());

gatherIntructions();
