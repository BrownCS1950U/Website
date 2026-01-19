import { useEffect, useState } from "react";

export default function CyclingTextureBackground({ images, interval = 1000 }) {
  const [loadedImages, setLoadedImages] = useState([]);
  const [index, setIndex] = useState(0);

  // PRELOAD IMAGES SAFELY
  useEffect(() => {
    let isMounted = true;

    Promise.all(
      images.map(
        (src) =>
          new Promise((resolve) => {
            const img = new Image();
            img.src = src;

            // decode() prevents flicker on some GPUs
            img.decode?.()
              .then(() => resolve(src))
              .catch(() => resolve(src));

            img.onload = () => resolve(src);
            img.onerror = () => resolve(src);
          })
      )
    ).then((results) => {
      if (isMounted) setLoadedImages(results);
    });

    return () => {
      isMounted = false;
    };
  }, [images]);

  // INSTANT, SAFE CYCLING
  useEffect(() => {
    if (loadedImages.length === 0) return;

    const id = setInterval(() => {
      setIndex((prev) => (prev + 1) % loadedImages.length);
    }, interval);

    return () => clearInterval(id);
  }, [loadedImages, interval]);

  const current = loadedImages[index];

  return (
    <div
      className="fixed inset-0 z-0 pointer-events-none"
      style={{
        backgroundPosition: "center center", backgroundSize: "cover",
        backgroundImage: current ? `url(${current})` : undefined,
        backgroundRepeat: "repeat",
        backgroundSize: "auto",
        backgroundPosition: "0 0",
        // imageRendering: "pixelated",
      }}
    />
  );
}
