import React from 'react';
import {Navbar} from "./components/Navbar";
import {TodosPage} from "./pages/TodosPage";
import {AboutMe} from "./pages/AboutMe";
import {BrowserRouter, Route, Routes} from "react-router-dom";

const App: React.FC = () => {

    return (
        <BrowserRouter>
            <Navbar/>
            <div className="container">
                <Routes>
                    <Route path="/" element={<TodosPage />}   />
                    <Route path="about" element={<AboutMe />}  />
                </Routes>

            </div>

        </BrowserRouter>
    );
}

export default App;
