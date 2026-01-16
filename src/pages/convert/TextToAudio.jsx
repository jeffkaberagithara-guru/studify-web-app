import { useState } from "react";
import { FaVolumeUp } from "react-icons/fa";
import api from "../../services/api"; // make sure this path is correct

export default function TextToAudio() {
  const [text, setText] = useState("");
  const [audioUrl, setAudioUrl] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleGenerateAudio = async () => {
    if (!text.trim()) return;

    try {
      setLoading(true);

      const response = await api.post(
        "/tts",
        { text },
        { responseType: "blob" },
      );

      const audioBlob = new Blob([response.data], { type: "audio/wav" });
      const url = URL.createObjectURL(audioBlob);
      setAudioUrl(url);
    } catch (error) {
      console.error("TTS failed:", error);
      alert("Failed to generate audio");
    } finally {
      setLoading(false);
    }
  };

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
          value={text}
          onChange={(e) => setText(e.target.value)}
          className="w-full h-48 mt-6 p-4 rounded-xl border dark:border-gray-700 dark:bg-gray-800"
        />

        <button
          onClick={handleGenerateAudio}
          disabled={loading}
          className="mt-6 flex items-center gap-2 px-6 py-3 bg-cyan-600 hover:bg-cyan-700 text-white rounded-lg disabled:opacity-60"
        >
          <FaVolumeUp />
          {loading ? "Generating..." : "Generate Audio"}
        </button>

        {/* Audio player */}
        <div className="mt-8 p-4 rounded-xl bg-white dark:bg-gray-800 shadow">
          {audioUrl ? (
            <audio controls src={audioUrl} className="w-full" />
          ) : (
            "Audio output will appear here"
          )}
        </div>
      </div>
    </section>
  );
}
