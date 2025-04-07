import React, { useState } from 'react';
import './dashboard.css';

const FaceCapture = () => {
  const [imageURL, setImageURL] = useState('');
  const [imageFile, setImageFile] = useState(null);

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const imgUrl = URL.createObjectURL(file);
      setImageURL(imgUrl);
      setImageFile(file);
    }
  };

  const handleRetake = () => {
    setImageURL('');
    setImageFile(null);
  };

  const handleSend = () => {
    alert('Image sent!');
    // Hook to backend here
  };

  return (
    <div className="dashboard-container">
      <h1>Facial Recognition</h1>

      {!imageURL ? (
        <>
          <input
            type="file"
            accept="image/*"
            capture="user"
            onChange={handleImageUpload}
            style={{ marginTop: '20px' }}
          />
        </>
      ) : (
        <>
          <img
            src={imageURL}
            alt="preview"
            style={{ width: '300px', marginTop: '20px', borderRadius: '10px' }}
          />
          <div style={{ marginTop: '20px' }}>
            <button className="btn" onClick={handleRetake}>Retake</button>
            <button className="btn" onClick={handleSend} style={{ marginLeft: '10px' }}>Send</button>
          </div>
        </>
      )}
    </div>
  );
};

export default FaceCapture;
