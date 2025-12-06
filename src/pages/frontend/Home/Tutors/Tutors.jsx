import { motion } from "motion/react"
export function Tutors() {
    const latestTutors = [
        {
            id: 1,
            name: "Sadia Afrin",
            university: "Dhaka University",
            department: "Mathematics",
            location: "Azimpur, Dhaka",
            rating: 4.9,
            reviews: 12,
            image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Sadia&gender=female"
        },
        {
            id: 2,
            name: "Tanvir Hasan",
            university: "BUET",
            department: "CSE",
            location: "Farmgate, Dhaka",
            rating: 5.0,
            reviews: 8,
            image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Tanvir&gender=male"
        },
        {
            id: 3,
            name: "Nusrat Jahan",
            university: "North South University",
            department: "English Literature",
            location: "Bashundhara R/A",
            rating: 4.8,
            reviews: 24,
            image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Nusrat&gender=female"
        },
        {
            id: 4,
            name: "Rakib Uddin",
            university: "Jahangirnagar University",
            department: "Physics",
            location: "Savar / Mirpur",
            rating: 4.7,
            reviews: 15,
            image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Rakib&gender=male"
        }
    ];
    return (
        <div>
            <div className="py-20 bg-white">
                <div className="container mx-auto px-4 md:px-6">
                    
                    <div className="text-center mb-16">
                        <div className="inline-block px-3 py-1 mb-3 text-xs font-semibold tracking-wider text-orange-600 uppercase bg-orange-100/50 rounded-full">
                            Top Rated Mentors
                        </div>
                        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                            Latest Tutors
                        </h2>
                        <p className="text-slate-600 max-w-2xl mx-auto">
                            Connect with verified tutors from top universities. 
                            Get expert guidance for better results.
                        </p>
                    </div>

                    
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {latestTutors.map((tutor) => (
                            <motion.div 
                                key={tutor.id}
                                whileHover={{ y: -5 }}
                                transition={{ type: "spring", stiffness: 300 }}
                                className="bg-white rounded-2xl p-6 border border-gray-100 shadow-lg shadow-gray-100/50 hover:shadow-xl hover:shadow-emerald-100/50 transition-all duration-300 group text-center"
                            >
                                
                                <div className="relative w-24 h-24 mx-auto mb-4">
                                    <div className="w-full h-full rounded-full p-1 border-2 border-emerald-500 overflow-hidden">
                                        <img 
                                            src={tutor.image} 
                                            alt={tutor.name} 
                                            className="w-full h-full object-cover rounded-full"
                                        />
                                    </div>
                                    <div className="absolute bottom-0 right-0 bg-emerald-500 text-white p-1 rounded-full border-2 border-white">
                                        <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" /></svg>
                                    </div>
                                </div>

                                
                                <h3 className="text-xl font-bold text-gray-800 mb-1">{tutor.name}</h3>
                                <p className="text-sm font-medium text-emerald-600 mb-1">{tutor.university}</p>
                                <p className="text-xs text-gray-500 mb-4">{tutor.department}</p>

                                
                                <div className="flex items-center justify-center gap-4 mb-6 text-sm">
                                    <div className="flex items-center gap-1 text-orange-400 font-bold">
                                        <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
                                        <span>{tutor.rating}</span>
                                        <span className="text-gray-400 font-normal">({tutor.reviews})</span>
                                    </div>
                                </div>

                                
                                <div className="inline-flex items-center gap-1 bg-gray-50 px-3 py-1.5 rounded-full text-xs text-gray-500 mb-6">
                                    <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                                    {tutor.location}
                                </div>

                                
                                <button className="w-full py-2.5 rounded-xl bg-gray-900 text-white text-sm font-bold hover:bg-emerald-600 transition-colors shadow-lg shadow-gray-200">
                                    View Profile
                                </button>
                            </motion.div>
                        ))}
                    </div>

                    
                    <div className="text-center mt-12">
                        <button className="px-8 py-3 bg-white text-slate-700 font-bold rounded-xl border border-gray-200 hover:border-emerald-500 hover:text-emerald-600 hover:shadow-lg transition-all duration-300 flex items-center gap-2 mx-auto">
                            Find More Tutors
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
