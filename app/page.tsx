import Image from "next/image";
import Link from "next/link";

export default function Home() {
  const categories = [
    { name: "Saree", img: "/images/saree.jpg" },
    { name: "Three Piece", img: "/images/threepiece.jpg" },
    { name: "Western Wear", img: "/images/western.jpg" },
    { name: "Unstitched", img: "/images/unstitched.jpg" },
    { name: "Kurti", img: "/images/kurti.jpg" },
    { name: "Hijab & More", img: "/images/hijab.jpg" },
  ];

  const products = [
    { id: 1, name: "Elegant Georgette Saree", price: 1699, oldPrice: 1999, img: "/images/p1.jpg", discount: "15%" },
    { id: 2, name: "Embroidered Three Piece", price: 1750, oldPrice: 1999, img: "/images/p2.jpg", discount: "12%" },
    { id: 3, name: "Floral Western Dress", price: 1350, oldPrice: 1500, img: "/images/p3.jpg", discount: "10%" },
    { id: 4, name: "Premium Unstitched Fabric", price: 920, oldPrice: 1000, img: "/images/p4.jpg", discount: "8%" },
    { id: 5, name: "Stylish Kurti", price: 1100, oldPrice: 1300, img: "/images/p5.jpg", discount: "15%" },
  ];

  return (
    <div className="font-sans text-gray-800">
      
      {/* হিরো সেকশন */}
      <section className="relative bg-pink-50 flex items-center justify-between px-6 md:px-10 py-16 md:py-24 overflow-hidden">
        <div className="md:w-1/2 space-y-5 z-10">
          <p className="text-pink-600 text-xl italic font-serif">Step Into Elegance ♡</p>
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 leading-tight">
            Aloreen <span className="text-pink-600">Fashion</span>
          </h1>
          <p className="text-gray-600 text-lg">Traditional Grace · Modern Style · Timeless Beauty</p>
          <button className="bg-pink-700 text-white px-8 py-3 rounded-full mt-4 hover:bg-pink-800 transition shadow-lg">
            Shop Now →
          </button>
        </div>
        <div className="md:w-1/2 hidden md:flex justify-end relative">
           <div className="w-[400px] h-[500px] bg-pink-200 rounded-t-full relative overflow-hidden shadow-xl">
             {/* এখানে হিরো ইমেজ বসবে */}
             <div className="absolute inset-0 flex items-center justify-center text-pink-400 text-6xl">👗</div>
           </div>
           <div className="absolute top-10 right-10 bg-pink-700 text-white p-4 rounded-full rotate-12 shadow-lg">
             <p className="text-sm font-bold">Be Bold</p>
             <p className="text-sm font-bold">Be Beautiful</p>
             <p className="text-sm font-bold">Be Aloreen ❤️</p>
           </div>
        </div>
      </section>

      {/* ক্যাটাগরি */}
      <section className="py-16 text-center bg-white">
        <h2 className="text-2xl font-semibold mb-10 border-b-2 border-pink-500 inline-block pb-2">Shop By Category</h2>
        <div className="grid grid-cols-3 md:grid-cols-6 gap-6 max-w-6xl mx-auto px-4">
          {categories.map((cat, i) => (
            <div key={i} className="flex flex-col items-center cursor-pointer group">
              <div className="w-24 h-24 md:w-32 md:h-32 rounded-full overflow-hidden border-2 border-transparent group-hover:border-pink-500 transition relative bg-pink-100 flex items-center justify-center">
                <span className="text-gray-400 text-xs">ইমেজ</span>
              </div>
              <p className="mt-3 text-sm font-medium">{cat.name}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ফিচার্ড প্রোডাক্ট */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-2xl font-semibold border-b-2 border-pink-500 pb-2">Our Featured Collection</h2>
            <Link href="/shop" className="text-sm border border-gray-300 px-4 py-1 rounded-full hover:bg-pink-600 hover:text-white transition">
              View All Products →
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {products.map((prod) => (
              <div key={prod.id} className="bg-white rounded-xl shadow-sm hover:shadow-md transition overflow-hidden group">
                <div className="relative h-64 bg-gray-100 flex items-center justify-center text-gray-300">
                  <span className="absolute top-2 left-2 bg-pink-600 text-white text-xs px-2 py-1 rounded z-10">{prod.discount}</span>
                  <span className="text-xs">প্রোডাক্ট ইমেজ</span>
                </div>
                <div className="p-4">
                  <h3 className="font-medium text-sm truncate">{prod.name}</h3>
                  <div className="flex items-center gap-2 mt-1">
                    <span className="text-pink-700 font-bold">৳ {prod.price}</span>
                    <span className="text-gray-400 line-through text-xs">৳ {prod.oldPrice}</span>
                  </div>
                  <button className="w-full mt-3 bg-pink-800 text-white py-2 rounded text-sm hover:bg-pink-900 transition flex items-center justify-center gap-2">
                    🛒 Add to Cart
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* অফার ব্যানার */}
      <section className="py-12 px-4">
        <div className="max-w-7xl mx-auto bg-gradient-to-r from-pink-900 to-pink-600 rounded-2xl p-8 md:p-12 flex flex-col md:flex-row items-center justify-between text-white relative overflow-hidden shadow-2xl">
          <div className="relative z-10">
            <p className="text-pink-200 font-medium">Special Offer</p>
            <h2 className="text-3xl md:text-5xl font-bold mt-2">Flat 20% OFF</h2>
            <p className="mt-2 text-pink-100">On All Fashion Items</p>
            <button className="bg-white text-pink-800 px-8 py-3 rounded-full mt-6 font-semibold hover:bg-gray-100 transition">
              Shop Now →
            </button>
          </div>
          <div className="mt-8 md:mt-0 text-8xl opacity-20">🎁</div>
        </div>
      </section>

    </div>
  );
}