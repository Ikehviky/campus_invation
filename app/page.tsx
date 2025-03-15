import Link from 'next/link';

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-100">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">
            Welcome to Our App
          </h1>
          <p className="text-xl text-gray-600 mb-12">
            Get started by signing in or creating a new account
          </p>
          <div className="space-x-4">
            <Link
              href="/signin"
              className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
            >
              Sign In
            </Link>
            <Link
              href="/signup"
              className="inline-block bg-gray-800 text-white px-6 py-3 rounded-lg font-semibold hover:bg-gray-900 transition-colors"
            >
              Sign Up
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}