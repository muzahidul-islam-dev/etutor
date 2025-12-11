const TutorSidebar = ({ activePage, setActivePage }) => {
    const menuItems = [
        { id: 'my-applications', name: 'My Applications', icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /> },
        { id: 'ongoing-tuitions', name: 'Ongoing Tuitions', icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /> },
        { id: 'revenue', name: 'Revenue History', icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /> },
        { id: 'logout', name: 'Logout', icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />, color: 'text-red-500 hover:bg-red-50' },
    ];

    return (
        <div className="w-full lg:w-64 bg-white border-r border-gray-100 lg:min-h-[calc(100vh-80px)] p-6 hidden lg:block">
            <div className="space-y-1">
                {menuItems.map((item) => (
                    <button 
                        key={item.id} 
                        onClick={() => setActivePage(item.id)}
                        className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium transition-all ${
                            activePage === item.id 
                            ? 'bg-emerald-50 text-emerald-600' 
                            : item.color || 'text-gray-600 hover:bg-gray-50 hover:text-emerald-600'
                        }`}
                    >
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">{item.icon}</svg>
                        {item.name}
                    </button>
                ))}
            </div>
        </div>
    );
};
export default TutorSidebar;