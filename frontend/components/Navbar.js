import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-gray-800 text-white p-4 flex justify-between">
      <Link href="/">
        <span className="font-bold text-lg cursor-pointer">OTT Platform</span>
      </Link>
      <div className="space-x-4">
        <Link href="/login">
          <span className="cursor-pointer">Login</span>
        </Link>
      </div>
    </nav>
  );
}
