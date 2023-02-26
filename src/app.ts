import { createGridOverlay } from './createGridOverlay';
import { startWebcam } from './startWebcam';

const startApp = () => {
  console.log('App running');

  const button = document.getElementById('start-button');
  if (button != null) {
    button.onclick = async () => {
      await startWebcam();
      createGridOverlay();

      const startDetection = document.createElement('button') as HTMLButtonElement;
      startDetection.innerText = 'Start Detection';

      startDetection.onclick = async () => {
        console.log('Starting detection');

        const API_KEY = 'FWFvAZENJ5c3RZgITXzx';
        const MODEL_NAME = 'chesspiece-detection-twhpv';
        const MODEL_VERSION = '5';

        async function getModel() {
          // @ts-ignore
          var model = await roboflow
            .auth({
              publishable_key: API_KEY,
            })
            .load({
              model: MODEL_NAME,
              version: MODEL_VERSION,
            });
          return model;
        }
        const initialized_model = getModel();
        initialized_model.then(function (model) {
          console.log(model);
          /// use model.detect() to make a prediction (see "Getting Predictions" below)
        });
      };

      startDetection.style.zIndex = '1000000';

      const video = document.getElementById('video')! as HTMLVideoElement;

      const computedHeight = video.clientHeight + 100;
      startDetection.style.top = `${computedHeight}px}`;

      document.body.appendChild(startDetection);

      //   document.body.appendChild(startDetection);
    };
  }
};

startApp();
