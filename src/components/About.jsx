import React from "react";

// TODO: NEED TO FIX INDENTATION IN SOME PARTS OF THIS FILE

const About = ({ showAbout, onSky, onHome, onOverlaySelect }) => {
  onSky(false);
  onHome(true);
  return (
    <div className="absolute top-0 left-0 w-screen h-screen z-1 no-scrollbar flex justify-center">
    <div className="relative overflow-y-auto no-scrollbar h-full z-10 flex justify-center">
    <section
    id="About"
    className="mt-[10%] mb-[10%] flex flex-col gap-10 no-scrollbar z-20 w-full max-w-4xl">
      
      <div
        className="bg-black/60 shadow-[inset_0_0_12px_#000] p-8 rounded-md backdrop-blur-sm "
        style={{ imageRendering: 'pixelated' }} >
          <h2 className="text-3xl md:text-4xl text-[#b30000] font-doom tracking-[-0.15em]">
            <img
            src="/Website/monster.gif"
            alt=""
            className="w-20 h-20 object-contain inline-block" />
            3D Game Engines
            
            <img
            src="/Website/monster.gif"
            alt=""
            className="w-20 h-20 object-contain inline-block"
            />
            
            </h2>
            <div className="mt-8 flex flex-col gap-10 md:flex-row">
              <div className="flex flex-col gap-6">
                <p>
                  CSCI1950U functions like a group independent study where each student will implement their own 3D game engine in C++. 
                  Topics covered include engine architecture and design, collision systems, AI systems, and independently chosen topics
                  implemented in a final project such as networking, particles, animation, or rigidbody physics.
                  </p>
                  <p>
                  Class time will be used to review the material and to work on projects with help from the TAs,
                  so make sure to bring your laptops to class!
                  </p>
                  </div>
                  
                  <div className="flex flex-row justify-between md:flex-shrink-0 md:flex-col">
          <div className="flex flex-1 flex-col gap-1">
            <div className="flex flex-col">
              <strong className="font-semibold text-[#b30000]">Course:</strong>
              <a target="_blank" rel="noopener noreferrer" className="underline" href="https://www.coursicle.com/brown/courses/CSCI/1950U/">CSCI 1950U</a>
            </div>
            <div className="flex flex-col">
              <strong className="font-semibold text-[#b30000]">Professor:</strong>
              <a target="_blank" rel="noopener noreferrer" className="underline" href="https://cs.brown.edu/people/faculty/dritchi1/">Daniel Ritchie</a>
            </div>
            <div className="flex flex-col">
              <strong className="font-semibold text-[#b30000]">Location:</strong>
              <a target="_blank" rel="noopener noreferrer" className="underline" href="https://maps.app.goo.gl/1xfqYMQZHMA6Jadg9">CIT Center <br /> 506</a>
            </div>
            <div className="flex flex-col">
              <strong className="font-semibold text-[#b30000]">Time:</strong>
              W 3pm-5:30pm
            </div>
          </div>
          <hr className="my-2 border-t-2 border-[#b30000]" />
          <div
          className="cursor-pointer"
          // onClick={() => onOverlaySelect("Syllabus")}
          >
            Syllabus
            </div>
              <div>
            {/* <a target="_blank" className="underline" href="https://maps.app.goo.gl/1xfqYMQZHMA6Jadg9">Slack</a> */}
            Slack
        </div>
        </div>
      </div>
      <h2 className="text-3xl font-semibold md:text-5xl text-[#ffffff]">
      PAX East Form <a target="_blank" rel="noopener noreferrer" className="underline text-[#b30000] md:text-5xl " href="https://docs.google.com/forms/d/e/1FAIpQLSeSJN3uw3qzn8dlx-I1Cd4xXDM1kIn4cCwqDIq081WaxSBuNg/viewform?usp=sharing&ouid=105263982593318355462">HERE</a>
      </h2>
      
      <h4 className="mt-8 text-3xl font-doom md:text-3xl text-[#b30000]">Hours</h4>
     
      <div 
        className={` flex justify-center items-center`}
      >
        <iframe 
          src="https://calendar.google.com/calendar/embed?src=c_5d6e5572f07149ba0439738ed3244f953e3a8b87696eeda4952d2589f1864808%40group.calendar.google.com&ctz=America%2FNew_York" 
          style={{width: "130vh", height: "100vh", maxHeight:"400px", borderRadius: "10px"}} 
          title="Google Calendar"
        ></iframe>      
      </div>

      {/* Staff Section */}
    
      <h4 className="mt-8 text-3xl font-doom md:text-3xl text-[#b30000]">Staff</h4>
        <div>
          <div>
            <b className="font-semibold">Professor: </b>
            <a target="_blank" href="mailto:daniel_ritchie@brown.edu"> daniel_ritchie@brown.edu</a>
          </div>
          <div>
            <b className="font-semibold">Professor and HTAs:</b>
            <a target="_blank" href="mailto:cs1950uheadtas@lists.brown.edu"> cs1950uheadtas@lists.brown.edu</a>
          </div>
          <div className="italic">
            Do not email sensitive information, including Health Services
            &amp; Dean's Notes, to any HTAs, UTAs, or STAs.
          </div>
        </div>
        <div className="xs:grid-cols-2 grid w-full grid-cols-1 gap-4 md:grid-cols-2">
          <div className="flex flex-col gap-2 p-16 pb-0">
            <h3 className="text-2xl font-medium">Professor</h3>
            <div className="frosted flex flex-col rounded-lg bg-[#800000]">
              <img className="aspect-square w-full rounded-t-lg object-contain" src="/Website/Daniel_Ritchie.jpg" alt="Daniel Ritchie"></img>
              <div className="p-4">
                <div className="text-md font-medium">Daniel Ritchie</div>
                <div className="text-sm font-semibold text-[#ff8080]">dritchi • he/him</div>
                <div className="mt-2 text-sm italic text-white">
                  Has an Erdős number of 4, a Bacon number of 3, and (debatably) an Erdős-Bacon number of 7.
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-2 p-16 pb-0">
            <h3 className="text-2xl font-medium">Head TA</h3>
            <div className="frosted flex flex-col rounded-lg bg-[#800000]">
              <img className="aspect-square w-full rounded-t-lg object-contain" src="/Website/faisal.png" alt="Faisal Zaghloul"></img>

              <div className="p-4">
                <div className="text-md font-medium">Faisal Zaghloul</div>
                <div className="text-sm font-semibold text-[#ff8080]">fzaghlou • he/him</div>
                <div className="mt-2 text-sm text-white">
                  TO DO
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="xs:grid-cols-2 grid w-full grid-cols-1 gap-4 md:grid-cols-2">
          <div className="flex flex-col gap-2 p-16 pb-0">
            <h3 className="text-2xl font-medium">Head TA</h3>
            <div className="frosted flex flex-col rounded-lg bg-[#800000]">
              <img className="aspect-square w-full rounded-t-lg object-contain" src="/Website/autumn1.png" alt="Autumn Tilley"></img>
              <div className="p-4">
                <div className="text-md font-medium">Autumn Tilley</div>
                <div className="text-sm font-semibold text-[#ff8080]">atilley • she/her</div>
                <div className="mt-2 text-sm text-white">
                 TODO
                </div>
              </div>
            </div>
          </div>
        </div>

        </div>

    </section>
   
    </div>
    </div>
  );
};

export default About;