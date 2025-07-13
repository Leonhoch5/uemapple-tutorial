import React from "react";

export default function EnemyAIPrompt() {
    return (
        <main
            className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-gray-800 to-gray-950 text-white"
        >
            <section className="p-8 rounded-xl shadow-2xl bg-opacity-80 bg-gray-900 border border-gray-700 max-w-xl text-center">
                <h1 className="text-4xl font-extrabold mb-4 text-purple-400 drop-shadow-lg">
                    The Path Is Yours to Discover
                </h1>
                <p className="text-lg text-gray-300 mb-6">
                    From here, the journey is yours alone. <br />
                    <span className="text-purple-300 font-semibold">
                        Find your own way forward.
                    </span>
                </p>
                <div className="animate-pulse text-purple-500 text-2xl">
                    &#8594; Good luck! &#8592;
                </div>
            </section>
        </main>
    );
}