import React from "react";

const Lab2 = () => {
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
                        Lab 2 - RenderDoc & ImGui
                    </h1>
                    <br></br>

                    <p className="mt-4">
                        If you remember your Intro Graphics days, you may recall how painful it was
                        to debug your graphics code. OpenGL doesn't provide good error messages,
                        and GLSL doesn't support printing. Implementing complicated features like
                        shadow mapping or post-processing effects almost amounts to a guess and
                        pray game.
                    </p>
                    <p className="mt-4">
                        This lab introduces you to two essential tools that can significantly
                        improve your graphics debugging workflow: RenderDoc and ImGui.
                    </p>

                    {/* ===================== SECTION: RenderDoc ===================== */}
                    <h2 className="mt-10 text-3xl text-[#b30000] font-bold">
                        RenderDoc
                    </h2>

                    <p className="mt-4">
                        RenderDoc is a powerful graphics debugger that allows you to capture and
                        inspect frames rendered by your application. It provides a detailed view
                        of the graphics pipeline, enabling you to analyze draw calls, shader
                        programs, textures, and buffers. RenderDoc tracks all of your OpenGL API
                        calls and your draw calls allowing you to systematically debug your code.
                    </p>
                    <p className="mt-4">
                        To get started with RenderDoc, follow these steps:
                        <ul className="list-disc ml-6 mt-4 space-y-2">
                            <li>Download and install RenderDoc from the official website: <a href="https://renderdoc.org/" className="underline text-[#00ccff]">https://renderdoc.org/</a></li>
                                <ul className="list-disc ml-6 mt-3 space-y-2">
                                    <li>If you're a MacOS user, you'll have to build RenderDoc from source. Please follow <a href="/Website/renderdoc-macos" className="underline text-[#00ccff]">these instructions</a>.</li>
                                </ul>
                            <li>Launch RenderDoc and open your application through it.</li>
                            <div className="mt-6">
                            <img
                                src="/Website/LabImages/Lab2/renderdoc-launch.png"
                                alt="RenderDoc Launch"
                                className="w-full rounded bg-gray-800"
                            />
                        </div>
                            <li>Use the capture button (defaults to F12) to capture frames while your application is running.</li>
                            <li>When you're done capturing, you can close your application.</li>
                        </ul>
                        <br></br>
                    </p>

                    <p className="mt-4">
                        Once you're back in RenderDoc, you can explore the captured frames. Navigate through
                        the list of draw calls to see how your scene is rendered step by step. The draw calls
                        are listed in the <strong>Event Browser</strong> panel. Take a look at the&nbsp;
                        <strong>Texture Viewer</strong> tab to see the render targets as they appear after
                        each draw call.
                    </p>
                    <div className="mt-6">
                        <img
                            src="/Website/LabImages/Lab2/renderdoc-event-browser.png"
                            alt="RenderDoc Overview"
                            className="w-full rounded bg-gray-800"
                        />
                    </div>

                    <p className="mt-4">
                        Let's say we want to debug the drawing of a particular object (let's use the "C" object
                        in this scene). We can find the draw call that corresponds to this object in the
                        Event Browser.
                    </p>

                    <div className="mt-6">
                        <img
                            src="/Website/LabImages/Lab2/renderdoc-texture.png"
                            alt="RenderDoc Texture Viewer"
                            className="w-full rounded bg-gray-800"
                        />
                    </div>

                    <p className="mt-4">
                        We can inspect the pipeline state at this draw call by looking at the&nbsp;
                        <strong>Pipeline State</strong> panel. Here, we can see the bound shaders,
                        vertex buffers, index buffers, and other relevant state information.
                    </p>

                    <div className="mt-6">
                        <img
                            src="/Website/LabImages/Lab2/renderdoc-pipeline.png"
                            alt="RenderDoc Pipeline State"
                            className="w-full rounded bg-gray-800"
                        />
                    </div>

                    <p className="mt-4">
                        You can also inspect the input mesh data by going to the&nbsp;
                        <strong>Mesh Viewer</strong> tab. This allows you to see the vertices,
                        indices, and attributes being used for rendering.
                    </p>
                    <div className="mt-6">
                        <img
                            src="/Website/LabImages/Lab2/renderdoc-mesh.png"
                            alt="RenderDoc Mesh Viewer"
                            className="w-full rounded bg-gray-800"
                        />
                    </div>
                    <br></br>

                    {/* ===================== TASK 1 ===================== */}
                    <div className="border p-2 border-[#b30000]">
                        <h3 className="mt-6 text-xl underline font-bold">Task 1</h3>
                        <p className="mt-4">
                            Capture a frame from your game, then go through each of the tabs:&nbsp;
                            <strong>Texture Viewer</strong>, <strong>Pipeline State</strong>,
                            and <strong>Mesh Viewer</strong> to inspect how your scene is rendered.
                            <br></br>
                            <br></br>
                            Write one interesting thing you learned from each tab.
                        </p>
                    </div>
                    <br></br>


                    {/* ===================== SECTION: ImGui ===================== */}
                    <h2 className="mt-10 text-3xl text-[#b30000] font-bold">
                        ImGui
                    </h2>

                    <p className="mt-4">
                        ImGui (Immediate Mode Graphical User Interface) is a popular library for creating
                        in-game debugging tools and user interfaces. It allows you to quickly create
                        windows, buttons, sliders, and other UI elements that can help you visualize
                        and manipulate data in real-time.
                    </p>

                    {/* ===================== TASK 2 ===================== */}
                    <br></br>

                    <div className="border p-2 border-[#b30000]">
                        <h3 className="mt-6 text-xl underline font-bold">Task 2</h3>
                        <p className="mt-4">
                            Accept this <a href="https://classroom.github.com/a/3oX1YJ8E" className="underline text-[#00ccff]">GitHub Classroom assignment</a>.

                        </p>
                        <p className="mt-4">
                            Compile the code. Run the program with sponza.obj as a command-line argument.
                            You should see a black screen :(
                            <br></br>
                            Use RenderDoc to capture a frame. Inspect the draw calls and pipeline state to figure out
                            what is the issue with the render.
                        </p>
                        <p className="mt-4">
                            <details>
                                <summary>Hint:</summary>
                                Inspect the inputs/outputs of the vertex shader (using the&nbsp;
                                 <strong>Mesh Viewer</strong> tab). Are the vertices being transformed
                                correctly?
                            </details>
                        </p>
                    </div>
                    <br></br>
                    <p className="mt-4">
                        Once you've fixed the rendering issue, you should see the sponza scene rendered correctly.
                    </p>

                    <div className="mt-6">
                        <img
                            src="/Website/LabImages/Lab2/imgui-sponza.png"
                            alt="figure"
                            className="w-full rounded bg-gray-800"
                        />
                    </div>

                    <p className="mt-4">
                        Feel free to explore the ImGui interface and experiment with the implemented features.
                        There are many interesting tidbits that you may find useful for your engine!
                    </p>
                    <p className="mt-4">
                        You'll notice a <em>Render Settings</em> tab. The code for it is commented out. Try
                        uncommenting it and see how it works!
                    </p>
                    <br></br>

                    {/* ===================== TASK 3 ===================== */}
                    <div className="border p-2 border-[#b30000]">
                        <h3 className="mt-6 text-xl underline font-bold">Task 3</h3>
                        <p className="mt-4">
                            The scene is hardcoded with 5 different lights. Add ImGui controls to
                            manipulate the following properties of each light in real-time:
                            <ul className="list-disc ml-6 mt-4 space-y-2">
                                <li>Position (3 sliders for x, y, z)</li>
                                <li>Color (3 sliders for r, g, b)</li>
                            </ul>
                        </p>
                    </div>
                    <p className="mt-4">
                        Congratulations on completing Lab 2! You've now been introduced to two powerful
                        tools that can significantly enhance your graphics debugging workflow.
                    </p>
                </div>
            </div>
        </>
    );
};

export default Lab2;
