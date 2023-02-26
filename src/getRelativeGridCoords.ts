interface GridCoords {
  topRight: {
    x: number;
    y: number;
  };
  bottomRight: {
    x: number;
    y: number;
  };
  topLeft: {
    x: number;
    y: number;
  };
  bottomLeft: {
    x: number;
    y: number;
  };
}

export const getRelativeGridCoords = () => {
  const video = document.getElementById('video')! as HTMLVideoElement; // replace 'myElement' with the ID of the element you want to get the coordinates of
  const grid = document.getElementById('grid-overlay') as HTMLTableElement; // replace 'otherElement' with the ID of the element you want to get the coordinates relative to

  const videoRect = video.getBoundingClientRect();
  const gridRect = grid.getBoundingClientRect();

  const coordinates = {
    top: videoRect.top - gridRect.top,
    left: videoRect.left - gridRect.left,
  };

  return {
    bottom_left: bl,
    bottom_right: br,
    top_left: tl,
    top_right: tr,
  };
};
