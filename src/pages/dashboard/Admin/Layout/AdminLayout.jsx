import { Outlet } from "react-router";
import { AdminSidebar } from "./AdminSidebar";
import useAuth from "../../../../hook/useAuth";

export function Adminlayout() {
    const {userRole} = useAuth();
    console.log(userRole, 'mytutions component')
    return (
        <div className="flex flex-1 container mx-auto px-0 md:px-6 pt-24 pb-12">
            <AdminSidebar />
            <div className="flex-1 p-4 md:p-8">
                <Outlet />
            </div>
        </div>
    );
}
