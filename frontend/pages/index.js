import Link from "next/link";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div>
      <Navbar />
      <main className="container mx-auto p-4">
        <h1 className="text-3xl font-bold mb-4">Welcome to OTT Platform</h1>
        <p>Stream your favorite movies and shows seamlessly.</p>

        <div className="mt-6">
          <Link href="/login">
            <button className="bg-blue-600 text-white px-4 py-2 rounded">
              Login
            </button>
          </Link>
        </div>
      </main>
      <Footer />
    </div>
  );
}
