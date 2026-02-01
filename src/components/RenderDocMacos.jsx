import React from "react";

const RenderDocMacos = () => {
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
          <h1 className="text-[1.6rem] font-doom text-[#b30000] mb-4">
            Building RenderDoc on macOS
          </h1>
          <p className="mt-4">
            This guide covers building RenderDoc on macOS, including handling Qt5 dependencies when Qt6 is installed system-wide.
          </p>

          <h2 className="mt-10 text-[#b30000] text-3xl font-bold">
            Prerequisites
          </h2>
          <ul className="list-disc ml-6 mt-4 space-y-2">
            <li>macOS 12.0 or later</li>
            <li>Xcode Command Line Tools</li>
            <li>Homebrew</li>
          </ul>

          <h2 className="mt-10 text-[#b30000] text-3xl font-bold">
            Install Dependencies
          </h2>
          <pre className="mt-4 bg-black/80 p-4 rounded-md overflow-x-auto">
            <code>brew install cmake autoconf automake pcre qt@5 python@3.12</code>
          </pre>
          <p className="mt-4">
            <strong>Note:</strong> <code className="bg-black/80 px-1 rounded">qt@5</code> is installed as keg-only, meaning it won't be symlinked into <code className="bg-black/80 px-1 rounded">/opt/homebrew</code> and won't conflict with any existing Qt6 installation.
          </p>

          <h2 className="mt-10 text-[#b30000] text-3xl font-bold">
            Configure and Build
          </h2>

          <p className="mt-4">
            <p className="underline">1. Configure with CMake</p>
            <br />
            <p>Point CMake to the Homebrew Qt5 qmake and Python:</p>
            <pre className="mt-4 bg-black/80 p-4 rounded-md overflow-x-auto text-sm">
              <code>{`cmake . -B build \\
  -DQMAKE_QT5_COMMAND=/opt/homebrew/opt/qt@5/bin/qmake \\
  -DPython3_EXECUTABLE=/opt/homebrew/opt/python@3.12/bin/python3.12 \\
  -DPython3_LIBRARY=/opt/homebrew/opt/python@3.12/Frameworks/Python.framework/Versions/3.12/lib/libpython3.12.dylib \\
  -DPython3_INCLUDE_DIR=/opt/homebrew/opt/python@3.12/Frameworks/Python.framework/Versions/3.12/include/python3.12 \\
  -DCMAKE_BUILD_TYPE=Release`}</code>
            </pre>
          </p>

          <p className="mt-4">
            <p className="underline">2. Build</p>
            <pre className="mt-4 bg-black/80 p-4 rounded-md overflow-x-auto">
              <code>cmake --build build</code>
            </pre>
          </p>

          <h2 className="mt-10 text-[#b30000] text-3xl font-bold">
            Run
          </h2>
          <pre className="mt-4 bg-black/80 p-4 rounded-md overflow-x-auto">
            <code>./bin/qrenderdoc.app/Contents/MacOS/qrenderdoc</code>
          </pre>

          <h2 className="mt-10 text-[#b30000] text-3xl font-bold">
            Troubleshooting
          </h2>

          <p className="mt-4">
            <p className="underline">Library not loaded: libpython</p>
            <br />
            <p>
              If you see an error about <code className="bg-black/80 px-1 rounded">libpython</code> not being found, ensure you're using Homebrew's Python (not Conda/miniforge) by setting the <code className="bg-black/80 px-1 rounded">Python3_*</code> CMake variables as shown above.
            </p>
          </p>

          <p className="mt-4">
            <p className="underline">Qt version conflicts</p>
            <br />
            <p>
              If you have Qt6 installed system-wide, always specify <code className="bg-black/80 px-1 rounded">-DQMAKE_QT5_COMMAND=/opt/homebrew/opt/qt@5/bin/qmake</code> to use the keg-only Qt5.
            </p>
          </p>

        </div>
      </div>
    </>
  );
};

export default RenderDocMacos;
