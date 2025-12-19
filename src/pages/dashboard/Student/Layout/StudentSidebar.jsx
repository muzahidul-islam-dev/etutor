import { Link, useNavigate } from "react-router";
import useAuth from "../../../../hook/useAuth";
import Swal from "sweetalert2";

export function Studentsidebar() {
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
                    to="/user/student/my-tution"
                    className="w-full flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium transition-all text-gray-600 hover:bg-gray-50 hover:text-emerald-600"
                >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                    </svg>
                    My Tuitions
                </Link>

                <Link
                    to="/user/student/post-new-tution"
                    className="w-full flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium transition-all text-gray-600 hover:bg-gray-50 hover:text-emerald-600"
                >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4" />
                    </svg>
                    Post New Tuition
                </Link>

                <Link
                    to="/user/student/applied-tutors"
                    className="w-full flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium transition-all text-gray-600 hover:bg-gray-50 hover:text-emerald-600"
                >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                    Applied Tutors
                </Link>

                <Link
                    to="/user/student/payment-history"
                    className="w-full flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium transition-all text-gray-600 hover:bg-gray-50 hover:text-emerald-600"
                >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                    </svg>
                    Payments
                </Link>

                <Link
                    to="/user/student/profile-settings"
                    className="w-full flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium transition-all text-gray-600 hover:bg-gray-50 hover:text-emerald-600"
                >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                    </svg>
                    Profile Settings
                </Link>

                <button
                    onClick={handleLogout}
                    to="#"
                    className="w-full cursor-pointer flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium transition-all text-red-500 hover:bg-red-50"
                >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                    </svg>
                    Logout
                </button>
            </div>
        </div>
    );
}
