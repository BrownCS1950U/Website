import React from "react";
import { styles } from "../styles";
import Table from "./Table";
import { projects } from "../constants/projects";

const Assignments = ({onChange, onSky, onHome}) => {
  onChange(true);
  onSky(true);
  onHome(false);

  return (
    <div
    className={`absolute top-0 left-0 h-screen w-screen z-0 no-scrollbar`}
  >

      <div className=" mx-[20%] relative overflow-y-auto no-scrollbar h-full z-10">
      <section className="mt-[10%] mb-[10%] flex flex-col no-scrollbar z-20">

      <div className="mb-5">
        <h2 className={styles.titleHeadText}>Assignments</h2>
      </div>

      <p>All assignments (except for the final) are due at 3pm of the day listed and will be checked for completion in person. </p>
      <br></br>
      <p>The link to sign up for times is here.
      The final is due on Friday, May 6 at 9am.</p>
      <br></br>
      <p> The stencil code template can be found <a target="_blank" rel="noopener noreferrer" className="underline text-[#00ccff]" href="https://classroom.github.com/a/2rC8PxkO"> Here</a> </p>

      <div className='mt-5 flex flex-wrap gap-5'>
        <Table data={projects} projects={true}/>
      </div>
      </section>
      </div>
    </div>
  );
};

export default Assignments;