import React, { useState } from "react";
import QRCode from "qrcode";

function GenerateQrCode() {
  const [link, setLink] = useState("");
  const [qrCodeImage, setQrCodeImage] = useState("");
  const [error, setError] = useState("");

  const isValidUrl = (url) => {
    try {
      new URL(url);
      return true;
    } catch (err) {
      alert(`Please Enter valid URL: ${err.message}`);
      return false;
    }
  };

  const handleGenerateQrCode = async (e) => {
    e.preventDefault();
    setError("");

    if (!link.trim()) {
      setError("Please enter a URL.");
      return;
    }

    if (!isValidUrl(link)) {
      setError("Invalid URL.");
      return;
    }

    try {
      const qrCode = await QRCode.toDataURL(link, {
        width: 400,
        margin: 2,
        color: {
          dark: "#000000",
          light: "#ffffff",
        },
      });
      setQrCodeImage(qrCode);
      setLink("");
    } catch (error) {
      console.error("Error generating QR code:", error);
    }
  };

  const handleClear = () => {
    setLink("");
    setQrCodeImage("");
    setError("");
  };

  return (
    <div className="fixed top-5 left-0 w-full h-screen font-poppins bg-gradient-to-br from-[#667eea] to-[#764ba2] flex flex-col items-center justify-center overflow-hidden">
      <div className="w-[90%] max-w-[400px] backdrop-blur-xl backdrop-saturate-[180%] bg-white/75 rounded-2xl border border-[rgba(209,213,219,0.3)] p-5 shadow-2xl flex flex-col text-center">
        <h1 className="text-[1.75rem] font-bold text-[#1a1a1a] text-center mb-4 drop-shadow-lg">
          QR Code Generator
        </h1>
        <form onSubmit={handleGenerateQrCode}>
          <input
            type="text"
            value={link}
            onChange={(e) => setLink(e.target.value)}
            placeholder="Enter your URL here..."
            className="w-[93%] p-3 rounded-lg border-2 border-gray-200 mb-3 text-sm focus:outline-none focus:border-indigo-500"
          />
          {error && <p className="text-red-500 mb-3">{error}</p>}
          <button
            type="submit"
            className="w-full p-3 rounded-lg bg-indigo-600 text-white font-semibold hover:bg-indigo-700 transition-colors"
          >
            Generate QR Code
          </button>
        </form>

        {qrCodeImage && (
          <div className="flex flex-col items-center mt-3 p-3 rounded-xl bg-white/90">
            <img src={qrCodeImage} alt="QR Code" className="w-[120px] h-[120px] mb-3" />
            <div className="flex gap-2 mt-3">
              <a
                href={qrCodeImage}
                download="QRCode.png"
                className="px-3 py-2 rounded-lg bg-emerald-500 text-white font-semibold text-sm hover:bg-emerald-600 transition-colors"
              >
                Download QR
              </a>
              <button
                onClick={handleClear}
                className="px-3 py-2 rounded-lg bg-red-500 text-white font-semibold text-sm hover:bg-red-600 transition-colors"
              >
                Clear
              </button>
            </div>
          </div>
        )}
      </div>
      <a
        href="https://www.thecodingsharks.in/"
        className="mt-1.5 text-center text-white font-medium text-[1.29rem]"
      >
        Powered by: Coding Sharks
      </a>
      <a
        href="https://www.linkedin.com/in/aditya-patidar-9349a3218/"
        className="absolute bottom-5 right-3 text-white font-medium font-serif text-[0.7rem]"
      >
        Created by: Aditya Patida
      </a>
    </div>
  );
}

export default GenerateQrCode;
