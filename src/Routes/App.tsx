import { Route, Routes } from "react-router-dom";
import { StandardTemplate } from "../Template/StandardTemplate";
import { LandingPage } from "../Pages/LandingPage";

function App() {
    return (
        <Routes>
            <Route path="" element={<StandardTemplate />}>
                <Route index element={<LandingPage />} />
            </Route>
        </Routes>
    );
}

export default App;
