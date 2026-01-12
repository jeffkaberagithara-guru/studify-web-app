export default function Library() {
  return (
    <section className="min-h-screen bg-gray-50 dark:bg-gray-900 px-6 py-12">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-800 dark:text-white">
          My Library
        </h1>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
          <div className="p-4 rounded-xl bg-white dark:bg-gray-800 shadow">
            Biology Notes (Audio)
          </div>
          <div className="p-4 rounded-xl bg-white dark:bg-gray-800 shadow">
            History Summary
          </div>
        </div>
      </div>
    </section>
  );
}
