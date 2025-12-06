import { motion } from "motion/react"
const TuitionDetailsPage = () => {
    const job = {
        id: "JOB-8921",
        title: "Need a Tutor for Class 9 Math & Physics",
        posted_date: "12 Oct, 2023",
        posted_time: "2 hours ago",
        status: "Active",
        location: "Dhanmondi Road 27, Dhaka",
        salary: "6,000 BDT",
        negotiable: true,
        details: {
            medium: "Bangla Medium",
            class: "Class 9",
            student_gender: "Male",
            tutor_gender_pref: "Male",
            days_per_week: "3 Days/Week",
            subjects: ["General Math", "Higher Math", "Physics"],
            tutoring_time: "7:00 PM - 9:00 PM",
            institute: "Dhanmondi Govt. Boys High School"
        },
        description: "Looking for an experienced tutor from a public university (BUET/DU/DMC preferred). The student is weak in Higher Math geometry and needs extra care. Tutors living near Dhanmondi will get priority."
    };

    const similarJobs = [
        { id: 2, title: "Class 8 Math Tutor", location: "Kalabagan", salary: "4500" },
        { id: 3, title: "HSC Chemistry Tutor", location: "Lalmatia", salary: "7000" },
        { id: 4, title: "English Version Class 5", location: "Jigatola", salary: "5000" },
    ];

    return (
        <div className="min-h-screen bg-gray-50 pt-28 pb-12">
            <div className="container mx-auto px-4 md:px-6">
                
                
                <div className="text-sm text-gray-500 mb-6 flex items-center gap-2">
                    <a href="#" className="hover:text-emerald-600">Home</a>
                    <svg className="w-3 h-3 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" /></svg>
                    <a href="#" className="hover:text-emerald-600">Tuitions</a>
                    <svg className="w-3 h-3 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" /></svg>
                    <span className="text-gray-800 font-medium truncate max-w-[200px]">{job.title}</span>
                </div>

                <div className="flex flex-col lg:flex-row gap-8">
                    
                    
                    <div className="w-full lg:w-2/3">
                        
                        
                        <div className="bg-white rounded-xl p-6 md:p-8 border border-gray-100 shadow-sm mb-6">
                            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-4">
                                <h1 className="text-2xl md:text-3xl font-bold text-gray-800 leading-tight">
                                    {job.title}
                                </h1>
                                <span className="bg-emerald-100 text-emerald-700 text-xs font-bold px-3 py-1.5 rounded-full uppercase tracking-wide">
                                    {job.status}
                                </span>
                            </div>
                            
                            <div className="flex flex-wrap items-center gap-y-2 gap-x-6 text-sm text-gray-500 border-b border-gray-100 pb-6 mb-6">
                                <span className="flex items-center gap-1.5">
                                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 20l4-16m2 16l4-16M6 9h14M4 15h14" /></svg>
                                    Job ID: <span className="font-semibold text-gray-700">{job.id}</span>
                                </span>
                                <span className="flex items-center gap-1.5">
                                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                                    Posted: {job.posted_date}
                                </span>
                                <span className="flex items-center gap-1.5">
                                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                                    {job.location}
                                </span>
                            </div>

                            
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-y-6 gap-x-8">
                                <div className="space-y-1">
                                    <p className="text-xs text-gray-400 uppercase font-semibold">Medium</p>
                                    <p className="text-gray-800 font-medium">{job.details.medium}</p>
                                </div>
                                <div className="space-y-1">
                                    <p className="text-xs text-gray-400 uppercase font-semibold">Class</p>
                                    <p className="text-gray-800 font-medium">{job.details.class}</p>
                                </div>
                                <div className="space-y-1">
                                    <p className="text-xs text-gray-400 uppercase font-semibold">Student Gender</p>
                                    <p className="text-gray-800 font-medium">{job.details.student_gender}</p>
                                </div>
                                <div className="space-y-1">
                                    <p className="text-xs text-gray-400 uppercase font-semibold">Tutor Preference</p>
                                    <p className="text-emerald-600 font-bold">{job.details.tutor_gender_pref}</p>
                                </div>
                                <div className="space-y-1">
                                    <p className="text-xs text-gray-400 uppercase font-semibold">Days Per Week</p>
                                    <p className="text-gray-800 font-medium">{job.details.days_per_week}</p>
                                </div>
                                <div className="space-y-1">
                                    <p className="text-xs text-gray-400 uppercase font-semibold">Tutoring Time</p>
                                    <p className="text-gray-800 font-medium">{job.details.tutoring_time}</p>
                                </div>
                            </div>

                            
                            <div className="mt-8 pt-6 border-t border-gray-100">
                                <p className="text-xs text-gray-400 uppercase font-semibold mb-3">Subjects</p>
                                <div className="flex flex-wrap gap-2">
                                    {job.details.subjects.map(sub => (
                                        <span key={sub} className="bg-gray-100 text-gray-700 px-3 py-1.5 rounded-lg text-sm font-medium">
                                            {sub}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>

                        
                        <div className="bg-white rounded-xl p-6 md:p-8 border border-gray-100 shadow-sm mb-6">
                            <h3 className="text-lg font-bold text-gray-800 mb-4 border-l-4 border-emerald-500 pl-3">
                                Requirement Details
                            </h3>
                            <p className="text-gray-600 leading-relaxed whitespace-pre-line">
                                {job.description}
                            </p>
                            
                            <div className="mt-6 p-4 bg-yellow-50 border border-yellow-100 rounded-lg">
                                <h4 className="text-sm font-bold text-yellow-800 mb-2 flex items-center gap-2">
                                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                                    Note:
                                </h4>
                                <p className="text-xs text-yellow-700">
                                    Please read the requirements carefully before applying. Only apply if you are confident about teaching the mentioned subjects.
                                </p>
                            </div>
                        </div>

                    </div>

                    
                    <div className="w-full lg:w-1/3 space-y-6">
                        
                        
                        <div className="bg-white rounded-xl p-6 border border-gray-100 shadow-lg sticky top-28">
                            <div className="text-center mb-6">
                                <p className="text-sm text-gray-500 mb-1">Salary</p>
                                <h2 className="text-3xl font-extrabold text-emerald-600">{job.salary}</h2>
                                {job.negotiable && <span className="text-xs text-gray-400">(Negotiable)</span>}
                            </div>

                            <button className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-3 rounded-xl shadow-md shadow-emerald-200 hover:shadow-emerald-300 transition-all transform hover:-translate-y-0.5 mb-3">
                                Apply Now
                            </button>
                            <button className="w-full bg-white border border-gray-200 hover:border-emerald-500 text-gray-600 hover:text-emerald-600 font-semibold py-3 rounded-xl transition-all flex items-center justify-center gap-2">
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" /></svg>
                                Save Job
                            </button>

                            <div className="mt-6 pt-6 border-t border-gray-100">
                                <h4 className="text-sm font-bold text-gray-700 mb-3">Safety Tips</h4>
                                <ul className="text-xs text-gray-500 space-y-2 list-disc list-inside">
                                    <li>Do not pay any money before joining.</li>
                                    <li>Meet in a safe and public place.</li>
                                    <li>Verify all details before confirming.</li>
                                </ul>
                            </div>
                        </div>


                    </div>
                </div>
            </div>
        </div>
    );
};

export default TuitionDetailsPage;