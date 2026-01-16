import { useState } from "react";
import { FaCloudUploadAlt } from "react-icons/fa";
import api from "../../services/api"; // adjust path if needed

export default function Upload() {
  const [file, setFile] = useState(null);
  const [extractedText, setExtractedText] = useState("");
  const [loading, setLoading] = useState(false);

  const handleFileChange = async (e) => {
    const selectedFile = e.target.files[0];
    if (!selectedFile) return;

    setFile(selectedFile);
    setLoading(true);

    try {
      const formData = new FormData();
      formData.append("file", selectedFile);

      const res = await api.post("/upload", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });

      setExtractedText(res.data.text);
    } catch (error) {
      console.error("Upload failed:", error);
      alert("Failed to process file");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="min-h-screen bg-gray-50 dark:bg-gray-900 px-6 py-12">
      <div className="max-w-3xl mx-auto text-center">
        <h1 className="text-3xl font-bold text-gray-800 dark:text-white">
          Upload a File
        </h1>
        <p className="mt-2 text-gray-600 dark:text-gray-400">
          Upload PDF, DOCX, or paste a URL
        </p>

        <label className="mt-8 flex flex-col items-center justify-center h-48 border-2 border-dashed rounded-xl cursor-pointer hover:border-cyan-500">
          <FaCloudUploadAlt className="text-4xl text-cyan-500" />
          <span className="mt-2 text-gray-500">
            {loading ? "Processing file..." : "Click to upload or drag & drop"}
          </span>
          <input
            type="file"
            className="hidden"
            accept=".pdf,.docx"
            onChange={handleFileChange}
          />
        </label>

        {/* Extracted text preview (logic only, minimal UI impact) */}
        {extractedText && (
          <textarea
            value={extractedText}
            readOnly
            className="w-full mt-6 h-48 p-4 rounded-xl border dark:border-gray-700 dark:bg-gray-800 text-left"
          />
        )}
      </div>
    </section>
  );
}
