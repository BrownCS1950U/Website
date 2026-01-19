import React from "react";
import { styles } from "../styles";
import Table from "./Table";
import { lectures } from "../constants/lectures";

const Classes = () => {
  return (
    <div className="relative w-full min-h-screen">

      {/* PAGE BACKGROUND */}
      <div
        className="fixed inset-0 -z-10"
        style={{
          backgroundImage: "url('/Website/6.jpg')",
          backgroundRepeat: "repeat",
          backgroundSize: "auto",
          imageRendering: "pixelated",
        }}
      />

      {/* SCROLLABLE CONTENT WRAPPER */}
      <div className="mx-4 md:mx-[20%] relative min-h-screen no-scrollbar min-h-screen py-10 md:py-[10%] z-10">

        <div
          className="bg-black/60 shadow-[inset_0_0_12px_#000] p-8 rounded-md backdrop-blur-sm"
          style={{ imageRendering: "pixelated" }}
        >
          <h2 className={styles.titleHeadText}>Classes</h2>

          <p className="mt-4">
            Classes will meet in person in CIT 506 from 3:00 to 5:30pm on Wednesdays.
          </p>

          <div className="flex flex-wrap gap-10 mt-6">
            <Table data={lectures} lectures={true} />
          </div>
        </div>

      </div>
    </div>
  );
};

export default Classes;
