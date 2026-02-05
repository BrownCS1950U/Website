import React from "react";

const Lab3 = () => {
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
                        Lab 3 - Collision Detections!!
                    </h1>
                    <br></br>

                    <a
                                    href="https://classroom.github.com/a/IgsDuw8S"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="underline text-[#00ccff]"
                                >
                                    Github Classroom Assignment
                        </a>

                    <div className="mt-6">
                        <img
                            src="/Website/LabImages/lab3.png"
                            alt="figure"
                            className="w-full rounded bg-gray-800"
                        />
                    </div>
                </div>
            </div>
        </>
    );
};

export default Lab3;
