import React from "react";
import { styles } from "../styles";
import Table from "./Table";
import { projects } from "../constants/projects";

const Assignments = () => {
  return (
    <div className="relative w-full min-h-screen">

      {/* PAGE BACKGROUND */}
      <div
        className="fixed inset-0 -z-10"
        style={{
          backgroundImage: "url('/Website/10.jpg')",
          backgroundRepeat: "repeat",
          backgroundSize: "auto",
          imageRendering: "pixelated",
        }}
      />

      {/* SCROLLABLE CONTENT WRAPPER */}
      <div className="mx-4 md:mx-[20%] relative min-h-screen no-scrollbar min-h-screen py-10 md:py-[10%] z-10">

        <section className="flex flex-col no-scrollbar z-20">

          <div
            className="bg-black/60 shadow-[inset_0_0_12px_#000] p-8 rounded-md backdrop-blur-sm"
            style={{ imageRendering: "pixelated" }}
          >
            <div className="mb-5">
              <h2 className={styles.titleHeadText}>Assignments</h2>
            </div>

            <p>
              All assignments (except for the final) are due at 3pm of the day listed
              and will be checked for completion in person during class or office hours.
            </p>

            <div className="mt-5 flex flex-wrap gap-5">
              <Table data={projects} projects={true} />
            </div>
          </div>

        </section>
      </div>
    </div>
  );
};

export default Assignments;
