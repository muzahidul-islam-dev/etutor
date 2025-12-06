const TutorProfilePage = () => {
    // Mock Data for a single tutor
    const tutor = {
        id: "T-1024",
        name: "Sadia Afrin",
        tagline: "Making Math Fun & Easy | 3 Years Experience",
        image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Sadia&gender=female",
        university: "Dhaka University",
        department: "B.Sc in Mathematics",
        verified: true,
        stats: {
            rating: 4.9,
            reviews: 12,
            students: 25,
            experience: "3 Years"
        },
        about: "Hello! I am a passionate mathematics tutor currently studying at Dhaka University. I specialize in helping students overcome their fear of numbers. My teaching style is interactive and focuses on building strong concepts rather than just memorizing formulas. I have successfully helped students from Class 8 to HSC improve their grades significantly.",
        education: [
            { degree: "B.Sc in Mathematics", institute: "Dhaka University", year: "2021 - Present" },
            { degree: "HSC (Science)", institute: "Holy Cross College", year: "2020 (GPA 5.00)" },
            { degree: "SSC (Science)", institute: "Viqarunnisa Noon School", year: "2018 (GPA 5.00)" }
        ],
        tuitionInfo: {
            expectedSalary: "6,000 - 8,000 BDT/Month",
            preferredLocations: ["Azimpur", "Lalbagh", "Dhanmondi", "New Market"],
            preferredClasses: ["Class 8", "Class 9", "SSC", "HSC"],
            preferredSubjects: ["General Math", "Higher Math", "Physics"],
            days: "3 Days/Week"
        },
        reviews: [
            { id: 1, user: "Rahim U.", rating: 5, comment: "Sadia apu is an amazing teacher. She explains everything very clearly.", date: "2 days ago" },
            { id: 2, user: "Parent of Tisha", rating: 5, comment: "Very punctual and dedicated. My daughter's math scores improved a lot.", date: "1 month ago" }
        ]
    };

    return (
        <div className="min-h-screen bg-gray-50 pt-28 pb-12">
            <div className="container mx-auto px-4 md:px-6">
                
                
                <div className="text-sm text-gray-500 mb-6 flex items-center gap-2">
                    <a href="#" className="hover:text-emerald-600">Home</a>
                    <svg className="w-3 h-3 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" /></svg>
                    <a href="#" className="hover:text-emerald-600">Tutors</a>
                    <svg className="w-3 h-3 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" /></svg>
                    <span className="text-gray-800 font-medium truncate max-w-[200px]">{tutor.name}</span>
                </div>

                <div className="flex flex-col lg:flex-row gap-8">
                    
                    
                    <div className="w-full lg:w-2/3">
                        
                        
                        <div className="bg-white rounded-xl overflow-hidden border border-gray-100 shadow-sm mb-6 relative">
                            
                            <div className="h-32 bg-linear-to-r from-emerald-500 to-teal-600"></div>
                            
                            <div className="px-8 pb-8">
                                <div className="flex flex-col md:flex-row items-center md:items-end -mt-12 mb-6 gap-6 text-center md:text-left">
                                    
                                    <div className="relative">
                                        <div className="w-32 h-32 rounded-full border-4 border-white shadow-md overflow-hidden bg-white">
                                            <img src={tutor.image} alt={tutor.name} className="w-full h-full object-cover" />
                                        </div>
                                        {tutor.verified && (
                                            <div className="absolute bottom-2 right-2 bg-blue-500 text-white p-1 rounded-full border-2 border-white shadow-sm" title="Verified Tutor">
                                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" /></svg>
                                            </div>
                                        )}
                                    </div>
                                    
                                    
                                    <div className="grow">
                                        <h1 className="text-3xl font-bold text-gray-800 mb-1">{tutor.name}</h1>
                                        <p className="text-emerald-600 font-medium mb-1">{tutor.department}</p>
                                        <p className="text-gray-500 text-sm">{tutor.university}</p>
                                    </div>
                                </div>

                                
                                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 py-6 border-t border-gray-100">
                                    <div className="text-center md:text-left">
                                        <p className="text-xs text-gray-400 uppercase font-semibold">Rating</p>
                                        <div className="flex items-center justify-center md:justify-start gap-1 font-bold text-gray-800 text-lg">
                                            <svg className="w-5 h-5 text-orange-400 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
                                            {tutor.stats.rating} <span className="text-xs text-gray-400 font-normal">({tutor.stats.reviews})</span>
                                        </div>
                                    </div>
                                    <div className="text-center md:text-left">
                                        <p className="text-xs text-gray-400 uppercase font-semibold">Total Students</p>
                                        <p className="font-bold text-gray-800 text-lg">{tutor.stats.students}+</p>
                                    </div>
                                    <div className="text-center md:text-left">
                                        <p className="text-xs text-gray-400 uppercase font-semibold">Experience</p>
                                        <p className="font-bold text-gray-800 text-lg">{tutor.stats.experience}</p>
                                    </div>
                                    <div className="text-center md:text-left">
                                        <p className="text-xs text-gray-400 uppercase font-semibold">Joined</p>
                                        <p className="font-bold text-gray-800 text-lg">Nov 2022</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        
                        <div className="bg-white rounded-xl p-6 md:p-8 border border-gray-100 shadow-sm mb-6">
                            <h3 className="text-lg font-bold text-gray-800 mb-4 border-l-4 border-emerald-500 pl-3">
                                About Me
                            </h3>
                            <p className="text-gray-600 leading-relaxed">
                                {tutor.about}
                            </p>
                        </div>

                        
                        <div className="bg-white rounded-xl p-6 md:p-8 border border-gray-100 shadow-sm mb-6">
                            <h3 className="text-lg font-bold text-gray-800 mb-6 border-l-4 border-emerald-500 pl-3">
                                Education
                            </h3>
                            <div className="space-y-6">
                                {tutor.education.map((edu, idx) => (
                                    <div key={idx} className="flex gap-4">
                                        <div className="shrink-0 mt-1">
                                            <div className="w-2 h-2 bg-emerald-500 rounded-full ring-4 ring-emerald-50"></div>
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-gray-800">{edu.degree}</h4>
                                            <p className="text-gray-600">{edu.institute}</p>
                                            <p className="text-sm text-gray-400 mt-1">{edu.year}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        
                        <div className="bg-white rounded-xl p-6 md:p-8 border border-gray-100 shadow-sm mb-6">
                            <h3 className="text-lg font-bold text-gray-800 mb-6 border-l-4 border-emerald-500 pl-3">
                                Tuition Information
                            </h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-y-6 gap-x-8">
                                <div>
                                    <p className="text-xs text-gray-400 uppercase font-semibold mb-1">Expected Salary</p>
                                    <p className="font-bold text-emerald-600 text-lg">{tutor.tuitionInfo.expectedSalary}</p>
                                </div>
                                <div>
                                    <p className="text-xs text-gray-400 uppercase font-semibold mb-1">Availability</p>
                                    <p className="font-medium text-gray-700">{tutor.tuitionInfo.days}</p>
                                </div>
                                <div className="md:col-span-2">
                                    <p className="text-xs text-gray-400 uppercase font-semibold mb-2">Preferred Subjects</p>
                                    <div className="flex flex-wrap gap-2">
                                        {tutor.tuitionInfo.preferredSubjects.map(sub => (
                                            <span key={sub} className="bg-gray-100 text-gray-700 px-3 py-1.5 rounded-lg text-sm font-medium">
                                                {sub}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                                <div className="md:col-span-2">
                                    <p className="text-xs text-gray-400 uppercase font-semibold mb-2">Preferred Locations</p>
                                    <div className="flex flex-wrap gap-2">
                                        {tutor.tuitionInfo.preferredLocations.map(loc => (
                                            <span key={loc} className="border border-gray-200 text-gray-600 px-3 py-1.5 rounded-lg text-sm">
                                                {loc}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>

                        
                        <div className="bg-white rounded-xl p-6 md:p-8 border border-gray-100 shadow-sm">
                            <div className="flex items-center justify-between mb-6">
                                <h3 className="text-lg font-bold text-gray-800 border-l-4 border-emerald-500 pl-3">Reviews</h3>
                                <div className="text-sm text-emerald-600 font-bold bg-emerald-50 px-3 py-1 rounded-full">
                                    {tutor.stats.rating}/5.0
                                </div>
                            </div>
                            
                            <div className="space-y-6">
                                {tutor.reviews.map(review => (
                                    <div key={review.id} className="border-b border-gray-50 last:border-0 pb-6 last:pb-0">
                                        <div className="flex justify-between items-start mb-2">
                                            <h4 className="font-bold text-gray-800">{review.user}</h4>
                                            <span className="text-xs text-gray-400">{review.date}</span>
                                        </div>
                                        <div className="flex text-orange-400 mb-2">
                                            {[...Array(5)].map((_, i) => (
                                                <svg key={i} className={`w-3 h-3 ${i < review.rating ? 'fill-current' : 'text-gray-200 fill-current'}`} viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
                                            ))}
                                        </div>
                                        <p className="text-gray-600 text-sm italic">"{review.comment}"</p>
                                    </div>
                                ))}
                            </div>
                        </div>

                    </div>

                    
                    <div className="w-full lg:w-1/3">
                        <div className="bg-white rounded-xl p-6 border border-gray-100 shadow-lg sticky top-28">
                            <div className="text-center mb-6">
                                <p className="text-sm text-gray-500 mb-2">Interested in hiring?</p>
                                <button className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-3.5 rounded-xl shadow-md shadow-emerald-200 hover:shadow-emerald-300 transition-all transform hover:-translate-y-0.5 mb-3 flex items-center justify-center gap-2">
                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
                                    Request to Hire
                                </button>
                                <button className="w-full bg-white border border-gray-200 hover:border-emerald-500 text-gray-600 hover:text-emerald-600 font-semibold py-3 rounded-xl transition-all flex items-center justify-center gap-2">
                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" /></svg>
                                    Send Message
                                </button>
                            </div>

                            <div className="space-y-4 pt-6 border-t border-gray-100">
                                <div className="flex items-center gap-3 text-sm">
                                    <div className="w-8 h-8 rounded-full bg-blue-50 flex items-center justify-center text-blue-500">
                                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                                    </div>
                                    <div>
                                        <p className="font-bold text-gray-800">Phone Verified</p>
                                        <p className="text-gray-500 text-xs">Contact info confirmed</p>
                                    </div>
                                </div>
                                <div className="flex items-center gap-3 text-sm">
                                    <div className="w-8 h-8 rounded-full bg-purple-50 flex items-center justify-center text-purple-500">
                                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 14l9-5-9-5-9 5 9 5z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" /></svg>
                                    </div>
                                    <div>
                                        <p className="font-bold text-gray-800">University ID</p>
                                        <p className="text-gray-500 text-xs">Credentials verified</p>
                                    </div>
                                </div>
                            </div>
                            
                            <div className="mt-6 p-3 bg-yellow-50 rounded-lg border border-yellow-100">
                                <p className="text-xs text-yellow-800 text-center font-medium">
                                    Avg. Response Time: <span className="font-bold">1 Hour</span>
                                </p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default TutorProfilePage;