export default function RolesPage() {
  const roles = [
    { title: "Administrator", users: 4, color: "bg-purple-100 text-purple-700" },
    { title: "Manager", users: 7, color: "bg-blue-100 text-blue-700" },
    { title: "Users", users: 5, color: "bg-green-100 text-green-700" },
    { title: "Support", users: 3, color: "bg-orange-100 text-orange-700" },
    { title: "Restricted User", users: 2, color: "bg-gray-100 text-gray-700" },
  ];

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-start">
        <div>
          <h1 className="text-2xl font-bold text-gray-800">Roles List</h1>
          <p className="text-sm text-gray-500 max-w-2xl mt-1">
            A role provides access to predefined menus and features so that depending on assigned role an administrator can have access to what user needs.
          </p>
        </div>
        <button className="bg-pink-700 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-pink-800">+ Add New Role</button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {roles.map((role, i) => (
          <div key={i} className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm flex flex-col justify-between h-40">
            <div>
              <div className="flex justify-between items-center">
                <p className="text-sm text-gray-500">Total {role.users} users</p>
                <span className={`text-xs px-2 py-1 rounded-full ${role.color}`}>Active</span>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mt-2">{role.title}</h3>
            </div>
            <div className="flex justify-between items-center mt-4">
              <button className="text-pink-600 text-sm font-medium hover:underline">Edit Role</button>
              <span className="text-gray-400 cursor-pointer">📋</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}