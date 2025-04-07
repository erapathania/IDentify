import React, { useRef, useState, useEffect } from 'react';
import './dashboard.css';

const Dashboard = () => {
  const videoRef = useRef(null);
  const canvasRef = useRef(null);
  const [capturedImage, setCapturedImage] = useState(null);
  const [stream, setStream] = useState(null);
  const [cameraStarted, setCameraStarted] = useState(false);

  useEffect(() => {
    const startCamera = async () => {
      try {
        if (!cameraStarted) {
          const mediaStream = await navigator.mediaDevices.getUserMedia({ video: true });
          videoRef.current.srcObject = mediaStream;
          setStream(mediaStream);
          setCameraStarted(true);
        }
      } catch (err) {
        console.error('Error accessing webcam:', err);
      }
    };

    startCamera();

    return () => {
      if (stream) {
        stream.getTracks().forEach((track) => track.stop());
      }
    };
  }, [cameraStarted, stream]);

  const handleCapture = () => {
    const video = videoRef.current;
    const canvas = canvasRef.current;
    const context = canvas.getContext('2d');

    canvas.width = video.videoWidth;
    canvas.height = video.videoHeight;
    context.drawImage(video, 0, 0, canvas.width, canvas.height);

    const dataURL = canvas.toDataURL('image/png');
    setCapturedImage(dataURL);
  };

  const handleRetake = () => {
    setCapturedImage(null);
  };

  const handleSend = () => {
    alert('📤 Photo sent! You can now process it as needed.');
  };

  return (
    <div className="dashboard-container">
      <h1>Facial Recognition</h1>

      <div className="video-wrapper">
        {capturedImage ? (
          <img src={capturedImage} alt="Captured" />
        ) : (
          <video ref={videoRef} autoPlay muted playsInline />
        )}
        <canvas ref={canvasRef} style={{ display: 'none' }} />
      </div>

      <div className="button-group">
        {capturedImage ? (
          <>
            <button onClick={handleRetake}>Retake</button>
            <button onClick={handleSend}>Send</button>
          </>
        ) : (
          <button onClick={handleCapture}>Capture</button>
        )}
      </div>
    </div>
  );
};

export default Dashboard;
