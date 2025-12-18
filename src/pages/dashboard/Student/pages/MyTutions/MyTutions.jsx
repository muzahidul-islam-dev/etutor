import { useEffect, useState } from "react";
import { Link } from "react-router";
import { Loading } from "../../../../../components/utils/Loading";
import useSecureAxios from "../../../../../hook/useSecureAxios";

const MyTutions = () => {
    const [activeTab, setActiveTab] = useState('All');
    const [tutions, setTutions] = useState([]);
    const [loading, setLoading] = useState(true)
    const { secureAxios } = useSecureAxios();
    useEffect(() => {
        secureAxios.get('/api/student/tuition/all').then(response => {
            if (response?.data?.success) {
                setTutions(response?.data?.data)
            }
            setLoading(false)
        })
    }, []);
    if (loading) return <Loading />



    const myPosts = tutions?.map((item) => ({
        id: item._id,
        title: item.title,
        subject: item.subject,
        location: item.location,
        salary: item.salary,
        postedDate: item.postedDate,
        status: item.status,
        applications: item.applications
    }));


    console.log(tutions, 'this is tutions')
    const filteredPosts = activeTab === 'All' ? myPosts : myPosts.filter(post => post.status === activeTab);


    return (
        <div className="space-y-6">
            <div className="flex justify-between items-center">
                <h2 className="text-2xl font-bold text-gray-800">My Tuitions</h2>
                <Link to={'/user/student/post-new-tution'} className="bg-emerald-600 cursor-pointer hover:bg-emerald-700 text-white px-6 py-2 rounded-lg font-bold text-sm shadow-md transition-all flex items-center gap-2">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4" /></svg> Post New
                </Link>
            </div>
            <div className="flex border-b border-gray-200 mb-6 gap-6">
                {['All', 'approved', 'pending', 'completed', 'rejected'].map((tab) => (
                    <button key={tab} onClick={() => setActiveTab(tab)} className={`pb-2 cursor-pointer text-sm font-medium transition-colors border-b-2 ${activeTab === tab ? 'border-emerald-600 text-emerald-600' : 'border-transparent text-gray-500 hover:text-gray-700'}`}>{tab}</button>
                ))}
            </div>
            <div className="space-y-4">
                {filteredPosts.map((post) => (
                    <div key={post.id} className="bg-white rounded-xl border border-gray-100 p-6 shadow-sm hover:shadow-md transition-shadow">
                        <div className="flex flex-col md:flex-row justify-between gap-4">
                            <div>
                                <div className="flex items-center gap-3 mb-2">
                                    <span className={`text-xs font-bold px-2 py-1 rounded uppercase tracking-wide ${post.status === 'approved' ? 'bg-emerald-50 text-emerald-600' : post.status === 'pending' ? 'bg-yellow-50 text-yellow-600' : 'bg-gray-100 text-gray-500'}`}>{post.status}</span>
                                    <span className="text-xs text-gray-400">{post.postedDate}</span>
                                </div>
                                <h3 className="text-lg font-bold text-gray-800">{post.title}</h3>
                                <p className="text-sm text-gray-600">{post.subject} • {post.location}</p>
                                <p className="text-sm font-semibold text-emerald-600 mt-2">{post.salary}</p>
                            </div>
                            <div className="text-right flex flex-col justify-center">
                                <p className="text-2xl font-bold text-gray-800">{post.applications}</p>
                                <p className="text-xs text-gray-500 mb-3">Applicants</p>
                                <Link to={`/user/student/applied-tutors/${post.id}`} className="bg-emerald-50 text-emerald-600 px-4 py-2 rounded-lg text-xs font-bold hover:bg-emerald-100 transition-colors">View Details</Link>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default MyTutions;