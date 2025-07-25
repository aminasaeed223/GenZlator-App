import { useState } from "react";
import { convertToGenZ, convertToEnglish } from "./genzAi";

export default function Translator() {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");
  const [loading, setLoading] = useState(false);

  const handleTranslate = async (type: "genz" | "english") => {
    if (!input.trim()) return;
    setLoading(true);
    setOutput("");

    const result =
      type === "genz"
        ? await convertToGenZ(input)
        : await convertToEnglish(input);

    setOutput(result);
    setLoading(false);
  };

  return (
    <div className="min-h-screen flex flex-col justify-between bg-gradient-to-r from-indigo-300 via-purple-300 to-pink-300 animate-gradient-x">
      <div className="flex-grow flex items-center justify-center px-4 py-8">
        <div className="bg-white bg-opacity-90 shadow-2xl rounded-2xl w-full max-w-2xl p-8 space-y-6">
          <h1 className="text-3xl font-extrabold text-center text-purple-700">
            🧠 Gen Z ↔ English Translator
          </h1>

          <textarea
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Type your sentence here..."
            className="w-full p-4 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-400 resize-none h-32"
          />

          <div className="flex justify-center gap-4">
            <button
              onClick={() => handleTranslate("genz")}
              className="bg-purple-600 hover:bg-purple-700 text-white font-semibold py-2 px-4 rounded-lg transition"
            >
              🔄 Convert to Gen Z
            </button>
            <button
              onClick={() => handleTranslate("english")}
              className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg transition"
            >
              🔤 Convert to English
            </button>
          </div>

          {loading ? (
            <div className="text-center text-gray-500">⏳ Translating...</div>
          ) : (
            output && (
              <div className="bg-gray-100 p-4 rounded-lg text-gray-800 whitespace-pre-wrap">
                <strong className="text-gray-700">Output:</strong>
                <p className="mt-2">{output}</p>
              </div>
            )
          )}
        </div>
      </div>

      {/* Footer */}
      <footer className="text-center py-4 text-gray-800 font-medium bg-white bg-opacity-70">
        Made with 💜 by <span className="font-bold text-purple-700">Amina</span>
      </footer>
    </div>
  );
}
