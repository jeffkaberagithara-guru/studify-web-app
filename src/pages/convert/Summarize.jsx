import { useState } from "react";
import api from "../../services/api"; // adjust path if needed

export default function Summarize() {
  const [text, setText] = useState("");
  const [summary, setSummary] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSummarize = async () => {
    if (!text.trim()) return;

    setLoading(true);
    setSummary("");

    try {
      const res = await api.post("/summarize", { text });
      setSummary(res.data.summary);
    } catch (error) {
      console.error("Summarization failed:", error);
      alert("Failed to generate summary");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="min-h-screen bg-gray-50 dark:bg-gray-900 px-6 py-12">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-800 dark:text-white">
          AI Summary
        </h1>
        <p className="mt-2 text-gray-600 dark:text-gray-400">
          Get short, clear summaries from long notes.
        </p>

        <textarea
          placeholder="Paste text to summarize..."
          value={text}
          onChange={(e) => setText(e.target.value)}
          className="w-full h-48 mt-6 p-4 rounded-xl border dark:border-gray-700 dark:bg-gray-800"
        />

        <button
          onClick={handleSummarize}
          disabled={loading}
          className="mt-6 px-6 py-3 bg-cyan-600 hover:bg-cyan-700 text-white rounded-lg disabled:opacity-60"
        >
          {loading ? "Summarizing..." : "Generate Summary"}
        </button>

        <div className="mt-8 p-4 rounded-xl bg-white dark:bg-gray-800 shadow">
          {summary || "Summary result will appear here"}
        </div>
      </div>
    </section>
  );
}
