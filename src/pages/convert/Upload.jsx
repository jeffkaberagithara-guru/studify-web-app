import { FaCloudUploadAlt } from "react-icons/fa";

export default function Upload() {
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
            Click to upload or drag & drop
          </span>
          <input type="file" className="hidden" />
        </label>
      </div>
    </section>
  );
}
