import React from "react";
import { styles } from "../styles";
import Table from "./Table";
import { labs } from "../constants/labs";

const Labs = () => {
  return (
    <div className="relative w-full min-h-screen">

      {/* PAGE BACKGROUND */}
      <div
        className="fixed inset-0 -z-10"
        style={{
          backgroundImage: "url('/Website/12.jpg')",
          backgroundRepeat: "repeat",
          backgroundSize: "auto",
          imageRendering: "pixelated",
        }}
      />

      {/* SCROLLABLE CONTENT WRAPPER */}
      <div className="mx-4 md:mx-[20%] relative min-h-screen no-scrollbar min-h-screen py-10 md:py-[10%] z-10">

        <section className="flex flex-col gap-10 no-scrollbar z-20">

          <div
            className="bg-black/60 shadow-[inset_0_0_12px_#000] p-8 rounded-md backdrop-blur-sm"
            style={{ imageRendering: "pixelated" }}
          >
            <h2 className={styles.titleHeadText}>Labs</h2>

            <p className="mt-10">
              There are 5 labs in total in this class.
            </p>

            <div className="mt-10 flex flex-wrap gap-10">
              <Table data={labs} labs={true} />
            </div>
          </div>

        </section>
      </div>
    </div>
  );
};

export default Labs;
