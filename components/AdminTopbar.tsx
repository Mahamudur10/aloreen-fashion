export default function AdminTopbar() {
  return (
    <header className="bg-white border-b border-gray-200 px-8 py-4 flex justify-between items-center sticky top-0 z-10">
      {/* সার্চ বার */}
      <div className="relative w-96">
        <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">🔍</span>
        <input 
          type="text" 
          placeholder="Search (Ctrl+/)" 
          className="w-full bg-gray-50 border border-gray-200 rounded-lg pl-10 pr-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-pink-500"
        />
      </div>

      {/* ডান দিকের আইকন */}
      <div className="flex items-center gap-5 text-gray-500">
        <span className="cursor-pointer hover:text-pink-600">🌐</span>
        <span className="cursor-pointer hover:text-pink-600">🔔</span>
        <span className="cursor-pointer hover:text-pink-600">⚙️</span>
        <div className="flex items-center gap-2 border-l border-gray-200 pl-4">
          <div className="w-8 h-8 bg-pink-200 rounded-full flex items-center justify-center text-sm font-bold text-pink-700">
            A
          </div>
          <span className="text-sm font-medium text-gray-700">Admin</span>
        </div>
      </div>
    </header>
  );
}