import Link from "next/link";

export default function AdminSidebar() {
  const menuItems = [
    { name: "Dashboard", icon: "🏠", href: "/admin" },
    { name: "Products", icon: "📦", href: "/admin/products" },
    { name: "Orders", icon: "🛒", href: "/admin/orders" },
    { name: "Customers", icon: "👥", href: "/admin/customers" },
    { name: "Roles & Permissions", icon: "🔐", href: "/admin/roles" },
    { name: "Analytics", icon: "📊", href: "/admin/analytics" },
  ];

  return (
    <aside className="w-64 bg-white border-r border-gray-200 h-screen sticky top-0 flex flex-col">
      <div className="p-6 border-b border-gray-100">
        <Link href="/" className="text-2xl font-bold text-pink-800 flex items-center gap-2">
          <span className="text-3xl">👗</span> Aloreen
        </Link>
        <p className="text-xs text-gray-400 mt-1">Admin Panel</p>
      </div>

      <nav className="flex-1 p-4 space-y-1 overflow-y-auto">
        {menuItems.map((item, i) => (
          <Link 
            key={i} 
            href={item.href}
            className="flex items-center gap-3 px-4 py-3 text-sm font-medium text-gray-600 rounded-lg hover:bg-pink-50 hover:text-pink-700 transition"
          >
            <span>{item.icon}</span> {item.name}
          </Link>
        ))}
      </nav>

      <div className="p-4 border-t border-gray-100">
        <Link href="/" className="flex items-center gap-3 px-4 py-3 text-sm text-gray-500 hover:text-pink-600 transition">
          <span>⬅</span> Back to Website
        </Link>
      </div>
    </aside>
  );
}