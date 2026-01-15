import React from "react";
import { styles } from "../styles";
import Table from "./Table";
import { projects } from "../constants/projects";

const Assignments = ({ onChange, onSky, onHome, onOverlaySelect }) => {
  onChange(true);
  onSky(true);
  onHome(false);

  return (
    <div
    className={`absolute top-0 left-0 h-screen w-screen z-0 no-scrollbar`}>

    <div
      className="fixed inset-0"
      style={{
        backgroundImage: "url('/Website/10.jpg')",
        backgroundRepeat: "repeat",
        backgroundSize: "auto",
        imageRendering: "pixelated",
      }}/>

      <div className=" mx-[20%] relative overflow-y-auto no-scrollbar h-full z-10">


      <section className="mt-[10%] mb-[10%] flex flex-col no-scrollbar z-20">

        <div
        className="bg-black/60 shadow-[inset_0_0_12px_#000] p-8 rounded-md backdrop-blur-sm "
        style={{ imageRendering: 'pixelated' }} >

      <div className="mb-5">
        <h2 className={styles.titleHeadText}>Assignments</h2>
      </div>

      <p>All assignments (except for the final) are due at 3pm of the day listed and will be checked for completion in person during class or office hours. </p>
   
      <br></br>
      {/* <p> The stencil code template can be found <a target="_blank" rel="noopener noreferrer" className="underline text-[#00ccff]" href="https://classroom.github.com/a/2rC8PxkO"> Here</a> </p> */}

      <div className='mt-5 flex flex-wrap gap-5'>
        <Table data={projects} projects={true} onOverlaySelect={onOverlaySelect} />
      </div>
      </div>
      </section>
      </div>
    </div>
  );
};

export default Assignments;