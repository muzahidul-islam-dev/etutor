import { Link, useNavigate } from "react-router";
import useAuth from "../../../../hook/useAuth";
import Swal from "sweetalert2";

const TutorSidebar = () => {
    const {logout} = useAuth();
    const navigate = useNavigate();



    const handleLogout = async () => {
        console.log('clicked')
        const result = await logout();
        navigate('/',{
            replace: true
        })
        Swal.fire('Success', 'Logout Successfully', 'success')
    }

    return (
        <div className="w-full lg:w-64 bg-white border-r border-gray-100 lg:min-h-[calc(100vh-80px)] p-6 hidden lg:block">
            <div className="space-y-1">
                    <Link 
                        to="/user/tutor/my-application"
                        className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium transition-all text-gray-600 hover:bg-gray-50 hover:text-emerald-600`}
                    >
                        My Applications
                    </Link>
                    <Link 
                        to="/user/tutor/on-going-tution"
                        className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium transition-all text-gray-600 hover:bg-gray-50 hover:text-emerald-600`}
                    >
                        Ongoing Tuitions
                    </Link>
                    <Link 
                        to="/user/tutor/revenue-history"
                        className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium transition-all text-gray-600 hover:bg-gray-50 hover:text-emerald-600`}
                    >
                        Revenue History
                    </Link>
                    <button 
                        onClick={handleLogout}
                        to="/user/tutor/revenue-history"
                        className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium transition-all text-gray-600 hover:bg-gray-50 hover:text-emerald-600 cursor-pointer`}
                    >
                        Logout
                    </button>
            </div>
        </div>
    );
};
export default TutorSidebar;