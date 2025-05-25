import React from 'react';
import "./product.css"
import ProductS1 from "@/component/product_component/product_s1.jsx";
import ProductS2 from "@/component/product_component/product_s2.jsx";
import ProductS3 from "@/component/product_component/product_s3.jsx";

const Product = () => {
    return (
        <div style={{position:"relative" , background:"white" , marginBottom:"100vh" }}>
            <ProductS1/>
            <ProductS2/>
            <ProductS3/>
        </div>
    );
};

export default Product;