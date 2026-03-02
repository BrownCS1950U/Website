import React from "react";

const Lab4 = () => {
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
                        Lab 4 - Animations
                    </h1>

                    <h2 className="mt-10 text-3xl text-[#b30000] font-bold">
                        Overview
                    </h2>

                    <p className="mt-4">
                        After this lab you will be able to easily load in 
                        and use animated characters or items in your games! 
                    </p>

                    <p className="mt-4">
                        During this lab you will: 
                    </p>
                    <ul className="list-disc ml-6 mt-4 space-y-2">
                      <li>
                        Update your existing game engine to easily load in animations stored in FBX files
                      </li>
                      <li>
                        Implement animation blending
                      </li>
                      <li>
                       Optionally incorporate additional features to expand the possibilities
                        of the animated components in your future games
                      </li>
                    </ul>

                    <p className="mt-4">
                        We will be using Assimp (Open Asset Import Library) to load in 
                        the animated 3D models that we will be working with. 
                        This library is already included in your stencil!
                    </p>

                    {/* ===================== SECTION: ImGui ===================== */}
                    <h2 className="mt-10 text-3xl text-[#b30000] font-bold">
                        Task 1
                    </h2>

                    <p className="mt-4">
                        The stencil code includes <i>Animation</i> and <i>Skeleton</i> files within the folder 
                        called “skinned.” Your task is to, by working with these files, modify and 
                        add to your existing game engine, so that you can easily load an 
                        animated mesh into any of your games. <b>For your final result that you 
                        show to us, please have an animation in one of your existing games or 
                        a simple new game. How you incorporate the animated component 
                        (player or otherwise) is completely up to you.</b>
                    </p>

                    <p className="mt-4">
                        Feel free to load in animations from anywhere you would like. {" "} 
                        <a
                            href="mixamo.com/#/?page=1&type=Motion%2CMotionPack"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="underline text-[#00ccff]"
                        >
                            Mixamo {" "}
                        </a>
                        has some awesome animations and characters to choose from and pair up! 
                        Some (not all) of the animations have an “in-place” option in the settings. 
                        We recommend checking “in-place” so that looping your animation cycle is more straightforward.
                    </p>

                    <p className="mt-4">
                        Your approach to this part of the lab may vary somewhat 
                        depending on your existing game engine. 
                        You should consider how you foresee yourself using animations in 
                        your future games, and design an approach that allows you to easily 
                        add animated components to a large variety of games.
                    </p>

                    <p className="mt-4 text-[#b30000] font-bold">
                        Hints, Tips, and Directions:
                    </p>
                    <ul className="list-disc ml-6 mt-4 space-y-2">
                      <li>
                        We suggest adding a structure of some sort to represent your Skinned Meshes. 
                        What important information will you need to store in order to draw and update animations?
                      </li>
                      <li>
                        Where/When do you need to use setCurrentAnimation(...) and playCurrentAnimation(...)?
                        <ul className="list-[circle] ml-6 mt-2 space-y-1">
                            <li>
                                A Skeleton stores a list of associated animations and their indices.
                                When you call setCurrentAnimation(...) you need to pass an input representing an index, 
                                which lets us know which animation we are setting. 
                                For now, passing 0 should work. But please take a look at the Skeleton files to make sure you understand. 
                                In Task 2, we will be working with multiple animations.
                            </li>
                        </ul>
                      </li>
                      <li>
                       Please write a function that draws your Skinned Meshes. 
                       This function will be very similar to drawMesh(draw_mesh, transform), which you already have. 
                       But there are a few important things that you will need to consider:
                       <ul className="list-[circle] ml-6 mt-2 space-y-1">
                            <li>
                                The animated meshes require a different shader. 
                                We have given you this shader, called skinned_, as well as useSkinnedShader(), 
                                which tells us which shader (phong or skinned) that we want to activate. 
                                When should we useSkinnedShader()?
                            </li>
                            <li>
                                You will also need to use updateBoneMatrices(), which is provided in the stencil.
                            </li>
                            <li>
                                After you update the bone transformations, you will need to update the shader 
                                as well with active_shader_-{">"}setMat4Vec(...) or skinned_-{">"}setMat4Vec(...) 
                                The first input should be "gBones", what should the other two inputs be?
                            </li>
                            <li>
                                There is a simple shader that we have provided for you to use. 
                                If you implemented additional features for your existing shader (such as shadows)
                                we do encourage (but not require!!) you to modify the code so that animations also can handle these features. 
                            </li>
                        </ul>
                      </li>
                      <li>
                       Consider how these new animated meshes will interact with your existing code.
                       For example, how might you ensure that your animated meshes are capable of collision detection 
                       and handling? For the sake of this lab, you are not required to attach complicated collision 
                       detection to your animation. You simply need to get some animation to visually show up and play. 
                       However, these considerations may be helpful as you start to think about a final project.
                      </li>
                    </ul>

                    <h2 className="mt-10 text-3xl text-[#b30000] font-bold">
                        Task 2
                    </h2>

                    <p className="mt-4">
                        Hooray, you now have animated objects in your game! 
                        The next step is to implement animation blending, which allows you to combine multiple animations. 
                        Animation blending offers a great way to transition from one action to another!
                    </p>

                    <p className="mt-4">

                    </p>
                    
                    <p className="mt-4">
                        The minimum goal of this task is to be able to create and show an animation that has a set, specific amount of blending between two separate animations. 
                        Keep in mind that these results may sometimes look odd because the amount of blending and the types of animations don’t always line up beautifully. 
                        A more helpful application or implementation of animation blending would be to use blending to 
                        smoothly transition from one set animation to another <b>over time.</b>
                        While we do not require you to implement this feature for this lab, it may be fun to add to your final games. 
                    </p>

                    <p className="mt-4">
                        We will now be working with two distinct animations. 
                        When you choose your two FBX files to work with, 
                        we recommend using the same character (but different animations.) 
                        If you don’t use the same character, the amount of bones 
                        in the skeleton could be different, which would cause issues.
                    </p>

                    <p className="mt-4">
                        You now need to load in another mesh. 
                        In addition to having a current_animation (which you utilized in Task 1) 
                        Skeletons also keep track of a next_animation.
                        We will use next_animation to store and track the second animation that we are blending towards. 
                        You can use the setNextAnimation() that is provided.
                        <b>Here is where you need to be careful about what index you pass through as well as
                        how you assign names or indices to the animations that you load in!</b>
                    </p>

                    <p className="mt-4">
                        You should find a place to add a value representing the <b>blend factor</b>. 
                        This value tells us how much each of the two animations contribute to the final result. 
                        For example, a blend factor of 0.5 means that our result is 
                        perfectly half of the current_animation and half of next_animation.
                    </p>


                    <p className="mt-4">
                        We have marked off a TODO for you to finish filling out the code 
                        inside the loop within playCurrentAnimation() of skeleton.cpp. 
                        If your blend factor is less than 0 or if you don’t want to do any blending,
                        you could leave the local_transform as is. However, if you do want to blend,
                        you need to calculate the transform for the next animation 
                        (the target animation) and blend with the transform for the current_animation.
                    </p>

                    <p className="mt-4">
                        There are multiple TODOs for you to complete in blendTransforms() 
                        of animation.cpp. The goal of this function is to blend the two given
                        transformations by creating a weighted sum using the blend factor. 
                        It will be helpful for you to take a look in the animation.h file 
                        to see what channels are.
                    </p>

                    <h2 className="mt-10 text-3xl text-[#b30000] font-bold">
                        Optional Extra
                    </h2>

                    <p className="mt-4">
                        There are many ways to level up these awesome new features! 
                        For example, if you have a character that walks around you 
                        might want them to be animated only while they are moving (changing position) 
                        and not animated while they are standing still. 
                        And maybe you want the speed of their animation (the frame rate) 
                        to correspond to the object’s velocity. 
                        If you have extra time or want an extra challenge, 
                        try to think of and implement some fun animation-related additional features!
                    </p>


                </div>
            </div>
        </>
    );
};

export default Lab4;
