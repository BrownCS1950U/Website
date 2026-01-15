import React from "react";

const CollaborationPolicy = () => {
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
                    <h1 className="text-[1.8rem] font-doom text-[#b30000] mb-4">
                        CS1950U Collaboration Policy
                    </h1>

                    <p className="mt-4">
                        Welcome to CS1950U! This course began as a group independent study and we believe there is value in collaboration, though want to ensure everybody is able to have their own learning experience as well. Because of this, the collaboration is as follows:
                    </p>

                    <h2 className="mt-10 text-[#b30000] text-3xl font-bold">
                        You are allowed to
                    </h2>
                     <ul className="list-disc ml-6 mt-4 space-y-2">
                        <li>
                            Play and test each other's games
                        </li>
                        <li>
                            Discuss course content with one another
                        </li>
                        <li>
                            Help debug each other's code!
                        </li>
                     </ul>

                    <h2 className="mt-10 text-[#b30000] text-3xl font-bold">
                        You are NOT allowed to
                    </h2>
                    <ul className="list-disc ml-6 mt-4 space-y-2">
                        <li>
                            Discuss implementation specific design
                        </li>
                            <ul className="list-[circle] ml-6 mt-2 space-y-1">
                                <li>
                                    While everybody will have the same projects to complete, each assignment can be done in many different ways which are valid. We want you to think about this yourself and what methods would: 1) Best fit your own goals for your final project. 2) Make the most sense to you. The latter is very important since you will be working on one codebase throughout the entire semester, so having it be personal will help you tremendously.
                                </li>
                            </ul>
                        <li>
                            Post screenshots of your code in the class discord
                        </li>
                        <li>
                            Post screenshots of your code in the class discord
                            <ul className="list-[circle] ml-6 mt-2 space-y-1">
                                <li>
                                    We understand that there are some similarities that will occur between students as we teach certain game engine design principles, though if we suspect plagiarism is occuring, it will be brought to the professor’s notice and further discussion will be made following departmental policies.
                                </li>
                            </ul>
                        </li>
                     </ul>
                </div>
            </div>
        </>
    );
};

export default CollaborationPolicy;