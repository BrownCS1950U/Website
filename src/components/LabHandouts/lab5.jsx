import React from "react";

const Lab5 = () => {
    return (
        <>
            {/* Repeating texture background */}
            <div
                className="fixed inset-0 -z-10"
                style={{
                    backgroundImage: "url('/Website/124.png')",
                    backgroundRepeat: "repeat",
                    backgroundSize: "auto",
                    imageRendering: "pixelated",
                }}
            />

            {/* Scrollable content */}
            <div className="relative w-full min-h-screen pt-20 pb-20 flex justify-center">
                <div className="w-full max-w-4xl bg-black/60 border border-black p-10 text-white rounded-md backdrop-blur-sm">

                    {/* ===================== TITLE ===================== */}
                    <h1 className="text-4xl font-doom text-[#b30000] mb-4">
                        Lab 5 - 3D Audio and Terrain Generation!!
                    </h1>

                    <p className="mt-4">
                        This optional Lab covers 3D audio and terrain generation. 
                        Unlike the other labs that have more specific tasks for you to complete,
                        we have already provided you with the implementation. Feel free to add the code to your
                        existing engine. The main purpose of this lab is simply to provide more resources
                        and exploration of features you might incorporate into your final project.

                        <br></br>
                        <br></br>
                        The resources for this lab can be found
                        <a
                                    href="https://github.com/BrownCS1950U/Lab-5"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="underline text-[#00ccff]"
                                >
                                    here, on github.
                        </a>
                        
                        <br></br>
                        <br></br>
                        If you have any questions and/or want to implement this in your engine,
                        come to office hours or ask on Slack.

                    </p>

                    <br></br>

                </div>
            </div>
        </>
    );
};

export default Lab5;
