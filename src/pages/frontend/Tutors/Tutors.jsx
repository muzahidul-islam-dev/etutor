import { motion } from "motion/react"
import { Link } from "react-router";
const TutorsPage = () => {
    const tutors = [
        {
            id: 1,
            name: "Sadia Afrin",
            university: "Dhaka University",
            department: "Mathematics",
            location: "Azimpur, Dhaka",
            rating: 4.9,
            reviews: 12,
            subjects: ["General Math", "Higher Math"],
            image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Sadia&gender=female"
        },
        {
            id: 2,
            name: "Tanvir Hasan",
            university: "BUET",
            department: "CSE",
            location: "Farmgate, Dhaka",
            rating: 5.0,
            reviews: 28,
            subjects: ["Physics", "Chemistry", "ICT"],
            image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Tanvir&gender=male"
        },
        {
            id: 3,
            name: "Nusrat Jahan",
            university: "North South University",
            department: "English",
            location: "Bashundhara R/A",
            rating: 4.8,
            reviews: 15,
            subjects: ["English Literature", "Spoken English"],
            image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Nusrat&gender=female"
        },
        {
            id: 4,
            name: "Rakib Uddin",
            university: "Jahangirnagar University",
            department: "Physics",
            location: "Mirpur, Dhaka",
            rating: 4.7,
            reviews: 9,
            subjects: ["Physics", "General Science"],
            image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Rakib&gender=male"
        },
        {
            id: 5,
            name: "Ayesha Siddiqua",
            university: "DMC (Dhaka Medical)",
            department: "MBBS",
            location: "Dhanmondi, Dhaka",
            rating: 5.0,
            reviews: 42,
            subjects: ["Biology", "Chemistry"],
            image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Ayesha&gender=female"
        },
        {
            id: 6,
            name: "Mahmudul Haque",
            university: "IBA, DU",
            department: "BBA",
            location: "Shahbag, Dhaka",
            rating: 4.9,
            reviews: 31,
            subjects: ["Accounting", "Business Studies", "English"],
            image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Mahmudul&gender=male"
        }
    ];

    return (
        <div className="min-h-screen bg-gray-50 pt-24 pb-12">
            <div className="container mx-auto px-4 md:px-6">
                
                {/* Page Header */}
                <div className="mb-8 text-center md:text-left">
                    <h1 className="text-3xl font-bold text-gray-800">Find the Best Tutors</h1>
                    <p className="text-gray-500 mt-2">Connect with verified experts from top universities for your learning needs.</p>
                </div>

                <div className="flex flex-col lg:flex-row gap-8">
                    
                    {/* --- Sidebar Filters --- */}
                    <div className="w-full lg:w-1/4">
                        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 sticky top-28">
                            <div className="flex justify-between items-center mb-4">
                                <h3 className="font-bold text-lg text-gray-800">Filter Tutors</h3>
                                <button className="text-sm text-emerald-600 font-medium hover:underline">Reset</button>
                            </div>

                            {/* Search */}
                            <div className="mb-6">
                                <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">Search Name/Subject</label>
                                <div className="relative">
                                    <input type="text" placeholder="e.g. Math or Tanvir..." className="w-full pl-9 pr-4 py-2 border border-gray-200 rounded-lg text-sm focus:ring-2 focus:ring-emerald-500 outline-none" />
                                    <svg className="w-4 h-4 text-gray-400 absolute left-3 top-2.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                                </div>
                            </div>

                            {/* Location Filter */}
                            <div className="mb-6">
                                <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">Location</label>
                                <select className="w-full px-3 py-2 border border-gray-200 rounded-lg text-sm focus:ring-2 focus:ring-emerald-500 outline-none text-gray-600">
                                    <option>All Locations</option>
                                    <option>Dhanmondi</option>
                                    <option>Mirpur</option>
                                    <option>Uttara</option>
                                    <option>Bashundhara</option>
                                    <option>Farmgate</option>
                                </select>
                            </div>

                            {/* University Filter */}
                            <div className="mb-6">
                                <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">University</label>
                                <div className="space-y-2">
                                    {['BUET', 'Dhaka University', 'DMC', 'North South', 'BRAC'].map((uni) => (
                                        <label key={uni} className="flex items-center cursor-pointer">
                                            <input type="checkbox" className="rounded text-emerald-600 focus:ring-emerald-500 border-gray-300 h-4 w-4" />
                                            <span className="ml-2 text-sm text-gray-600">{uni}</span>
                                        </label>
                                    ))}
                                </div>
                            </div>

                            {/* Gender Filter */}
                            <div className="mb-6">
                                <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">Gender</label>
                                <div className="flex gap-4">
                                    <label className="flex items-center cursor-pointer">
                                        <input type="radio" name="gender" className="text-emerald-600 focus:ring-emerald-500 border-gray-300" />
                                        <span className="ml-2 text-sm text-gray-600">Any</span>
                                    </label>
                                    <label className="flex items-center cursor-pointer">
                                        <input type="radio" name="gender" className="text-emerald-600 focus:ring-emerald-500 border-gray-300" />
                                        <span className="ml-2 text-sm text-gray-600">Male</span>
                                    </label>
                                    <label className="flex items-center cursor-pointer">
                                        <input type="radio" name="gender" className="text-emerald-600 focus:ring-emerald-500 border-gray-300" />
                                        <span className="ml-2 text-sm text-gray-600">Female</span>
                                    </label>
                                </div>
                            </div>

                            {/* Apply Button */}
                            <button className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-2 rounded-lg transition-colors shadow-sm">
                                Apply Filters
                            </button>
                        </div>
                    </div>

                    {/* --- Tutor Listings --- */}
                    <div className="w-full lg:w-3/4">
                        
                        {/* Sort Bar */}
                        <div className="flex justify-between items-center mb-6 bg-white p-4 rounded-xl border border-gray-100 shadow-sm">
                            <p className="text-sm text-gray-500"><span className="font-bold text-gray-800">{tutors.length}</span> Tutors Found</p>
                            <div className="flex items-center gap-2">
                                <span className="text-sm text-gray-500 hidden sm:inline">Sort by:</span>
                                <select className="border-none text-sm font-semibold text-gray-700 focus:ring-0 cursor-pointer bg-transparent">
                                    <option>Best Match</option>
                                    <option>Rating: High to Low</option>
                                    <option>Experience: High to Low</option>
                                </select>
                            </div>
                        </div>

                        {/* Tutors Grid */}
                        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                            {tutors.map((tutor) => (
                                <motion.div 
                                    key={tutor.id}
                                    initial={{ opacity: 0, y: 10 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.3 }}
                                    className="bg-white rounded-xl p-6 border border-gray-100 hover:border-emerald-200 hover:shadow-xl transition-all duration-300 group flex flex-col items-center text-center relative overflow-hidden"
                                >
                                    {/* Top Accent Line */}
                                    <div className="absolute top-0 left-0 w-full h-1 bg-linear-to-r from-emerald-400 to-teal-500 opacity-0 group-hover:opacity-100 transition-opacity"></div>

                                    {/* Profile Image */}
                                    <div className="relative w-24 h-24 mb-4">
                                        <div className="w-full h-full rounded-full p-1 border-2 border-emerald-500 overflow-hidden">
                                            <img 
                                                src={tutor.image} 
                                                alt={tutor.name} 
                                                className="w-full h-full object-cover rounded-full group-hover:scale-110 transition-transform duration-500"
                                            />
                                        </div>
                                        <div className="absolute bottom-0 right-0 bg-emerald-500 text-white p-1 rounded-full border-2 border-white shadow-sm">
                                            <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" /></svg>
                                        </div>
                                    </div>

                                    {/* Basic Info */}
                                    <h2 className="text-lg font-bold text-gray-800 mb-1 group-hover:text-emerald-600 transition-colors">
                                        {tutor.name}
                                    </h2>
                                    <p className="text-sm font-medium text-emerald-600 mb-0.5">{tutor.university}</p>
                                    <p className="text-xs text-gray-500 mb-3">{tutor.department}</p>

                                    {/* Rating & Location */}
                                    <div className="flex items-center justify-center gap-4 w-full mb-4 pb-4 border-b border-gray-50">
                                        <div className="flex items-center gap-1 text-orange-400 font-bold text-sm">
                                            <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
                                            <span>{tutor.rating}</span>
                                            <span className="text-gray-400 font-normal">({tutor.reviews})</span>
                                        </div>
                                        <div className="flex items-center gap-1 text-gray-500 text-xs">
                                            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                                            {tutor.location}
                                        </div>
                                    </div>

                                    {/* Subjects */}
                                    <div className="flex flex-wrap justify-center gap-2 mb-6">
                                        {tutor.subjects.slice(0, 3).map((sub, i) => (
                                            <span key={i} className="text-xs bg-gray-50 text-gray-600 px-2 py-1 rounded border border-gray-100">
                                                {sub}
                                            </span>
                                        ))}
                                    </div>

                                    {/* Action Button */}
                                    <Link to={'/tutors/1'} className="w-full bg-white border border-gray-200 text-gray-700 font-bold py-2 rounded-lg hover:bg-emerald-600 hover:text-white hover:border-emerald-600 transition-all shadow-sm hover:shadow-md mt-auto">
                                        View Profile
                                    </Link>
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

export default TutorsPage;