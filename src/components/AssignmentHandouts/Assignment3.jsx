import React from "react";

const Assignment3 = () => {
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
                        Warmup 2
                    </h1>
                    <p className="mt-2 font-bold">Due: 2/25/26 @ 3 PM</p>

                                    <h2 className="mt-10 text-3xl text-[#b30000] font-bold">Design Check</h2>
                    <p className="mt-4">
                      In the notes section of your github release, please write a brief paragraph 
                      explaining some of your design choices. 
                      There are many different ways to approach and organize your engine, 
                      and we want to understand the reasoning behind your decisions. 
                      Here are a few questions to help you think about your design:
                    </p>
                    <ul className="list-disc ml-6 mt-4 space-y-2">
                      <li>
                        What are the steps to determine if, and by how much, two cylinders are colliding?
                      </li>
                      <li>
                        More generally, what are the steps in determining a collision? 
                        How will you resolve collisions and how will you handle static + dynamic objects?
                      </li>
                      <li>
                        How will you keep track of data within your systems?
                      </li>
                      <li>
                        How will you reorganize your existing code into system-specific logic?
                      </li>
                    </ul>

                <h2 className="mt-10 text-3xl text-[#b30000] font-bold">Engine Requirements</h2>
                    <p className="mt-4">
                      The following will all be a part of your “common” engine. 
                      For now, just know that the following features should be applicable to any game. 
                      As a result, these should be logically separated from, but utilized by, your game code:
                    </p>
                    <ul className="list-disc ml-6 mt-4 space-y-2">
                      <li>
                        World/System/GameObject/Component hierarchy 
                        (While you are allowed to explore different approaches that you deem reasonable, 
                        we highly recommend that you structure your engine using the Entity Component System (ECS)
                         that we discussed during class)
                        <ul className="list-[circle] ml-6 mt-2 space-y-1">
                            <li>
                                GameWorld class representing the game world which supports:
                                <ul className="list-disc ml-6 mt-2 space-y-1">
                                    <li>Adding, removing, and retrieving Systems</li>
                                    <li>Adding, removing, and retrieving GameObjects</li>
                                </ul>
                            </li>
                            <li>
                                Virtual System class representing one type of functionality that your world
                            </li>
                            <li>
                                GameObject class representing one entity within your game, supporting:
                                <ul className="list-disc ml-6 mt-2 space-y-1">
                                    <li>Adding, removing, and retrieving Components</li>
                                </ul>
                            </li>
                            <li>
                                Component class representing the smallest unit of functionality in a single entity
                            </li>
                        </ul>
                      </li>
                      <li>
                        Engine supports a single input map object rather than storing individual states as separate variables. 
                        I.e. some sort of wrapper object around your input data
                      </li>
                      <li>
                        Engine has a DrawSystem
                      </li>
                      <li>
                        Engine has a CollisionSystem that can handle Cylinder-Cylinder collisions 
                        between both static and dynamic cylinders
                        <ul className="list-[circle] ml-6 mt-2 space-y-1">
                            <li>Detection: Determine that two cylinders are overlapping</li>
                            <li>Resolution: Translate the cylinders out of detection</li>
                            <li>Response (Optional): Dispatches some sort of collision callback such as editing object’s velocities based on the collision normal</li>
                        </ul>
                      </li>
                      <li>
                        Engine has a CharacterControllerSystem that handles player movement on update
                      </li>
                    </ul>

                 <h2 className="mt-10 text-3xl text-[#b30000] font-bold">Game Requirements</h2>
                    <p className="mt-4">
                      Now that you have some basic collisions to work with, 
                      you can create your first game! 
                      We’re intentionally leaving the requirements vague 
                      so that you can create more games out of the features. 
                      You can do a lot with just cylinder-cylinder collisions 
                      and a flat floor, be creative! 
                      <br></br>
                      Your game must fulfill the following set of requirements:
                    </p>
                    <ul className="list-disc ml-6 mt-4 space-y-2">
                      <li>
                        The player should be able to jump 
                        (but only when on the ground, or under other game-specific conditions such as double jumping etc.)
                      </li>
                      <li>
                        The player shouldn’t fall through the ground
                      </li>
                      <li>
                        Cylinder-cylinder collisions are used somewhere
                      </li>
                      <li>
                        The game has some non-arbitrary win/loss condition
                      </li>
                      <li>
                        The game must be resettable somehow. E.g. on hotkey press, on win/loss etc.
                      </li>
                    </ul>
                </div>
            </div>
        </>
    );
};

export default Assignment3;