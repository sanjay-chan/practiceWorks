import React, { useEffect, useState } from "react";
import { Html5QrcodeScanner } from "html5-qrcode";

function QRScanner() {
  const [scanResult, setScanResult] = useState(null);

  useEffect(() => {
    const scanner = new Html5QrcodeScanner("reader", {
      qrbox: {
        width: 350, // Set width to 350px
        height: 350, // Set height to 350px
      },
      fps: 5,
    });

    scanner.render(success, error);

    function success(result) {
      scanner.clear();
      setScanResult(result);
    }

    function error(err) {
      console.warn(err);
    }
  }, [scanResult]);

  return (
    <div>
      QRScanner
      {scanResult ? (
        <div>
          Success: <a href={"https://" + scanResult}>{scanResult}</a>
        </div>
      ) : (
        <div id="reader" style={{width: "500px", height :"100%"}}></div>
      )}
    </div>
  );
}

export default QRScanner;
