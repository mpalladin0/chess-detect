import axios from 'axios';

export interface Prediction {
  class: string;
  confidence: number;
  height: number;
  width: number;
  x: number;
  y: number;
}

export interface PredictionResult {
  image: {
    width: number;
    height: number;
  };
  predicitons: Prediction[];
}

const loadImageBase64 = (input) => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => {
      resolve(reader.result);
    };
    reader.onerror = reject;
    if (input instanceof File) {
      reader.readAsDataURL(input);
    } else if (typeof input === 'string') {
      resolve(input);
    } else {
      reject(new Error('Invalid input'));
    }
  });
};

export const startBoardDetection = async () => {
  const video = document.getElementById('video')! as HTMLVideoElement;
  const canvas = document.getElementById('canvas')! as HTMLCanvasElement;
  canvas.width = video.videoWidth;
  canvas.height = video.videoHeight;
  const ctx = canvas.getContext('2d')!;
  ctx.drawImage(video, 0, 0);
  const base64Data = canvas.toDataURL();

  // const json = { data: base64Data };
  // const jsonString = JSON.stringify(json);

  const image = await loadImageBase64(base64Data);

  try {
    const response = await axios({
      method: 'POST',
      url: 'https://detect.roboflow.com/chesspiece-detection-twhpv/5',
      params: {
        api_key: 'FWFvAZENJ5c3RZgITXzx',
      },
      data: image,
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
    });

    return response;
  } catch (err) {
    console.log(err);
  }
};
