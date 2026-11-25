import Link from "next/link";

export default function AdminDashboard() {
  const stats = [
    { title: "Total Products", value: "1,248", change: "+4.2%", isUp: true },
    { title: "Total Revenue", value: "৳ 84,320", change: "+12.5%", isUp: true },
    { title: "Total Orders", value: "142", change: "-1.4%", isUp: false },
    { title: "Customers", value: "3,240", change: "+2.1%", isUp: true },
  ];

  const products = [
    { id: 1, name: "Airpods Pro Max 2024", sku: "#KM662266", category: "Electric Product", price: "৳10,120.00", stock: 120, status: "Published" },
    { id: 2, name: "Nike New Model Shoes", sku: "#KM662211", category: "Shoes Product", price: "৳10,120.00", stock: 10, status: "Published" },
    { id: 3, name: "Elegant Georgette Saree", sku: "#KM662266", category: "Saree", price: "৳1,699.00", stock: 120, status: "Inactive" },
    { id: 4, name: "Embroidered Three Piece", sku: "#KM662266", category: "Three Piece", price: "৳1,750.00", stock: 50, status: "Out Stock" },
    { id: 5, name: "Floral Western Dress", sku: "#KM662211", category: "Western", price: "৳1,350.00", stock: 30, status: "Published" },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Published": return "bg-green-100 text-green-700";
      case "Inactive": return "bg-pink-100 text-pink-700";
      case "Out Stock": return "bg-orange-100 text-orange-700";
      default: return "bg-gray-100 text-gray-700";
    }
  };

  return (
    <div className="space-y-6">
      {/* পেজ টাইটেল */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold text-gray-800">Products</h1>
          <p className="text-sm text-gray-500">Manage inventory, pricing and availability across your store</p>
        </div>
        <div className="flex gap-3">
          <button className="border border-gray-300 px-4 py-2 rounded-lg text-sm font-medium hover:bg-gray-50">Export</button>
          
          {/* এখানে বাটনটিকে Link দিয়ে ঠিক করা হয়েছে */}
          <Link href="/admin/products/add" className="bg-pink-700 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-pink-800">
            + Add product
          </Link>
          
        </div>
      </div>

      {/* স্ট্যাটাস কার্ড */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((stat, i) => (
          <div key={i} className="bg-white p-5 rounded-xl border border-gray-100 shadow-sm">
            <div className="flex justify-between items-start">
              <p className="text-sm text-gray-500">{stat.title}</p>
              <span className="text-gray-400">⋮</span>
            </div>
            <h3 className="text-2xl font-bold text-gray-800 mt-2">{stat.value}</h3>
            <div className="flex justify-between items-center mt-2">
              <span className={`text-xs font-medium ${stat.isUp ? 'text-green-600' : 'text-red-600'}`}>
                {stat.change}
              </span>
              <span className="text-xs text-gray-400">Last 7 days</span>
            </div>
          </div>
        ))}
      </div>

      {/* প্রোডাক্ট টেবিল */}
      <div className="bg-white rounded-xl border border-gray-100 shadow-sm overflow-hidden">
        {/* টেবিল ফিল্টার */}
        <div className="p-4 border-b border-gray-100 flex flex-col md:flex-row justify-between items-center gap-4">
          <input type="text" placeholder="Search by product name or ID" className="w-full md:w-80 border border-gray-200 rounded-lg px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-pink-500" />
          <div className="flex gap-2 text-sm">
            <button className="px-3 py-1 bg-gray-100 rounded-md font-medium">All</button>
            <button className="px-3 py-1 text-gray-500 hover:bg-gray-50 rounded-md">Active</button>
            <button className="px-3 py-1 text-gray-500 hover:bg-gray-50 rounded-md">Drafts</button>
            <button className="px-3 py-1 text-gray-500 hover:bg-gray-50 rounded-md">Archived</button>
          </div>
        </div>

        {/* টেবিল */}
        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm">
            <thead className="bg-gray-50 text-gray-500 font-medium border-b border-gray-100">
              <tr>
                <th className="p-4 w-10"><input type="checkbox" /></th>
                <th className="p-4">Product Name</th>
                <th className="p-4">ID & Create Date</th>
                <th className="p-4">Price</th>
                <th className="p-4">Stock</th>
                <th className="p-4">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-50">
              {products.map((prod) => (
                <tr key={prod.id} className="hover:bg-gray-50 transition">
                  <td className="p-4"><input type="checkbox" /></td>
                  <td className="p-4 flex items-center gap-3">
                    <div className="w-10 h-10 bg-gray-200 rounded-md flex items-center justify-center text-xs text-gray-400">IMG</div>
                    <div>
                      <p className="font-medium text-gray-800">{prod.name}</p>
                      <p className="text-xs text-gray-400">{prod.category}</p>
                    </div>
                  </td>
                  <td className="p-4">
                    <p className="font-medium text-gray-700">{prod.sku}</p>
                    <p className="text-xs text-gray-400">Jan 01, 2024</p>
                  </td>
                  <td className="p-4">
                    <p className="font-medium text-gray-700">{prod.price}</p>
                    <p className="text-xs text-gray-400 line-through">৳10,600.00</p>
                  </td>
                  <td className="p-4 font-medium text-gray-700">{prod.stock}</td>
                  <td className="p-4">
                    <span className={`px-2.5 py-1 rounded-full text-xs font-medium ${getStatusColor(prod.status)}`}>
                      {prod.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}