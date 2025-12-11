import { Outlet } from "react-router";
import { Studentsidebar } from "./StudentSidebar";

export function Studentlayout() {
    return (
        <div className="flex flex-1 container mx-auto px-0 md:px-6 pt-24 pb-12">
            <Studentsidebar />
            <div className="flex-1 p-4 md:p-8">
                <Outlet />
            </div>
        </div>
    );
}
