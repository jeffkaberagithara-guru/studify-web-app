import { FaVolumeUp } from "react-icons/fa";

export default function TextToAudio() {
  return (
    <section className="min-h-screen bg-gray-50 dark:bg-gray-900 px-6 py-12">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-800 dark:text-white">
          Text to Audio
        </h1>
        <p className="mt-2 text-gray-600 dark:text-gray-400">
          Convert your notes into audio and learn by listening.
        </p>

        <textarea
          placeholder="Paste your text here..."
          className="w-full h-48 mt-6 p-4 rounded-xl border dark:border-gray-700 dark:bg-gray-800"
        />

        <button className="mt-6 flex items-center gap-2 px-6 py-3 bg-cyan-600 hover:bg-cyan-700 text-white rounded-lg">
          <FaVolumeUp />
          Generate Audio
        </button>

        {/* Future audio player */}
        <div className="mt-8 p-4 rounded-xl bg-white dark:bg-gray-800 shadow">
          Audio output will appear here
        </div>
      </div>
    </section>
  );
}
