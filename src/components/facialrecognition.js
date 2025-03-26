import React from 'react';
import Webcam from 'react-webcam';

const FacialRecognition = () => {
  return (
    <div>
      <h2>Facial Recognition</h2>
      <Webcam />
      <button onClick={() => alert('Face recognized!')}>Verify</button>
    </div>
  );
};

export default FacialRecognition;
