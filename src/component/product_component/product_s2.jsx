import React from 'react';
import ProductCard from "@/component/product_card/product_card.jsx";
import product_s2_1_detail from "@/assets/product/product_s2/product_s2_1_detail.jpg"
import product_s2_1 from "@/assets/product/product_s2/product_s2_1.jpg"
import {Product_s2_db} from "@/component/product_component/product_db/product_s2_db.jsx";


const ProductS2 = () => {
    return (
        <section className={"current-container"}>
            <div className="row">
                <div className="col-lg-8">
                    <ProductCard product={{
                        title: "Elevate your brand in 4 steps",
                        price: "100",
                        img_url:[product_s2_1_detail , product_s2_1]
                    }} key={1} height={"1200px"}/>
                </div>
                <div className="col-lg-4 flex-column gap-3 d-flex justify-content-center align-items-center ">
                    <ProductCard product={{
                        title: "Elevate your brand in 4 steps",
                        price: "100",
                        img_url:[product_s2_1_detail , product_s2_1]
                    }} key={1} height={"590px"} width={"90%"}/>
                    <ProductCard product={{
                        title: "Elevate your brand in 4 steps",
                        price: "100",
                        img_url:[product_s2_1_detail , product_s2_1]
                    }} key={1} height={"590px"} width={"90%"}/>
                </div>
            </div>

            <div className="row mt-5">
                {Product_s2_db.map((product, index) => (
                    <div className={"col-lg-4 mb-4"}>
                    <ProductCard product={product} key={index}/>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default ProductS2;