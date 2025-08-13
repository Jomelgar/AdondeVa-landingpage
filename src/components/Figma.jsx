import React, { useState, useEffect } from "react";
import { Spin } from "antd";

const FigmaPhone = () => {
  const [loading, setLoading] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);

  // Cuando el iframe carga, activa fade out del spinner y luego oculta loader
  const handleLoad = () => {
    setFadeOut(true);
    setTimeout(() => {
      setLoading(false);
      setFadeOut(false);
    }, 400);
  };

  return (
    <div className="relative flex justify-center max-w-full mx-auto" style={{ width: 345 }}>
      {/* Loader */}
      {loading && (
        <div
          className={`absolute top-0 left-0 z-20 flex items-center justify-center w-[345px] h-[650px] bg-white bg-opacity-80 rounded-2xl transition-opacity duration-400 ${
            fadeOut ? "opacity-0" : "opacity-100"
          }`}
        >
          <Spin size="large" tip="Cargando prototipo..." />
        </div>
      )}

      {/* Iframe */}
      <iframe
        src="https://embed.figma.com/proto/fkxtxwFyTqFPivDOn5gWyn/Prototipo-DondeVa-GE2?node-id=7-54&embed-host=share&scaling=scale-down&hide-ui=1"
        allowFullScreen
        style={{
          border: "1px solid rgba(0, 0, 0, 0.1)",
          width: "345px",
          height: "650px",
          borderRadius: "20px",
          boxShadow: "0 8px 24px rgba(0,0,0,0.12)",
          transition: "filter 0.3s ease",
          filter: loading ? "blur(1px) brightness(0.9)" : "none",
        }}
        onLoad={handleLoad}
        title="Prototipo AdondeVa"
      ></iframe>
    </div>
  );
};

export default FigmaPhone;
