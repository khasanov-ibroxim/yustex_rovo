import React from 'react';
import {Route, Routes} from "react-router-dom";
import {RoutersApp} from "@/utils/consts.jsx";
import Navbar from "@/component/navbar/navbar.jsx";
import Footer from "@/component/footer/footer.jsx";


function App() {
    return (
        <Routes>
            {RoutersApp.map(({ Path, Component }, index) => (
                <Route key={index} path={Path} element={
                    <>
                        <Navbar/>
                        <Component />
                        <Footer/>
                    </>
                } />
            ))}
        </Routes>
    );
}

export default App;