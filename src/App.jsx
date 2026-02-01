import { Routes, Route, useLocation } from "react-router-dom";
import { About, Hero, Classes, Assignments, Resources, Labs, Navbar } from "./components";
import { useState } from "react";

import AssignmentPage1 from "./components/AssignmentHandouts/Assignment1";
import AssignmentPage2 from "./components/AssignmentHandouts/Assignment2";
import AssignmentPage3 from "./components/AssignmentHandouts/Assignment3";
import AssignmentPage4 from "./components/AssignmentHandouts/Assignment4";
import AssignmentPage5 from "./components/AssignmentHandouts/Assignment5";
import AssignmentPage6 from "./components/AssignmentHandouts/Assignment6";

import LabPage1 from "./components/LabHandouts/Lab1";
import LabPage2 from "./components/LabHandouts/Lab2";


import CollaborationPolicy from "./components/CollaborationPolicy";
import Syllabus from "./components/Syllabus";

// NEW GLOBAL BACKGROUND
import CyclingTextureBackground from "./components/CyclingTextureBackground";

import RenderDocMacos from "./components/RenderDocMacos";

const App = () => {
  const location = useLocation();

  const [showTitle, setShowTitle] = useState(false);
  const [onSky, setOnSky] = useState(false);
  const [onHome, setOnHome] = useState(true);
  const [rotationValue, setRotationValue] = useState(0);

  const [audioEnabled, setAudioEnabled] = useState(false);
  const audioRef = useState(new Audio("/Website/darkhalls.mp3"))[0];

  const handleAudio = (value) => {
    setAudioEnabled(value);
    if (value) {
      audioRef.loop = true;
      audioRef.play().catch(() => {});
    } else {
      audioRef.loop = false;
      audioRef.pause();
    }
  };

  return (
    <div className="relative">

      {/* GLOBAL CYCLING BACKGROUND */}
      {location.pathname === "/" && (
      <CyclingTextureBackground
        images={[
          "/Website/fire1.jpg",
          "/Website/fire2.jpg",
          "/Website/fire3.jpg",
          "/Website/fire4.jpg",
        ]}
        interval={1000}
      />
      )}

      {/* MAIN CONTENT */}
      <div className="relative z-10">
        <Navbar audio={audioEnabled} setAudio={handleAudio} />

        <Routes>
          <Route
            path="/"
            element={
              <>
                <div className="relative h-screen">
                  <Hero
                    transition={showTitle}
                    onSky={setOnSky}
                    onHome={setOnHome}
                    value={rotationValue}
                  />
                </div>

                <About
                  showAbout={true}
                  onSky={setOnSky}
                  onHome={setOnHome}
                />
              </>
            }
          />

          <Route path="/assignment1" element={<AssignmentPage1 />} />
          <Route path="/assignment2" element={<AssignmentPage2 />} />
          <Route path="/assignment3" element={<AssignmentPage3 />} />
          <Route path="/assignment4" element={<AssignmentPage4 />} />
          <Route path="/assignment5" element={<AssignmentPage5 />} />
          <Route path="/assignment6" element={<AssignmentPage6 />} />

          <Route path="/lab1" element={<LabPage1 />} />
          <Route path="/lab2" element={<LabPage2 />} />

          <Route path="/collaboration-policy" element={<CollaborationPolicy />} />
          <Route path="/syllabus" element={<Syllabus />} />

          <Route path="/classes" element={<Classes />} />
          <Route path="/assignments" element={<Assignments />} />
          <Route path="/resources" element={<Resources />} />
          <Route path="/labs" element={<Labs />} />
          <Route path="/renderdoc-macos" element={<RenderDocMacos />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;
