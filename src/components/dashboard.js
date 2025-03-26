import React from 'react';

import { QRCodeCanvas } from 'qrcode.react';

const QRCodeScanner = () => {
  const qrValue = "https://example.com";

  return (
    <div>
      <h2>Scan QR Code</h2>
      
      <QRCodeCanvas value="https://example.com" />

      <button onClick={() => alert('QR Code Verified!')}>Verify</button>
    </div>
  );
};

export default QRCodeScanner;
