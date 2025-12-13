import { Link } from "react-router";

export function AdminSidebar() {
    const menuItems = [
        { id: 'user-management', name: 'User Management', icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />, link: '/user/admin/users' },
        { id: 'tuition-management', name: 'Tuition Management', icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />, link: '/user/admin/tuition-management' },
        { id: 'analytics', name: 'Reports & Analytics', icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />, link: '/user/admin/report-analysis' },
        { id: 'logout', name: 'Logout', icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />, color: 'text-red-600 hover:bg-red-50' },
    ];

    return (
        <div className="w-full lg:w-64 bg-white border-r border-gray-100 lg:min-h-[calc(100vh-80px)] p-6 hidden lg:block">
            <div className="space-y-1">
                {menuItems.map((item) => (
                    <Link
                        to={item?.link} 
                        key={item.id}
                        className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium transition-all text-gray-600 hover:bg-gray-50 hover:text-emerald-600`}
                    >
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">{item.icon}</svg>
                        {item.name}
                    </Link>
                ))}
            </div>
        </div>
    );
}