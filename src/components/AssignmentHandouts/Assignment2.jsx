import React from "react";

const Assignment2 = () => {
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
                        Warmup 1
                    </h1>
                    <p className="mt-2 font-bold">Due: 2/4/26 @ 3 PM</p>

                    <h2 className="mt-10 text-3xl text-[#b30000] font-bold">Introduction</h2>
                    <p className="mt-4">
                       Welcome to CS1950U! In this assignment you’ll be creating the basic framework of the game engine you will be developing for the rest of the semester. It will introduce first and third-person cameras, movement in a 3D world, basic application and game world organization, and some important graphics concepts. By the end of this week, you’ll also have a simple 3D game built on top of your engine!
                    </p>
                    <p className="mt-4">
                      All assignments in this course will follow a similar format of requiring both engine features and a game built on the engine.
                    </p>
                    <p className="mt-4">
                      Though there won’t always be a ton of requirements related to gameplay, this is ultimately a class about making both game engines AND games, so have fun with these assignments, and feel free to build more than is required! What is listed here is just the bare minimum for getting full credit on a checkpoint.
                    </p>

                    <h2 className="mt-10 text-3xl text-[#b30000] font-bold">Design Check</h2>
                    <ul className="list-disc ml-6 mt-4 space-y-2">
                      <li>
                        List the steps involved with setting up a first person camera. How will you get or compute the parameters you need?
                      </li>
                      <li>
                        How will you define an application? What about a screen? How will you allow the user to switch between screens?
                      </li>
                      <li>
                        In broad terms, describe the steps and graphics calls necessary to render the floor.
                      </li>
                      <li>
                        How will you implement gravity and jumping? How will you know if the player is able to jump and how will you stop them from falling through the floor?
                      </li>
                    </ul>

                    <h2 className="mt-10 text-3xl text-[#b30000] font-bold">Engine Requirements</h2>
                    <p className="mt-4">
                      The following will all be a part of your “common” engine. For now, just know that the following features should be applicable to any game. As a result, these should be logically separated from, but utilized by, your game code:
                    </p>
                    <ul className="list-disc ml-6 mt-4 space-y-2">
                      <li>
                        Abstract Application class representing a whole game which supports:
                        <ul className="list-[circle] ml-6 mt-2 space-y-1">
                          <li>
                            Timed updates (update)
                          </li>
                          <li>
                            Render events (draw)
                          </li>
                          <li>
                            Input events (mouse and key functions)
                          </li>
                          <li>
                            Window size updates (windowResizeEvent)
                          </li>
                          <li>
                            A container for screens
                          </li>
                          <li>
                            Ability to switch between screens
                          </li>
                        </ul>
                      </li>
                      <li>
                        Abstract Screen class representing a logical sunscreen of a game which supports:
                        <ul className="list-[circle] ml-6 mt-2 space-y-1">
                          <li>
                            Timed updates (update)
                          </li>
                          <li>
                            Render events (draw)
                          </li>
                          <li>
                            Input events (mouse and key functions)
                          </li>
                          <li>
                            Window size updates (windowResizeEvent)
                          </li>
                        </ul>
                      </li>
                      <li>
                        Your engine uses the provided Camera class, or you’ve built your own Camera class
                      </li>
                      <li>
                        Your engine uses the provided Graphics class, or you’ve built your own Graphics class
                      </li>
                    </ul>

                    <h2 className="mt-10 text-3xl text-[#b30000] font-bold">Game Requirements</h2>
                    <p className="mt-4">
                      For this week, you are not required to implement any real gameplay, but feel free to have some fun with the functionality you create! Your handin should allow the player to walk around a world using mouse and keyboard inputs to change the camera. The player will be able to jump and not fall through a textured floor, but there will be no “point” to the game.
                    </p>
                    <p className="mt-4">
                      Your game must fulfill the following set of requirements:
                    </p>
                    <ul className="list-disc ml-6 mt-4 space-y-2">
                      <li>
                       The player must be able to move using standard controls in both first AND third person, meaning:
                        <ul className="list-[circle] ml-6 mt-2 space-y-1">
                          <li>
                            Horizontal mouse movements change the yaw of the camera

                          </li>
                          <li>
                            Vertical mouse movements change the pitch of the camera
                          </li>
                          <li>
                            Standard WASD keyboard controls (W: forwards, S: backwards, A: strafes left, D: strafes right) change the position of the camera

                          </li>
                          <li>
                            The scroll wheel determines the distance of the camera from the player with the minimum distance being capped at 0
                          </li>
                        </ul>
                      </li>
                      <li>
                        The player must never fall through the ground at y = 0
                      </li>
                      <li>
                        The player must be able to jump off the ground using the spacebar or a mouse button
                      </li>
                      <li>
                        The player can only jump when on the ground
                      </li>
                      <li>
                        Gravity must act downwards on the player
                      </li>
                      <li>
                        The ground must consist of planar geometry with a tiled grass texture. This means the floor is a series of 1x1 quads with the same texture, not a single quad with a stretched texture;
                      </li>
                      <li>
                        The game must have at least 2 screens, one of which requires player input to get to the other
                      </li>
                    </ul>

                </div>
            </div>
        </>
    );
};

export default Assignment2;