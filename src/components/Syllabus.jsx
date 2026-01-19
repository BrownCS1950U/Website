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
                    <p className="mt-4">
                      TAs: Faisal Zaghloul & Autumn Tilley
                    </p>
                    <p className="mt-4">
                      Classes are held on Wednesdays from 3:00 PM - 5:30 PM. Slides will be posted online after each class to review. Students are encouraged to attend classes with questions in mind.
                    </p>
                    <p className="mt-4">
                      A "when2meet" link will be shared to help decide times for Office Hours. Students can schedule individual or group meetings by notifying the staff at least 24 hours in advance.
                    </p>
                    <p className="mt-4">
                      We will be using Slack for communications. The help channel is available for course-related questions, while private messages can be used for confidential inquiries. Staff may share anonymized questions and answers in the help channel if deemed useful for others.
                    </p>
                    <p className="mt-4">
                      Course Structure
                    </p>
                    <p className="mt-4">
                      Class Goals
                    </p>
                    <p className="mt-4">
                      Useful Skills
                    </p>
                    <p className="mt-4">
                      Assignments
                    </p>
                    <p className="mt-4">
                      Assignments
                    </p>
                </div>
            </div>
        </>
    );
};

export default Syllabus;