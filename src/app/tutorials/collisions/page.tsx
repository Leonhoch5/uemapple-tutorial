"use client";
import { FaGamepad, FaExclamationTriangle, FaCheckCircle, FaArrowRight, FaCube, FaBomb } from "react-icons/fa";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function CollisionTutorial() {
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
                        <FaBomb className="text-blue-600 dark:text-blue-400 text-4xl mr-3" />
                        <h1 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-600 dark:from-blue-400 dark:to-purple-500">
                            COLLISIONS TUTORIAL
                        </h1>
                    </div>
                    <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                        Make objects actually bump into each other instead of ghosting through like bad netcode
                    </p>
                </header>

                {/* Project Checkpoint */}
                <section className="bg-yellow-50 dark:bg-yellow-900 rounded-xl shadow-lg p-6 mb-12 border-2 border-yellow-200 dark:border-yellow-700">
                    <div className="flex items-center mb-3">
                        <div className="bg-yellow-100 dark:bg-yellow-800 p-3 rounded-full mr-4">
                            <FaExclamationTriangle className="text-yellow-600 dark:text-yellow-300 text-xl" />
                        </div>
                        <h2 className="text-2xl font-semibold text-yellow-800 dark:text-yellow-200">Before You Start</h2>
                    </div>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                        This tutorial assumes you've completed:
                    </p>
                    <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 space-y-1 mb-4">
                        <li>Blueprint Basics (Rotating Cube)</li>
                        <li>Variables (Adjustable Rotation Speed)</li>
                        <li>Player Input (Movable Character)</li>
                    </ul>
                    <p className="text-sm text-yellow-700 dark:text-yellow-300">
                        If you skipped those, you'll be missing key pieces! This is the final piece to complete your mini-game.
                    </p>
                </section>

                {/* Collision Basics */}
                <section className="bg-white dark:bg-gray-900 rounded-xl shadow-lg p-6 mb-12">
                    <div className="flex items-center mb-3">
                        <div className="bg-blue-100 dark:bg-blue-900 p-3 rounded-full mr-4">
                            <FaCube className="text-blue-600 dark:text-blue-300 text-xl" />
                        </div>
                        <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-100">Collision 101</h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="bg-green-50 dark:bg-green-900 border border-green-100 dark:border-green-800 rounded-lg p-4">
                            <h3 className="font-medium text-green-800 dark:text-green-200 mb-2">Collision Components</h3>
                            <ul className="text-sm text-green-700 dark:text-green-300 space-y-2">
                                <li className="flex items-start">
                                    <FaCheckCircle className="text-green-500 dark:text-green-400 mt-0.5 mr-2 flex-shrink-0" />
                                    <span><strong>Static Mesh</strong> - Has simple collision by default</span>
                                </li>
                                <li className="flex items-start">
                                    <FaCheckCircle className="text-green-500 dark:text-green-400 mt-0.5 mr-2 flex-shrink-0" />
                                    <span><strong>Collision Box/Sphere</strong> - Precise control over hit areas</span>
                                </li>
                                <li className="flex items-start">
                                    <FaCheckCircle className="text-green-500 dark:text-green-400 mt-0.5 mr-2 flex-shrink-0" />
                                    <span><strong>Physics Body</strong> - For objects that should move when hit</span>
                                </li>
                            </ul>
                        </div>

                        <div className="bg-purple-50 dark:bg-purple-900 border border-purple-100 dark:border-purple-800 rounded-lg p-4">
                            <h3 className="font-medium text-purple-800 dark:text-purple-200 mb-2">Collision Responses</h3>
                            <ul className="text-sm text-purple-700 dark:text-purple-300 space-y-2">
                                <li className="flex items-start">
                                    <FaCheckCircle className="text-purple-500 dark:text-purple-400 mt-0.5 mr-2 flex-shrink-0" />
                                    <span><strong>Block</strong> - Stops objects completely</span>
                                </li>
                                <li className="flex items-start">
                                    <FaCheckCircle className="text-purple-500 dark:text-purple-400 mt-0.5 mr-2 flex-shrink-0" />
                                    <span><strong>Overlap</strong> - Triggers events without physics</span>
                                </li>
                                <li className="flex items-start">
                                    <FaCheckCircle className="text-purple-500 dark:text-purple-400 mt-0.5 mr-2 flex-shrink-0" />
                                    <span><strong>Ignore</strong> - Objects pass through each other</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </section>

                {/* Tutorial Steps */}
                <section className="space-y-12">
                    {/* Step 1: Setting Up Collision */}
                    <div className="bg-white dark:bg-gray-900 rounded-xl shadow-lg overflow-hidden">
                        <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-4 flex items-center">
                            <div className="bg-blue-100 p-3 rounded-full mr-4 flex items-center">
                                <span className="text-blue-600 font-bold">1</span>
                            </div>
                            <h2 className="text-xl font-bold text-white">Step 1: Add Collision to Your Rotating Cube</h2>
                        </div>
                        <div className="p-6">
                            <div className="flex flex-col md:flex-row gap-6">
                                <div className="flex-1">
                                    <ol className="space-y-4 text-gray-700 dark:text-gray-300">
                                        <li className="flex items-start">
                                            <span className="bg-blue-600 text-white font-bold rounded-full w-6 h-6 flex items-center justify-center mr-3 flex-shrink-0">1</span>
                                            <span>Open your rotating cube Blueprint</span>
                                        </li>
                                        <li className="flex items-start">
                                            <span className="bg-blue-600 text-white font-bold rounded-full w-6 h-6 flex items-center justify-center mr-3 flex-shrink-0">2</span>
                                            <span>Select the Static Mesh component</span>
                                        </li>
                                        <li className="flex items-start">
                                            <span className="bg-blue-600 text-white font-bold rounded-full w-6 h-6 flex items-center justify-center mr-3 flex-shrink-0">3</span>
                                            <span>In Details panel, set <strong>Collision Preset</strong> to "BlockAll"</span>
                                        </li>
                                        <li className="flex items-start">
                                            <span className="bg-blue-600 text-white font-bold rounded-full w-6 h-6 flex items-center justify-center mr-3 flex-shrink-0">4</span>
                                            <span>Adjust <strong>Collision Complexity</strong> if needed</span>
                                        </li>
                                    </ol>

                                    <div className="mt-6 p-4 bg-blue-50 dark:bg-blue-900 rounded-lg border border-blue-100 dark:border-blue-800">
                                        <h3 className="font-medium text-blue-800 dark:text-blue-200 mb-2 flex items-center">
                                            <FaGamepad className="mr-2" /> Pro Tip
                                        </h3>
                                        <p className="text-sm text-blue-700 dark:text-blue-300">
                                            Use <strong>Collision Box</strong> components for better performance than complex mesh collision.
                                        </p>
                                    </div>
                                </div>
                                <div className="flex-1 relative min-h-[200px] bg-gray-100 dark:bg-gray-800 rounded-lg overflow-hidden border border-gray-200 dark:border-gray-700 flex items-center justify-center">
                                    <div className="w-32 h-32 bg-gray-300 dark:bg-gray-600 rounded flex items-center justify-center text-gray-500 dark:text-gray-300 text-sm">
                                        Collision Settings Image
                                    </div>
                                    <div className="absolute bottom-2 right-2 bg-white dark:bg-gray-700 px-2 py-1 rounded text-xs text-gray-600 dark:text-gray-300 shadow-sm">
                                        Collision Presets
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Step 2: Character Collision */}
                    <div className="bg-white dark:bg-gray-900 rounded-xl shadow-lg overflow-hidden">
                        <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-4 flex items-center">
                            <div className="bg-blue-100 p-3 rounded-full mr-4 flex items-center">
                                <span className="text-blue-600 font-bold">2</span>
                            </div>
                            <h2 className="text-xl font-bold text-white">Step 2: Fix Your Character's Collision</h2>
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
                                            <span>Add a <strong>Capsule Component</strong> (perfect for characters)</span>
                                        </li>
                                        <li className="flex items-start">
                                            <span className="bg-blue-600 text-white font-bold rounded-full w-6 h-6 flex items-center justify-center mr-3 flex-shrink-0">3</span>
                                            <span>Set it as the <strong>Root Component</strong></span>
                                        </li>
                                        <li className="flex items-start">
                                            <span className="bg-blue-600 text-white font-bold rounded-full w-6 h-6 flex items-center justify-center mr-3 flex-shrink-0">4</span>
                                            <span>Adjust height/radius to match your character</span>
                                        </li>
                                        <li className="flex items-start">
                                            <span className="bg-blue-600 text-white font-bold rounded-full w-6 h-6 flex items-center justify-center mr-3 flex-shrink-0">5</span>
                                            <span>Attach your mesh to the capsule</span>
                                        </li>
                                    </ol>
                                </div>
                                <div className="flex-1 relative min-h-[250px] bg-gray-100 dark:bg-gray-800 rounded-lg overflow-hidden border border-gray-200 dark:border-gray-700 flex items-center justify-center">
                                    <div className="w-32 h-32 bg-gray-300 dark:bg-gray-600 rounded flex items-center justify-center text-gray-500 dark:text-gray-300 text-sm">
                                        Character Collision Image
                                    </div>
                                    <div className="absolute top-2 left-2 bg-white dark:bg-gray-700 px-2 py-1 rounded text-xs text-gray-600 dark:text-gray-300 shadow-sm">
                                        Capsule Component
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Step 3: Overlap Events */}
                    <div className="bg-white dark:bg-gray-900 rounded-xl shadow-lg overflow-hidden">
                        <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-4 flex items-center">
                            <div className="bg-blue-100 p-3 rounded-full mr-4 flex items-center">
                                <span className="text-blue-600 font-bold">3</span>
                            </div>
                            <h2 className="text-xl font-bold text-white">Step 3: Make Collectible Coins (Because Every Game Needs Them)</h2>
                        </div>
                        <div className="p-6">
                            <div className="flex flex-col md:flex-row gap-6">
                                <div className="flex-1">
                                    <ol className="space-y-4 text-gray-700 dark:text-gray-300">
                                        <li className="flex items-start">
                                            <span className="bg-blue-600 text-white font-bold rounded-full w-6 h-6 flex items-center justify-center mr-3 flex-shrink-0">1</span>
                                            <span>Create a new <strong>Blueprint Actor</strong> called "BP_Coin"</span>
                                        </li>
                                        <li className="flex items-start">
                                            <span className="bg-blue-600 text-white font-bold rounded-full w-6 h-6 flex items-center justify-center mr-3 flex-shrink-0">2</span>
                                            <span>Add a <strong>Sphere Collision</strong> component</span>
                                        </li>
                                        <li className="flex items-start">
                                            <span className="bg-blue-600 text-white font-bold rounded-full w-6 h-6 flex items-center justify-center mr-3 flex-shrink-0">3</span>
                                            <span>Set collision to <strong>OverlapAll</strong></span>
                                        </li>
                                        <li className="flex items-start">
                                            <span className="bg-blue-600 text-white font-bold rounded-full w-6 h-6 flex items-center justify-center mr-3 flex-shrink-0">4</span>
                                            <span>Right-click the Sphere and add <strong>OnComponentBeginOverlap</strong></span>
                                        </li>
                                        <li className="flex items-start">
                                            <span className="bg-blue-600 text-white font-bold rounded-full w-6 h-6 flex items-center justify-center mr-3 flex-shrink-0">5</span>
                                            <span>Connect to <strong>DestroyActor</strong> node</span>
                                        </li>
                                        <li className="flex items-start">
                                            <span className="bg-blue-600 text-white font-bold rounded-full w-6 h-6 flex items-center justify-center mr-3 flex-shrink-0">6</span>
                                            <span>Add a sound/particle effect if you're fancy</span>
                                        </li>
                                    </ol>
                                </div>
                                <div className="flex-1 relative min-h-[300px] bg-gray-100 dark:bg-gray-800 rounded-lg overflow-hidden border border-gray-200 dark:border-gray-700 flex items-center justify-center">
                                    <div className="w-32 h-32 bg-gray-300 dark:bg-gray-600 rounded flex items-center justify-center text-gray-500 dark:text-gray-300 text-sm">
                                        Coin Blueprint Image
                                    </div>
                                    <div className="absolute bottom-2 left-2 bg-white dark:bg-gray-700 px-2 py-1 rounded text-xs text-gray-600 dark:text-gray-300 shadow-sm">
                                        Overlap Event
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Final Project Assembly */}
                <section className="mt-12 bg-white dark:bg-gray-900 rounded-xl shadow-lg p-6">
                    <div className="flex items-center mb-4">
                        <div className="bg-green-100 dark:bg-green-900 p-3 rounded-full mr-4">
                            <FaGamepad className="text-green-600 dark:text-green-300 text-xl" />
                        </div>
                        <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-100">Complete Your whatever you did there be</h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="bg-blue-50 dark:bg-blue-900 p-4 rounded-lg border border-blue-100 dark:border-blue-800">
                            <h3 className="font-medium text-blue-800 dark:text-blue-200 mb-2">Final Setup</h3>
                            <ol className="text-sm text-blue-700 dark:text-blue-300 space-y-2">
                                <li className="flex items-start">
                                    <span className="bg-blue-600 text-white font-bold rounded-full w-5 h-5 flex items-center justify-center mr-2 mt-0.5 flex-shrink-0">1</span>
                                    <span>Place your rotating cube and coins in the level</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="bg-blue-600 text-white font-bold rounded-full w-5 h-5 flex items-center justify-center mr-2 mt-0.5 flex-shrink-0">2</span>
                                    <span>Add a <strong>Player Start</strong> near your cube</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="bg-blue-600 text-white font-bold rounded-full w-5 h-5 flex items-center justify-center mr-2 mt-0.5 flex-shrink-0">3</span>
                                    <span>Create a simple HUD to show coin count</span>
                                </li>
                            </ol>
                        </div>

                        <div className="bg-purple-50 dark:bg-purple-900 p-4 rounded-lg border border-purple-100 dark:border-purple-800">
                            <h3 className="font-medium text-purple-800 dark:text-purple-200 mb-2">Gameplay Features</h3>
                            <ul className="text-sm text-purple-700 dark:text-purple-300 space-y-2">
                                <li className="flex items-start">
                                    <FaCheckCircle className="text-purple-500 dark:text-purple-400 mt-0.5 mr-2 flex-shrink-0" />
                                    <span>Character can move and collide with environment</span>
                                </li>
                                <li className="flex items-start">
                                    <FaCheckCircle className="text-purple-500 dark:text-purple-400 mt-0.5 mr-2 flex-shrink-0" />
                                    <span>Rotating obstacle cube</span>
                                </li>
                                <li className="flex items-start">
                                    <FaCheckCircle className="text-purple-500 dark:text-purple-400 mt-0.5 mr-2 flex-shrink-0" />
                                    <span>Collectible coins with overlap events</span>
                                </li>
                                <li className="flex items-start">
                                    <FaCheckCircle className="text-purple-500 dark:text-purple-400 mt-0.5 mr-2 flex-shrink-0" />
                                    <span>Adjustable rotation speed variable</span>
                                </li>
                            </ul>
                        </div>
                    </div>


                </section>

                {/* Next Steps */}
                <section className="mt-16 bg-white dark:bg-gray-900 rounded-xl shadow-lg p-8 text-center">
                    <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100 mb-4">Where To Go From Here?</h2>
                    <p className="text-gray-600 dark:text-gray-300 mb-6 max-w-2xl mx-auto">
                        Now that you have core mechanics working, here's how to make it actually fun:
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-1 gap-6">
                        <div className="bg-blue-50 dark:bg-blue-900 p-5 rounded-lg border border-blue-100 dark:border-blue-800">
                            <h3 className="font-semibold text-blue-700 dark:text-blue-300 mb-2">Physics Objects</h3>
                            <p className="text-sm text-blue-600 dark:text-blue-200">
                                Make crates you can push around or knock over.
                            </p>
                            <a
                                href="/tutorials/physics"
                                className="mt-4 inline-block bg-blue-600 text-white px-4 py-2 rounded shadow hover:bg-blue-700 transition"
                            >
                                Physics Tutorial
                            </a>
                        </div>

                    </div>
                </section>
            </div>
        </div>
    );
}