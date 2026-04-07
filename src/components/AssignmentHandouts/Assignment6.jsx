import React from "react";

const Assignment6 = () => {
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
                        Platformer 3
                    </h1>
                    <p className="mt-2 font-bold">Due: 4/15/26 @ 3 PM</p>

                    <h2 className="mt-10 text-3xl text-[#b30000] font-bold">Important</h2>
                    <p className="mt-4">
                        If you have not yet joined Gradescope, please do so soon. 
                        We will be using Gradescope to return your grades. The code to join is PKB2X4
                    </p>

                    <h2 className="mt-10 text-3xl text-[#b30000] font-bold">Directions</h2>
                    <p className="mt-4">
                        First, you will create a graph from a navmesh stored in an obj file. 
                        Next, you will implement pathfinding on the navmesh with the A* algorithm. 
                        You will also implement behavior trees. 
                        Optionally, you can improve your pathfinding by implementing the Funnel Algorithm for extra credit.
                    </p>

                    <h2 className="mt-10 text-3xl text-[#b30000] font-bold">Design Check</h2>
                    <ul className="list-disc ml-6 mt-4 space-y-2">
                        <li>
                            What is the purpose of the heuristic weight in the A* algorithm? What heuristic function will you use?
                        </li>
                        <li>
                           How will you generate a data structure that encodes connectivity from triangle data? 
                        </li>
                        <li>
                            How do the composite nodes in a behavior tree work?
                        </li>
                        <li>
                            How will you design your action and condition nodes?
                        </li>
                    </ul>

                    <h2 className="mt-10 text-3xl text-[#b30000] font-bold">Engine Requirements</h2>
                    <ul className="list-disc ml-6 mt-4 space-y-2">
                        <li>
                            Engine has an A* implementation
                        </li>
                        <li>
                            An AISystem/AIComponent using behavior trees
                        </li>
                        <ul className="list-[circle] ml-6 mt-2 space-y-1">
                        <li>BTNode (virtual)</li>
                        <li>BTStatus (enum)</li>
                        <li>Selector</li>
                        <li>Sequence</li>
                        <li>Action (virtual)</li>
                        <li>Condition (virtual)</li>
                        <li>Blackboard (minimally, a map of strings to anything)</li>
                    </ul>
                    </ul>

                    <h2 className="mt-10 text-3xl text-[#b30000] font-bold">Game Requirements</h2>
                    <ul className="list-disc ml-6 mt-4 space-y-2">
                        <li>
                            AI-controlled entity traverses navmesh to some goal (such as the player position)
                        </li>
                        <li>
                            Basic behavior tree controlling a gameobject
                        </li>
                    </ul>


                </div>
            </div>
        </>
    );
};

export default Assignment6;