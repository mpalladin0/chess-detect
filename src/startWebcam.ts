export const startWebcam = async () => {
  // Get the video element from the DOM
  const video = document.getElementById('video') as HTMLVideoElement;
  const constraints: MediaStreamConstraints = {
    video: {
      facingMode: 'user', // Use front camera by default
    },
  };
  if (/iPhone|iPad|iPod/.test(navigator.userAgent)) {
    // @ts-ignore
    constraints.video.facingMode = { exact: 'environment' };
  }

  // Use navigator.mediaDevices.getUserMedia() to access the user's webcam
  await navigator.mediaDevices
    .getUserMedia(constraints)
    .then(async (stream) => {
      if (video == null) {
        throw new Error('Video dom el not loaded');
      }
      // Attach the stream to the video element

      video.srcObject = stream;
    })
    .catch((error) => {
      // Handle any errors that occur
      console.error('Error starting webcam', error);
    });

  return video;
};
