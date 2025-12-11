const ProfileSettings = () => {
    return (
        <div className="mx-auto">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Profile Settings</h2>
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-8">
                <div className="flex items-center gap-6 mb-8">
                    <div className="w-20 h-20 rounded-full bg-gray-100 border-2 border-emerald-500 p-1">
                        <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=Muzahidul" alt="Profile" className="w-full h-full rounded-full" />
                    </div>
                    <div>
                        <button className="bg-white border border-gray-300 text-gray-700 px-4 py-2 rounded-lg text-sm font-medium hover:bg-gray-50 transition-colors">Change Photo</button>
                        <p className="text-xs text-gray-400 mt-2">Max size 2MB (JPG, PNG)</p>
                    </div>
                </div>
                <form className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
                            <input type="text" defaultValue="Muzahidul Islam" className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-emerald-500 outline-none" />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
                            <input type="text" defaultValue="+880 1712 345 678" className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-emerald-500 outline-none" />
                        </div>
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
                        <input type="email" defaultValue="muzahidul@example.com" disabled className="w-full px-4 py-2 border border-gray-200 rounded-lg bg-gray-50 text-gray-500 cursor-not-allowed" />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Address</label>
                        <textarea rows="3" defaultValue="123, Dhanmondi, Dhaka" className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-emerald-500 outline-none"></textarea>
                    </div>
                    <div className="pt-4">
                        <button type="button" className="bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-3 px-8 rounded-lg shadow-lg transition-all">Save Changes</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default ProfileSettings;