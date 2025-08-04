import Link from "next/link";

export default function Home() {
  return (
    <div className="font-sans min-h-screen p-8 sm:p-20 grid place-items-center bg-white dark:bg-gray-900 text-gray-900 dark:text-white">
      <main className="flex flex-col items-center text-center gap-8 max-w-2xl">


        <h1 className="text-4xl font-bold">Welcome to the Sales Dashboard</h1>
        <p className="text-lg text-gray-600 dark:text-red-300">
          Visualize and analyze sales data from 2022 to 2024 using dynamic charts and filters.
        </p>

        <Link
          href="/dashboard"
          className="bg-blue-600 hover:bg-blue-700 text-white text-sm sm:text-base px-6 py-3 rounded-lg shadow transition-colors"
        >
          Go to Dashboard
        </Link>
      </main>

      <footer className="mt-16 text-center text-sm text-gray-400">
        © {new Date().getFullYear()} Sales Dashboard App. Built with Next.js.
      </footer>
    </div>
  );
}
