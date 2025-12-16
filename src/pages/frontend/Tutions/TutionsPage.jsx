import { AnimatePresence, motion } from "motion/react"
import { useEffect, useState } from "react";
import { Link } from "react-router";
import { Loading } from "../../../components/utils/Loading";
import useSecureAxios from "../../../hook/useSecureAxios";
const TuitionsPage = () => {

    const [sortBy, setSortBy] = useState('newest');
    const [tuitionJobs, setTuitionJobs] = useState([]);
    const [locations, setLocations] = useState([]);
    const [classes, setClasses] = useState([]);
    const [loading, setLoading] = useState(true)
    const { secureAxios } = useSecureAxios();

    const [filters, setFilters] = useState({
        search: '',
        location: 'All Divisions',
        classInfo: 'All Classes'
    });

    useEffect(() => {
        secureAxios.get(`/api/tution/list?location=${filters.location}&classInfo=${filters?.classInfo}&search=${filters?.search}`).then(response => {
            if (response?.data?.success) {
                console.log(response?.data?.data)
                setTuitionJobs(response?.data?.data?.tuitions?.map((item) => ({
                    id: item._id,
                    title: item?.title,
                    location: item?.location,
                    class: item?.className,
                    subjects: item?.subject?.split(','),
                    salary: item?.salary,
                    days: item?.per_week,
                    posted: item?.createdAt
                })))
                setLocations(response?.data?.data?.allTution?.map((item) => ({
                    location: item?.location
                })))
                setClasses(response?.data?.data?.allTution?.map((item) => ({
                    class: item?.className
                })))
            }
            setLoading(false)
        })

    }, [filters]);





    const parseSalary = (salaryStr) => {
        if (!salaryStr) return 0;
        const match = salaryStr.toString().replace(/,/g, '').match(/\d+/);
        return match ? parseInt(match[0], 10) : 0;
    };


    const handleSearchChange = (e) => {
        setFilters(prev => ({ ...prev, search: e.target.value }));
    };

    const handleDivisionChange = (e) => {
        setFilters(prev => ({ ...prev, location: e.target.value }));
    };

    const handleClassChange = (e) => {
        setFilters(prev => ({ ...prev, classInfo: e.target.value }));
    };

    const resetFilters = () => {
        setFilters({
            search: '',
            location: 'All Divisions',
            classInfo: 'All Classes'
        });
        setSortBy('newest');
    };


    // const filteredJobs = tuitionJobs.filter(job => {

    //     if (filters.search) {
    //         const query = filters.search.toLowerCase();
    //         const matchesTitle = job.title.toLowerCase().includes(query);
    //         const matchesSubject = job.subjects.some(s => s.toLowerCase().includes(query));
    //         const matchesLocation = job.location.toLowerCase().includes(query);
    //         if (!matchesTitle && !matchesSubject && !matchesLocation) return false;
    //     }


    //     if (filters.location !== 'All Divisions') {
    //         if (!job.location.includes(filters.location)) return false;
    //     }


    //     if (filters.medium.length > 0) {
    //         if (!filters.medium.includes(job.medium)) return false;
    //     }


    //     if (filters.classInfo !== 'All Classes') {
    //         const c = job.class;

    //         if (!c.includes(filters.classInfo)) return false;
    //     }

    //     return true;
    // });


    const sortedJobs = tuitionJobs.sort((a, b) => {
        if (sortBy === 'salary-high-low') {
            return parseSalary(b.salary) - parseSalary(a.salary);
        } else if (sortBy === 'salary-low-high') {
            return parseSalary(a.salary) - parseSalary(b.salary);
        } else {
            return b.id - a.id;
        }
    });

    if (loading) return <Loading />

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
                                <button
                                    onClick={resetFilters}
                                    className="text-sm cursor-pointer text-emerald-600 font-medium hover:underline"
                                >
                                    Reset
                                </button>
                            </div>

                            {/* Search */}
                            <div className="mb-6">
                                <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">Search</label>
                                <div className="relative">
                                    <input
                                        type="text"
                                        value={filters.search}
                                        onChange={handleSearchChange}
                                        placeholder="Subject or Area..."
                                        className="w-full pl-9 pr-4 py-2 border border-gray-200 rounded-lg text-sm focus:ring-2 focus:ring-emerald-500 outline-none"
                                    />
                                    <svg className="w-4 h-4 text-gray-400 absolute left-3 top-2.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                                </div>
                            </div>

                            {/* Location Filter */}
                            <div className="mb-6">
                                <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">Location</label>
                                <select
                                    value={filters.location}
                                    onChange={handleDivisionChange}
                                    className="w-full px-3 py-2 border border-gray-200 rounded-lg text-sm focus:ring-2 focus:ring-emerald-500 outline-none text-gray-600"
                                >
                                    <option value="All Divisions">All Divisions</option>
                                    {
                                        locations?.map((item) => (
                                            <>
                                                <option value={item?.location}>{item.location}</option>
                                            </>
                                        ))
                                    }

                                </select>
                            </div>


                            {/* Class Filter */}
                            <div className="mb-6">
                                <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">Class / Grade</label>
                                <select
                                    value={filters.classInfo}
                                    onChange={handleClassChange}
                                    className="w-full px-3 py-2 border border-gray-200 rounded-lg text-sm focus:ring-2 focus:ring-emerald-500 outline-none text-gray-600"
                                >
                                    <option value="All Classes">All Classes</option>
                                    {
                                        classes?.map((item) => <option value={item?.class}>{item?.class}</option>)
                                    }
                                    
                                </select>
                            </div>

                            {/* Info Tag */}
                            <div className="bg-emerald-50 text-emerald-700 text-xs p-3 rounded-lg text-center">
                                Showing {sortedJobs.length} results based on your filters.
                            </div>
                        </div>
                    </div>

                    {/* --- Job Listings --- */}
                    <div className="w-full lg:w-3/4">

                        {/* Sort Bar */}
                        <div className="flex justify-between items-center mb-6 bg-white p-4 rounded-xl border border-gray-100 shadow-sm">
                            <p className="text-sm text-gray-500"><span className="font-bold text-gray-800">{sortedJobs.length}</span> Jobs Found</p>
                            <div className="flex items-center gap-2">
                                <span className="text-sm text-gray-500 hidden sm:inline">Sort by:</span>
                                <select
                                    value={sortBy}
                                    onChange={(e) => setSortBy(e.target.value)}
                                    className="border-none text-sm font-semibold text-gray-700 focus:ring-0 cursor-pointer bg-transparent outline-none"
                                >
                                    <option value="newest">Newest First</option>
                                    <option value="salary-high-low">Salary: High to Low</option>
                                    <option value="salary-low-high">Salary: Low to High</option>
                                </select>
                            </div>
                        </div>

                        {/* Jobs Grid */}
                        <div className="space-y-4">
                            <AnimatePresence>
                                {sortedJobs.length > 0 ? (
                                    sortedJobs.map((job) => (
                                        <motion.div
                                            key={job.id}
                                            layout
                                            initial={{ opacity: 0, y: 10 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            exit={{ opacity: 0, scale: 0.95 }}
                                            transition={{ duration: 0.3 }}
                                            className="bg-white rounded-xl p-6 border border-gray-100 hover:border-emerald-200 hover:shadow-lg transition-all duration-300 group"
                                        >
                                            <div className="flex flex-col md:flex-row justify-between gap-4">
                                                {/* Job Content */}
                                                <div className="grow">
                                                    <div className="flex items-center gap-2 mb-2">
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
                                                    <button className="bg-emerald-600 hover:bg-emerald-700 text-white text-sm font-bold py-2 px-6 rounded-lg transition-all shadow-md shadow-emerald-100 hover:shadow-emerald-200 w-full md:w-auto">
                                                        View Details
                                                    </button>
                                                </div>
                                            </div>
                                        </motion.div>
                                    ))
                                ) : (
                                    <div className="text-center py-20 bg-white rounded-xl border border-dashed border-gray-200">
                                        <div className="w-16 h-16 bg-gray-50 rounded-full flex items-center justify-center mx-auto mb-4 text-gray-400">
                                            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>
                                        </div>
                                        <h3 className="text-lg font-bold text-gray-800">No Tuitions Found</h3>
                                        <p className="text-gray-500 text-sm mt-1">Try adjusting your filters to find more results.</p>
                                        <button
                                            onClick={resetFilters}
                                            className="mt-4 text-emerald-600 font-bold hover:underline"
                                        >
                                            Clear Filters
                                        </button>
                                    </div>
                                )}
                            </AnimatePresence>
                        </div>

                        {/* Pagination */}
                        <div className="flex justify-center mt-12 gap-2">
                            <button className="w-10 h-10 cursor-pointer flex items-center justify-center rounded-lg border border-gray-200 text-gray-500 hover:bg-gray-50 hover:text-emerald-600 transition-colors">
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" /></svg>
                            </button>
                            <button className="w-10 h-10 cursor-pointer flex items-center justify-center rounded-lg bg-emerald-600 text-white font-bold shadow-md shadow-emerald-200">1</button>
                            <button className="w-10 h-10 cursor-pointer flex items-center justify-center rounded-lg border border-gray-200 text-gray-600 hover:bg-gray-50 hover:text-emerald-600 transition-colors font-medium">2</button>
                            <button className="w-10 h-10 cursor-pointer flex items-center justify-center rounded-lg border border-gray-200 text-gray-600 hover:bg-gray-50 hover:text-emerald-600 transition-colors font-medium">3</button>
                            <span className="w-10 h-10 cursor-pointer flex items-center justify-center text-gray-400">...</span>
                            <button className="w-10 h-10 cursor-pointer flex items-center justify-center rounded-lg border border-gray-200 text-gray-500 hover:bg-gray-50 hover:text-emerald-600 transition-colors">
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