import React from 'react';
import "./product.css"
import ProductS1 from "@/component/product_component/product_s1.jsx";
import ProductS2 from "@/component/product_component/product_s2.jsx";
import ProductS3 from "@/component/product_component/product_s3.jsx";
import Footer_form from "@/component/footer_form/footer_form.jsx";
import {Helmet} from "react-helmet";

const Product = () => {
    return (
        <div style={{position:"relative" , background:"white" , marginBottom:"100vh" }}>
            <Helmet>
                <link rel="canonical" href="https://yustex.uz/product"/>
            </Helmet>
            <ProductS1/>
            <ProductS2/>
            <ProductS3/>
        </div>
    );
};

export default Product;