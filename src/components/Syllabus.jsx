import React from "react";

const Syllabus = () => {
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
                    <h1 className="text-[1.6rem] font-doom text-[#b30000] mb-4">
                        CS1950U Syllabus - Spring 2026
                    </h1>
                    <p className="mt-4">
                      Course Staff Professor: Daniel Ritchie
                    </p>
                </div>
            </div>
        </>
    );
};

export default Syllabus;