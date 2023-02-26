import { gridToFEN } from './gridToFEN';
import { jsonToPieces } from './jsonToPieces';
import { posToGrid } from './posToGrid';
import { PredictionResult, startBoardDetection } from './startBoardDetection';

export const createPrediction = async () => {
  const response = await startBoardDetection();
  const data = response?.data as PredictionResult;
  // @ts-ignore
  const predictions = data.predictions;
  const pieces = jsonToPieces(data.image.height, predictions);
  const video = document.getElementById('video') as HTMLVideoElement;

  const videoSizes = {
    width: video.clientWidth,
    height: video.clientHeight,
  };

  // console.log('Roboflow: ', response);
  // console.log('Pieces: ', pieces);
  // console.log('gridOverlay', gridOverlay);
  // console.log('video', video);

  //piece of shit to grid
  const grid = posToGrid([0, 640 - 480], 480, pieces);
  console.log('grid', grid);

  const fen = gridToFEN(grid);

  console.log(fen);

  return pieces;
};
