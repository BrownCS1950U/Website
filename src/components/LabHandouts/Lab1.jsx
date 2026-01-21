import React from "react";

const Lab1 = () => {
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
                <div className="w-full max-w-4xl bg-black/60 border border-black p-10 text-white rounded-md backdrop-blur-sm">

                    {/* ===================== TITLE ===================== */}
                    <h1 className="text-5xl font-doom text-[#b30000] mb-4">
                        Lab 1
                    </h1>
                    <br></br>

                    <p className="mt-4">
                        This is your very first lab for CS1950U! Please read through the handout and 
                        complete the excercises within the red boxes. You are not required to spend a 
                        huge amount of time writing out long answers. Just please be prepared to briefly
                        discuss a question or two, or show some evidence of your participation. 
                    </p>
                    <p className="mt-4">
                        The main goal of this lab is to introduce you to some of the specifics of workinging
                        in C++ 
                    </p>

                    {/* ===================== SECTION: Memory Allocation ===================== */}
                    <h2 className="mt-10 text-3xl text-[#b30000] font-bold">
                        Memory Allocation
                    </h2>

                    <p className="mt-4">
                        In C++, objects can be allocated on <strong>heap</strong>heap or <strong>stack</strong>.
                        Objects on stack are automatically managed by the system,
                        meaning they are <strong>created when the function begins and
                        destroyed when they go out of scope.</strong> This makes stack 
                        allocation efficient but limits object lifetime to the 
                        function's execution.
                    </p>

                    {/* FIGURE 1 */}
                    <div className="mt-6">
                        <img
                            src="/LabImages/lab1-1.png"
                            alt="figure"
                            className="w-full rounded bg-gray-800"
                        />
                    </div>

                    <p className="mt-4">
                        Heap memory gives more flexibility because it allows 
                        dynamic allocation, meaning objects <strong>can exist beyond 
                        the scope of a function.</strong> However, it also requires 
                        programmers to manually allocate and deallocate memory.
                    </p>

                    {/* FIGURE 2 */}
                    <div className="mt-6">
                        <img
                            src="/LabImages/lab1-2.png"
                            alt="figure"
                            className="w-full rounded bg-gray-800"
                        />
                    </div>

                    <p className="mt-4">
                        ⚠️ Be careful with your choice of memory allocation method! 
                        If you rely too much on dynamic allocation, you may end up 
                        with a game that needs to fetch game objects every time and 
                        have a lot of cache misses, resulting in slower update and 
                        draw calls. 
                    </p>
                    <br></br>

                    {/* ===================== TASK 1 ===================== */}
                    <div className="border p-2 border-[#b30000]">
                                <h3 className="mt-6 text-xl underline font-bold">Task 2</h3>
                        <p className="mt-4">
                            Fix the bug in the following code snippet
                        </p>
                        <a
                                    href="https://www.programiz.com/online-compiler/3tHxX9lA7MHse"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="underline text-[#00ccff]"
                                >
                                    https://www.programiz.com/online-compiler/3tHxX9lA7MHse
                        </a>
                        <p className="mt-4">
                            Why does the code not run, and why deallocating from the heap is important?
                        </p>
                    </div>
                    <br></br>

                    {/* ===================== TASK 2 ===================== */}

                    <div className="border p-2 border-[#b30000]">
                                <h3 className="mt-6 text-xl underline font-bold">Task 2</h3>
                        <p className="mt-4">
                            Fix the bug in the following code snippet
                        </p>
                        <a
                                    href="https://www.programiz.com/online-compiler/0UmNWwsQ0ZrMO"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="underline text-[#00ccff]"
                                >
                                    https://www.programiz.com/online-compiler/0UmNWwsQ0ZrMO
                        </a>
                        <p className="mt-4">
                            Why does the code not run, and why deallocating from the heap is important?
                        </p>
                    </div>

                    {/* ===================== SECTION: Smart Pointers ===================== */}
                    <h2 className="mt-10 text-3xl text-[#b30000] font-bold">
                        Smart Pointers
                    </h2>

                    <p className="mt-4">
                        If you decide to use raw pointers to create objects, 
                        you're also responsible for deallocating them to avoid memory leaks.
                    </p>

                    <div className="mt-6">
                        <img
                            src="/LabImages/lab1-3.png"
                            alt="figure"
                            className="w-full rounded bg-gray-800"
                        />
                    </div>

                    <p className="mt-4">
                        Having to free up all dynamically allocated memory can be 
                        a hassle and make your code error-prone. This is where smart 
                        pointers can be helpful.
                    </p>
                    <br></br>

                    <p className="underline">std::unique_ptr</p>
                    <ul className="list-disc ml-6 mt-4 space-y-2">
                        <li>No more than one unique_ptr can point to the same object at the same time</li>
                        <li>But you can transfer the ownership of the object to another smart pointer using std::move</li>
                        <li>Automatically cleaned up when the objects go out of scope</li>
                    </ul>
                    <br></br>

                    <p className="underline">std::shared_ptr</p>
                    <ul className="list-disc ml-6 mt-4 space-y-2">
                        <li>Multiple shared_ptr can share the ownership of the same object</li>
                        <li>Automatically cleaned up when the reference count goes to 0</li>
                    </ul>
                    <br></br>

                    <p className="underline">std::weak_ptr</p>
                    <ul className="list-disc ml-6 mt-4 space-y-2">
                        <li>Does not own objects, but holds a reference to a shared_ptr-managed object</li>
                        <li>Used to prevent circular references</li>
                    </ul>

                    <h2 className="mt-10 text-3xl text-[#b30000] font-bold">
                        Creating Smart Pointers
                    </h2>               

                    <p className="mt-4">
                        A rudimentary way to create a smart pointer is by passing a raw pointer to it.
                    </p>

                    <div className="mt-6">
                        <img
                            src="/LabImages/lab1-4.png"
                            alt="figure"
                            className="w-full rounded bg-gray-800"
                        />
                    </div>

                    <p className="mt-4">
                        But the recommended way to instantiate objects with smart pointers is 
                        by using make functions because they are considered safer and more efficient.
                    </p>

                    <div className="mt-6">
                        <img
                            src="/LabImages/lab1-5.png"
                            alt="figure"
                            className="w-full rounded bg-gray-800"
                        />
                    </div>

                    <p className="mt-4">
                        ⚠️ Make sure to #include {"<"}memory{">"} when you use smart pointers.
                    </p>
                    <br></br>

                    {/* ===================== TASK 3 ===================== */}
                    <div className="border p-2 border-[#b30000]">
                                <h3 className="mt-6 text-xl underline font-bold">Task 3</h3>
                        <p className="mt-4">
                            In the stencil code we used unique_ptr for the window of the application. 
                            Do you think it's a good choice and why?
                        </p>
                        <div className="mt-6">
                        <img
                            src="/LabImages/lab1-6.png"
                            alt="figure"
                            className="w-full rounded bg-gray-800"
                        />
                    </div>
                    </div>

                    {/* ===================== SECTION: Polymorphism ===================== */}
                    <h2 className="mt-10 text-3xl text-[#b30000] font-bold">
                        Polymorphism
                    </h2>

                    {/* Virtual Function */}
                    <h3 className="mt-6 text-2xl text-[#b30000] font-bold">
                        Virtual Function
                    </h3>

                    <div className="mt-6">
                        <img
                            src="/LabImages/lab1-7.png"
                            alt="figure"
                            className="w-full rounded bg-gray-800"
                        />
                    </div>

                    <ul className="list-disc ml-6 mt-4 space-y-2">
                        Virtual functions are declared (and may be defined) in base class
                        Derived classes can choose to override virtual functions or not
                    </ul>

                    {/* Pure Virtual Function */}
                    <h3 className="mt-6 text-2xl text-[#b30000] font-bold">
                        Pure Virtual Function
                    </h3>

                    <div className="mt-6">
                        <img
                            src="/LabImages/lab1-8.png"
                            alt="figure"
                            className="w-full rounded bg-gray-800"
                        />
                    </div>

                    <ul className="list-disc ml-6 mt-4 space-y-2">
                        <li>Pure virtual functions can only be <strong>declared (but NOT defined)</strong> in base class</li>
                        <li>Derived class <strong>must implement all pure virtual functions</strong> to be instantiated</li>
                    </ul>

                    <div className="mt-6">
                        <img
                            src="/LabImages/lab1-9.png"
                            alt="figure"
                            className="w-full rounded bg-gray-800"
                        />
                    </div>

                    {/* Abstract Class */}
                    <h3 className="mt-6 text-2xl text-[#b30000] font-bold">
                        Abstract Class
                    </h3>

                    <ul className="list-disc ml-6 mt-4 space-y-2">
                        <li>Abstract class <strong>cannot be instantiated</strong> and must contain <strong>at least one pure virtual function</strong></li>
                        <li>Serves as a blueprint that enforces a common interface and behavior for the derived classes</li>
                    </ul>

                    <p className="mt-4">
                        A good example of an abstract class is Screen class. A screen isn’t meaningful if it can’t draw itself, so we make the draw() function pure virtual. This ensures that every type of screen must define how it draws.
                    </p>
                    <br></br>
                    

                    {/* ===================== TASK 4 ===================== */}
                    <div className="border p-2 border-[#b30000]">
                                <h3 className="mt-6 text-xl underline font-bold">Task 4</h3>
                        <p className="mt-4">
                            Is it ok to override a non-virtual function? If so, what is the 
                            output of the following code?
                        </p>
                        <div className="mt-6">
                        <img
                            src="/LabImages/lab1-10.png"
                            alt="figure"
                            className="w-full rounded bg-gray-800"
                        />
                    </div>
                    </div>

                    {/* ===================== SECTION: Basic Game Engine Architecture ===================== */}
                    <h2 className="mt-10 text-3xl text-[#b30000] font-bold">
                        Basic Game Engine Architecture
                    </h2>

                    {/* FIGURE 6 */}
                    <div className="mt-6">
                        <img
                            src="/LabImages/lab1-11.png"
                            alt="figure"
                            className="w-full rounded bg-gray-800"
                        />
                    </div>

                    <p className="mt-4">
                        The diagram above is a sample hierarchy for Warmup 1. 
                        You can expect a lot of time spent on refactoring as you experiment 
                        with different levels of abstraction that fits your design.
                    </p>
                    <br></br>

                    {/* ===================== TASK 5 ===================== */}
                    <div className="border p-2 border-[#b30000]">
                                <h3 className="mt-6 text-xl underline font-bold">Task 5</h3>
                        <p className="mt-4">
                            Is it ok to override a non-virtual function? If so, what is the 
                            output of the following code?
                        </p>
                        <ol className="list-decimal ml-6 mt-4 space-y-2">
                        <li>How to propagate update(), draw(), and relevant event calls in Core to your game?</li>
                        <li>What container would you use to store Screens, and how do you specify which screen to show?</li>
                    </ol>
                    </div>

                </div>
            </div>
        </>
    );
};

export default Lab1;
