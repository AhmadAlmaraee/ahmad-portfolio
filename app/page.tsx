import Link from "next/link";

export default function HomePage() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center gap-6">
      <h1 className="text-4xl font-bold">
        Ahmad Portfolio – Coming Soon
      </h1>

      <Link
        href="/about"
        className="text-blue-500 underline text-lg"
      >
        Go to About Page
      </Link>
    </main>
  );
}
