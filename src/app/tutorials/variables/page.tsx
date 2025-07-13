"use client";
import { FaGamepad, FaLightbulb, FaCheckCircle, FaCode, FaArrowRight } from "react-icons/fa";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function VariablesTutorial() {
    const [darkMode, setDarkMode] = useState(false);

    // Detect system preference on mount
    useEffect(() => {
        const isDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
        setDarkMode(isDark);
        document.documentElement.classList.toggle("dark", isDark);
    }, []);

    // Toggle dark mode
    const handleToggleDark = () => {
        setDarkMode((prev) => {
            document.documentElement.classList.toggle("dark", !prev);
            return !prev;
        });
    };

    return (
        <div className="min-h-screen bg-gradient-to-b from-blue-50 to-purple-50 dark:from-gray-900 dark:to-gray-800 py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-5xl mx-auto">
                {/* Header Section */}
                <header className="text-center mb-12">
                    <div className="flex justify-center mb-4">
                        <FaGamepad className="text-blue-600 dark:text-blue-400 text-4xl mr-3" />
                        <h1 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-600 dark:from-blue-400 dark:to-purple-500">
                            BLUEPRINT VARIABLES TUTORIAL
                        </h1>
                    </div>
                    <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                        Make your Blueprints actually useful by adding variables
                    </p>
                </header>

                {/* What Are Variables Section */}
                <section className="bg-white dark:bg-gray-900 rounded-xl shadow-lg p-6 mb-12">
                    <div className="flex items-center mb-3">
                        <div className="bg-blue-100 dark:bg-blue-900 p-3 rounded-full mr-4">
                            <FaLightbulb className="text-blue-600 dark:text-blue-300 text-xl" />
                        </div>
                        <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-100">What the hell are variables?</h2>
                    </div>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                        Variables are like little boxes where you can store information to use later. They make your Blueprints flexible so you don't have to hardcode everything like some caveman.
                    </p>

                    <div className="flex flex-wrap gap-4">
                        <div className="bg-green-50 dark:bg-green-900 border border-green-100 dark:border-green-800 rounded-lg p-3 flex-1 min-w-[200px]">
                            <h3 className="font-medium text-green-800 dark:text-green-200 mb-1">Why variables are awesome</h3>
                            <ul className="text-sm text-green-700 dark:text-green-300 space-y-1">
                                <li className="flex items-start">
                                    <FaCheckCircle className="text-green-500 dark:text-green-400 mt-0.5 mr-2 flex-shrink-0" />
                                    <span>Make values editable without changing the Blueprint</span>
                                </li>
                                <li className="flex items-start">
                                    <FaCheckCircle className="text-green-500 dark:text-green-400 mt-0.5 mr-2 flex-shrink-0" />
                                    <span>Can be changed during gameplay</span>
                                </li>
                                <li className="flex items-start">
                                    <FaCheckCircle className="text-green-500 dark:text-green-400 mt-0.5 mr-2 flex-shrink-0" />
                                    <span>Make your Blueprints reusable</span>
                                </li>
                                <li className="flex items-start">
                                    <FaCheckCircle className="text-green-500 dark:text-green-400 mt-0.5 mr-2 flex-shrink-0" />
                                    <span>Can expose them to designers who are scared of nodes</span>
                                </li>
                            </ul>
                        </div>
                        <div className="bg-yellow-50 dark:bg-yellow-900 border border-yellow-100 dark:border-yellow-800 rounded-lg p-3 flex-1 min-w-[200px]">
                            <h3 className="font-medium text-yellow-800 dark:text-yellow-200 mb-1">Variable types you'll actually use</h3>
                            <ul className="text-sm text-yellow-700 dark:text-yellow-300 space-y-1">
                                <li className="flex items-start">
                                    <FaCheckCircle className="text-yellow-500 dark:text-yellow-400 mt-0.5 mr-2 flex-shrink-0" />
                                    <span><strong>Float</strong> - For numbers with decimals</span>
                                </li>
                                <li className="flex items-start">
                                    <FaCheckCircle className="text-yellow-500 dark:text-yellow-400 mt-0.5 mr-2 flex-shrink-0" />
                                    <span><strong>Integer</strong> - For whole numbers</span>
                                </li>
                                <li className="flex items-start">
                                    <FaCheckCircle className="text-yellow-500 dark:text-yellow-400 mt-0.5 mr-2 flex-shrink-0" />
                                    <span><strong>Boolean</strong> - True/False switches</span>
                                </li>
                                <li className="flex items-start">
                                    <FaCheckCircle className="text-yellow-500 dark:text-yellow-400 mt-0.5 mr-2 flex-shrink-0" />
                                    <span><strong>String</strong> - For text (rarely used)</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </section>

                {/* Tutorial Steps */}
                <section className="space-y-12">
                    {/* Step 1: Creating Variables */}
                    <div className="bg-white dark:bg-gray-900 rounded-xl shadow-lg overflow-hidden">
                        <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-4 flex items-center">
                            <div className="bg-blue-100 p-3 rounded-full mr-4 flex items-center">
                                <FaCode className="text-blue-600 text-xl" />
                            </div>
                            <h2 className="text-xl font-bold text-white">Step 1: Creating Your First Variable</h2>
                        </div>
                        <div className="p-6">
                            <div className="flex flex-col md:flex-row gap-6">
                                <div className="flex-1">
                                    <ol className="space-y-4 text-gray-700 dark:text-gray-300">
                                        <li className="flex items-start">
                                            <span className="bg-blue-600 text-white font-bold rounded-full w-6 h-6 flex items-center justify-center mr-3 flex-shrink-0">1</span>
                                            <span>Open your Blueprint and go to the <strong>My Blueprint</strong> panel</span>
                                        </li>
                                        <li className="flex items-start">
                                            <span className="bg-blue-600 text-white font-bold rounded-full w-6 h-6 flex items-center justify-center mr-3 flex-shrink-0">2</span>
                                            <span>Click the <strong>+ Variable</strong> button</span>
                                        </li>
                                        <li className="flex items-start">
                                            <span className="bg-blue-600 text-white font-bold rounded-full w-6 h-6 flex items-center justify-center mr-3 flex-shrink-0">3</span>
                                            <span>Name it something useful like <strong>RotationSpeed</strong></span>
                                        </li>
                                        <li className="flex items-start">
                                            <span className="bg-blue-600 text-white font-bold rounded-full w-6 h-6 flex items-center justify-center mr-3 flex-shrink-0">4</span>
                                            <span>Set the variable type to <strong>Float</strong></span>
                                        </li>
                                        <li className="flex items-start">
                                            <span className="bg-blue-600 text-white font-bold rounded-full w-6 h-6 flex items-center justify-center mr-3 flex-shrink-0">5</span>
                                            <span>Set a default value like <strong>1.0</strong></span>
                                        </li>
                                    </ol>
                                </div>
                                <div className="flex-1 relative min-h-[200px] bg-gray-100 dark:bg-gray-800 rounded-lg overflow-hidden border border-gray-200 dark:border-gray-700 flex items-center justify-center">
                                    <div className="w-32 h-32 bg-gray-300 dark:bg-gray-600 rounded flex items-center justify-center text-gray-500 dark:text-gray-300 text-sm">
                                        Variable Creation Image
                                    </div>
                                    <div className="absolute bottom-2 right-2 bg-white dark:bg-gray-700 px-2 py-1 rounded text-xs text-gray-600 dark:text-gray-300 shadow-sm">
                                        My Blueprint panel
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Step 2: Using Variables */}
                    <div className="bg-white dark:bg-gray-900 rounded-xl shadow-lg overflow-hidden">
                        <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-4 flex items-center">
                            <div className="bg-blue-100 p-3 rounded-full mr-4 flex items-center">
                                <FaCode className="text-blue-600 text-xl" />
                            </div>
                            <h2 className="text-xl font-bold text-white">Step 2: Actually Using Your Variable</h2>
                        </div>
                        <div className="p-6">
                            <div className="flex flex-col md:flex-row gap-6">
                                <div className="flex-1">
                                    <ol className="space-y-4 text-gray-700 dark:text-gray-300">
                                        <li className="flex items-start">
                                            <span className="bg-blue-600 text-white font-bold rounded-full w-6 h-6 flex items-center justify-center mr-3 flex-shrink-0">1</span>
                                            <span>Go to your <strong>Event Graph</strong></span>
                                        </li>
                                        <li className="flex items-start">
                                            <span className="bg-blue-600 text-white font-bold rounded-full w-6 h-6 flex items-center justify-center mr-3 flex-shrink-0">2</span>
                                            <span>Find your <strong>AddActorLocalRotation</strong> node</span>
                                        </li>
                                        <li className="flex items-start">
                                            <span className="bg-blue-600 text-white font-bold rounded-full w-6 h-6 flex items-center justify-center mr-3 flex-shrink-0">3</span>
                                            <span>Drag your <strong>RotationSpeed</strong> variable from My Blueprint into the graph</span>
                                        </li>
                                        <li className="flex items-start">
                                            <span className="bg-blue-600 text-white font-bold rounded-full w-6 h-6 flex items-center justify-center mr-3 flex-shrink-0">4</span>
                                            <span>Connect it to the Delta Rotation input (you might need a <strong>Make Rotator</strong> node)</span>
                                        </li>
                                    </ol>

                                    <div className="mt-6 p-4 bg-blue-50 dark:bg-blue-900 rounded-lg border border-blue-100 dark:border-blue-800">
                                        <h3 className="font-medium text-blue-800 dark:text-blue-200 mb-2 flex items-center">
                                            <FaCode className="mr-2" /> Pro Tip
                                        </h3>
                                        <p className="text-sm text-blue-700 dark:text-blue-300">
                                            Hold <strong>Ctrl</strong> while dragging the variable to automatically create a <strong>Get</strong> node. You're welcome for saving you one click.
                                        </p>
                                    </div>
                                </div>
                                <div className="flex-1 relative min-h-[300px] bg-gray-100 dark:bg-gray-800 rounded-lg overflow-hidden border border-gray-200 dark:border-gray-700 flex items-center justify-center">
                                    <div className="w-32 h-32 bg-gray-300 dark:bg-gray-600 rounded flex items-center justify-center text-gray-500 dark:text-gray-300 text-sm">
                                        Variable Usage Image
                                    </div>
                                    <div className="absolute top-4 right-4 bg-white dark:bg-gray-700 px-2 py-1 rounded text-xs text-gray-600 dark:text-gray-300 shadow-sm flex items-center">
                                        <FaArrowRight className="mr-1" /> Variable connection
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Step 3: Editing Variables */}
                    <div className="bg-white dark:bg-gray-900 rounded-xl shadow-lg overflow-hidden">
                        <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-4 flex items-center">
                            <div className="bg-blue-100 p-3 rounded-full mr-4 flex items-center">
                                <FaCode className="text-blue-600 text-xl" />
                            </div>
                            <h2 className="text-xl font-bold text-white">Step 3: Making Variables Editable (Because You're Lazy)</h2>
                        </div>
                        <div className="p-6">
                            <div className="flex flex-col md:flex-row gap-6">
                                <div className="flex-1">
                                    <ol className="space-y-4 text-gray-700 dark:text-gray-300">
                                        <li className="flex items-start">
                                            <span className="bg-blue-600 text-white font-bold rounded-full w-6 h-6 flex items-center justify-center mr-3 flex-shrink-0">1</span>
                                            <span>Select your variable in the <strong>My Blueprint</strong> panel</span>
                                        </li>
                                        <li className="flex items-start">
                                            <span className="bg-blue-600 text-white font-bold rounded-full w-6 h-6 flex items-center justify-center mr-3 flex-shrink-0">2</span>
                                            <span>In the <strong>Details</strong> panel, check <strong>Editable</strong></span>
                                        </li>
                                        <li className="flex items-start">
                                            <span className="bg-blue-600 text-white font-bold rounded-full w-6 h-6 flex items-center justify-center mr-3 flex-shrink-0">3</span>
                                            <span>Optionally, set a <strong>Slider Range</strong> if it's a numeric value</span>
                                        </li>
                                        <li className="flex items-start">
                                            <span className="bg-blue-600 text-white font-bold rounded-full w-6 h-6 flex items-center justify-center mr-3 flex-shrink-0">4</span>
                                            <span>Now you can edit the value directly on your Blueprint instance in the level!</span>
                                        </li>
                                    </ol>

                                    <div className="mt-6 p-4 bg-purple-50 dark:bg-purple-900 rounded-lg border border-purple-100 dark:border-purple-800">
                                        <h3 className="font-medium text-purple-800 dark:text-purple-200 mb-2">Why This Is Cool</h3>
                                        <p className="text-sm text-purple-700 dark:text-purple-300">
                                            Now designers can tweak values without opening the Blueprint editor. They'll stop bugging you every 5 minutes to change a number.
                                        </p>
                                    </div>
                                </div>
                                <div className="flex-1 relative min-h-[200px] bg-gray-100 dark:bg-gray-800 rounded-lg overflow-hidden border border-gray-200 dark:border-gray-700 flex items-center justify-center">
                                    <div className="w-32 h-32 bg-gray-300 dark:bg-gray-600 rounded flex items-center justify-center text-gray-500 dark:text-gray-300 text-sm">
                                        Editable Variable Image
                                    </div>
                                    <div className="absolute bottom-2 left-2 bg-white dark:bg-gray-700 px-2 py-1 rounded text-xs text-gray-600 dark:text-gray-300 shadow-sm">
                                        Details panel
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Advanced Variables Section */}
                <section className="mt-12 bg-white dark:bg-gray-900 rounded-xl shadow-lg p-6">
                    <div className="flex items-center mb-4">
                        <div className="bg-purple-100 dark:bg-purple-900 p-3 rounded-full mr-4">
                            <FaLightbulb className="text-purple-600 dark:text-purple-300 text-xl" />
                        </div>
                        <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-100">Advanced Variable Shenanigans</h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="bg-blue-50 dark:bg-blue-900 p-4 rounded-lg border border-blue-100 dark:border-blue-800">
                            <h3 className="font-medium text-blue-800 dark:text-blue-200 mb-2">Variable Categories</h3>
                            <p className="text-sm text-blue-700 dark:text-blue-300 mb-3">
                                Organize your variables so your Blueprint doesn't look like a dumpster fire:
                            </p>
                            <ul className="text-sm text-blue-700 dark:text-blue-300 space-y-1">
                                <li className="flex items-start">
                                    <FaCheckCircle className="text-blue-500 dark:text-blue-400 mt-0.5 mr-2 flex-shrink-0" />
                                    <span>In variable Details, set a <strong>Category</strong></span>
                                </li>
                                <li className="flex items-start">
                                    <FaCheckCircle className="text-blue-500 dark:text-blue-400 mt-0.5 mr-2 flex-shrink-0" />
                                    <span>Use categories like "Movement", "Appearance", "Gameplay"</span>
                                </li>
                            </ul>
                        </div>

                        <div className="bg-green-50 dark:bg-green-900 p-4 rounded-lg border border-green-100 dark:border-green-800">
                            <h3 className="font-medium text-green-800 dark:text-green-200 mb-2">Variable Tooltips</h3>
                            <p className="text-sm text-green-700 dark:text-green-300 mb-3">
                                Add tooltips so people know what your variables actually do:
                            </p>
                            <ul className="text-sm text-green-700 dark:text-green-300 space-y-1">
                                <li className="flex items-start">
                                    <FaCheckCircle className="text-green-500 dark:text-green-400 mt-0.5 mr-2 flex-shrink-0" />
                                    <span>In variable Details, set a <strong>Tooltip</strong></span>
                                </li>
                                <li className="flex items-start">
                                    <FaCheckCircle className="text-green-500 dark:text-green-400 mt-0.5 mr-2 flex-shrink-0" />
                                    <span>Example: "How fast this thing spins (degrees per second)"</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </section>

                {/* Next Steps */}
                <section className="mt-16 bg-white dark:bg-gray-900 rounded-xl shadow-lg p-8 text-center">
                    <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100 mb-4">What to Break Next?</h2>
                    <p className="text-gray-600 dark:text-gray-300 mb-6 max-w-2xl mx-auto">
                        Now that you've mastered variables (lol), here's what to ruin next:
                    </p>

                    <div className="bg-yellow-50 dark:bg-yellow-900 p-5 rounded-lg border border-yellow-100 dark:border-yellow-800">
                        <h3 className="font-semibold text-yellow-700 dark:text-yellow-300 mb-2">User Inputs</h3>
                        <p className="text-sm text-yellow-600 dark:text-yellow-200">
                            Make your Blueprint react to player actions and chaos.
                        </p>
                        <a
                            href="/tutorials/user-input"
                            className="mt-4 inline-block bg-yellow-600 text-white px-4 py-2 rounded shadow hover:bg-yellow-700 transition"
                        >
                            Learn User Inputs
                        </a>
                    </div>
                </section>
            </div>
        </div>
    );
}