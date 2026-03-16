import React from "react";

const Assignment5 = () => {
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
                        Platformer 2
                    </h1>
                    <p className="mt-2 font-bold">Due: 4/1/26 @ 3 PM</p>

                    <h2 className="mt-10 text-3xl text-[#b30000] font-bold">Directions</h2>
                    <p className="mt-4">
                         Now that your engine supports movement around an arbitrary environment mesh, 
                         let’s make it run much better and/or much faster!
                    </p>
                    <p className="mt-4">
                        For this checkpoint, you will implement 3 different algorithms/techniques to your engine. 
                        You may choose which ones you would like to implement.
                    </p>

                    <h2 className="mt-10 text-3xl text-[#b30000] font-bold">Collision Acceleration</h2>
                    <ul className="list-disc ml-6 mt-4 space-y-2">
                      <li>
                        Accelerate your collision detection by implementing your choice of acceleration data structure  
                        (BVH, Uniform Grid, Hierarchical Grid, Octree, K-D Tree, BSP Tree).
                    </li>
                    <li>
                        You may implement 2 different acceleration structures: one for your static meshes and one for your dynamic meshes. 
                        You will use your static-favorable data structure (Primarily: BVH, Octree, K-D Tree, BSP Tree) 
                        to speed up your collision checking between the player and the static environment mesh. 
                        After that, you will use a dynamic-favorable data structure (Primarily: Uniform Grid, Hierarchical Grid) 
                        to speed up your collision checking between dynamic objects. (this will count as 2 different optimizations to your engine).
                    </li>
                    </ul>
                    <h2 className="mt-10 text-3xl text-[#b30000] font-bold">Graphics acceleration</h2>
                    <ul className="list-disc ml-6 mt-4 space-y-2">
                      <li>
                        Instanced rendering: Add support in your engine for instanced rendering. 
                        If you find that your engine draws a lot of the same geometry, 
                        this may be the best bang for your buck. This LearnOpenGL tutorial covers 
                        instancing in detail:
                        <a
                                href="https://learnopengl.com/Advanced-OpenGL/Instancing"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="underline text-[#00ccff]"
                            >
                                https://learnopengl.com/Advanced-OpenGL/Instancing
                        </a> 
                    </li>
                    <li>
                        Frustum culling: Cull objects that are invisible to your camera. 
                        You may find this article helpful: 
                        <a
                                href="https://learnopengl.com/Guest-Articles/2021/Scene/Frustum-Culling"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="underline text-[#00ccff]"
                            >
                                https://learnopengl.com/Guest-Articles/2021/Scene/Frustum-Culling
                        </a> 
                    </li>
                    </ul>
                    <h2 className="mt-10 text-3xl text-[#b30000] font-bold">Physics</h2>
                    <ul className="list-disc ml-6 mt-4 space-y-2">
                      <li>
                        Support rigid body physics with both linear and rotational motion.
                    </li>
                    </ul>
                
                <br></br>
                <p><strong>Feel free to suggest any more techniques that you’re interested in implementing!</strong></p>



                <h2 className="mt-10 text-3xl text-[#b30000] font-bold">Design Check</h2>

                <br></br>
                <p><strong>Collision acceleration:</strong></p>
                    <ul className="list-disc ml-6 mt-4 space-y-2">
                      <li>
                        Which data structures did you implement? 
                        How do you collide a dynamic object with your static data structure?
                    </li>
                    <li>
                        What do the nodes of your data structure hold?
                    </li>
                    <li>
                        How do you build your data structure?
                    </li>
                    <li>
                        How can you traverse your data structure?
                    </li>
                    <li>
                        How do you update your dynamic data structure as the game changes?
                    </li>
                    <li>
                        Show before/after performance numbers.
                    </li>
                    </ul>

                <br></br>
                <p><strong>Graphics acceleration:</strong></p>
                    <ul className="list-disc ml-6 mt-4 space-y-2">
                    <li>
                        Which techniques did you implement? And how do they work?
                    </li>
                    <li>
                        How did your choice of optimization affect your engine’s design?
                    </li>
                    <li>
                        How did your optimizations impact your performance?
                    </li>
                    <li>
                        Show test-cases of your optimizations on or off.
                    </li>
                    </ul>
                
                <br></br>
                <p><strong>Rigid-body physics:</strong></p>
                    <ul className="list-disc ml-6 mt-4 space-y-2">
                    <li>
                    How do you handle linear motion?
                    </li>
                    <li>
                        How do you handle rotational motion?
                    </li>
                    <li>
                        Which physical attributes do you keep track of for each object?
                    <ul className="list-[circle] ml-6 mt-2 space-y-1">
                        <li>
                            Are there different types of physical objects? and how do they interact?
                        </li>
                    </ul>
                    </li>
                    </ul>

                <h2 className="mt-10 text-3xl text-[#b30000] font-bold">Engine Requirements</h2>
                    <p className="mt-4">
                        <strong>Need any 3 of the following:</strong>
                    </p>
                    <ul className="list-disc ml-6 mt-4 space-y-2">
                    <li>
                        Spatial organization data structure that handles collision-acceleration
                        <ul className="list-[circle] ml-6 mt-2 space-y-1">
                        <li>
                            Spatial organization data structures that handle static and dynamic objects separately
                        </li>
                    </ul>
                    </li>
                    <li>
                        Instanced rendering with OpenGL
                    </li>
                    <li>
                        Frustum culling
                    </li>
                    <li>
                        Rigid-body physics
                    </li>
                    </ul>

                <h2 className="mt-10 text-3xl text-[#b30000] font-bold">Game Requirements</h2>
                    <ul className="list-disc ml-6 mt-4 space-y-2">
                    <li>Game populated with enough dynamic objects to demonstrate benefit of your optimizations 
                        (or have some output showcasing that your optimizations actually work).</li>
                    <li>Game with a large enough environment to demonstrate the benefit of spatial organization data structures (or have some output showcasing that your static data structure is working).</li>
                    <li>Game with a complex enough geometry that showcases the benefits of instanced rendering and/or frustum culling.</li>
                    </ul>

                </div>
            </div>
        </>
    );
};

export default Assignment5;