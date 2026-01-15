import React, { useEffect, useRef, useState } from "react";

// This file is for creating the video background on the home pageXOffset.
// It tiles a little video.

const VideoTextureBackground = ({ src, tileSize = 150 }) => {
  const videoRef = useRef(null);
  const [cols, setCols] = useState(0);
  const [rows, setRows] = useState(0);
  const [canvases, setCanvases] = useState([]);

  useEffect(() => {
    const updateTiles = () => {
      const c = Math.ceil(window.innerWidth / tileSize);
      const r = Math.ceil(window.innerHeight / tileSize);
      setCols(c);
      setRows(r);
      setCanvases(new Array(c * r).fill(null));
    };

    updateTiles();
    window.addEventListener("resize", updateTiles);
    return () => window.removeEventListener("resize", updateTiles);
  }, [tileSize]);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    let raf;

    const draw = () => {
      if (video.readyState >= 2) {
        canvases.forEach((canvas) => {
          if (!canvas) return;
          const ctx = canvas.getContext("2d");
          ctx.drawImage(video, 0, 0, tileSize, tileSize);
        });
      }
      raf = requestAnimationFrame(draw);
    };

    const handleCanPlay = () => {
      video.play().then(() => {
        draw();
      });
    };

    video.addEventListener("canplay", handleCanPlay);

    return () => {
      video.removeEventListener("canplay", handleCanPlay);
      cancelAnimationFrame(raf);
    };
  }, [canvases, tileSize]);

  return (
    <div
      className="fixed inset-0 z-0 pointer-events-none grid"
      style={{
        width: "100vw",
        height: "100vh",
        gridTemplateColumns: `repeat(${cols}, ${tileSize}px)`,
        gridTemplateRows: `repeat(${rows}, ${tileSize}px)`,
      }}
    >
      <video
        ref={videoRef}
        src={src}
        muted
        loop
        playsInline
        autoPlay
        style={{ display: "none" }}
      />

      {canvases.map((_, i) => (
        <canvas
          key={i}
          width={tileSize}
          height={tileSize}
          ref={(el) => (canvases[i] = el)}
        />
      ))}
    </div>
  );
};

export default VideoTextureBackground;
