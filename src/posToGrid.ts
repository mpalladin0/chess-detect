export class Piece {
  name: string;
  pos: [number, number];

  public constructor(init?: Partial<Piece>) {
    Object.assign(this, init);
  }
}

const pieceNames = ['b', 'q', 'r', 'p', 'k', 'n', 'B', 'Q', 'R', 'P', 'K', 'N'];

// let gridpos = [100, 100];
// let gridW = 200;
// // grid pos = [x, y]
// // each piece should be [v, w] with x < v < x + gridW and y < w < y + gridW
// // for example above
// // each piece should be [v, w] with 100 < v < 300 and 100 < w < 300
// let pieces = [new Piece({ name: 'b', pos: [253, 181] })];

const testcaseGenerator = (gridPos: [number, number], gridWidth: number): Piece[] => {
  // generate two random numbers x and y
  // between 0 and 1;
  // multiple with the gridwidth
  // add both sides with gridposition
  // let gridPosition: Math.floor(Math.random() * 1000)):
  // gridPos = [3, 2]
  let pcs: Piece[] = [];
  let random = Math.round(Math.random() * (24 - 2) + 2);
  for (let i = 0; i < random; i++) {
    let x = Math.random() * gridWidth + gridPos[0];
    let y = Math.random() * gridWidth + gridPos[1];
    pcs.push(new Piece({ name: pieceNames[Math.round(Math.random() * (pieceNames.length - 1))], pos: [x, y] }));
  }
  return pcs;
};

export const posToGrid = (gridPos: number[], gridW: number, pieces: Piece[]): String[][] => {
  let grid: String[][] = [];
  const eps = gridW / 8;
  for (let i = 0; i < 8; i++) {
    grid.push([]);
    for (let j = 0; j < 8; j++) {
      grid[i].push('.');
    }
  }
  // console.log('gridPos', gridPos);
  // console.log('gridW', gridW);
  for (let piece of pieces) {
    let pos = [Math.floor((piece.pos[0] - gridPos[0]) / eps), Math.floor((piece.pos[1] - gridPos[1]) / eps)];
    console.log('pos', pos);
    grid[pos[1]][pos[0]] = piece.name;
  }
  return grid;
};
