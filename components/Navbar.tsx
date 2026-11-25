import Link from "next/link";

export default function Navbar() {
  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      {/* মেইন নেভবার */}
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold text-pink-800 flex items-center gap-2">
          <span className="text-3xl">👗</span> Aloreen Fashion
        </Link>
        
        <nav className="hidden md:flex gap-8 text-sm font-medium text-gray-700">
          <Link href="/" className="text-pink-600 border-b-2 border-pink-600 pb-1">Home</Link>
          <Link href="/shop" className="hover:text-pink-600 transition">Shop ▾</Link>
          <Link href="/categories" className="hover:text-pink-600 transition">Categories ▾</Link>
          <Link href="/about" className="hover:text-pink-600 transition">About Us</Link>
          <Link href="/contact" className="hover:text-pink-600 transition">Contact</Link>
        </nav>

        <div className="flex gap-5 items-center text-gray-700">
          <button className="hover:text-pink-600">🔍</button>
          <button className="hover:text-pink-600">👤</button>
          <button className="relative hover:text-pink-600">
            🛒
            <span className="absolute -top-2 -right-3 bg-pink-600 text-white text-[10px] rounded-full h-4 w-4 flex items-center justify-center">0</span>
          </button>
        </div>
      </div>
    </header>
  );
}