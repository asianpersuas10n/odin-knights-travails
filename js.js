class Node {
  constructor(vertex) {
    this.vertex = vertex;
    this.edges = [];
    this.path = [vertex];
  }
}

function knightMoves(start, end) {
  const result = queueMove(new Node(start), [start], end);
  let message = `  => You made it in ${
    result.length - 1
  } moves!  Here's your path: `;
  for (let i = 0; i < result.length; i++) {
    if (result.length - 1 === i) {
      message += `[${result[i]}]`;
      continue;
    }
    message += `[${result[i]}] => `;
  }
  console.log(message);
  return message;
}

function queueMove(current, arr, end) {
  for (const move of horseMoves) {
    if (movePossible(current, move)) {
      const node = new Node([
        move[0] + current.vertex[0],
        move[1] + current.vertex[1],
      ]);
      node.path = current.path.concat([node.vertex]);
      node.edges.push(current.vertex);
      if (current.vertex[0] === end[0] && current.vertex[1] === end[1]) {
        return current.path;
      }
      current.edges.push(node.vertex);
      arr.push(node);
    }
  }
  arr.shift();
  return queueMove(arr[0], arr, end);
}

function movePossible(now, nextHorseMove) {
  let next = [
    now.vertex[0] + nextHorseMove[0],
    now.vertex[1] + nextHorseMove[1],
  ];
  return (
    (next[0] >= 0 && next[0] <= 7 && next[1] >= 0 && next[1] <= 7) ||
    now.edges.some((x) => x[0] === next[0] && x[1] === next[1])
  );
}

const horseMoves = [
  [-2, -1],
  [-1, -2],
  [1, -2],
  [2, -1],
  [2, 1],
  [1, 2],
  [-2, 1],
  [-1, 2],
];

knightMoves([0, 0], [1, 2]); //== [[0,0],[1,2]]
knightMoves([0, 0], [3, 3]); //== [[0,0],[1,2],[3,3]]
knightMoves([3, 3], [0, 0]); //== [[3,3],[1,2],[0,0]]
