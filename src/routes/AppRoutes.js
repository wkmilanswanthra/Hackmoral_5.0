import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import OrganizingCommitte from "../pages/OrganizingCommitte";
import MainPage from "../pages/MainPage";

const AppRoutes = () => {
    return (
        <React.Fragment>
            <BrowserRouter>
                <Routes>
                    <Route exact path="/" element={<MainPage></MainPage>} />
                    <Route exact path="/home" element={<MainPage></MainPage>} />
                    <Route exact path="/OrganizingCommitte" element={<OrganizingCommitte></OrganizingCommitte>} />
                </Routes>
            </BrowserRouter>
        </React.Fragment>
    );
}
export default AppRoutes;
