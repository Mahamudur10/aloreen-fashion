import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#4a0d20] text-gray-300 py-12 mt-10">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">
        
        <div>
          <h3 className="text-white text-2xl font-bold mb-3 flex items-center gap-2">
            <span className="text-3xl">👗</span> Aloreen Fashion
          </h3>
          <p className="text-sm text-pink-200">Fashion Beyond Time ❤️</p>
        </div>

        <div>
          <h4 className="text-white font-semibold mb-4 text-lg">Quick Links</h4>
          <ul className="space-y-2 text-sm">
            <li><Link href="/" className="hover:text-pink-400 transition">Home</Link></li>
            <li><Link href="/shop" className="hover:text-pink-400 transition">Shop</Link></li>
            <li><Link href="/about" className="hover:text-pink-400 transition">About Us</Link></li>
            <li><Link href="/contact" className="hover:text-pink-400 transition">Contact</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-white font-semibold mb-4 text-lg">Categories</h4>
          <ul className="space-y-2 text-sm">
            <li>Saree</li>
            <li>Three Piece</li>
            <li>Western Wear</li>
            <li>Kurti</li>
          </ul>
        </div>

        <div>
          <h4 className="text-white font-semibold mb-4 text-lg">Contact Us</h4>
          <p className="text-sm mb-2">📞 +880 1XXX-XXXXXX</p>
          <p className="text-sm mb-2">📍 Kamrangirchar, Dhaka</p>
          <p className="text-sm mb-4">✉️ aloreenfashion@gmail.com</p>
          <div className="flex gap-3">
            <span className="bg-white/10 p-2 rounded-full cursor-pointer hover:bg-pink-600">f</span>
            <span className="bg-white/10 p-2 rounded-full cursor-pointer hover:bg-pink-600">📷</span>
            <span className="bg-white/10 p-2 rounded-full cursor-pointer hover:bg-pink-600">▶</span>
          </div>
        </div>
      </div>
      
      <div className="border-t border-white/10 mt-10 pt-6 text-center text-xs text-gray-400">
        © 2024 Aloreen Fashion. All Rights Reserved.
      </div>
    </footer>
  );
}