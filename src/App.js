import React from 'react';
import Registration from "./components/Registration";
import Login from "./components/Login";
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Navigate,
} from "react-router-dom";
function App() {
    return (
        <Router>
            <Routes>
                <Route
                    path="/Registration"
                    element={<Registration />}
                />

                <Route
                    path="/Login"
                    element={<Login />}
                />

                <Route
                    path="*"
                    element={<Navigate to="/Registration" />}
                />
            </Routes>
        </Router>
    );
}

export default App;
