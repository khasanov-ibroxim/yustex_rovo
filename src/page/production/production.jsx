import React from 'react';
import "./production.css"
import ProductionHeader from "@/component/production_component/production_header.jsx";
import Production_s1 from "@/component/production_component/production_s1.jsx";
import Production_s2 from "@/component/production_component/production_s2.jsx";
import Production_s3 from "@/component/production_component/production_s3.jsx";
import Production_s4 from "@/component/production_component/production_s4.jsx";
import Footer_form from "@/component/footer_form/footer_form.jsx";


const Production = () => {
    return (
        <div style={{position:"relative" , background:"white" , marginBottom:"100vh" , paddingBottom:"100px"}}>
            <ProductionHeader/>

            <Production_s2/>
            <Production_s3/>
            <Production_s4/>
            <Footer_form/>
        </div>
    );
};

export default Production;