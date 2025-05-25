import React from 'react';
import Home_header from "@/component/home_compenent/home_header.jsx";
import "@/page/home/home.css"
import Home_corusel from "@/component/home_compenent/home_corusel/home_corusel.jsx";
import Home_s1 from "@/component/home_compenent/home_s1.jsx";
import Home_s2 from "@/component/home_compenent/home_s2.jsx";
import Home_s3 from "@/component/home_compenent/home_s3.jsx";
import Home_s4 from "@/component/home_compenent/home_s4.jsx";
import Home_header_element from "@/component/home_compenent/home_header_element.jsx";
import Footer from "@/component/footer/footer.jsx";

const Home = () => {
    return (
        <div style={{position:"relative" , background:"white" , marginBottom:"100vh" , paddingBottom:"100px"}}>
            <Home_header/>
            <Home_header_element/>
            <Home_corusel/>
            <Home_s1/>
            <Home_s2/>
            <Home_s3/>
            <Home_s4 currentStep={4}/>

        </div>
    );
};

export default Home;