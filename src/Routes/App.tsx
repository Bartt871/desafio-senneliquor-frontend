import { Route, Routes } from "react-router-dom";
import { StandardTemplate } from "../Template/StandardTemplate";
import { LandingPage } from "../Pages/LandingPage";
import { DoctorLogin } from "../Pages/Doctor/Login";
import { DoctorHome } from "../Pages/Doctor/Home";
import { ProtectedDoctorSession } from "./Restrictions/ProtectedDoctorSession";
import { LoggedInTemplate } from "../Template/LoggedInTemplate";

function App() {
    return (
        <Routes>
            <Route path="" element={<StandardTemplate />}>
                <Route index element={<LandingPage />} />
            </Route>

            <Route path="doctor" element={<ProtectedDoctorSession />}>
                <Route path="" element={<LoggedInTemplate />}>
                    <Route index element={<DoctorHome />} />
                </Route>
            </Route>

            <Route path="doctor-login" element={<DoctorLogin />} />
        </Routes>
    );
}

export default App;
