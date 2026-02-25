import React from "react";

const Assignment4 = () => {
    return (
        <>
            {/* Repeating texture background */}
            <div
                className="fixed inset-0 -z-10"
                style={{
                    backgroundImage: "url('/Website/13.jpg')",
                    backgroundRepeat: "repeat",
                    backgroundSize: "auto",
                    imageRendering: "pixelated",
                }}
            />

            {/* Scrollable content */}
            <div className="relative w-full min-h-screen pt-20 pb-20 flex justify-center">
                {/* Doom-style centered content panel */}
                <div className="w-full max-w-4xl bg-black/60 border border-black p-10 text-white rounded-md backdrop-blur-sm">
                    <h1 className="text-5xl font-doom text-[#b30000] mb-4">
                        Platformer 1
                    </h1>
                    <p className="mt-2 font-bold">Due: 3/11/26 @ 3 PM</p>

                    <h2 className="mt-10 text-3xl text-[#b30000] font-bold">Directions</h2>
                    <p className="mt-4">
                        You get to choose whether you implement ellipsoid-triangle collisions or the GJK algorithm and the Expanding Polytope Algorithm. 
                        Then, you will load obj files into your engine. 
                        Finally, you will create smooth player movement across the environment.
                    </p>

                    <h2 className="mt-10 text-3xl text-[#b30000] font-bold">Design Check</h2>
                    <p className="mt-4">
                      In the notes section of your github release, please write a brief paragraph 
                      explaining some of your design choices.

                      Here are a few questions to help you think about your design and your implementation:
                    </p>

                    <p className="mt-4 underline">
                        Ellipsoid–Triangle
                    </p>
                    <ul className="list-disc ml-6 mt-4 space-y-2">
                      <li>
                        What transformations do we apply to collide an ellipsoid with a triangle?
                      </li>
                      <li>
                        What are the 3 cases for colliding with a triangle? 
                        How will you order them and when can you have an early exit?
                      </li>
                      <li>
                        What are the relevant pieces of information you will store when an ellipsoid collides with a triangle? 
                      </li>
                      <li>
                        What is the “mtv slide”, and why is it necessary for proper movement? 
                      </li>
                      <li>
                        What is the purpose of the "nudging" hack?
                      </li>
                    </ul>

                    <p className="mt-4 underline">
                        GJK/EPA
                    </p>
                    <ul className="list-disc ml-6 mt-4 space-y-2">
                      <li>
                        How will you define your support functions?
                      </li>
                      <li>
                        When and why do we need to use the EPA algorithm after GJK?
                      </li>
                      <li>
                        Will you support separate analytical collisions for implicit shapes as well? How will you handle shallow collisions?
                      </li>
                    </ul>

                    <h2 className="mt-10 text-3xl text-[#b30000] font-bold">Engine Requirements</h2>
                    
                    <p className="mt-4 underline">
                        Ellipsoid–Triangle
                    </p>
                    <ul className="list-disc ml-6 mt-4 space-y-2">
                      <li>
                        Ellipsoid-triangle collision
                      </li>
                      <li>
                        Ellipsoid-edge collision
                      </li>
                      <li>
                        Ellipsoid-vertex collision
                      </li>
                      <li>
                        All collision tests return the correct time of intersection
                      </li>
                      <li>
                        Collision routines return the point of contact and contact normal
                      </li>
                      <li>
                        Loading in an environment obj file
                      </li>
                      <li>
                        Smooth player movement across trimesh environment
                      </li>
                    </ul>

                    <p className="mt-4 underline">
                        GJK/EPA
                    </p>
                    <ul className="list-disc ml-6 mt-4 space-y-2">
                      <li>
                        GJK implementation  
                      </li>
                      <li>
                        EPA implementation
                      </li>
                      <li>
                        Marginal collision detection for spheres and or capsules, and marginal collision detection for general shallow collisions
                      </li>
                      <li>
                        Loading in environment obj file
                      </li>
                      <li>
                        Smooth player movement across environment
                      </li>
                    </ul>

                    <br></br>
                    <p className="mt-4">
                        When we say "smooth player movement" we mean that the player should navigate and 
                        "walk" around the environment without unexpectedly getting stuck or appearing to glitch.
                        Also, the player's motion and speed should not appear choppy.
                    </p>

                    <br></br>
                    <p className="mt-4">
                        Here are a few websites for downloading obj models that you might want to load into your game:
                    </p>
                    <ul className="list-disc ml-6 mt-4 space-y-2">
                      <li>
                        <a
                                href="https://free3d.com/3d-models/obj?dd_referrer=https%3A%2F%2Fwww.google.com%2F"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="underline text-[#00ccff]"
                            >
                                Free3D
                        </a>
                      </li>
                      <li>
                        <a
                                href="https://www.turbosquid.com/?gclsrc=aw.ds&utm_source=google&utm_medium=cpc&utm_campaign=AMER-en-TS-Brand&utm_content=Brand-TurboSquid&utm_term=turbosquid&mt=b&dev=c&itemid=&targid=kwd-11865781&loc=9001990&ntwk=g&dmod=&adp=&gad_source=1&gad_campaignid=12528189075&gbraid=0AAAAAD_IHrRcAVBjoI7iopAWTZnC0qCzs&gclid=CjwKCAiA2PrMBhA4EiwAwpHyCxHm48uL7Q93l5xFvVlRgCiZnmoS4UrsolptB5Ib3XhL_MYEFIqNIhoC2VsQAvD_BwE&dd_referrer=https%3A%2F%2Fwww.google.com%2F"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="underline text-[#00ccff]"
                            >
                                TurboSquid
                        </a>
                      </li>
                      <li>
                        <a
                                href="https://sketchfab.com/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="underline text-[#00ccff]"
                            >
                                SketchFab
                        </a>
                      </li>
                    </ul>

                    <h2 className="mt-10 text-3xl text-[#b30000] font-bold">Game Requirements</h2>
                    <p className="mt-4">
                      Now that you have some advanced collisions, you can branch out to be creative. 
                      Make something cool! Using your cylinder-cylinder collisions you can make pickup-able items, 
                      enemies, and more on top of your new ability to traverse arbitrary environments. 
                      (We may award extra credit to games with some extra effort put in!)
                    </p>

                </div>
            </div>
        </>
    );
};

export default Assignment4;