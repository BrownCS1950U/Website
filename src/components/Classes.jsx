import React from "react";
import { styles } from "../styles";
import Table from "./Table";
import { lectures } from "../constants/lectures";

const Classes = ({onChange, onSky, onHome}) => {
  onChange(true);
  onSky(true);
  onHome(false);
  return (

    <div
    className={` absolute top-0 left-0 h-screen w-screen z-0 no-scrollbar transition-transform duration-400`}>
    <div className=" mx-[20%] relative overflow-y-auto no-scrollbar h-full z-10">
      
    <div
      className="fixed inset-0"
      style={{
        backgroundImage: "url('/Website/6.jpg')",
        backgroundRepeat: "repeat",
        backgroundSize: "auto",
        imageRendering: "pixelated",
      }}/>

      <section className="mt-[10%] mb-[10%] flex flex-col gap-10 no-scrollbar z-20">
      
      <div
        className="bg-black/60 shadow-[inset_0_0_12px_#000] p-8 rounded-md backdrop-blur-sm "
        style={{ imageRendering: 'pixelated' }} >
       
      <div>
        <h2 className={styles.titleHeadText}>Classes</h2>
      </div>

      <p>
      Classes will meet in person in CIT 506 from 3:00 to 5:30pm on Wednesdays.
      </p>
  
      <div className=' flex flex-wrap gap-10'>
        <Table data={lectures} lectures={true}/>
      </div>
      </div>
      </section>
    </div>
    </div>
  );
};

export default Classes;
