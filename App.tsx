import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { HomePage } from "./pages/HomePage";
import Sidebar from "./components/Sidebar";

function App() {
    return (
        <Router>
            <div className="container">
                <div className="row">
                    <div className="col-0 col-sm-3 bg-nav">
                        <Sidebar />
                    </div>
                    <div className="col-12 col-sm-9 d-flex flex-column align-items-center">
                        <Routes>
                            <Route path="/" element={<HomePage />} />
                        </Routes>
                    </div>
                </div>
            </div>
        </Router>
    );
}

export default App;
