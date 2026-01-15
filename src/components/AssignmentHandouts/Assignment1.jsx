import React from "react";

const Assignment1 = ({ onOverlaySelect }) => {
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
                        Setup Tutorial
                    </h1>
                    <p className="mt-2 font-bold">Due: 1/28/26 @ 3 PM</p>

                    {/* ---------------- INTRODUCTION ---------------- */}
                    <h2 className="mt-10 text-3xl text-[#b30000] font-bold">Introduction</h2>
                    <p className="mt-4">
                        Hi there and welcome to CS1950U! This assignment is designed to guide you through both setting up your local environment as well as the basics of using the support code. Before we begin, here are a few things to keep in mind:
                    </p>

                    <ul className="list-disc ml-6 mt-4 space-y-2">
                        <li>
                            The TA staff encourages you to look at and play around with the support code. This tutorial will only use a few functions but feel free to explore various functions for yourself!
                        </li>
                        <li>
                            You will be writing C++ code for the entire semester, which we do not explicitly teach other than weekly tips. If you have not written much C++ code before, we strongly recommend you to check out the CS1230 first lab and resources on C++ to get started. 
                        </li>
                        <li>
                            In addition, while this course is NOT a course in computer graphics, it will still be helpful to understand the graphics pipeline and some basic OpenGL concepts if you wish to be fully fluent with the stencil code. A good introduction to OpenGL can be found here:{" "}
                            <a
                                href="https://open.gl/drawing"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="underline text-[#00ccff]"
                            >
                                https://open.gl/drawing
                            </a>
                            .
                        </li>
                    </ul>

                    {/* ---------------- COLLABORATION ---------------- */}
                    <h2 className="mt-10 text-[#b30000] text-3xl font-bold">
                        Collaboration Policy & TA Hours Form!
                    </h2>
                    <p className="mt-4">
                      Before beginning this assignment, please read  
                      <span
                        className="underline text-[#00ccff] cursor-pointer"
                        onClick={() => onOverlaySelect("CollaborationPolicy")}
                        >
                          {" "} the collaboration policy
                          </span>
                         {" "} and fill out the respective  
                        <a
                                href="https://forms.gle/srYNPvRaBaquZ2pR9"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="underline text-[#00ccff]"
                            >
                                {" "}  form
                            </a>
                            .
                    </p>

                    {/* ---------------- DOWNLOADING ---------------- */}
                    <h2 className="mt-10text-[#b30000] text-3xl font-bold">Downloading the Stencil</h2>
                    <p className="mt-4">
                        To get the stencil, accept the GitHub Classroom assignment and{" "}
                        "git clone" the repository URL into a directory of your
                        choice.
                    </p>

                    {/* ---------------- SETUP OPTIONS ---------------- */}
                    <h2 className="mt-10 text-[#b30000] text-3xl font-bold">
                        Setting Up Your Local Environment
                    </h2>
                    <p className="mt-4">
                        The stencil for this course has been made to include any libraries explicitly within the “External” folder and has a provided CMakeLists.txt for you to use, so you don’t have to worry about installing additional libraries.
                    </p>
                    <p className="mt-4">
                        To develop locally, we suggest three options based on what you like best and/or have prior experience with: Qt Creator (IDE), CLion (IDE), or CMake GUI for those who wish to use their own IDE and build via command line.
                    </p>

                    {/* ---------------- OPTION 1 ---------------- */}
                    <h2 className="mt-10 text-2xl font-bold">Option 1: Qt Creator Setup</h2>
                    <p className="mt-4">
                        For installation and use of Qt Creator, we recommend following the entirety of Section 3 of Lab 1 from CS1230 linked
                        <a
                                href="https://cs1230.graphics/labs/lab1/#qt-and-qt-creator"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="underline text-[#00ccff]"
                            >
                                {" "}here{" "}
                            </a>
                        Note that because we do not use Qt in the stencil (just Qt Creator), you can skip the selection of Qt 6.5.2 in section 3.1. In section 3.3, open the CMakeLists.txt of the stencil repository.
                    </p>

                    {/* ---------------- OPTION 2 ---------------- */}
                    <h2 className="mt-10 text-2xl font-bold">Option 2: CLion Setup</h2>
                    <p className="mt-4">
                        Download and install CLion 
                        <a
                                href="https://www.jetbrains.com/clion/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="underline text-[#00ccff]"
                            >
                                {" "}here{" "}
                            </a> 
                        (you’re eligible for a free educational license with your school email). After installation:
                    </p>
                      <ul className="list-disc ml-6 mt-4 space-y-2">
                        <li>
                            Open the Project:
                            <ul className="list-[circle] ml-6 mt-2 space-y-1">
                                <li>
                                    Launch CLion, click Open, and select the directory of the CS1950UStencil folder you just cloned.
                                </li>
                                <li>Click Trust Project to load it.</li>
                            </ul>
                        </li>
                        <li>
                            Set Up Build Profiles
                            <ul className="list-[circle] ml-6 mt-2 space-y-1">
                                <li>
                                    When opening a new project in CLion, you’ll see the project wizard.
                                </li>
                                <li>
                                    Tick Reload CMake project on editing CMakeLists.txt or other CMake configuration files at the top. This saves you from manually reconfiguring the project after editing configurations.
                                </li>
                                <li>
                                    On the left of the Profiles panel, you’ll see a default Debug profile. Click the + button to add a new profile, and CLion will automatically create a Release profile.
                                </li>
                                <li>Click OK to finish.</li>
                            </ul>
                        </li>
                    </ul>

                    <div className="mt-6 p-4 rounded text-center italic">
                        <img
                            src="/Website/AssignmentImages/Setup1.png"
                            alt="description"
                            className="w-full rounded-md border border-[#444] mt-6"
                        />
                    </div>

                    {/* ---------------- OPTION 3 ---------------- */}
                    <h2 className="mt-10 text-2xl font-bold">Option 3: CMake GUI Setup</h2>
                    <p className="mt-4">
                        You can begin by installing CMake here. Once you install, you should have an application called CMake (cmake-gui) which is a GUI based application used to generate make files. It should look something like this upon opening:
                    </p>

                    <div className="mt-6 p-4 rounded text-center italic">
                        <img
                            src="/Website/AssignmentImages/Setup2.png"
                            alt="description"
                            className="w-full rounded-md border border-[#444] mt-6"
                        />
                    </div>

                    <p className="mt-4">
                        In order to create your make files, first click the “Browse Source” button (top-most green box) and select the stencil repository directory (in particular, make sure that this is the directory that contains the CMakeLists.txt file).
                    </p>

                    <p className="mt-4">
                        Next, click the “Browse Build” button (middle green box). This will prompt you to select a build directory. We recommend that you create a new directory called “cs1950u-[username]-build” before doing this, and then selecting this as the build directory. Once this is done you can configure any environment variables you have by checking or unchecking the checkboxes though you most likely will not need to do this.
                    </p>

                    <p className="mt-4">
                        Once you are done, click the “Configure” button (bottom-most box). You will be prompted to select a generator. If you’re on Windows, select “MinGW Makefiles”, and if you’re on Mac, select “Unix Makefiles”. Ignore the other options and press “Done”.
                    </p>

                    <br />

                    <div className="border p-4 border-white">
                        <h3 className="mt-6 text-xl underline font-bold">
                            IMPORTANT Extra Step for Apple Silicon (arm64) macs:
                        </h3>
                        <p className="mt-2">
                            Before clicking “Generate”, click on “CMAKE_OSX_ARCHITECTURES” in the table of red entries. An empty text box will appear on the right. Enter “x86_64” (without the quotes) into the text box. If you don’t do this, the stencil will fail to build!
                        </p>
                    </div>

                    <p className="mt-4">
                        The last step in the CMake GUI is to click on the “Generate” button (bottom-most box) to generate the build files.
                    </p>

                    <p className="mt-4">
                        To use the makefiles in order to actually build the project, you will need to navigate to your build directory via command line and type the following command: “cmake -- build .” (Note the two dashes and the period!). This will attempt to create an executable for you and give you any compilation errors as it does so. If this succeeds you should have generated an executable titled “CS1950UEngine.exe” (or just “CS1950UEngine” if you’re on Mac), which you can run from the command line to run the project.
                    </p>

                    <br />

                    <div className="border p-4 border-white">
                        <h3 className="mt-6 text-xl underline font-bold">
                            When do I need to use the CMake GUI and when do I need to build the project?
                        </h3>
                        <p className="mt-2">
                            You will not need to open the CMake GUI ever again unless you edit the CMakeLists.txt file in a way that adds new configuration values (namely, you won’t have to open the GUI after adding a file to the “add_executable” block as described below). This is because when you call “cmake -- build .”, the CMakeGUI takes your CMakeLists.txt and converts it into a traditional makefile behind the scenes.
                        </p>
                        You will need to rebuild the project whenever you change your code. If your build times are fast, you can build and run with one command by chaining the commands together with a semicolon: “cmake --build .; ./CS1950UEngine”. However, as your engine grows in complexity your build times will become slower, so this won’t always be desirable.
                        <p className="mt-2"></p>
                    </div>

                    <h2 className="mt-10 text-2xl font-bold">For All Options: How to Edit CMakeLists.txt</h2>
                    <p className="mt-4">
                        Whenever you generate a file and want it to be included in your project, you must navigate to the base level CMakeLists.txt of your project and type in your file’s relative path from the project directory inside the “add_executable” command block (you’ll notice that we’ve already placed all the files that come with the stencil, such as “Engine/core.h”, in this block). This is necessary for the file to be included in the build, and in Qt Creator, this should make the file visible in the project view.
                    </p>

                    {/* ---------------- EXPLORING STENCIL ---------------- */}
                    <h2 className="mt-10 text-[#b30000] text-3xl font-bold">Exploring the Stencil</h2>
                    <p className="mt-4">
                        Upon compiling and building the project, running the executable should open a window that displays the phrase “Welcome to CS1950U!”. If you do not see this, please let a TA know as soon as possible so we can get this resolved.
                    </p>
                    <p className="mt-4">
                        Now let’s navigate through the support code:
                    </p>

                    <ol className="list-decimal ml-6 mt-4 space-y-4">
                        <li>
                            Take a look at Engine/window.cpp. This file consists of the boiler plate which establishes a window, game loop, and various event handlers. The only function you will work with is Window::loop() briefly in this assignment.
                        </li>
                        <li>
                            Now navigate to Engine/core.cpp. In this file you will see a more empty template consisting of update, draw, and various event functions again stripped down for your convenience. This file is where the bulk of your code will stem from. In this assignment you will be writing directly in it, but soon you will be making abstractions which will minimize the amount of code that should be here!
                        </li>
                        <li>
                            Some other files you might want to overview include Graphics/graphics.h and or Graphics/graphics.cpp as well as Graphics/camera.h and Graphics/camera.cpp, though we will take a look at those in practice later in this tutorial.
                        </li>
                    </ol>

                    {/* ---------------- STARTING PROJECT ---------------- */}
                    <h2 className="mt-10 text-[#b30000] text-3xl font-bold">Starting Your Project</h2>

                    <h3 className="mt-6 text-xl underline font-bold">
                        Transforms, Shapes, Materials Oh My!
                    </h3>

                    <p className="mt-4">
                        To begin on your journey, navigate to Engine/core.cpp’s draw() function and let’s first discuss what is necessary to draw a shape using the given stencil.
                    </p>
                                        <ol className="list-decimal ml-6 mt-4 space-y-4">
                        <li>
                            The first function present here is what tells our computer to wipe clean any data it previously stored to represent the screen. Generally you will always want to make this call at the start of any given frame. You can use the operator | to indicate multiple “bits” you wish to clear as well. For example here we see GL_COLOR_BUFFER_BIT | GL_DEPTH_BUFFER_BIT. Clearing GL_COLOR_BUFFER_BIT will result in the screen all the same color which is default set to black. You can change this default color by calling Global::graphics.setClearColor(glm::vec3 clearColor) where clearColor is a glm::vec3 of floating point values between 0 to 1 in each channel (R, G, and B). Clearing GL_DEPTH_BUFFER_BIT will ensure that you don’t see shapes overlap in the wrong order or in strange locations.
                            <div className="border p-2 border-white">
                                <h3 className="mt-6 text-xl underline font-bold">Try:</h3>
                                <p className="mt-2">
                                    Before calling Global::graphics.clearScreen, try changing the clear color to whatever you like and see what happens when you run the program!
                                </p>
                            </div>
                        </li>

                        <li>
                            The next function you see is Global::graphics.bindShader(“text”) and is what determines how your input data will be displayed. For your convenience, we have pre-loaded 2 shader programs: “phong” and “text”. If you are drawing your 3d scene of shapes which you will do most often, you will want to bind the “phong” shader. If you are drawing a text overlay, then you will instead want to bind the “text” shader. You can also do both which we will do here.
                            <div className="border p-2 border-white">
                                <h3 className="mt-6 text-xl underline font-bold">Try:</h3>
                                <p className="mt-2">
                                    After calling Global::graphics.clearScreen, try binding the “phong” shader.
                                </p>
                            </div>
                        </li>

                        <li>
                            Once you have a shader bound, there are certain parameters you will need to set for it to know how to draw. For the phong shader, these necessary parameters are encompassed in calling the following functions:
                        </li>

                        <ul className="list-[circle] ml-6 mt-2 space-y-1">
                            <li>Graphics::setGlobalData(glm::vec3 globalCoeffs)</li>
                            <li>Graphics::setCameraData(std::shared_ptr{"<"}Camer{">"} camera)</li>
                            <li>Optional: Graphics::setLights(std::vector{"<"}std::shared_ptr{"<"}Light{">"}{">"} lights)</li>
                        </ul>

                        <p className="mt-4">
                            For the text shader, these necessary parameters are handled for you within the Graphics::drawUIText function.
                            One important thing about these parameters is that unless you specifically call these functions, they will not change. This means that even if you bind a different shader, or enter a new draw cycle, they will not change. So if you wish, for any parameters that will remain static, you can opt to set them once elsewhere and not worry about them again. One rule of thumb to keep in mind however, is that the camera should always be set each draw loop as you begin to introduce movement to your game.
                        </p>

                        <div className="border p-2 border-white">
                            <h3 className="mt-6 text-xl underline font-bold">Try:</h3>
                            <p className="mt-2">
                                After binding the “phong” shader, set the global data to glm::vec3(0.5f).
                            </p>
                        </div>

                        <div className="border p-2 border-white">
                            <h3 className="mt-6 text-xl underline font-bold">Try:</h3>
                            <p className="mt-2">
                                In order to set camera data, we need to create a camera object. To do so, navigate to Engine/core.h. Currently there are only public member functions. Let’s add a private section by typing the keyword private: on a new line after the framebufferResizeEvent function declaration.
                            </p>
                            <p className="mt-2">
                                Next, in this new private section, declare an std::shared_ptr{"<"}Camera{">"} of whatever name you wish.
                            </p>
                            <p className="mt-2">
                                Now in the constructor for Core, use an initializer list to instantiate your camera object with no input parameters.
                            </p>
                            <p className="mt-2">
                                Once we have done this, within Core::draw immediately after setting the global data, we can finally call Graphics::setCameraData with our private std::shared_ptr{"<"}Camera{">"} object we just created.
                            </p>
                        </div>

                        <li>
                            Now we need to get a shape to actually draw. In the globally available graphics object, we have provided for you 5 “default” shapes to work with, cone, cube, cylinder, sphere, and quad.
                            <div className="border p-2 border-white">
                                <h3 className="mt-6 text-xl underline font-bold">Try:</h3>
                                <p className="mt-2">
                                    To store a Shape within the Core class, declare a private std::shared_ptr{"<"}Shape{">"} of whatever name you wish within Engine/core.h.
                                </p>
                                <p className="mt-2">
                                    Now in the constructor for Core, set your shape variable using Global::graphics.getShape(std::string shapeName) and input any one of the 5 default shapes in lowercase.
                                </p>
                            </div>
                        </li>

                        <li>
                            In order to draw our shape, we need to also have a location and orientation of where to draw it. In the stencil, this data is stored in a ModelTransform object.
                            <div className="border p-2 border-white">
                                <h3 className="mt-6 text-xl underline font-bold">Try:</h3>
                                <p className="mt-2">
                                    To store a ModelTransform within the Core class, declare a private std::shared_ptr{"<"}ModelTransform{">"} of whatever name you wish within Engine/core.h.
                                </p>
                                <p className="mt-2">
                                    Now in the constructor for Core, use the initializer list to instantiate your ModelTransform object with no input parameters.
                                </p>
                            </div>
                        </li>

                        <li>
                            Now that we have both a Shape and a ModelTransform, we have the minimum amount in order to draw a shape!
                            <div className="border p-2 border-white">
                                <h3 className="mt-6 text-xl underline font-bold">Try:</h3>
                                <p className="mt-2">
                                    In Core:::draw, after setting the   data, call Global::graphics.drawShape and input your shape first followed by your model transform second.
                                </p>
                            </div>
                        </li>

                        <li>
                            Upon running your program, you likely will not see anything, this is because your shape is sitting right on top of your camera!
                            <div className="border p-2 border-white">
                                <h3 className="mt-6 text-xl underline font-bold">Try:</h3>
                                <p className="mt-2">
                                    In the constructor for core, try using the translate, rotate, and scale functions of ModelTransform to get the shape to appear on screen! Keep in mind (0, 1, 0) is the up direction, the camera is located at (0, 0, 0) and is looking in the direction (0, 0, 1) by default.
                                </p>
                            </div>
                        </li>

                        <li>
                            Now that you have a shape, let's give it some spice by adding a custom material. Materials exist  in 3 types, though you will likely mainly use 2: solid color, and textured image. We have provided for you an image under Resources/Images/grass.png for you to try out using.
                            <div className="border p-2 border-white">
                                <h3 className="mt-6 text-xl underline font-bold">Try:</h3>
                                <p className="mt-2">
                                    Rather than storing materials yourself, the graphics class will hold onto them for you. In the constructor for Core, call the Graphics::addMaterial function, with a name of your choice, the filepath being “Resources/Images/grass.png”, and the shininess of whatever floating point value you wish between 0 and 1.
                                </p>
                            </div>
                        </li>
                    </ol>
                    {/* ---------------- CAMERA CONTROL ---------------- */}
                    <h3 className="mt-10 text-xl underline font-bold">Controlling Your Camera</h3>
                    <ol className="list-decimal ml-6 mt-4 space-y-4">

                        <li>
                            Typically to control a camera in many games we use the WASD keys. When you press W, the character should move forwards, S backwards, D to the right, and A to the left. Later on, you will be asked to implement a more robust version of an input handler, but for now, let's store some key states within our Core class.
                            <div className="border p-2 border-white">
                                <h3 className="mt-6 text-xl underline font-bold">Try:</h3>
                                <p className="mt-2">
                                    Within Engine/core.h, declare 4 private booleans which will correspond to the key states for W, A, S, and D. Then in the constructor for Core, use the initializer list to set these to false.
                                </p>
                            </div>
                        </li>

                        <li>
                            To update key states, we will want to use the Core::keyEvent function. There are two inputs to this function, the key, and the action, both of which are formatted as integers. However, these integers merely map to enumerations given by the GLFW library. For example, the W key is referred to by the integer enumerated by GLFW_KEY_W. There are 2 actions you will care about which are GLFW_PRESS, and GLFW_RELEASE.
                            <div className="border p-2 border-white">
                                <h3 className="mt-6 text-xl underline font-bold">Try:</h3>
                                <p className="mt-2">
                                    Using these enumerations, within the Core::keyEvent function update your key state booleans appropriately.
                                </p>
                            </div>
                        </li>

                        <li>
                            In our game loop, we have two functions: update and draw. So far, we have been strictly working on the draw function, but when doing game logic such as camera movement, we want to use the update function.
                            <p className="mt-2">
                                When translating the camera, we want the following to be true:
                            </p>

                            <ul className="list-[circle] ml-6 mt-2 space-y-1">
                                <li>Pressing W moves the camera along the axis (look.x, 0, look.z)</li>
                                <li>Pressing S moves the camera along the axis (-look.x, 0, -look.z)</li>
                                <li>Pressing A moves the camera along the axis (look.z, 0, -look.x)</li>
                                <li>Pressing D moves the camera along the axis (-look.z, 0, look.x)</li>
                            </ul>

                            <div className="border p-2 border-white">
                                <h3 className="mt-6 text-xl underline font-bold">Try:</h3>
                                <p className="mt-2">
                                    Using these rules, within the update function, translate the camera appropriately based on the key state booleans that are currently set. Do not worry too much about the speed at the moment.
                                </p>
                                <p className="mt-2">
                                    Hints:
                                    <ol className="list-decimal ml-6 mt-4 space-y-4">
                                        <li>
                                            In order to get the look vector of your camera, you can use the Camera::getLook function.
                                        </li>
                                        <li>
                                            In order to get the up vector of your camera, you can use the Camera::getUp function.
                                        </li>
                                        <li>
                                            Be sure to allow for movement in diagonal directions. Think about how you can normalize the speed of movement to be the same regardless of if you are moving in a cardinal direction or along a diagonal.
                                        </li>
                                    </ol>
                                </p>
                            </div>
                        </li>

                        <li>
                            When it comes to camera rotation, we will use the following rules:
                            <ul className="list-[circle] ml-6 mt-2 space-y-1">
                                <li>Moving the mouse horizontally should rotate the camera about the axis (0, 1, 0)</li>
                                <li>Moving the mouse vertically should rotate the camera about the axis (look.z, 0, -look.x)</li>
                                <li>The camera should only move when the right mouse button is pressed.</li>
                            </ul>

                            <div className="border p-2 border-white">
                                <h3 className="mt-6 text-xl underline font-bold">Try:</h3>
                                <p className="mt-2">
                                    To keep track of the mouse button and previous mouse position, within Engine/core.h create a private boolean for the right mouse button and a private glm::vec2 for the previous mouse position.
                                </p>
                                <p className="mt-2">
                                    Within Core::mouseButtonEvent, use the enumeration GLFW_MOUSE_BUTTON_RIGHT and the same enumerations as the key events GLFW_PRESS and GLFW_RELEASE to update your boolean for the right mouse button state.
                                </p>
                                <p className="mt-2">
                                    Within Core::mousePosEvent, if the right mouse button is pressed, calculate the change of the new input x and y positions. Then use the Camera::rotate function twice for each direction x and y separately. Use the rules above to generate these axes and for the angle try multiplying the change in x and y by 0.1f though the sensitivity can be tweaked to your preference.
                                </p>
                            </div>
                        </li>

                        <li>
                            If you resize the window you will notice that the shape you drew becomes distorted. To fix this, we need to update the aspect ratio of our camera whenever the window is resized.
                            <div className="border p-2 border-white">
                                <h3 className="mt-6 text-xl underline font-bold">Try:</h3>
                                <p className="mt-2">
                                    Within Core::windowResizeEvent, call Camera::resize() with the new window dimensions.
                                </p>
                            </div>
                        </li>
                    </ol>
                    {/* ---------------- DELTA TIME ---------------- */}
                    <h2 className="mt-10 text-3xl text-[#b30000] font-bold">Adding Delta Time</h2>
                    <ol className="list-decimal ml-6 mt-4 space-y-4">
                        <li>
                            For adding delta time to your update loop, we have to look at Engine/window.cpp.
                            <div className="border p-2 border-white">
                                <h3 className="mt-6 text-xl underline font-bold">Try:</h3>
                                <p className="mt-2">
                                    Within Window::loop’s while loop, calculate the current time using glfwGetTime(). Then use the difference between the current and previous time as an input to the update function of Core. Note that to do this you will need to modify the function signature under Engine/core.h as well as the definition within Engine/core.cpp. It is recommended to make this input a double to match what is given by GLFW.
                                </p>
                            </div>
                        </li>

                        <li>
                            Now we can utilize this information on time to make the movement speed consistent within Core::update.
                            <div className="border p-2 border-white">
                                <h3 className="mt-6 text-xl underline font-bold">Try:</h3>
                                <p className="mt-2">
                                    Since velocity is distance/time, if you pick a velocity of your choice, each update translate a distance of velocity * delta time to make movement consistent.
                                </p>
                            </div>
                        </li>
                    </ol>

                    {/* ---------------- HANDIN ---------------- */}
                    <h2 className="mt-10 text-3xl text-[#b30000] font-bold">Handing In</h2>

                    <ol className="list-decimal ml-6 mt-4 space-y-4">
                        <li>
                            Make sure you’ve committed and pushed all changes to your remote repository
                        </li>
                        <li>
                            Create a release for this handin
                            <ul className="list-[lower-alpha] ml-6 mt-2 space-y-2">
                                <li>
                                    On your repository page, click on “Create a new release” on the right-hand sidebar
                                </li>
                                <li>
                                    Format your tag name as Setup1.0
                                </li>
                                <ul className="list-disc ml-6 mt-2 space-y-2">
                                    <li>
                                        If you want to handin a later version just increment the version number and we’ll take the latest one (ex Setup1.1)
                                    </li>
                                </ul>
                                <li>
                                    Set the target to the commit you just pushed (<strong>do not</strong> hand in the master branch!)
                                </li>
                                <li>
                                    Fill in the rest of the form accordingly and publish your release.
                                </li>
                            </ul>
                        </li>
                    </ol>

                    <div className="h-20" />
                </div>
            </div>
        </>
    );
};

export default Assignment1;