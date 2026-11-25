import Image from "next/image";

export default function Shop() {
  // ডামি ডেটা
  const products = [
    { id: 1, name: "Elegant Georgette Saree", price: 1699, oldPrice: 1999, discount: "15%", category: "Saree" },
    { id: 2, name: "Embroidered Three Piece", price: 1750, oldPrice: 1999, discount: "12%", category: "Three Piece" },
    { id: 3, name: "Floral Western Dress", price: 1350, oldPrice: 1500, discount: "10%", category: "Western" },
    { id: 4, name: "Premium Unstitched Fabric", price: 920, oldPrice: 1000, discount: "8%", category: "Unstitched" },
    { id: 5, name: "Stylish Kurti", price: 1100, oldPrice: 1300, discount: "15%", category: "Kurti" },
    { id: 6, name: "Silk Saree", price: 2500, oldPrice: 3000, discount: "16%", category: "Saree" },
    { id: 7, name: "Cotton Kurti", price: 850, oldPrice: 1000, discount: "15%", category: "Kurti" },
    { id: 8, name: "Party Wear Three Piece", price: 2200, oldPrice: 2500, discount: "12%", category: "Three Piece" },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold text-gray-800 mb-8 border-b-2 border-pink-500 inline-block pb-2">All Products</h1>
      
      <div className="flex flex-col md:flex-row gap-8">
        {/* সাইডবার ফিল্টার */}
        <aside className="w-full md:w-1/4 bg-white p-6 rounded-lg shadow-sm h-fit">
          <h2 className="text-lg font-semibold mb-4 text-gray-700">Categories</h2>
          <ul className="space-y-2 text-sm text-gray-600">
            <li className="cursor-pointer hover:text-pink-600">Saree</li>
            <li className="cursor-pointer hover:text-pink-600">Three Piece</li>
            <li className="cursor-pointer hover:text-pink-600">Western Wear</li>
            <li className="cursor-pointer hover:text-pink-600">Unstitched</li>
            <li className="cursor-pointer hover:text-pink-600">Kurti</li>
          </ul>

          <h2 className="text-lg font-semibold mt-8 mb-4 text-gray-700">Price Range</h2>
          <input type="range" min="500" max="5000" className="w-full accent-pink-600" />
          <div className="flex justify-between text-xs mt-2 text-gray-500">
            <span>৳500</span>
            <span>৳5000</span>
          </div>
        </aside>

        {/* প্রোডাক্ট গ্রিড */}
        <div className="w-full md:w-3/4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((prod) => (
            <div key={prod.id} className="bg-white rounded-xl shadow-sm hover:shadow-md transition overflow-hidden group">
              <div className="relative h-64 bg-gray-100 flex items-center justify-center text-gray-300">
                <span className="absolute top-2 left-2 bg-pink-600 text-white text-xs px-2 py-1 rounded z-10">{prod.discount}</span>
                <span className="text-xs">প্রোডাক্ট ইমেজ</span>
              </div>
              <div className="p-4">
                <p className="text-xs text-pink-500 mb-1">{prod.category}</p>
                <h3 className="font-medium text-sm truncate">{prod.name}</h3>
                <div className="flex items-center gap-2 mt-1">
                  <span className="text-pink-700 font-bold">৳ {prod.price}</span>
                  <span className="text-gray-400 line-through text-xs">৳ {prod.oldPrice}</span>
                </div>
                <button className="w-full mt-3 bg-pink-800 text-white py-2 rounded text-sm hover:bg-pink-900 transition">
                  🛒 Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}