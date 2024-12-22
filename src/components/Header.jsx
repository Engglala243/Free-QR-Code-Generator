import React from 'react';

function Header() {
  return (
    <>
      <style>
        {`
          @keyframes shine {
            to {
              background-position: 200% center;
            }
          }
          @keyframes bounce {
            0%, 100% {
              transform: translateY(0);
            }
            50% {
              transform: translateY(-5px);
            }
          }
          .gradient-text {
            background: linear-gradient(90deg, #ffffff, #4f46e5, #ffffff);
            background-size: 200% auto;
            -webkit-background-clip: text;
            background-clip: text;
            -webkit-text-fill-color: transparent;
            animation: shine 3s linear infinite, bounce 2s ease-in-out infinite;
          }
          .header-text:hover {
            transform: scale(1.05);
            letter-spacing: 0.12em;
          }
        `}
      </style>
      <nav className="fixed top-0 left-0 w-full p-4 bg-white/10 backdrop-blur-md border-b border-white/10 z-[1000]">
        <div className="flex justify-center overflow-hidden">
          <h1 className="text-white text-3xl font-bold text-center tracking-wider font-poppins cursor-default shadow-lg transition-all duration-300 ease-in-out header-text gradient-text">
            Welcome to Life Time Free QR-Code Generator
          </h1>
        </div>
      </nav>
    </>
  );
}

export default Header;