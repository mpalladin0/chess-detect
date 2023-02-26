// Define the starting position of a chess game
// sample board will remove, replace with the board returned by posToGrid.ts
const board = [
  ['r', 'n', 'b', 'q', 'k', 'b', 'n', 'r'],
  ['p', 'p', 'p', 'p', 'p', 'p', 'p', 'p'],
  ['.', '.', '.', '.', '.', '.', '.', '.'],
  ['.', '.', '.', '.', '.', '.', '.', '.'],
  ['.', '.', '.', '.', '.', '.', '.', '.'],
  ['.', '.', '.', '.', '.', '.', '.', '.'],
  ['P', 'P', 'P', 'P', 'P', 'P', 'P', 'P'],
  ['R', 'N', 'B', 'Q', 'K', 'B', 'N', 'R'],
];

// Combine the information into a single FEN string

export const gridToFEN = (board: String[][]) => {
  //attributes to change later depending on user inputs
  const sideToMove = 'w'; //again a user input
  const castlingAvailability = 'KQkq'; //probably a user input
  const enPassantSquare = '-'; //may be a user input
  const halfMoveClock = 0; //this is a counter in case of a 50 move draw we may not need to include this field
  const fullMoveNumber = 1; //optional, total game move counter, we won't include this
  //change this later

  const fenStringWithDots =
    board.map((row) => row.join('')).join('/') + ' ' + sideToMove + ' ' + castlingAvailability + ' ' + enPassantSquare;

  //replace dots with numbers
  let fenString = '';
  let dotCounter = 0;

  for (let char of fenStringWithDots) {
    if (char === '.') {
      dotCounter += 1;
    } else {
      if (dotCounter !== 0) {
        fenString += dotCounter;
        dotCounter = 0;
      }
      fenString += char;
    }
  }

  console.log(fenString); // print statement for testing only

  return fenString;
};
