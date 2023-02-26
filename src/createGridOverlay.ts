export const createGridOverlay = () => {
  const startVideo = document.getElementById('start-button')! as HTMLButtonElement;
  startVideo.style.setProperty('display', 'none');
  console.log('Creating grid');

  const video = document.getElementById('video')! as HTMLVideoElement;
  const canvas = document.getElementById('canvas')! as HTMLCanvasElement;
  const context = canvas.getContext('2d')!;

  video.style.left = '0';
  video.style.top = '0';

  canvas.style.position = 'absolute';
  canvas.style.left = '0';
  canvas.style.top = '0';
  canvas.style.zIndex = '2';

  console.log(canvas.style.position);

  video.style.position = 'relative';
  video.style.zIndex = '1';

  // Set the canvas size to match the video
  canvas.width = video.offsetWidth;
  canvas.height = video.offsetHeight * 2;

  // Define the grid parameters
  const rows = 8;
  const columns = 8;
  const lineWidth = 4;
  const lineColor = 'red';

  // Calculate the row and column sizes
  const rowSize = canvas.width / rows;
  const columnSize = canvas.width / columns;

  // Draw the horizontal grid lines
  for (let i = 0; i < rows + 1; i++) {
    context.beginPath();
    context.moveTo(0, i * rowSize);
    context.lineTo(canvas.width, i * rowSize);
    context.lineWidth = lineWidth;
    context.strokeStyle = lineColor;
    context.stroke();
  }

  // Draw the vertical grid lines
  for (let i = 0; i < columns + 1; i++) {
    context.beginPath();
    context.moveTo(i * columnSize, 0);
    context.lineTo(i * columnSize, canvas.width);
    context.lineWidth = lineWidth;
    context.strokeStyle = lineColor;
    context.stroke();
  }
};
