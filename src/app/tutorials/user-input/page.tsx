"use client";
import { FaGamepad, FaKeyboard, FaLightbulb, FaCheckCircle, FaArrowRight, FaMousePointer } from "react-icons/fa";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function InputTutorial() {
    const [darkMode, setDarkMode] = useState(false);

    useEffect(() => {
        const isDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
        setDarkMode(isDark);
        document.documentElement.classList.toggle("dark", isDark);
    }, []);

    const handleToggleDark = () => {
        setDarkMode((prev) => {
            document.documentElement.classList.toggle("dark", !prev);
            return !prev;
        });
    };

    return (
        <div className="min-h-screen bg-gradient-to-b from-blue-50 to-purple-50 dark:from-gray-900 dark:to-gray-800 py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-5xl mx-auto">
                {/* Header */}
                <header className="text-center mb-12">
                    <div className="flex justify-center mb-4">
                        <FaGamepad className="text-blue-600 dark:text-blue-400 text-4xl mr-3" />
                        <h1 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-600 dark:from-blue-400 dark:to-purple-500">
                            PLAYER INPUT TUTORIAL
                        </h1>
                    </div>
                    <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                        Make your game actually respond when players mash buttons like angry monkeys
                    </p>
                </header>

                {/* Input Basics */}
                <section className="bg-white dark:bg-gray-900 rounded-xl shadow-lg p-6 mb-12">
                    <div className="flex items-center mb-3">
                        <div className="bg-blue-100 dark:bg-blue-900 p-3 rounded-full mr-4">
                            <FaKeyboard className="text-blue-600 dark:text-blue-300 text-xl" />
                        </div>
                        <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-100">Input? Like when I put food in my mouth?</h2>
                    </div>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                        Player input lets your game respond to keyboard, mouse, gamepad, and touch controls. Without it, your game is just a very expensive screensaver.
                    </p>

                    <div className="flex flex-wrap gap-4">
                        <div className="bg-green-50 dark:bg-green-900 border border-green-100 dark:border-green-800 rounded-lg p-3 flex-1 min-w-[200px]">
                            <h3 className="font-medium text-green-800 dark:text-green-200 mb-1">Input Types You'll Actually Use</h3>
                            <ul className="text-sm text-green-700 dark:text-green-300 space-y-1">
                                <li className="flex items-start">
                                    <FaCheckCircle className="text-green-500 dark:text-green-400 mt-0.5 mr-2 flex-shrink-0" />
                                    <span><strong>Action Mappings</strong> - One-time presses (Jump, Shoot)</span>
                                </li>
                                <li className="flex items-start">
                                    <FaCheckCircle className="text-green-500 dark:text-green-400 mt-0.5 mr-2 flex-shrink-0" />
                                    <span><strong>Axis Mappings</strong> - Continuous input (Movement, Camera)</span>
                                </li>
                                <li className="flex items-start">
                                    <FaCheckCircle className="text-green-500 dark:text-green-400 mt-0.5 mr-2 flex-shrink-0" />
                                    <span><strong>Mouse Events</strong> - Clicks, movement, wheel</span>
                                </li>
                                <li className="flex items-start">
                                    <FaCheckCircle className="text-green-500 dark:text-green-400 mt-0.5 mr-2 flex-shrink-0" />
                                    <span><strong>Touch Events</strong> - For mobile peasants</span>
                                </li>
                            </ul>
                        </div>
                        <div className="bg-yellow-50 dark:bg-yellow-900 border border-yellow-100 dark:border-yellow-800 rounded-lg p-3 flex-1 min-w-[200px]">
                            <h3 className="font-medium text-yellow-800 dark:text-yellow-200 mb-1">Pro Input Tips</h3>
                            <ul className="text-sm text-yellow-700 dark:text-yellow-300 space-y-1">
                                <li className="flex items-start">
                                    <FaCheckCircle className="text-yellow-500 dark:text-yellow-400 mt-0.5 mr-2 flex-shrink-0" />
                                    <span>Always support controller rebinding</span>
                                </li>
                                <li className="flex items-start">
                                    <FaCheckCircle className="text-yellow-500 dark:text-yellow-400 mt-0.5 mr-2 flex-shrink-0" />
                                    <span>Use input buffering for better feel</span>
                                </li>
                                <li className="flex items-start">
                                    <FaCheckCircle className="text-yellow-500 dark:text-yellow-400 mt-0.5 mr-2 flex-shrink-0" />
                                    <span>Differentiate between tap/hold</span>
                                </li>
                                <li className="flex items-start">
                                    <FaCheckCircle className="text-yellow-500 dark:text-yellow-400 mt-0.5 mr-2 flex-shrink-0" />
                                    <span>Add rumble for extra juice</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </section>

                {/* Tutorial Steps */}
                <section className="space-y-12">
                    {/* Step 1: Setting Up Inputs */}
                    <div className="bg-white dark:bg-gray-900 rounded-xl shadow-lg overflow-hidden">
                        <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-4 flex items-center">
                            <div className="bg-blue-100 p-3 rounded-full mr-4 flex items-center">
                                <FaKeyboard className="text-blue-600 text-xl" />
                            </div>
                            <h2 className="text-xl font-bold text-white">Step 1: Setting Up Input Mappings (Don't Skip This)</h2>
                        </div>
                        <div className="p-6">
                            <div className="flex flex-col md:flex-row gap-6">
                                <div className="flex-1">
                                    <ol className="space-y-4 text-gray-700 dark:text-gray-300">
                                        <li className="flex items-start">
                                            <span className="bg-blue-600 text-white font-bold rounded-full w-6 h-6 flex items-center justify-center mr-3 flex-shrink-0">1</span>
                                            <span>Go to <strong>Edit → Project Settings → Input</strong></span>
                                        </li>
                                        <li className="flex items-start">
                                            <span className="bg-blue-600 text-white font-bold rounded-full w-6 h-6 flex items-center justify-center mr-3 flex-shrink-0">2</span>
                                            <span>Under <strong>Action Mappings</strong>, add "Jump" and set it to <strong>Spacebar</strong></span>
                                        </li>
                                        <li className="flex items-start">
                                            <span className="bg-blue-600 text-white font-bold rounded-full w-6 h-6 flex items-center justify-center mr-3 flex-shrink-0">3</span>
                                            <span>Under <strong>Axis Mappings</strong>, add "MoveForward" and set it to <strong>W</strong> (scale 1.0) and <strong>S</strong> (scale -1.0)</span>
                                        </li>
                                        <li className="flex items-start">
                                            <span className="bg-blue-600 text-white font-bold rounded-full w-6 h-6 flex items-center justify-center mr-3 flex-shrink-0">4</span>
                                            <span>Add "MoveRight" with <strong>D</strong> (1.0) and <strong>A</strong> (-1.0)</span>
                                        </li>
                                    </ol>

                                    <div className="mt-6 p-4 bg-blue-50 dark:bg-blue-900 rounded-lg border border-blue-100 dark:border-blue-800">
                                        <h3 className="font-medium text-blue-800 dark:text-blue-200 mb-2 flex items-center">
                                            <FaLightbulb className="mr-2" /> Why Bother?
                                        </h3>
                                        <p className="text-sm text-blue-700 dark:text-blue-300">
                                            Setting these up here means you can change key bindings without editing Blueprints. Also makes your life easier when adding controller support later.
                                        </p>
                                    </div>
                                </div>
                                <div className="flex-1 relative min-h-[200px] bg-gray-100 dark:bg-gray-800 rounded-lg overflow-hidden border border-gray-200 dark:border-gray-700 flex items-center justify-center">
                                    <div className="w-32 h-32 bg-gray-300 dark:bg-gray-600 rounded flex items-center justify-center text-gray-500 dark:text-gray-300 text-sm">
                                        Input Settings Image
                                    </div>
                                    <div className="absolute bottom-2 right-2 bg-white dark:bg-gray-700 px-2 py-1 rounded text-xs text-gray-600 dark:text-gray-300 shadow-sm">
                                        Project Settings
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Step 2: Using Inputs in Blueprints */}
                    <div className="bg-white dark:bg-gray-900 rounded-xl shadow-lg overflow-hidden">
                        <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-4 flex items-center">
                            <div className="bg-blue-100 p-3 rounded-full mr-4 flex items-center">
                                <FaGamepad className="text-blue-600 text-xl" />
                            </div>
                            <h2 className="text-xl font-bold text-white">Step 2: Making Your Character Move (Finally)</h2>
                        </div>
                        <div className="p-6">
                            <div className="flex flex-col md:flex-row gap-6">
                                <div className="flex-1">
                                    <ol className="space-y-4 text-gray-700 dark:text-gray-300">
                                        <li className="flex items-start">
                                            <span className="bg-blue-600 text-white font-bold rounded-full w-6 h-6 flex items-center justify-center mr-3 flex-shrink-0">1</span>
                                            <span>Open your character Blueprint's <strong>Event Graph</strong></span>
                                        </li>
                                        <li className="flex items-start">
                                            <span className="bg-blue-600 text-white font-bold rounded-full w-6 h-6 flex items-center justify-center mr-3 flex-shrink-0">2</span>
                                            <span>Right-click and search for <strong>InputAxis MoveForward</strong></span>
                                        </li>
                                        <li className="flex items-start">
                                            <span className="bg-blue-600 text-white font-bold rounded-full w-6 h-6 flex items-center justify-center mr-3 flex-shrink-0">3</span>
                                            <span>Connect it to an <strong>Add Movement Input</strong> node</span>
                                        </li>
                                        <li className="flex items-start">
                                            <span className="bg-blue-600 text-white font-bold rounded-full w-6 h-6 flex items-center justify-center mr-3 flex-shrink-0">4</span>
                                            <span>Repeat for <strong>InputAxis MoveRight</strong></span>
                                        </li>
                                        <li className="flex items-start">
                                            <span className="bg-blue-600 text-white font-bold rounded-full w-6 h-6 flex items-center justify-center mr-3 flex-shrink-0">5</span>
                                            <span>For jumping, use <strong>InputAction Jump</strong> (press/release events)</span>
                                        </li>
                                    </ol>

                                    <div className="mt-6 p-4 bg-purple-50 dark:bg-purple-900 rounded-lg border border-purple-100 dark:border-purple-800">
                                        <h3 className="font-medium text-purple-800 dark:text-purple-200 mb-2">Movement 101</h3>
                                        <p className="text-sm text-purple-700 dark:text-purple-300">
                                            Axis inputs give you a float value (-1 to 1) perfect for movement. Action inputs are boolean (pressed/released) perfect for jumps and attacks.
                                        </p>
                                    </div>
                                </div>
                                <div className="flex-1 relative min-h-[300px] bg-gray-100 dark:bg-gray-800 rounded-lg overflow-hidden border border-gray-200 dark:border-gray-700 flex items-center justify-center">
                                    <div className="w-32 h-32 bg-gray-300 dark:bg-gray-600 rounded flex items-center justify-center text-gray-500 dark:text-gray-300 text-sm">
                                        Movement Blueprint Image
                                    </div>
                                    <div className="absolute top-4 right-4 bg-white dark:bg-gray-700 px-2 py-1 rounded text-xs text-gray-600 dark:text-gray-300 shadow-sm flex items-center">
                                        <FaArrowRight className="mr-1" /> Input nodes
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Step 3: Mouse Input */}
                    <div className="bg-white dark:bg-gray-900 rounded-xl shadow-lg overflow-hidden">
                        <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-4 flex items-center">
                            <div className="bg-blue-100 p-3 rounded-full mr-4 flex items-center">
                                <FaMousePointer className="text-blue-600 text-xl" />
                            </div>
                            <h2 className="text-xl font-bold text-white">Step 3: Mouse Look (For All You FPS Fans)</h2>
                        </div>
                        <div className="p-6">
                            <div className="flex flex-col md:flex-row gap-6">
                                <div className="flex-1">
                                    <ol className="space-y-4 text-gray-700 dark:text-gray-300">
                                        <li className="flex items-start">
                                            <span className="bg-blue-600 text-white font-bold rounded-full w-6 h-6 flex items-center justify-center mr-3 flex-shrink-0">1</span>
                                            <span>In Project Settings, add <strong>MouseX</strong> and <strong>MouseY</strong> axis mappings</span>
                                        </li>
                                        <li className="flex items-start">
                                            <span className="bg-blue-600 text-white font-bold rounded-full w-6 h-6 flex items-center justify-center mr-3 flex-shrink-0">2</span>
                                            <span>In your character Blueprint, add <strong>InputAxis MouseX</strong> node</span>
                                        </li>
                                        <li className="flex items-start">
                                            <span className="bg-blue-600 text-white font-bold rounded-full w-6 h-6 flex items-center justify-center mr-3 flex-shrink-0">3</span>
                                            <span>Connect it to <strong>Add Controller Yaw Input</strong> node</span>
                                        </li>
                                        <li className="flex items-start">
                                            <span className="bg-blue-600 text-white font-bold rounded-full w-6 h-6 flex items-center justify-center mr-3 flex-shrink-0">4</span>
                                            <span>Add <strong>InputAxis MouseY</strong> connected to <strong>Add Controller Pitch Input</strong></span>
                                        </li>
                                        <li className="flex items-start">
                                            <span className="bg-blue-600 text-white font-bold rounded-full w-6 h-6 flex items-center justify-center mr-3 flex-shrink-0">5</span>
                                            <span>In your Camera component, enable <strong>Use Pawn Control Rotation</strong></span>
                                        </li>
                                    </ol>

                                    <div className="mt-6 p-4 bg-red-50 dark:bg-red-900 rounded-lg border border-red-100 dark:border-red-800">
                                        <h3 className="font-medium text-red-800 dark:text-red-200 mb-2">Warning!</h3>
                                        <p className="text-sm text-red-700 dark:text-red-300">
                                            Don't forget to <strong>invert MouseY</strong> if your look controls feel backwards. Players will riot otherwise.
                                        </p>
                                    </div>
                                </div>
                                <div className="flex-1 relative min-h-[300px] bg-gray-100 dark:bg-gray-800 rounded-lg overflow-hidden border border-gray-200 dark:border-gray-700 flex items-center justify-center">
                                    <div className="w-32 h-32 bg-gray-300 dark:bg-gray-600 rounded flex items-center justify-center text-gray-500 dark:text-gray-300 text-sm">
                                        Mouse Look Image
                                    </div>
                                    <div className="absolute bottom-2 left-2 bg-white dark:bg-gray-700 px-2 py-1 rounded text-xs text-gray-600 dark:text-gray-300 shadow-sm">
                                        Camera Settings
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Advanced Input Section */}
                <section className="mt-12 bg-white dark:bg-gray-900 rounded-xl shadow-lg p-6">
                    <div className="flex items-center mb-4">
                        <div className="bg-purple-100 dark:bg-purple-900 p-3 rounded-full mr-4">
                            <FaLightbulb className="text-purple-600 dark:text-purple-300 text-xl" />
                        </div>
                        <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-100">Advanced Input Black Magic</h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="bg-blue-50 dark:bg-blue-900 p-4 rounded-lg border border-blue-100 dark:border-blue-800">
                            <h3 className="font-medium text-blue-800 dark:text-blue-200 mb-2">Input Contexts</h3>
                            <p className="text-sm text-blue-700 dark:text-blue-300 mb-3">
                                Switch input schemes when players enter vehicles, menus, or other states:
                            </p>
                            <ul className="text-sm text-blue-700 dark:text-blue-300 space-y-1">
                                <li className="flex items-start">
                                    <FaCheckCircle className="text-blue-500 dark:text-blue-400 mt-0.5 mr-2 flex-shrink-0" />
                                    <span>Use <strong>Enable Input</strong>/<strong>Disable Input</strong> nodes</span>
                                </li>
                                <li className="flex items-start">
                                    <FaCheckCircle className="text-blue-500 dark:text-blue-400 mt-0.5 mr-2 flex-shrink-0" />
                                    <span>Or use <strong>Input Components</strong> for more control</span>
                                </li>
                            </ul>
                        </div>

                        <div className="bg-green-50 dark:bg-green-900 p-4 rounded-lg border border-green-100 dark:border-green-800">
                            <h3 className="font-medium text-green-800 dark:text-green-200 mb-2">Controller Rumble</h3>
                            <p className="text-sm text-green-700 dark:text-green-300 mb-3">
                                Make controllers vibrate for extra feedback:
                            </p>
                            <ul className="text-sm text-green-700 dark:text-green-300 space-y-1">
                                <li className="flex items-start">
                                    <FaCheckCircle className="text-green-500 dark:text-green-400 mt-0.5 mr-2 flex-shrink-0" />
                                    <span>Use <strong>Play Force Feedback</strong> node</span>
                                </li>
                                <li className="flex items-start">
                                    <FaCheckCircle className="text-green-500 dark:text-green-400 mt-0.5 mr-2 flex-shrink-0" />
                                    <span>Create <strong>Force Feedback Assets</strong> for different effects</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </section>

                {/* Next Steps */}
                <section className="mt-16 bg-white dark:bg-gray-900 rounded-xl shadow-lg p-8 text-center">
                    <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100 mb-4">What to Frustrate Players With Next?</h2>
                    <p className="text-gray-600 dark:text-gray-300 mb-6 max-w-2xl mx-auto">
                        Now that you've mastered basic input, here's how to really annoy your players:
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-1 gap-6">
                        <div className="bg-yellow-50 dark:bg-yellow-900 p-5 rounded-lg border border-yellow-100 dark:border-yellow-800">
                            <h3 className="font-semibold text-blue-700 dark:text-blue-300 mb-2">Collisions</h3>
                            <p className="text-sm text-blue-600 dark:text-blue-200">
                                U want colliding things? Orpheus? Shopping Carts? Learn it!
                            </p>
                            <a
                                href="/tutorials/collisions"
                                className="mt-4 inline-block bg-blue-600 text-white px-4 py-2 rounded shadow hover:bg-blue-700 transition"
                            >
                                Collision Tutorial
                            </a>
                        </div>

                    </div>
                </section>
            </div>
        </div>
    );
}