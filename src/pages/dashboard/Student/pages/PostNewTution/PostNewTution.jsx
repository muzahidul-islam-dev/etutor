const PostNewTuition = () => {
    return (
        <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Post a New Tuition</h2>
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-8">
                <form className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">Job Title</label>
                            <input type="text" className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-emerald-500 outline-none" placeholder="e.g. Need Math Tutor" />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">Subject</label>
                            <input type="text" className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-emerald-500 outline-none" placeholder="e.g. Physics, Chemistry" />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">Class / Medium</label>
                            <select className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-emerald-500 outline-none">
                                <option>Select Class</option>
                                <option>Class 9 (Bangla Medium)</option>
                                <option>O Level</option>
                            </select>
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">Days Per Week</label>
                            <select className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-emerald-500 outline-none">
                                <option>3 Days</option>
                                <option>4 Days</option>
                                <option>5 Days</option>
                            </select>
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">Salary Offer</label>
                            <input type="text" className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-emerald-500 outline-none" placeholder="e.g. 5000 BDT" />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">Location</label>
                            <input type="text" className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-emerald-500 outline-none" placeholder="e.g. Dhanmondi, Dhaka" />
                        </div>
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Detailed Description</label>
                        <textarea rows="4" className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-emerald-500 outline-none" placeholder="Requirements, preferred university, gender preference etc."></textarea>
                    </div>
                    <button type="button" className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-3 rounded-lg shadow-lg transition-all">Post Tuition</button>
                </form>
            </div>
        </div>
    );
};

export default PostNewTuition;