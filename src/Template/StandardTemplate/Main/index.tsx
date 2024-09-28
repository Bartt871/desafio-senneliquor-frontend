import { Outlet } from "react-router-dom";

import './style.scss';

export const Main = () => {
    return (
        <>
            <main className="standard_template__main">
                <Outlet />
            </main>
        </>
    );
}