import { Piece } from './posToGrid';
import { Prediction } from './startBoardDetection';

interface jsonPosObject {
  x: number; // x - gridWidth/16
  y: number; // y - gridWidth/16
  width: number; // gridWidth / 8
  height: number; // gridWidth / 8
  confidence: number; // 0
  class: string; // select random from jsonNameTable
}

const jsonNameTable = [
  'black-knight',
  'black-king',
  'black-queen',
  'black-rook',
  'black-bishop',
  'black-pawn',
  'white-knight',
  'white-king',
  'white-queen',
  'white-rook',
  'white-bishop',
  'white-pawn',
];

const pieceTable = new Map();

pieceTable.set('black-knight', 'n');
pieceTable.set('black-king', 'k');
pieceTable.set('black-queen', 'q');
pieceTable.set('black-rook', 'r');
pieceTable.set('black-bishop', 'b');
pieceTable.set('black-pawn', 'p');

pieceTable.set('white-knight', 'N');
pieceTable.set('white-king', 'K');
pieceTable.set('white-queen', 'Q');
pieceTable.set('white-rook', 'R');
pieceTable.set('white-bishop', 'B');
pieceTable.set('white-pawn', 'P');

const createJSON = (gridPos: [number, number], gridWidth: number): string => {
  let returnStatement: jsonPosObject[] = [];
  let random = Math.round(Math.random() * (24 - 2) + 2);
  for (let i = 0; i < random; i++) {
    let obj: jsonPosObject = {
      x: Math.random() * gridWidth + gridPos[0] - gridWidth / 16,
      y: Math.random() * gridWidth + gridPos[1] - gridWidth / 16,
      width: gridWidth / 8,
      height: gridWidth / 8,
      confidence: 0.0,
      class: jsonNameTable[Math.round(Math.random() * (jsonNameTable.length - 1))],
    };
    returnStatement.push(obj);
  }
  return JSON.stringify({ predictions: returnStatement });
};

//Takes JSON
export const jsonToPieces = (videoHeight: number, predictions: Prediction[]): Piece[] => {
  const pieces: Piece[] = [];

  console.log(predictions);

  predictions.forEach((prediction) => {
    pieces.push(
      new Piece({
        name: pieceTable.get(prediction.class),
        pos: [prediction.x + prediction.width / 2, videoHeight - prediction.y + prediction.width / 2],
      })
    );
  });

  return pieces;
};
