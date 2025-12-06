import { motion } from "motion/react"
import { Link } from "react-router";
const TuitionsPage = () => {
    // Mock Data
    const tuitionJobs = [
        {
            id: 1,
            title: "Need a Tutor for Class 9 Math",
            location: "Dhanmondi, Dhaka",
            medium: "Bangla Medium",
            class: "Class 9",
            subjects: ["General Math", "Higher Math"],
            salary: "5000-6000",
            days: "3 Days/Week",
            gender_pref: "Male",
            posted: "2 hours ago",
            student_gender: "Male"
        },
        {
            id: 2,
            title: "English Version Tutor Needed",
            location: "Mirpur 10, Dhaka",
            medium: "English Version",
            class: "Class 5",
            subjects: ["English", "Science"],
            salary: "4500",
            days: "4 Days/Week",
            gender_pref: "Female",
            posted: "5 hours ago",
            student_gender: "Female"
        },
        {
            id: 3,
            title: "HSC Physics & Chemistry Tutor",
            location: "Uttara Sector 7",
            medium: "Bangla Medium",
            class: "HSC 1st Year",
            subjects: ["Physics", "Chemistry"],
            salary: "8000",
            days: "3 Days/Week",
            gender_pref: "Any",
            posted: "1 day ago",
            student_gender: "Male"
        },
        {
            id: 4,
            title: "O Level Chemistry Teacher Required",
            location: "Gulshan 1, Dhaka",
            medium: "English Medium",
            class: "O Level",
            subjects: ["Chemistry"],
            salary: "10000",
            days: "2 Days/Week",
            gender_pref: "Any",
            posted: "1 day ago",
            student_gender: "Female"
        },
        {
            id: 5,
            title: "Class 2 All Subjects Tutor",
            location: "Mohammadpur, Dhaka",
            medium: "Bangla Medium",
            class: "Class 2",
            subjects: ["All Subjects"],
            salary: "3500",
            days: "5 Days/Week",
            gender_pref: "Female",
            posted: "2 days ago",
            student_gender: "Female"
        }
    ];

    return (
        <div className="min-h-screen bg-gray-50 pt-24 pb-12">
            <div className="container mx-auto px-4 md:px-6">
                
                {/* Page Header */}
                <div className="mb-8">
                    <h1 className="text-3xl font-bold text-gray-800">Available Tuitions</h1>
                    <p className="text-gray-500 mt-2">Browse and apply for the latest tuition jobs near you.</p>
                </div>

                <div className="flex flex-col lg:flex-row gap-8">
                    
                    {/* --- Sidebar Filters --- */}
                    <div className="w-full lg:w-1/4">
                        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 sticky top-28">
                            <div className="flex justify-between items-center mb-4">
                                <h3 className="font-bold text-lg text-gray-800">Filters</h3>
                                <button className="text-sm text-emerald-600 font-medium hover:underline">Reset</button>
                            </div>

                            {/* Search */}
                            <div className="mb-6">
                                <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">Search</label>
                                <div className="relative">
                                    <input type="text" placeholder="Subject or Area..." className="w-full pl-9 pr-4 py-2 border border-gray-200 rounded-lg text-sm focus:ring-2 focus:ring-emerald-500 outline-none" />
                                    <svg className="w-4 h-4 text-gray-400 absolute left-3 top-2.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                                </div>
                            </div>

                            {/* Location Filter */}
                            <div className="mb-6">
                                <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">Division</label>
                                <select className="w-full px-3 py-2 border border-gray-200 rounded-lg text-sm focus:ring-2 focus:ring-emerald-500 outline-none text-gray-600">
                                    <option>All Divisions</option>
                                    <option>Dhaka</option>
                                    <option>Chittagong</option>
                                    <option>Sylhet</option>
                                    <option>Rajshahi</option>
                                </select>
                            </div>

                            {/* Medium Filter */}
                            <div className="mb-6">
                                <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">Medium</label>
                                <div className="space-y-2">
                                    {['Bangla Medium', 'English Version', 'English Medium', 'Madrasa'].map((item) => (
                                        <label key={item} className="flex items-center cursor-pointer">
                                            <input type="checkbox" className="rounded text-emerald-600 focus:ring-emerald-500 border-gray-300 h-4 w-4" />
                                            <span className="ml-2 text-sm text-gray-600">{item}</span>
                                        </label>
                                    ))}
                                </div>
                            </div>

                            {/* Class Filter */}
                            <div className="mb-6">
                                <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">Class / Grade</label>
                                <select className="w-full px-3 py-2 border border-gray-200 rounded-lg text-sm focus:ring-2 focus:ring-emerald-500 outline-none text-gray-600">
                                    <option>All Classes</option>
                                    <option>Class 1-5</option>
                                    <option>Class 6-8</option>
                                    <option>SSC / O Level</option>
                                    <option>HSC / A Level</option>
                                </select>
                            </div>

                            {/* Apply Button */}
                            <button className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-2 rounded-lg transition-colors shadow-sm">
                                Apply Filters
                            </button>
                        </div>
                    </div>

                    {/* --- Job Listings --- */}
                    <div className="w-full lg:w-3/4">
                        
                        {/* Sort Bar */}
                        <div className="flex justify-between items-center mb-6 bg-white p-4 rounded-xl border border-gray-100 shadow-sm">
                            <p className="text-sm text-gray-500"><span className="font-bold text-gray-800">{tuitionJobs.length}</span> Jobs Found</p>
                            <div className="flex items-center gap-2">
                                <span className="text-sm text-gray-500 hidden sm:inline">Sort by:</span>
                                <select className="border-none text-sm font-semibold text-gray-700 focus:ring-0 cursor-pointer bg-transparent">
                                    <option>Newest First</option>
                                    <option>Salary: High to Low</option>
                                    <option>Salary: Low to High</option>
                                </select>
                            </div>
                        </div>

                        {/* Jobs Grid */}
                        <div className="space-y-4">
                            {tuitionJobs.map((job) => (
                                <motion.div 
                                    key={job.id}
                                    initial={{ opacity: 0, y: 10 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.3 }}
                                    className="bg-white rounded-xl p-6 border border-gray-100 hover:border-emerald-200 hover:shadow-lg transition-all duration-300 group"
                                >
                                    <div className="flex flex-col md:flex-row justify-between gap-4">
                                        {/* Job Content */}
                                        <div className="grow">
                                            <div className="flex items-center gap-2 mb-2">
                                                <span className="bg-emerald-50 text-emerald-700 text-xs font-bold px-2 py-1 rounded border border-emerald-100">
                                                    {job.medium}
                                                </span>
                                                <span className="bg-gray-100 text-gray-600 text-xs font-semibold px-2 py-1 rounded">
                                                    {job.class}
                                                </span>
                                            </div>
                                            
                                            <h2 className="text-xl font-bold text-gray-800 mb-2 group-hover:text-emerald-600 transition-colors">
                                                {job.title}
                                            </h2>
                                            
                                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-2 gap-x-6 text-sm text-gray-600 mb-4">
                                                <div className="flex items-center gap-2">
                                                    <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                                                    {job.location}
                                                </div>
                                                <div className="flex items-center gap-2">
                                                    <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" /></svg>
                                                    <span className="font-bold text-emerald-600">{job.salary} BDT</span>
                                                </div>
                                                <div className="flex items-center gap-2">
                                                    <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                                                    {job.days}
                                                </div>
                                                <div className="flex items-center gap-2">
                                                    <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" /></svg>
                                                    Tutor Pref: {job.gender_pref}
                                                </div>
                                            </div>

                                            <div className="flex flex-wrap gap-2">
                                                {job.subjects.map(sub => (
                                                    <span key={sub} className="text-xs bg-gray-50 text-gray-500 px-2 py-1 rounded border border-gray-100">
                                                        {sub}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>

                                        {/* Action Section */}
                                        <div className="flex flex-row md:flex-col justify-between items-end md:items-center min-w-[120px] gap-4 md:border-l md:border-gray-100 md:pl-6">
                                            <span className="text-xs text-gray-400 whitespace-nowrap bg-gray-50 px-2 py-1 rounded">
                                                {job.posted}
                                            </span>
                                            <Link to={`/tutions/1`} className="bg-emerald-600 cursor-pointer hover:bg-emerald-700 text-white text-sm font-bold py-2 px-6 rounded-lg transition-all shadow-md shadow-emerald-100 hover:shadow-emerald-200 w-full md:w-auto">
                                                View Details
                                            </Link>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>

                        {/* Pagination */}
                        <div className="flex justify-center mt-12 gap-2">
                            <button className="w-10 h-10 flex items-center justify-center rounded-lg border border-gray-200 text-gray-500 hover:bg-gray-50 hover:text-emerald-600 transition-colors">
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" /></svg>
                            </button>
                            <button className="w-10 h-10 flex items-center justify-center rounded-lg bg-emerald-600 text-white font-bold shadow-md shadow-emerald-200">1</button>
                            <button className="w-10 h-10 flex items-center justify-center rounded-lg border border-gray-200 text-gray-600 hover:bg-gray-50 hover:text-emerald-600 transition-colors font-medium">2</button>
                            <button className="w-10 h-10 flex items-center justify-center rounded-lg border border-gray-200 text-gray-600 hover:bg-gray-50 hover:text-emerald-600 transition-colors font-medium">3</button>
                            <span className="w-10 h-10 flex items-center justify-center text-gray-400">...</span>
                            <button className="w-10 h-10 flex items-center justify-center rounded-lg border border-gray-200 text-gray-500 hover:bg-gray-50 hover:text-emerald-600 transition-colors">
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" /></svg>
                            </button>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default TuitionsPage;