import React, { useRef, useEffect } from "react";
import { initializeScene } from "./scene/main";
import { styles } from "../styles";

const SplineScene = ({ transition, onSky, onHome, value }) => {
  const mountRef = useRef(null);
  const cameraRef = useRef(null);
  const lightRef = useRef(null);

  const animationRef = useRef(null);
  const easeInOutQuad = (t) => {
    return t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
  };

  useEffect(() => {
    const cleanup = initializeScene(mountRef, cameraRef, lightRef);

    return () => {
      if (cleanup) cleanup();
      if (animationRef.current) cancelAnimationFrame(animationRef.current);
    };
  }, []);

  useEffect(() => {
    if (cameraRef.current) {
      const targetPosition = onSky
        ? { x: 0.3, y: 2, z: 4 }
        : { x: 2.8, y: 0.9, z: 1.5 };
      let targetRotation = onSky
        ? { x: -0.2, y: 0.05, z: 0 }
        : { x: 0, y: 1.078, z: 0 };
      targetRotation.x = onHome ? targetRotation.x : 0.42;

      const duration = 1000;
      const startTime = performance.now();

      const initialPosition = { 
        x: cameraRef.current.position.x, 
        y: cameraRef.current.position.y, 
        z: cameraRef.current.position.z 
      };
      const initialRotation = { 
        x: cameraRef.current.rotation.x, 
        y: cameraRef.current.rotation.y, 
        z: cameraRef.current.rotation.z 
      };

      const animate = (currentTime) => {
        const elapsed = currentTime - startTime;
        let progress = Math.min(elapsed / duration, 1);

        const easedProgress = easeInOutQuad(progress);

        cameraRef.current.position.x = initialPosition.x + (targetPosition.x - initialPosition.x) * easedProgress;
        cameraRef.current.position.y = initialPosition.y + (targetPosition.y - initialPosition.y) * easedProgress;
        cameraRef.current.position.z = initialPosition.z + (targetPosition.z - initialPosition.z) * easedProgress;

        cameraRef.current.rotation.x = initialRotation.x + (targetRotation.x - initialRotation.x) * easedProgress;
        cameraRef.current.rotation.y = initialRotation.y + (targetRotation.y - initialRotation.y) * easedProgress;
        cameraRef.current.rotation.z = initialRotation.z + (targetRotation.z - initialRotation.z) * easedProgress;

        if (progress < 1) {
          animationRef.current = requestAnimationFrame(animate);
        }
      };


      animationRef.current = requestAnimationFrame(animate);
    }
  }, [onSky, onHome]);

  return (
    <div className="h-screen w-full mx-auto relative">
      <div ref={mountRef} className="h-screen w-full"></div>
      <div
        className={`absolute top-[10%] left-[10%] max-w-7xl flex flex-row items-start gap-5 transition-transform duration-400 ${
          transition ? "transform -translate-x-full" : "transform translate-x-0"
        }`}
      >
        <h1 className={`${transition ? "text-transparent" : styles.heroHeadText}`}>
          Welcome to <br />
          <span className={`${transition ? "text-transparent" : styles.titleHeadText}`}>
            3D Game Engines
          </span>
        </h1>
      </div>
    </div>
  );
};

export default SplineScene;
