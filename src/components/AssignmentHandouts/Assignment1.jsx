import React from "react";
import {Link} from "react-router-dom";

const Assignment1 = ({onOverlaySelect}) => {
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
                <div
                    className="w-full max-w-4xl bg-black/60 border border-black p-10 text-white rounded-md backdrop-blur-sm">
                    <h1 className="text-5xl font-doom text-[#b30000] mb-4">
                        Setup Tutorial
                    </h1>
                    <p className="mt-2 font-bold">Due: 1/28/26 @ 3 PM</p>

                    {/* Introduction */}
                    <h2 className="mt-10 text-3xl text-[#b30000] font-bold">Introduction</h2>
                    <p className="mt-4">
                        Hi there and welcome to CS1950U! This assignment is designed to guide you through both setting
                        up your local environment as well as the basics of using the support code. Before we begin, here
                        are a few things to keep in mind:
                    </p>

                    <ul className="list-disc ml-6 mt-4 space-y-2">
                        <li>
                            The TA staff encourages you to look at and play around with the support code.
                            This tutorial will only use a few functions but feel free to explore various
                            functions for yourself!
                        </li>
                        <li>
                            You will be writing C++ code for the entire semester, which we do not explicitly
                            teach other than occasional tips. If you have not written much C++ code before,
                            we strongly recommend you to check out Lab1, the CS1230 first lab and resources
                            on C++ to get started.
                        </li>
                        <li>
                            In addition, while this course is NOT necessarily a course in computer graphics,
                            it will still be helpful to understand the graphics pipeline and some
                            basic OpenGL concepts if you wish to be fully fluent with the stencil
                            code. A good introduction to OpenGL can be found here:{" "}
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

                    {/* Collaboration Policy */}
                    <h2 className="mt-10 text-[#b30000] text-3xl font-bold">
                        Collaboration Policy & TA Hours Form!
                    </h2>
                    <p className="mt-4">
                        Before beginning this assignment, please read
                        the collaboration policy on the syllabus.
                    </p>

                    {/* Downloading */}
                    <h2 className="mt-10 text-[#b30000] text-3xl font-bold">Downloading the Stencil</h2>
                    <p className="mt-4">
                        To get the stencil, accept the {" "}
                         <a
                            href="https://classroom.github.com/a/xHXFiteA"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="underline text-[#00ccff]"
                        >
                            GitHub Classroom assignment
                        </a>
                        {" "} and
                        "git clone" the repository URL into a directory of your choice.
                    </p>

                    <p className="mt-4">
                        The stencil for this course has been made to include some basic external libraries explicitly within the
                        “Dependencies” folder and has a provided CMakeLists.txt for you to use. 
                        Feel free to add any additional libraries you would like to use in your code.

                    </p>

                    {/* Setup Options */}
                    <h2 className="mt-10 text-[#b30000] text-3xl font-bold">
                        Setting Up Your Local Environment
                    </h2>
                    <p className="mt-4">
                        To develop locally, we suggest using CLion (IDE), or Qt Creator (IDE)
                    </p>


                    {/* Option 1 */}
                    <h2 className="mt-10 text-2xl font-bold">Option 1: CLion Setup (RECOMMENDED)</h2>
                    <p className="mt-4">
                        Even if you have used QT Creator previously, we recommend using CLion due to its features and
                        customizability.
                        Download and install CLion{" "}
                        <a
                            href="https://www.jetbrains.com/clion/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="underline text-[#00ccff]"
                        >
                            here
                        </a>
                        {" "}
                        After installation:
                    </p>
                    <ul className="list-disc ml-6 mt-4 space-y-2">
                        <li>
                            Open the Project:
                            <ul className="list-[circle] ml-6 mt-2 space-y-1">
                                <li>
                                    Launch CLion, click Open, and navigate to the directory 
                                    CS1950U Stencil folder you just cloned
                                    and select the top-level CMakeLists.txt file.
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
                                    Tick Reload CMake project on editing CMakeLists.txt or other CMake configuration
                                    files at the top. This saves you from manually reconfiguring the project after
                                    editing configurations.
                                </li>
                                <li>
                                    On the left of the Profiles panel, you’ll see a default Debug profile.
                                    Click the + button to add a new profile, and CLion will automatically
                                    create a Release profile.
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

                    {/* Option 2 */}
                    <h2 className="mt-10 text-2xl font-bold">Option 2: QT Creator Setup</h2>
                    <p className="mt-4">
                        For installation and use of Qt Creator, we recommend following the
                        entirety of Section 3 of Lab 1 from CS1230 linked{" "}
                        <a
                            href="https://cs1230.graphics/labs/lab1/#qt-and-qt-creator"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="underline text-[#00ccff]"
                        >
                            here
                        </a>
                        {" "}Note that because we do not use any Qt libraries in the stencil (just Qt Creator),
                        you can skip the selection of Qt 6.5.2 in section 3.1. Navigate to the directory 
                        CS1950U Stencil folder you just cloned
                        and select the top-level CMakeLists.txt file.
                    </p>

                    {/* How to Edit CMakeLists.txt */}
                    <h2 className="mt-10 text-[#b30000] text-3xl font-bold">For All Options: How to Edit CMakeLists.txt</h2>
                    <p className="mt-4">
                        Whenever you generate a file and want it to be included in your project, 
                        you must navigate to the appropriate CMakeLists.txt of your engine or game 
                        and type in your file’s relative path from the project directory inside 
                        the “add_executable” command block (you’ll notice that we’ve already 
                        placed all the files that come with the stencil, such as “Games/basic.cpp”, 
                        in this block). This is necessary for the file to be included in the build, 
                        and in Qt Creator, this should make the file visible in the project view. 
                    </p>


                    {/* Exploring Stencil */}
                    <h2 className="mt-10 text-[#b30000] text-3xl font-bold">Exploring the Stencil</h2>
                    <p className="mt-4">
                        Upon compiling and building the project,
                        running the executable should open a window
                        that displays the phrase “Welcome to CS1950U!”.
                        If you do not see this, please let a TA know as soon
                        as possible so we can get this resolved.
                    </p>
                    <p className="mt-4">
                        Now let’s navigate through the support code:
                    </p>

                    <ol className="list-decimal ml-6 mt-4 space-y-4">
                        <li>
                            Read through the README file found in the Engine/ directory. This will give you a general
                            overview of the stencil and its functions. You can also refer back at any time.
                        </li>
                        <li>
                            For this project, take a look at Engine/Src/Window.cpp. This file consists of the boiler plate which
                            establishes a
                            window, game loop, and various event handlers. The only function you will work with is
                            Window::update() briefly in this assignment.
                        </li>
                        <li>
                            ⭐️ HINT: The majority of changes that you will be making for this assignment will be in the game itself, 
                            rather than the Engine. However, you will still need to figure out how to connect your game to your engine!
                        </li>
                        <li>
                            Now navigate to Games/basic.cpp. In this file you will see a more empty template 
                            consisting of update, draw, and various event functions again stripped down for 
                            your convenience. This file represents an instance of the Game class, which can be found in Engine/include/Engine/game.h.
                            In this assignment you will be writing directly in this file, but soon you will be 
                            making abstractions which will minimize the amount of code that should be here!
                        </li>

                    </ol>

                    {/* Starting Project */}
                    <h2 className="mt-10 text-[#b30000] text-3xl font-bold">Starting Your Project</h2>

                    <h3 className="mt-6 text-xl underline font-bold">
                        Transforms, Shapes, Materials Oh My!
                    </h3>

                    <p className="mt-4">
                        To begin on your journey, navigate to Games/basic.cpp’s draw()
                        function and let’s first discuss what is necessary to draw a
                        shape using the given stencil.
                    </p>
                    <ol className="list-decimal ml-6 mt-4 space-y-4">
                        <li>
                            The first function present here is gl::Graphics::clearScreen(color) and tells our computer
                            to wipe clean any data it previously stored to represent the screen. Generally you will
                            always want to make this call at the start of any given frame. where color is a glm::vec3 of
                            floating point values between 0 to 1 in each channel (R, G, and B). In the method
                            implementation we see that both GL_COLOR_BUFFER_BIT and GL_DEPTH_BUFFER_BIT are cleared. The
                            depth buffer will ensure that you don’t see shapes overlap in the wrong order or in strange
                            locations whilst the color buffer sets the screen to the clearColor.
                            <div className="border p-2 border-white">
                                <h3 className="mt-6 text-xl underline font-bold">Try:</h3>
                                <p className="mt-2">
                                    Change the clear color of gl::Graphics::clearScreen in BasicGame::draw() to whatever you
                                    like and see what happens when you run the program!
                                </p>
                            </div>
                        </li>

                        <li>
                            The next function you see is gl::Graphics::useTextShader() and is what determines how your
                            input data will be displayed. For your convenience, we have pre-loaded 3 shader programs:
                            “phong”, “text” and “skinned” - each with their respective use method in Graphics.h. If you
                            are drawing your 3d scene of shapes which you will do most often, you will want to bind the
                            “phong” shader. If you are drawing a text overlay, then you will instead want to bind the
                            “text” shader. Later in the course you will learn about skinned meshes, which you will use
                            the “skinned” shader for.
                            <div className="border p-2 border-white">
                                <h3 className="mt-6 text-xl underline font-bold">Try:</h3>
                                <p className="mt-2">
                                    After calling gl::Graphics::clearScreen, try binding the “phong” shader.
                                </p>
                            </div>
                        </li>

                        <li>
                            Once you have a shader bound, there are certain parameters you will need to set for it to
                            know how to draw. For the phong shader, these necessary parameters are encompassed in
                            calling the following functions:
                        </li>

                        <ul className="list-[circle] ml-6 mt-2 space-y-1">
                            <li>gl::Graphics::setAmbientLight(glm::vec3 ambient)</li>
                            <li>gl::Graphics::setCameraUniforms(Camera* camera)</li>
                            <li>Optional:
                                gl::Graphics::setLights(std::vector{"<"}Light{">"}& lights)
                            </li>
                        </ul>

                        <p className="mt-4">
                            For the text shader, these necessary parameters are handled for you within the
                            gl::Graphics::drawText function.
                            One important thing about these parameters is that unless you specifically call these
                            functions, they will not change. This means that even if you bind a different shader, or
                            enter a new draw cycle, they will not change. So if you wish, for any parameters that will
                            remain static, you can opt to set them once elsewhere and not worry about them again.
                            Generally, the camera should always be set each draw loop as you begin to introduce movement
                            to your game, whereas lights only need to be updated if they change.

                        </p>

                        <div className="border p-2 border-white">
                            <h3 className="mt-6 text-xl underline font-bold">Try:</h3>
                            <p className="mt-2">
                                After binding the “phong” shader, set ambient light to glm::vec3(0.5f).
                            </p>
                        </div>

                        <div className="border p-2 border-white">
                            <h3 className="mt-6 text-xl underline font-bold">Try:</h3>
                            <p className="mt-2">
                                In order to set camera data, we need to create a camera object. To do so, navigate to
                                Games/basic.h. Currently there are only public member functions. Let’s add a private
                                section by typing the keyword private: on a new line after the resizeWindowEvent
                                function declaration.
                            </p>
                            <p className="mt-2">
                                Next, in this new private section, declare an std::unique_ptr{"<"}Camera{">"} of
                                whatever name you wish.
                            </p>
                            <p className="mt-2">
                                Now in the constructor for BasicGame, use an initializer list to instantiate your camera
                                object with no input parameters. Use std::make_unique{"<"}Camera{">"}() to do so.
                            </p>
                            <p className="mt-2">
                                Once we have done this, within BasicGame::draw immediately after setting the global data, we
                                can finally call gl::Graphics::setCameraUniforms with our private
                                std::unique_ptr{"<"}Camera{">"} object we just created. Use the .get() function to get
                                a raw pointer to pass into the function.
                            </p>
                        </div>

                        <li>
                            Now we need to get a shape to actually draw. In Mesh.cpp under initializeDefaultShapes(), we
                            have provided for you 5 “default” shapes to work with, cone, cube, cylinder, sphere, and
                            quad.
                            <div className="border p-2 border-white">
                                <h3 className="mt-6 text-xl underline font-bold">Try:</h3>
                                <p className="mt-2">
                                    To store a Shape within the BasicGame class, declare a private
                                    DrawShape* (pointer) of whatever name you wish within Games/basic.h. This is a raw
                                    pointer since the Mesh class stores the shapes as unique pointers internally and we
                                    are merely referencing them.
                                </p>
                                <p className="mt-2">
                                    Now in the constructor for BasicGame, set your shape variable using
                                    gl::Mesh::getShape(std::string shapeName) and input any one of the 5 default shapes
                                    in lowercase.
                                </p>
                            </div>
                        </li>

                        <li>
                            In order to draw our shape, we need to also have a location and orientation of where to draw
                            it. In the stencil, this data is stored in a Transform object.
                            <div className="border p-2 border-white">
                                <h3 className="mt-6 text-xl underline font-bold">Try:</h3>
                                <p className="mt-2">
                                    To store a Transform within the BasicGame class, declare a private
                                    Transform of whatever name you wish within
                                    Games/basic.h.
                                </p>
                                <p className="mt-2">
                                    Now in the constructor for BasicGame, use the initializer list to instantiate your
                                    Transform object with no input parameters.
                                </p>
                            </div>
                        </li>

                        <li>
                            Now that we have both a DrawShape* and a Transform, we have the minimum amount in order to
                            draw a shape!
                            <div className="border p-2 border-white">
                                <h3 className="mt-6 text-xl underline font-bold">Try:</h3>
                                <p className="mt-2">
                                    In BasicGame::draw, after setting the camera uniform, call gl::Graphics::drawObject and
                                    input your shape first followed by your model transform second.
                                </p>
                            </div>
                        </li>

                        <li>
                            Upon running your program, you likely will not see anything, this is because your shape is
                            sitting right on top of your camera!
                            <div className="border p-2 border-white">
                                <h3 className="mt-6 text-xl underline font-bold">Try:</h3>
                                <p className="mt-2">
                                    In the constructor for BasicGame, try using the translate, rotate, and scale functions of
                                    Transform to get the shape to appear on screen! Keep in mind (0, 1, 0) is the
                                    up direction, the camera is located at (0, 0, 0) and is looking in the direction (0,
                                    0, 1) by default.
                                </p>
                            </div>
                        </li>

                        <li>
                            Now that you have a shape, let's give it some spice by adding a custom material.
                            DrawMaterial (found in stencil/render/Material.h) contains color and texture data. If the
                            textures are left blank, the shaders will draw them as solid colors.
                            <div className="border p-2 border-white">
                                <h3 className="mt-6 text-xl underline font-bold">Try:</h3>
                                <p className="mt-2">
                                    Finally declare a DrawMaterial instance with whatever name you wish in basic.cpp. In
                                    the constructor, you can set its .texture value by using gl::Material::loadTexture
                                    with “resources/images/grass.png” as the diffuse path. You also may want to
                                    experiment with other values, such as the ambient color.
                                </p>
                                <p className="mt-2">
                                    Now try drawing your shape with your newly declared material!
                                </p>
                            </div>
                        </li>
                    </ol>
                    {/* ---------------- CAMERA CONTROL ---------------- */}
                    <h3 className="mt-10 text-xl underline font-bold">Controlling Your Camera</h3>
                    <ol className="list-decimal ml-6 mt-4 space-y-4">

                        <li>
                            Typically to control a camera in many games we use the WASD keys. When you press W, the
                            character should move forwards, S backwards, D to the right, and A to the left. Later on,
                            you will be asked to implement a more robust version of an input handler, but for now, let's
                            store some key states within our BasicGame class.
                            <div className="border p-2 border-white">
                                <h3 className="mt-6 text-xl underline font-bold">Try:</h3>
                                <p className="mt-2">
                                    Within Games/basic.h, declare a std::unordered_map{"<"}int, bool{">"} which will
                                    represent the key state of any given key.
                                </p>
                            </div>
                        </li>

                        <li>
                            To update key states, we will want to use the BasicGame::keyEvent function. There are two inputs
                            to this function, the key, and the action, both of which are formatted as integers. However,
                            these integers merely map to enumerations given by the GLFW library. For example, the W key
                            is referred to by the integer enumerated by GLFW_KEY_W. There are 2 actions you will care
                            about which are GLFW_PRESS, and GLFW_RELEASE.
                            <div className="border p-2 border-white">
                                <h3 className="mt-6 text-xl underline font-bold">Try:</h3>
                                <p className="mt-2">
                                    Using these enumerations, within the BasicGame::keyEvent function update your key state
                                    booleans appropriately.
                                </p>
                            </div>
                        </li>

                        <li>
                            In our game loop, we have two functions: update and draw. So far, we have been strictly
                            working on the draw function, but when doing game logic such as camera movement, we want to
                            use the update function.
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
                                    Using these rules, within the update function, translate the camera appropriately
                                    based on the key state booleans that are currently set. Do not worry too much about
                                    the speed at the moment.
                                </p>
                                <p className="mt-2">
                                    Hints:
                                    <ol className="list-decimal ml-6 mt-4 space-y-4">
                                        <li>
                                            In order to get the look vector of your camera, you can use the
                                            Camera::getLook function.
                                        </li>
                                        <li>
                                            In order to get the up vector of your camera, you can use the Camera::getUp
                                            function.
                                        </li>
                                        <li>
                                            Be sure to allow for movement in diagonal directions. Think about how you
                                            can normalize the speed of movement to be the same regardless of if you are
                                            moving in a cardinal direction or along a diagonal.
                                        </li>
                                    </ol>
                                </p>
                            </div>
                        </li>

                        <li>
                            When it comes to camera rotation, we will use the following rules:
                            <ul className="list-[circle] ml-6 mt-2 space-y-1">
                                <li>Moving the mouse horizontally should rotate the camera about the axis (0, 1, 0)</li>
                                <li>Moving the mouse vertically should rotate the camera about the axis (look.z, 0,
                                    -look.x)
                                </li>
                                <li>The camera should only move when the right mouse button is pressed.</li>
                            </ul>

                            <div className="border p-2 border-white">
                                <h3 className="mt-6 text-xl underline font-bold">Try:</h3>
                                <p className="mt-2">
                                    To keep track of the mouse button and previous mouse position, within Games/basic.h
                                    create a private boolean for the right mouse button and a private glm::vec2 for the
                                    previous mouse position.
                                </p>
                                <p className="mt-2">
                                    Within BasicGame::mouseButtonEvent, use the enumeration GLFW_MOUSE_BUTTON_RIGHT and the
                                    same enumerations as the key events GLFW_PRESS and GLFW_RELEASE to update your
                                    boolean for the right mouse button state.
                                </p>
                                <p className="mt-2">
                                    Within BasicGame::mousePositionEvent, if the right mouse button is pressed, calculate the
                                    change of the new input x and y positions. Then think about how you can use these
                                    changes to rotate the camera appropriately. Consider adding an x and y rotation
                                    angle in the camera class which you update based on the mouse movement deltas. Then
                                    use these angles to calculate the new look vector of the camera. Ensure to clamp the
                                    vertical rotation angle to be between -89 and 89 degrees to avoid camera flipping.
                                </p>
                            </div>
                        </li>

                        <li>
                            If you resize the window you will notice that the shape you drew becomes distorted. To fix
                            this, we need to update the aspect ratio of our camera whenever the window is resized.
                            <div className="border p-2 border-white">
                                <h3 className="mt-6 text-xl underline font-bold">Try:</h3>
                                <p className="mt-2">
                                    Within BasicGame::windowResizeEvent, call Camera::setAspectRatio() with the new aspect
                                    ratio. You can also call the static method Window::getAspectRatio() from anywhere to
                                    get the current aspect ratio of the screen.
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
                                    Within the Window::update method before display(), calculate delta_time by using the
                                    static local variables s_current_time and s_last_time, and then pass delta_time as
                                    an input to the update function of BasicGame.
                                </p>
                            </div>
                        </li>

                        <li>
                            Now we can utilize this information on time to make the movement speed consistent within
                            BasicGame::update.
                            <div className="border p-2 border-white">
                                <h3 className="mt-6 text-xl underline font-bold">Try:</h3>
                                <p className="mt-2">
                                    Since velocity is distance/time, if you pick a velocity of your choice, each update
                                    translate a distance of velocity * delta time to make movement consistent.
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
                                        If you want to handin a later version just increment the version number and
                                        we’ll take the latest one (ex Setup1.1)
                                    </li>
                                </ul>
                                <li>
                                    Set the target to the commit you just pushed (<strong>do not</strong> hand in the
                                    master branch!)
                                </li>
                                <li>
                                    Fill in the rest of the form accordingly and publish your release.
                                </li>
                            </ul>
                        </li>
                    </ol>

                    <div className="h-20"/>
                </div>
            </div>
        </>
    );
};

export default Assignment1;