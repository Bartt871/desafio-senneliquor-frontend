import { Navigate, Outlet } from "react-router-dom";
import { getUserLocalStorage } from "../../Context/AuthProvider/utils";

export const ProtectedDoctorSession = () => {
    const auth = getUserLocalStorage();

    if (auth?.token) {
        return <Outlet />;
    }

    return <Navigate to={'/'} />
};
