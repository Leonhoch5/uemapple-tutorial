"use client";
import { FaGamepad, FaLightbulb, FaCheckCircle, FaCode, FaArrowRight } from "react-icons/fa";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const isDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    setDarkMode(isDark);
    document.documentElement.classList.toggle("dark", isDark);
  }, []);



  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-purple-50 dark:from-gray-900 dark:to-gray-800 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        {/* Dark mode toggle button */}
        <div className="flex justify-end mb-4">

        </div>
        {/* Header Section */}
        <header className="text-center mb-12">
          <div className="flex justify-center mb-12">
            <FaGamepad className="text-blue-600 dark:text-blue-400 text-4xl mr-3" />
            <h1 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-600 dark:from-blue-400 dark:to-purple-500">
              UNREAL ENGINE BLUEPRINT TUTORIAL
            </h1>
          </div>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Learn working with Blueprint in Unreal Engine bc why not. So no coding required, cry about it
          </p>
        </header>

        <section className="bg-white dark:bg-gray-900 rounded-xl shadow-lg p-6 mb-12">
          <div className="flex items-center mb-3">
            <div className="bg-blue-100 dark:bg-blue-900 p-3 rounded-full mr-4">
              <FaLightbulb className="text-blue-600 dark:text-blue-300 text-xl" />
            </div>
            <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-100">But what tha fuck are Blueprints</h2>
          </div>
          <p className="text-gray-600 dark:text-gray-300 mb-4">
            Blueprints Visual Scripting is Unreal Engine's node-based interface to create gameplay elements without writing code. It's perfect for designers, artists, and beginners who want to bring their ideas to life.
          </p>
          <div className="flex flex-wrap gap-4">
            <div className="bg-green-50 dark:bg-green-900 border border-green-100 dark:border-green-800 rounded-lg p-3 flex-1 min-w-[200px]">
              <h3 className="font-medium text-green-800 dark:text-green-200 mb-1">Pros of Blueprints - Are there any?</h3>
              <ul className="text-sm text-green-700 dark:text-green-300 space-y-1">
                <li className="flex items-start">
                  <FaCheckCircle className="text-green-500 dark:text-green-400 mt-0.5 mr-2 flex-shrink-0" />
                  <span>Best for users with no coding experience</span>
                </li>
                <li className="flex items-start">
                  <FaCheckCircle className="text-green-500 dark:text-green-400 mt-0.5 mr-2 flex-shrink-0" />
                  <span>Fast prototyping</span>
                </li>
                <li className="flex items-start">
                  <FaCheckCircle className="text-green-500 dark:text-green-400 mt-0.5 mr-2 flex-shrink-0" />
                  <span>Visual and intuitive</span>
                </li>
                <li className="flex items-start">
                  <FaCheckCircle className="text-green-500 dark:text-green-400 mt-0.5 mr-2 flex-shrink-0" />
                  <span>Easy to read and understand</span>
                </li>
                <li className="flex items-start">
                  <FaCheckCircle className="text-green-500 dark:text-green-400 mt-0.5 mr-2 flex-shrink-0" />
                  <span>Quick debugging and iteration</span>
                </li>
                <li className="flex items-start">
                  <FaCheckCircle className="text-green-500 dark:text-green-400 mt-0.5 mr-2 flex-shrink-0" />
                  <span>Smaller and less files</span>
                </li>
                <li className="flex items-start">
                  <FaCheckCircle className="text-green-500 dark:text-green-400 mt-0.5 mr-2 flex-shrink-0" />
                  <span>Easier to learn</span>
                </li>
              </ul>
            </div>
            <div className="bg-yellow-50 dark:bg-yellow-900 border border-yellow-100 dark:border-yellow-800 rounded-lg p-3 flex-1 min-w-[200px]">
              <h3 className="font-medium text-yellow-800 dark:text-yellow-200 mb-1">Limitations - what's really important</h3>
              <ul className="text-sm text-yellow-700 dark:text-yellow-300 space-y-1">
                <li className="flex items-start">
                  <FaCheckCircle className="text-yellow-500 dark:text-yellow-400 mt-0.5 mr-2 flex-shrink-0" />
                  <span>Can be slower than C++ for complex logic</span>
                </li>
                <li className="flex items-start">
                  <FaCheckCircle className="text-yellow-500 dark:text-yellow-400 mt-0.5 mr-2 flex-shrink-0" />
                  <span>Harder to version control</span>
                </li>
                <li className="flex items-start">
                  <FaCheckCircle className="text-yellow-500 dark:text-yellow-400 mt-0.5 mr-2 flex-shrink-0" />
                  <span>Less control over low-level engine features</span>
                </li>
                <li className="flex items-start">
                  <FaCheckCircle className="text-yellow-500 dark:text-yellow-400 mt-0.5 mr-2 flex-shrink-0" />
                  <span>Can become messy in large projects</span>
                </li>
                <li className="flex items-start">
                  <FaCheckCircle className="text-yellow-500 dark:text-yellow-400 mt-0.5 mr-2 flex-shrink-0" />
                  <span>Some advanced functionality only available in C++</span>
                </li>
                <li className="flex items-start">
                  <FaCheckCircle className="text-yellow-500 dark:text-yellow-400 mt-0.5 mr-2 flex-shrink-0" />
                  <span>Performance overhead for certain operations</span>
                </li>
                <li className="flex items-start">
                  <FaCheckCircle className="text-yellow-500 dark:text-yellow-400 mt-0.5 mr-2 flex-shrink-0" />
                  <span>Some people may hate on you for usign it</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        <section className="space-y-12">
          {/* Step 1: Create Project */}
          <div className="bg-white dark:bg-gray-900 rounded-xl shadow-lg overflow-hidden">
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-4 flex items-center">
              <div className="bg-blue-100 dark:bg-blue-900 p-3 rounded-full mr-4 flex items-center">
                <FaGamepad className="text-blue-600 dark:text-blue-400 text-xl" />
              </div>
              <h2 className="text-xl font-bold text-white">Step 1: Create a New Unreal Engine Project</h2>
            </div>
            <div className="p-6">
              <div className="flex flex-col md:flex-row gap-6">
                <div className="flex-1">
                  <ol className="space-y-4 text-gray-700 dark:text-gray-300">
                    <li className="flex items-start">
                      <span className="bg-blue-600 text-white font-bold rounded-full w-6 h-6 flex items-center justify-center mr-3 flex-shrink-0">1</span>
                      <span>Open Unreal Engine and click <strong>New Project</strong>.</span>
                    </li>
                    <li className="flex items-start">
                      <span className="bg-blue-600 text-white font-bold rounded-full w-6 h-6 flex items-center justify-center mr-3 flex-shrink-0">2</span>
                      <span>Choose a template (e.g., <strong>Blank</strong> or <strong>Third Person</strong>), set project settings, and click <strong>Create</strong>.</span>
                    </li>
                  </ol>
                </div>
              </div>
            </div>
          </div>
          {/* Step 2: Create Blueprint Class */}
          <div className="bg-white dark:bg-gray-900 rounded-xl shadow-lg overflow-hidden">
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-4 flex items-center">
              <div className="bg-blue-100 dark:bg-blue-900 p-3 rounded-full mr-4 flex items-center">
                <FaGamepad className="text-blue-600 dark:text-blue-400 text-xl" />
              </div>
              <h2 className="text-xl font-bold text-white">Step 2: Creating Your First Blueprint Class</h2>
            </div>
            <div className="p-6">
              <div className="flex flex-col md:flex-row gap-6">
                <div className="flex-1">
                  <ol className="space-y-4 text-gray-700 dark:text-gray-300">
                    <li className="flex items-start">
                      <span className="bg-blue-600 text-white font-bold rounded-full w-6 h-6 flex items-center justify-center mr-3 flex-shrink-0">1</span>
                      <span>Right-click in the Content Browser and select <strong>Blueprint Class</strong></span>
                    </li>
                    <li className="flex items-start">
                      <span className="bg-blue-600 text-white font-bold rounded-full w-6 h-6 flex items-center justify-center mr-3 flex-shrink-0">2</span>
                      <span>Choose <strong>Actor</strong> as the parent class</span>
                    </li>
                    <li className="flex items-start">
                      <span className="bg-blue-600 text-white font-bold rounded-full w-6 h-6 flex items-center justify-center mr-3 flex-shrink-0">3</span>
                      <span>Name your blueprint (e.g., "RotatingCube")</span>
                    </li>
                    <li className="flex items-start">
                      <span className="bg-blue-600 text-white font-bold rounded-full w-6 h-6 flex items-center justify-center mr-3 flex-shrink-0">4</span>
                      <span>Double-click to open the Blueprint Editor</span>
                    </li>
                  </ol>
                </div>
                <div className="flex-1 relative min-h-[200px] bg-gray-100 dark:bg-gray-800 rounded-lg overflow-hidden border border-gray-200 dark:border-gray-700 flex items-center justify-center">
                  <div className="w-32 h-32 bg-gray-300 dark:bg-gray-600 rounded flex items-center justify-center text-gray-500 dark:text-gray-300 text-sm">
                    Image Placeholder
                  </div>
                  <div className="absolute bottom-2 right-2 bg-white dark:bg-gray-700 px-2 py-1 rounded text-xs text-gray-600 dark:text-gray-300 shadow-sm">
                    Right-click to create a new Blueprint
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Step 3: Adding Components */}
          <div className="bg-white dark:bg-gray-900 rounded-xl shadow-lg overflow-hidden">
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-4 flex items-center">
              <div className="bg-blue-100 dark:bg-blue-900 p-3 rounded-full mr-4 flex items-center">
                <FaGamepad className="text-blue-600 dark:text-blue-400 text-xl" />
              </div>
              <h2 className="text-xl font-bold text-white">Step 3: Adding Components</h2>
            </div>
            <div className="p-6">
              <div className="flex flex-col md:flex-row gap-6">
                <div className="flex-1">
                  <ol className="space-y-4 text-gray-700 dark:text-gray-300">
                    <li className="flex items-start">
                      <span className="bg-blue-600 text-white font-bold rounded-full w-6 h-6 flex items-center justify-center mr-3 flex-shrink-0">1</span>
                      <span>In the Blueprint Editor, click <strong>Add Component</strong></span>
                    </li>
                    <li className="flex items-start">
                      <span className="bg-blue-600 text-white font-bold rounded-full w-6 h-6 flex items-center justify-center mr-3 flex-shrink-0">2</span>
                      <span>Select <strong>Static Mesh</strong></span>
                    </li>
                    <li className="flex items-start">
                      <span className="bg-blue-600 text-white font-bold rounded-full w-6 h-6 flex items-center justify-center mr-3 flex-shrink-0">3</span>
                      <span>In the Details panel, choose a shape (e.g., Cube)</span>
                    </li>
                    <li className="flex items-start">
                      <span className="bg-blue-600 text-white font-bold rounded-full w-6 h-6 flex items-center justify-center mr-3 flex-shrink-0">4</span>
                      <span>Set the scale to (1,1,1) if needed</span>
                    </li>
                  </ol>
                  <div className="mt-6 p-4 bg-blue-50 dark:bg-blue-900 rounded-lg border border-blue-100 dark:border-blue-800">
                    <h3 className="font-medium text-blue-800 dark:text-blue-200 mb-2 flex items-center">
                      <FaCode className="mr-2" /> Pro Tip
                    </h3>
                    <p className="text-sm text-blue-700 dark:text-blue-300">
                      Components are the building blocks of your Blueprint. You can add lights, collision boxes, particle effects, and more!
                    </p>
                  </div>
                </div>
                <div className="flex-1 relative min-h-[200px] bg-gray-100 dark:bg-gray-800 rounded-lg overflow-hidden border border-gray-200 dark:border-gray-700 flex items-center justify-center">
                  <div className="w-32 h-32 bg-gray-300 dark:bg-gray-600 rounded flex items-center justify-center text-gray-500 dark:text-gray-300 text-sm">
                    Image Placeholder
                  </div>
                  <div className="absolute top-2 left-2 bg-white dark:bg-gray-700 px-2 py-1 rounded text-xs text-gray-600 dark:text-gray-300 shadow-sm flex items-center">
                    Components panel
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Step 4: The First Script */}
          <div className="bg-white dark:bg-gray-900 rounded-xl shadow-lg overflow-hidden">
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-4 flex items-center">
              <div className="bg-blue-100 dark:bg-blue-900 p-3 rounded-full mr-4 flex items-center">
                <FaGamepad className="text-blue-600 dark:text-blue-400 text-xl" />
              </div>
              <h2 className="text-xl font-bold text-white">Step 4: Creating your first "Script" aka your first time usign scratch 2.0 </h2>
            </div>
            <div className="p-6">
              <div className="flex flex-col md:flex-row gap-6">
                <div className="flex-1">
                  <ol className="space-y-4 text-gray-700 dark:text-gray-300">
                    <li className="flex items-start">
                      <span className="bg-blue-600 text-white font-bold rounded-full w-6 h-6 flex items-center justify-center mr-3 flex-shrink-0">1</span>
                      <span>Click on the <strong>Event Graph</strong> tab</span>
                    </li>
                    <li className="flex items-start">
                      <span className="bg-blue-600 text-white font-bold rounded-full w-6 h-6 flex items-center justify-center mr-3 flex-shrink-0">2</span>
                      <span>Right-click and search for <strong>Event Tick</strong></span>
                    </li>
                    <li className="flex items-start">
                      <span className="bg-blue-600 text-white font-bold rounded-full w-6 h-6 flex items-center justify-center mr-3 flex-shrink-0">3</span>
                      <span>Right-click again and search for <strong>AddActorLocalRotation</strong></span>
                    </li>
                    <li className="flex items-start">
                      <span className="bg-blue-600 text-white font-bold rounded-full w-6 h-6 flex items-center justify-center mr-3 flex-shrink-0">4</span>
                      <span>Connect the Event Tick to the AddActorLocalRotation node</span>
                    </li>
                    <li className="flex items-start">
                      <span className="bg-blue-600 text-white font-bold rounded-full w-6 h-6 flex items-center justify-center mr-3 flex-shrink-0">5</span>
                      <span>Set the Delta Rotation to (0,1,0) for a Y-axis rotation</span>
                    </li>
                  </ol>
                </div>
                <div className="flex-1 relative min-h-[300px] bg-gray-100 dark:bg-gray-800 rounded-lg overflow-hidden border border-gray-200 dark:border-gray-700">
                  <div className="w-32 h-32 bg-gray-300 dark:bg-gray-600 rounded flex items-center justify-center text-gray-500 dark:text-gray-300 text-sm">
                    Image Placeholder
                  </div>
                  <div className="absolute top-4 right-4 bg-white dark:bg-gray-700 px-2 py-1 rounded text-xs text-gray-600 dark:text-gray-300 shadow-sm flex items-center">
                    <FaArrowRight className="mr-1 transform rotate-45" /> Node connection
                  </div>
                  <div className="absolute bottom-4 left-4 bg-white dark:bg-gray-700 px-2 py-1 rounded text-xs text-gray-600 dark:text-gray-300 shadow-sm">
                    Event Tick → Rotation
                  </div>
                </div>
              </div>
              <div className="mt-6 p-4 bg-purple-50 dark:bg-purple-900 rounded-lg border border-purple-100 dark:border-purple-800">
                <h3 className="font-medium text-purple-800 dark:text-purple-200 mb-2">Understanding the Script</h3>
                <p className="text-sm text-purple-700 dark:text-purple-300">
                  <strong>Event Tick</strong> runs every frame. <strong>AddActorLocalRotation</strong> rotates your object.
                  The (0,1,0) vector means rotate 1 degree per frame around the Y-axis.
                </p>
              </div>
            </div>
          </div>
          {/* Step 5: Testing Your Blueprint */}
          <div className="bg-white dark:bg-gray-900 rounded-xl shadow-lg overflow-hidden">
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-4 flex items-center">
              <div className="bg-blue-100 dark:bg-blue-900 p-3 rounded-full mr-4 flex items-center">
                <FaGamepad className="text-blue-600 dark:text-blue-400 text-xl" />
              </div>
              <h2 className="text-xl font-bold text-white">Step 5: Testing Your Blueprint</h2>
            </div>
            <div className="p-6">
              <div className="flex flex-col md:flex-row gap-6">
                <div className="flex-1">
                  <ol className="space-y-4 text-gray-700 dark:text-gray-300">
                    <li className="flex items-start">
                      <span className="bg-blue-600 text-white font-bold rounded-full w-6 h-6 flex items-center justify-center mr-3 flex-shrink-0">1</span>
                      <span>Click <strong>Compile</strong> to save your Blueprint</span>
                    </li>
                    <li className="flex items-start">
                      <span className="bg-blue-600 text-white font-bold rounded-full w-6 h-6 flex items-center justify-center mr-3 flex-shrink-0">2</span>
                      <span>Click <strong>Save</strong> (Ctrl+S)</span>
                    </li>
                    <li className="flex items-start">
                      <span className="bg-blue-600 text-white font-bold rounded-full w-6 h-6 flex items-center justify-center mr-3 flex-shrink-0">3</span>
                      <span>Return to the main editor window</span>
                    </li>
                    <li className="flex items-start">
                      <span className="bg-blue-600 text-white font-bold rounded-full w-6 h-6 flex items-center justify-center mr-3 flex-shrink-0">4</span>
                      <span>Drag your Blueprint from the Content Browser into the level</span>
                    </li>
                    <li className="flex items-start">
                      <span className="bg-blue-600 text-white font-bold rounded-full w-6 h-6 flex items-center justify-center mr-3 flex-shrink-0">5</span>
                      <span>Click <strong>Play</strong> to test your rotating object!</span>
                    </li>
                  </ol>
                </div>
                <div className="flex-1 relative min-h-[250px] bg-gray-100 dark:bg-gray-800 rounded-lg overflow-hidden border border-gray-200 dark:border-gray-700">
                  <div className="w-32 h-32 bg-gray-300 dark:bg-gray-600 rounded flex items-center justify-center text-gray-500 dark:text-gray-300 text-sm">
                    Image Placeholder
                  </div>
                  <div className="absolute bottom-2 left-2 bg-white dark:bg-gray-700 px-2 py-1 rounded text-xs text-gray-600 dark:text-gray-300 shadow-sm">
                    Drag your Blueprint here
                  </div>
                  <div className="absolute top-2 right-2 bg-green-500 dark:bg-green-700 text-white px-2 py-1 rounded text-xs shadow-sm flex items-center">
                    <FaGamepad className="mr-1" /> Play button
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="mt-16 bg-white dark:bg-gray-900 rounded-xl shadow-lg p-8 text-center">
          <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100 mb-4">Where to Go Next? - Learn c++ (just kidding)</h2>
          <p className="text-gray-600 dark:text-gray-300 mb-6 max-w-2xl mx-auto">
            Now that you've created your first Blueprint, try these more "advanced" technique:
          </p>
          <div className="grid grid-cols-1 gap-6">
            <div className="bg-blue-50 dark:bg-blue-900 p-5 rounded-lg border border-blue-100 dark:border-blue-800">
              <h3 className="font-semibold text-blue-700 dark:text-blue-300 mb-2">Variables</h3>
              <p className="text-sm text-blue-600 dark:text-blue-200">
                Create adjustable properties like rotation speed that you can change without editing the Blueprint.
              </p>
              <a
                href="/tutorials/variables"
                className="inline-block mt-4 bg-blue-600 text-white px-4 py-2 rounded shadow hover:bg-blue-700 transition"
              >
                Variables Tutorial
              </a>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
