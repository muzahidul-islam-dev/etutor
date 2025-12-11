import { Outlet } from "react-router";
import TutorSidebar from "./TutorSidebar";

export function Tutorlayout() {
    return (
        <div>
            <TutorSidebar />
            <Outlet />
        </div>
    );
}
