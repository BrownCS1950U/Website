import React from "react";

const Assignment7 = () => {
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
                        Final Project
                    </h1>
                    <p className="mt-2 font-bold">Due: 5/5/26 @ 11:59 PM</p>
                
                    <h2 className="mt-10 text-3xl text-[#b30000] font-bold">Introduction</h2>
                    <p className="mt-4">
                        For your final project in CS1950U, you will be creating your very own 3D game! You will spend time doing research on game and engine features as well as creating a proposal for your project. 
                        Then you will spend 3 weeks post-platformer 3 implementing your project.
                    </p>
                    <p className="mt-4">
                        We highly encourage you to work in pairs or trios. 
                        You can use {" "}
                        <a
                                href="https://docs.google.com/document/d/1F7Ce28S_n1ubWj44cT6UGb7sAcweuIY8i7eQMFqDap8/edit?usp=sharing"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="underline text-[#00ccff]"
                            >
                                this document
                        </a> 
                        {" "}to help you find people who 
                        might be interested in the same topics as you!
                    </p>

                    <h2 className="mt-10 text-3xl text-[#b30000] font-bold">Final Plan</h2>
                    <p className="mt-4"> <strong>Due: April 15</strong></p>
                    <p className="mt-4"> Each group must complete a project proposal. 
                        This is a document that contains the following information:</p>
                    <ul className="list-disc ml-6 mt-4 space-y-2">
                        <li>Group member’s names</li>
                        <li>Engine or game features you plan to implement - 
                            Refer to the Engine/Game Features section of this handout 
                            for possible features. This is by no means an exhaustive list, 
                            so feel free to propose more features!</li>
                        <li>
                            Game concept - Briefly describe the game and explain 
                            how your features fit into the game. 
                            Or, if you chose to contribute to an open-source engine, 
                            please briefly tell us what you plan to add and how you 
                            will test or showcase these contributions.
                        </li>
                    </ul>
                    <p className="mt-4">In your proposal, it should be clear how you will allocate 
                        the work between the different team members. 
                        Please be as specific as possible. </p>
                    <p className="mt-4">Do some research to find features that you are excited to implement.
                        Ask the TA staff for project ideas if you are not sure what would 
                        be an appropriate amount of work. 
                        If you do a reasonable amount of research, then a suitable
                         project idea should come naturally. See the Engine Features section for more information. </p>
                
                    <h2 className="mt-10 text-3xl text-[#b30000] font-bold">Project Check-Ins</h2>
                    <p className="mt-4">We will be checking in with each group every week leading up to 
                        the final hand-in. The check-ins are only meant to make sure everyone is on track,
                         and unblock anyone who is stuck somewhere.During class on April 29, you may 
                         showcase your current progress to the class and get feedback on various aspects 
                         of your projects. This would be especially helpful for fine-tuning your art-style, 
                         mechanics, or general feel of the game. </p>

                    <h2 className="mt-10 text-3xl text-[#b30000] font-bold">Final Handin</h2>
                    <p className="mt-4"><strong>Due May 5th, 2025 - VIDEO SUBMISSION: 1:30 - 3:00 MINUTE GAMEPLAY</strong></p>
                    <p className="mt-4">Final project presentations will be on May 6 at 3 pm.</p>

                    <h2 className="mt-10 text-3xl text-[#b30000] font-bold">Engine/Game Features</h2>
                    <p className="mt-4">Keep in mind that there are tutorials online providing implementations 
                        of some of these features. For instance, it is very easy to find code for shadow mapping 
                        or bump mapping. Most features with readily available implementations that can be 
                        referenced are considered "easy". You can get a small amount of credit for 
                        implementing easy features, but you will be expected to either implement 
                        more difficult features as well or create a very polished game. 
                        A "difficult" feature is anything that is not easily implemented 
                        by following a tutorial with code, or a feature that takes considerable 
                        effort to incorporate into a game engine, such as networking. 
                        For reference, something on the scale of platformer 1 (collisions) 
                        could be considered a “difficult” feature.</p>
                    <p className="mt-4">
                        Some "easy" features can be extended and become "difficult" features. 
                        For instance, there are lots of creative things you can do with particles, 
                        such as animating them with a texture atlas. 
                        There are many ways you can extend shadow maps to improve 
                        their look and performance. 
                    </p>
                    <p className="mt-4">This project is an opportunity to pursue what makes YOU interested in game engines. 
                        If you want to make a polished game with interesting mechanics 
                        and a complex gameplay, then go for it! If you want to make a 
                        lightmapper and then create a walking simulator with your light maps, 
                        then do that! </p>
                    <p className="mt-4">Here is a (limited) list of a few possible features:</p>
                    <ul className="list-disc ml-6 mt-4 space-y-2">
                        <li>Networking</li>
                        <li>Graphics features</li>
                        <ul className="list-[circle] ml-6 mt-2 space-y-1">
                            <li>Particles</li>
                            <li>Bump mapping, Parallax mapping</li>
                            <li>Deferred shading</li>
                            <li>Depth of field</li>
                            <li>Toon shading, Silhouette edges</li>
                            <li>Shadows</li>
                            <li>Ambient Occlusion</li>
                            <li>Real-Time Indirect Illumination</li>
                            <ul className="list-[circle] ml-6 mt-2 space-y-1">
                                <li>Raytracing (Hybrid Rendering)</li>
                                <li>Light Probes</li>
                                <li>Screen Space Directional Occlusion</li>
                                <li>Light Propagation Volumes</li>
                            </ul>
                        </ul>
                        <li>Advanced animation features (Inverse kinematics, Dual quaternion skinning)</li>
                        <li>Advanced AI</li>
                        <li>Polished UI toolkit</li>
                        <li>Chunk streaming (for a large world)</li>
                        <li>Occlusion culling</li>
                        <li>Tools</li>
                            <ul className="list-[circle] ml-6 mt-2 space-y-1">
                                <li>AI editor</li>
                                <li>Embedded scripting</li>
                                <li>Lightmapper</li>
                                <li>Procedural content generation</li>
                                <li>Level editor</li>
                            </ul>
                        <li>Sound</li>
                        <li>Really cool original assets</li>
                        <li>Portals</li>
                        <li>Physics</li>
                        <ul className="list-[circle] ml-6 mt-2 space-y-1">
                            <li>Rigid body physics</li>
                            <li>Ragdoll physics</li>
                            <li>Fluid simulation</li>
                            <li>Cloth simulation, clothing animation</li>
                        </ul>
                    </ul>
                    
                    <h2 className="mt-10 text-3xl text-[#b30000] font-bold">Contribute to Open-Source Engine Option</h2>
                    <p className="mt-4">Rather than using your own engine to create a polished game,
                        you may instead contribute to an open-source engine. 
                        Your contributions must be substantial enough, and your added feature(s)
                        must be well-tested, and showcased to the class as a final presentation.</p>
                    <p className="mt-4">Please talk to us to help work through your ideas and what might count as “substantial”. 
                        We would be more than happy to walk you through the process of implementing a feature, 
                        polishing, testing, documenting, and publishing it. 
                        Keep in mind that open-source project maintainers are often volunteers 
                        with lots on their plate, so it’s important to ensure that their job of 
                        reviewing your code is as easy as possible. 
                        This is especially important today where anyone “vibe” a feature and submit a pull-request.</p>
                
                
                
                </div>
            </div>
        </>
    );
};

export default Assignment7;