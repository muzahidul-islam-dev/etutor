import { Outlet } from "react-router";
import { Studentsidebar } from "./StudentSidebar";

export function Studentlayout() {
    return (
        <div>
            <Studentsidebar />
            <Outlet />
        </div>
    );
}
