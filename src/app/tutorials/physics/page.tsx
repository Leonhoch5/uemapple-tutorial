"use client";
import { FaGamepad, FaExclamationTriangle, FaCheckCircle, FaArrowRight, FaCube, FaWeightHanging } from "react-icons/fa";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function PhysicsTutorial() {
    const [darkMode, setDarkMode] = useState(false);

    useEffect(() => {
        const isDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
        setDarkMode(isDark);
        document.documentElement.classList.toggle("dark", isDark);
    }, []);

    return (
        <div className="min-h-screen bg-gradient-to-b from-blue-50 to-purple-50 dark:from-gray-900 dark:to-gray-800 py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-5xl mx-auto">
                {/* Header */}
                <header className="text-center mb-12">
                    <div className="flex justify-center mb-4">
                        <FaWeightHanging className="text-blue-600 dark:text-blue-400 text-4xl mr-3" />
                        <h1 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-600 dark:from-blue-400 dark:to-purple-500">
                            PHYSICS TUTORIAL
                        </h1>
                    </div>
                    <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                        Make objects fall, bounce, and generally behave like they're not glued together by a toddler
                    </p>
                </header>

                {/* Project Checkpoint */}
                <section className="bg-yellow-50 dark:bg-yellow-900 rounded-xl shadow-lg p-6 mb-12 border-2 border-yellow-200 dark:border-yellow-700">
                    <div className="flex items-center mb-3">
                        <div className="bg-yellow-100 dark:bg-yellow-800 p-3 rounded-full mr-4">
                            <FaExclamationTriangle className="text-yellow-600 dark:text-yellow-300 text-xl" />
                        </div>
                        <h2 className="text-2xl font-semibold text-yellow-800 dark:text-yellow-200">You Should Have:</h2>
                    </div>
                    <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 space-y-1 mb-4">
                        <li>Character with movement/collision (from Input/Collision tutorials)</li>
                        <li>Rotating obstacle cube (from Variables tutorial)</li>
                        <li>Collectible coins (from Collisions tutorial)</li>
                    </ul>
                    <p className="text-sm text-yellow-700 dark:text-yellow-300">
                        We'll be adding physics objects to this existing project. If you skipped previous steps, you'll be missing context!
                    </p>
                </section>

                {/* Physics Basics */}
                <section className="bg-white dark:bg-gray-900 rounded-xl shadow-lg p-6 mb-12">
                    <div className="flex items-center mb-3">
                        <div className="bg-blue-100 dark:bg-blue-900 p-3 rounded-full mr-4">
                            <FaCube className="text-blue-600 dark:text-blue-300 text-xl" />
                        </div>
                        <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-100">Physics Crash Course (Pun Intended)</h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="bg-green-50 dark:bg-green-900 border border-green-100 dark:border-green-800 rounded-lg p-4">
                            <h3 className="font-medium text-green-800 dark:text-green-200 mb-2">Key Physics Components</h3>
                            <ul className="text-sm text-green-700 dark:text-green-300 space-y-2">
                                <li className="flex items-start">
                                    <FaCheckCircle className="text-green-500 dark:text-green-400 mt-0.5 mr-2 flex-shrink-0" />
                                    <span><strong>Simulate Physics</strong> - Makes objects respond to forces</span>
                                </li>
                                <li className="flex items-start">
                                    <FaCheckCircle className="text-green-500 dark:text-green-400 mt-0.5 mr-2 flex-shrink-0" />
                                    <span><strong>Mass</strong> - Affects how forces impact objects</span>
                                </li>
                                <li className="flex items-start">
                                    <FaCheckCircle className="text-green-500 dark:text-green-400 mt-0.5 mr-2 flex-shrink-0" />
                                    <span><strong>Damping</strong> - "Air resistance" for movement</span>
                                </li>
                                <li className="flex items-start">
                                    <FaCheckCircle className="text-green-500 dark:text-green-400 mt-0.5 mr-2 flex-shrink-0" />
                                    <span><strong>Constraints</strong> - Limit movement/rotation</span>
                                </li>
                            </ul>
                        </div>

                        <div className="bg-purple-50 dark:bg-purple-900 border border-purple-100 dark:border-purple-800 rounded-lg p-4">
                            <h3 className="font-medium text-purple-800 dark:text-purple-200 mb-2">Common Physics Uses</h3>
                            <ul className="text-sm text-purple-700 dark:text-purple-300 space-y-2">
                                <li className="flex items-start">
                                    <FaCheckCircle className="text-purple-500 dark:text-purple-400 mt-0.5 mr-2 flex-shrink-0" />
                                    <span><strong>Destructible objects</strong> - Crates, barrels, etc.</span>
                                </li>
                                <li className="flex items-start">
                                    <FaCheckCircle className="text-purple-500 dark:text-purple-400 mt-0.5 mr-2 flex-shrink-0" />
                                    <span><strong>Ragdolls</strong> - Realistic character death</span>
                                </li>
                                <li className="flex items-start">
                                    <FaCheckCircle className="text-purple-500 dark:text-purple-400 mt-0.5 mr-2 flex-shrink-0" />
                                    <span><strong>Vehicles</strong> - Wheeled physics</span>
                                </li>
                                <li className="flex items-start">
                                    <FaCheckCircle className="text-purple-500 dark:text-purple-400 mt-0.5 mr-2 flex-shrink-0" />
                                    <span><strong>Cloth/rope</strong> - Dynamic soft bodies</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </section>

                {/* Tutorial Steps */}
                <section className="space-y-12">
                    {/* Step 1: Physics Crate */}
                    <div className="bg-white dark:bg-gray-900 rounded-xl shadow-lg overflow-hidden">
                        <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-4 flex items-center">
                            <div className="bg-blue-100 p-3 rounded-full mr-4 flex items-center">
                                <span className="text-blue-600 font-bold">1</span>
                            </div>
                            <h2 className="text-xl font-bold text-white">Step 1: Create a Physics Crate (Because Every Game Needs Crates)</h2>
                        </div>
                        <div className="p-6">
                            <div className="flex flex-col md:flex-row gap-6">
                                <div className="flex-1">
                                    <ol className="space-y-4 text-gray-700 dark:text-gray-300">
                                        <li className="flex items-start">
                                            <span className="bg-blue-600 text-white font-bold rounded-full w-6 h-6 flex items-center justify-center mr-3 flex-shrink-0">1</span>
                                            <span>Create new <strong>Blueprint Actor</strong> called "BP_Crate"</span>
                                        </li>
                                        <li className="flex items-start">
                                            <span className="bg-blue-600 text-white font-bold rounded-full w-6 h-6 flex items-center justify-center mr-3 flex-shrink-0">2</span>
                                            <span>Add a <strong>Static Mesh</strong> (use cube shape)</span>
                                        </li>
                                        <li className="flex items-start">
                                            <span className="bg-blue-600 text-white font-bold rounded-full w-6 h-6 flex items-center justify-center mr-3 flex-shrink-0">3</span>
                                            <span>In Details panel, check <strong>Simulate Physics</strong></span>
                                        </li>
                                        <li className="flex items-start">
                                            <span className="bg-blue-600 text-white font-bold rounded-full w-6 h-6 flex items-center justify-center mr-3 flex-shrink-0">4</span>
                                            <span>Set <strong>Mass</strong> to 50kg (adjust as needed)</span>
                                        </li>
                                        <li className="flex items-start">
                                            <span className="bg-blue-600 text-white font-bold rounded-full w-6 h-6 flex items-center justify-center mr-3 flex-shrink-0">5</span>
                                            <span>Add <strong>Linear/Angular Damping</strong> (~0.2) to prevent sliding</span>
                                        </li>
                                    </ol>

                                    <div className="mt-6 p-4 bg-blue-50 dark:bg-blue-900 rounded-lg border border-blue-100 dark:border-blue-800">
                                        <h3 className="font-medium text-blue-800 dark:text-blue-200 mb-2 flex items-center">
                                            <FaGamepad className="mr-2" /> Pro Tip
                                        </h3>
                                        <p className="text-sm text-blue-700 dark:text-blue-300">
                                            Enable <strong>Generate Hit Events</strong> if you want to detect when the crate gets hit by something.
                                        </p>
                                    </div>
                                </div>
                                <div className="flex-1 relative min-h-[200px] bg-gray-100 dark:bg-gray-800 rounded-lg overflow-hidden border border-gray-200 dark:border-gray-700 flex items-center justify-center">
                                    <div className="w-32 h-32 bg-gray-300 dark:bg-gray-600 rounded flex items-center justify-center text-gray-500 dark:text-gray-300 text-sm">
                                        Crate Physics Settings
                                    </div>
                                    <div className="absolute bottom-2 right-2 bg-white dark:bg-gray-700 px-2 py-1 rounded text-xs text-gray-600 dark:text-gray-300 shadow-sm">
                                        Simulate Physics
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Step 2: Pushing Crates */}
                    <div className="bg-white dark:bg-gray-900 rounded-xl shadow-lg overflow-hidden">
                        <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-4 flex items-center">
                            <div className="bg-blue-100 p-3 rounded-full mr-4 flex items-center">
                                <span className="text-blue-600 font-bold">2</span>
                            </div>
                            <h2 className="text-xl font-bold text-white">Step 2: Make Your Character Push Crates (Like a Video Game Hero)</h2>
                        </div>
                        <div className="p-6">
                            <div className="flex flex-col md:flex-row gap-6">
                                <div className="flex-1">
                                    <ol className="space-y-4 text-gray-700 dark:text-gray-300">
                                        <li className="flex items-start">
                                            <span className="bg-blue-600 text-white font-bold rounded-full w-6 h-6 flex items-center justify-center mr-3 flex-shrink-0">1</span>
                                            <span>Open your character Blueprint</span>
                                        </li>
                                        <li className="flex items-start">
                                            <span className="bg-blue-600 text-white font-bold rounded-full w-6 h-6 flex items-center justify-center mr-3 flex-shrink-0">2</span>
                                            <span>Add a <strong>Sphere Trace</strong> in front of character (for detection)</span>
                                        </li>
                                        <li className="flex items-start">
                                            <span className="bg-blue-600 text-white font-bold rounded-full w-6 h-6 flex items-center justify-center mr-3 flex-shrink-0">3</span>
                                            <span>When moving into a crate, add <strong>Radial Force</strong> or <strong>Impulse</strong></span>
                                        </li>
                                        <li className="flex items-start">
                                            <span className="bg-blue-600 text-white font-bold rounded-full w-6 h-6 flex items-center justify-center mr-3 flex-shrink-0">4</span>
                                            <span>Adjust force strength based on movement speed</span>
                                        </li>
                                        <li className="flex items-start">
                                            <span className="bg-blue-600 text-white font-bold rounded-full w-6 h-6 flex items-center justify-center mr-3 flex-shrink-0">5</span>
                                            <span>Optional: Add push animation/sound effect</span>
                                        </li>
                                    </ol>
                                </div>
                                <div className="flex-1 relative min-h-[250px] bg-gray-100 dark:bg-gray-800 rounded-lg overflow-hidden border border-gray-200 dark:border-gray-700 flex items-center justify-center">
                                    <div className="w-32 h-32 bg-gray-300 dark:bg-gray-600 rounded flex items-center justify-center text-gray-500 dark:text-gray-300 text-sm">
                                        Push Mechanics Image
                                    </div>
                                    <div className="absolute top-2 left-2 bg-white dark:bg-gray-700 px-2 py-1 rounded text-xs text-gray-600 dark:text-gray-300 shadow-sm">
                                        Sphere Trace
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Step 3: Physics Coin Stack */}
                    <div className="bg-white dark:bg-gray-900 rounded-xl shadow-lg overflow-hidden">
                        <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-4 flex items-center">
                            <div className="bg-blue-100 p-3 rounded-full mr-4 flex items-center">
                                <span className="text-blue-600 font-bold">3</span>
                            </div>
                            <h2 className="text-xl font-bold text-white">Step 3: Make a Physics-Based Coin Stack (For Maximum Chaos)</h2>
                        </div>
                        <div className="p-6">
                            <div className="flex flex-col md:flex-row gap-6">
                                <div className="flex-1">
                                    <ol className="space-y-4 text-gray-700 dark:text-gray-300">
                                        <li className="flex items-start">
                                            <span className="bg-blue-600 text-white font-bold rounded-full w-6 h-6 flex items-center justify-center mr-3 flex-shrink-0">1</span>
                                            <span>Duplicate your BP_Coin and rename to "BP_PhysicsCoin"</span>
                                        </li>
                                        <li className="flex items-start">
                                            <span className="bg-blue-600 text-white font-bold rounded-full w-6 h-6 flex items-center justify-center mr-3 flex-shrink-0">2</span>
                                            <span>Enable <strong>Simulate Physics</strong> on the mesh</span>
                                        </li>
                                        <li className="flex items-start">
                                            <span className="bg-blue-600 text-white font-bold rounded-full w-6 h-6 flex items-center justify-center mr-3 flex-shrink-0">3</span>
                                            <span>Set <strong>Mass</strong> to 1kg and add some <strong>Damping</strong></span>
                                        </li>
                                        <li className="flex items-start">
                                            <span className="bg-blue-600 text-white font-bold rounded-full w-6 h-6 flex items-center justify-center mr-3 flex-shrink-0">4</span>
                                            <span>Change collision to <strong>PhysicsActor</strong> preset</span>
                                        </li>
                                        <li className="flex items-start">
                                            <span className="bg-blue-600 text-white font-bold rounded-full w-6 h-6 flex items-center justify-center mr-3 flex-shrink-0">5</span>
                                            <span>Create a new Blueprint that spawns a stack of 10 coins</span>
                                        </li>
                                    </ol>

                                    <div className="mt-6 p-4 bg-purple-50 dark:bg-purple-900 rounded-lg border border-purple-100 dark:border-purple-800">
                                        <h3 className="font-medium text-purple-800 dark:text-purple-200 mb-2">Chaos Mode Activated</h3>
                                        <p className="text-sm text-purple-700 dark:text-purple-300">
                                            Now when players bump into the stack, coins will go everywhere! Add a sound effect for maximum satisfaction.
                                        </p>
                                    </div>
                                </div>
                                <div className="flex-1 relative min-h-[300px] bg-gray-100 dark:bg-gray-800 rounded-lg overflow-hidden border border-gray-200 dark:border-gray-700 flex items-center justify-center">
                                    <div className="w-32 h-32 bg-gray-300 dark:bg-gray-600 rounded flex items-center justify-center text-gray-500 dark:text-gray-300 text-sm">
                                        Coin Stack Image
                                    </div>
                                    <div className="absolute bottom-2 left-2 bg-white dark:bg-gray-700 px-2 py-1 rounded text-xs text-gray-600 dark:text-gray-300 shadow-sm">
                                        Physics Coins
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Final Game Assembly */}
                <section className="mt-12 bg-white dark:bg-gray-900 rounded-xl shadow-lg p-6">
                    <div className="flex items-center mb-4">
                        <div className="bg-green-100 dark:bg-green-900 p-3 rounded-full mr-4">
                            <FaGamepad className="text-green-600 dark:text-green-300 text-xl" />
                        </div>
                        <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-100">Complete Physics Playground</h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="bg-blue-50 dark:bg-blue-900 p-4 rounded-lg border border-blue-100 dark:border-blue-800">
                            <h3 className="font-medium text-blue-800 dark:text-blue-200 mb-2">Final Level Setup</h3>
                            <ol className="text-sm text-blue-700 dark:text-blue-300 space-y-2">
                                <li className="flex items-start">
                                    <span className="bg-blue-600 text-white font-bold rounded-full w-5 h-5 flex items-center justify-center mr-2 mt-0.5 flex-shrink-0">1</span>
                                    <span>Place physics crates around your level</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="bg-blue-600 text-white font-bold rounded-full w-5 h-5 flex items-center justify-center mr-2 mt-0.5 flex-shrink-0">2</span>
                                    <span>Add several coin stacks as collectibles</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="bg-blue-600 text-white font-bold rounded-full w-5 h-5 flex items-center justify-center mr-2 mt-0.5 flex-shrink-0">3</span>
                                    <span>Keep your rotating obstacle as a hazard</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="bg-blue-600 text-white font-bold rounded-full w-5 h-5 flex items-center justify-center mr-2 mt-0.5 flex-shrink-0">4</span>
                                    <span>Create a simple goal area to complete the level</span>
                                </li>
                            </ol>
                        </div>

                        <div className="bg-purple-50 dark:bg-purple-900 p-4 rounded-lg border border-purple-100 dark:border-purple-800">
                            <h3 className="font-medium text-purple-800 dark:text-purple-200 mb-2">Gameplay Features</h3>
                            <ul className="text-sm text-purple-700 dark:text-purple-300 space-y-2">
                                <li className="flex items-start">
                                    <FaCheckCircle className="text-purple-500 dark:text-purple-400 mt-0.5 mr-2 flex-shrink-0" />
                                    <span>Character can move and push physics objects</span>
                                </li>
                                <li className="flex items-start">
                                    <FaCheckCircle className="text-purple-500 dark:text-purple-400 mt-0.5 mr-2 flex-shrink-0" />
                                    <span>Destructible coin stacks that scatter when hit</span>
                                </li>
                                <li className="flex items-start">
                                    <FaCheckCircle className="text-purple-500 dark:text-purple-400 mt-0.5 mr-2 flex-shrink-0" />
                                    <span>Rotating obstacle to avoid</span>
                                </li>
                                <li className="flex items-start">
                                    <FaCheckCircle className="text-purple-500 dark:text-purple-400 mt-0.5 mr-2 flex-shrink-0" />
                                    <span>Simple objective (collect coins, reach goal)</span>
                                </li>
                            </ul>
                        </div>
                    </div>


                    <div className="mt-6 p-4 bg-green-50 dark:bg-green-900 rounded-lg border-2 border-green-200 dark:border-green-700">
                        <h3 className="font-bold text-green-800 dark:text-green-200 text-lg mb-2">🎉 Physics Mastery Achieved! 🎉</h3>
                        <p className="text-green-700 dark:text-green-300">
                            You now have a complete physics playground! Test how objects interact, tweak mass/damping values, and enjoy the chaos.
                        </p>
                        <div className="mt-4 flex flex-wrap gap-4 justify-center">

                            <a
                                href="/tutorials/enemy-ai"
                                className="bg-gradient-to-r from-blue-500 to-blue-600 text-white font-bold py-2 px-6 rounded-lg shadow hover:shadow-lg transition inline-block"
                            >
                                Next: Enemy AI Tutorial
                            </a>
                        </div>
                    </div>
                </section>


                {/* Physics Experiments */}
                <section className="mt-12 bg-white dark:bg-gray-900 rounded-xl shadow-lg p-6">
                    <div className="flex items-center mb-4">
                        <div className="bg-red-100 dark:bg-red-900 p-3 rounded-full mr-4">
                            <FaExclamationTriangle className="text-red-600 dark:text-red-300 text-xl" />
                        </div>
                        <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-100">Physics Experiments to Try</h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="bg-yellow-50 dark:bg-yellow-900 p-4 rounded-lg border border-yellow-100 dark:border-yellow-800">
                            <h3 className="font-medium text-yellow-800 dark:text-yellow-200 mb-2">Crazy Physics</h3>
                            <ul className="text-sm text-yellow-700 dark:text-yellow-300 space-y-2">
                                <li className="flex items-start">
                                    <FaCheckCircle className="text-yellow-500 dark:text-yellow-400 mt-0.5 mr-2 flex-shrink-0" />
                                    <span>Set <strong>Mass Scale</strong> to 0.1 for floaty objects</span>
                                </li>
                                <li className="flex items-start">
                                    <FaCheckCircle className="text-yellow-500 dark:text-yellow-400 mt-0.5 mr-2 flex-shrink-0" />
                                    <span>Add <strong>Radial Force</strong> on timer for explosions</span>
                                </li>
                                <li className="flex items-start">
                                    <FaCheckCircle className="text-yellow-500 dark:text-yellow-400 mt-0.5 mr-2 flex-shrink-0" />
                                    <span>Enable <strong>Gravity Scale</strong> for anti-gravity</span>
                                </li>
                            </ul>
                        </div>

                        <div className="bg-purple-50 dark:bg-purple-900 p-4 rounded-lg border border-purple-100 dark:border-purple-800">
                            <h3 className="font-medium text-purple-800 dark:text-purple-200 mb-2">Useful Physics</h3>
                            <ul className="text-sm text-purple-700 dark:text-purple-300 space-y-2">
                                <li className="flex items-start">
                                    <FaCheckCircle className="text-purple-500 dark:text-purple-400 mt-0.5 mr-2 flex-shrink-0" />
                                    <span>Create a <strong>Physics Constraint</strong> for swinging objects</span>
                                </li>
                                <li className="flex items-start">
                                    <FaCheckCircle className="text-purple-500 dark:text-purple-400 mt-0.5 mr-2 flex-shrink-0" />
                                    <span>Use <strong>Physics Bodies</strong> for destructible walls</span>
                                </li>
                                <li className="flex items-start">
                                    <FaCheckCircle className="text-purple-500 dark:text-purple-400 mt-0.5 mr-2 flex-shrink-0" />
                                    <span>Implement <strong>Projectile Physics</strong> for thrown objects</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
}