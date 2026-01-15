import { About, Hero, Classes, Assignments, Resources, Labs, Navbar } from "./components";
import { useEffect, useState } from "react";
import AssignmentPage1 from "./components/AssignmentHandouts/Assignment1";
import AssignmentPage2 from "./components/AssignmentHandouts/Assignment2";
import AssignmentPage3 from "./components/AssignmentHandouts/Assignment3";
import AssignmentPage4 from "./components/AssignmentHandouts/Assignment4";
import AssignmentPage5 from "./components/AssignmentHandouts/Assignment5";
import AssignmentPage6 from "./components/AssignmentHandouts/Assignment6";
import CollaborationPolicy from "./components/CollaborationPolicy";
import VideoTextureBackground from "./components/VideoTextureBackground";
import Syllabus from "./components/Syllabus";
import { useRef } from "react";

const App = () => {
  const [scrollValue, setScrollValue] = useState(-1);
  const [showAbout, setShowAbout] = useState(false);
  const [showTitle, setShowTitle] = useState(false);
  const [onSky, setOnSky] = useState(false);
  const [onHome, setOnHome] = useState(true);
  const [rotationValue, setRotationValue] = useState(0);
  const [audioEnabled, setAudioEnabled] = useState(false);
  const audioRef = useState(new Audio("/Website/darkhalls.mp3"))[0];

  const [currentOverlay, setCurrentOverlay] = useState("Home");

  const handleShowOverlay = (componentName) => {
    setCurrentOverlay(componentName);
  };

  const handleShowTitle = (value) => {
    setShowTitle(value);
  };

  const handleOnSky = (value) => {
    setOnSky(value);
  };

  const handleOnHome = (value) => {
    setOnHome(value);
  };

  const handleAudio = (value) => {
    setAudioEnabled(value);
    if (value) {
      audioRef.loop = true;
      audioRef.play()
        .then(() => setAudioEnabled(true))
        .catch((error) => console.error("Audio playback failed", error));
    } else {
      try {
        audioRef.loop = false;
        audioRef.pause();
        setAudioEnabled(false);
      } catch (error) {
        console.error("Audio pause failed!", error);
      }
    }
  };

  const handleWheel = (event) => {
    setScrollValue((prev) => {
      const newValue = prev + (event.deltaY > 0 ? 1 : -1);
      const clampedValue = Math.min(15, Math.max(newValue, -5));
      if (clampedValue < 0) {
        setShowAbout(false);
        setShowTitle(false);
      } else {
        setShowAbout(true);
        setShowTitle(true);
      }
      setRotationValue(clampedValue);
      return clampedValue;
    });
  };

  useEffect(() => {
    window.addEventListener("wheel", handleWheel);
    return () => {
      window.removeEventListener("wheel", handleWheel);
    };
  }, []);

  return (
    <div className="relative">

      {/* background */}
      {currentOverlay === "Home" ? (
        <VideoTextureBackground src="/Website/fire.mp4" />
      ) : (
        <div
          className="fixed inset-0 z-0"
          style={{
            backgroundImage: "url('/Website/metaltexture.png')",
            backgroundRepeat: "repeat",
            backgroundSize: "auto",
            imageRendering: "pixelated",
          }}
        />
      )}

      {/* translucent layer on top of background */}
      <div className="fixed inset-0 bg-black/40 z-0 pointer-events-none" />

      {/* main content that goes on top */}
      <div className="relative z-10">

        <Navbar
          onOverlaySelect={handleShowOverlay}
          setAudio={handleAudio}
          audio={audioEnabled}
        />

        {currentOverlay === "Home" && (
  <div className="relative h-screen">
    <Hero
      transition={showTitle}
      onSky={handleOnSky}
      onHome={handleOnHome}
      value={rotationValue}
    />
  </div>
)}

        {currentOverlay === "Assignment1" && ( <AssignmentPage1 id={1} onOverlaySelect={handleShowOverlay} /> )}
        {currentOverlay === "Assignment2" && <AssignmentPage2 id={2} />}
        {currentOverlay === "Assignment3" && <AssignmentPage3 id={3} />}
        {currentOverlay === "Assignment4" && <AssignmentPage4 id={4} />}
        {currentOverlay === "Assignment5" && <AssignmentPage5 id={5} />}
        {currentOverlay === "Assignment6" && <AssignmentPage6 id={6} />}
        {currentOverlay === "CollaborationPolicy" && ( <CollaborationPolicy id={7} /> )}

        {currentOverlay === "Classes" && (
          <Classes
            onChange={handleShowTitle}
            onSky={handleOnSky}
            onHome={handleOnHome}
          />
        )}

        {currentOverlay === "Home" && (
  <About
    showAbout={showAbout}
    onSky={handleOnSky}
    onHome={handleOnHome}
    onOverlaySelect={handleShowOverlay}
  />
)}

{currentOverlay === "Syllabus" && (
  <Syllabus onSky={handleOnSky} onHome={handleOnHome} />
)}

        {currentOverlay === "Assignments" && (
          <Assignments
            onChange={handleShowTitle}
            onSky={handleOnSky}
            onHome={handleOnHome}
            onOverlaySelect={handleShowOverlay}
          />
        )}

        {currentOverlay === "Resources" && (
          <Resources
            onChange={handleShowTitle}
            onSky={handleOnSky}
            onHome={handleOnHome}
          />
        )}

        {currentOverlay === "Labs" && (
          <Labs
            onChange={handleShowTitle}
            onSky={handleOnSky}
            onHome={handleOnHome}
          />
        )}

      </div>
    </div>
  );
};

export default App;
