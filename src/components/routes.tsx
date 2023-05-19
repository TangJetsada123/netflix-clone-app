import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import ManageProfile from "./manageProfile";

export default function RouterComponent() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<ManageProfile />}>
                </Route>
            </Routes>
        </Router>

    )

}