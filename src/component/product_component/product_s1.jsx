import React from 'react';
import {Link} from "react-router-dom";
import {Production_s2_ind_db} from "@/component/production_component/production_db/production_db.jsx";
import Product_card from "@/component/product_card/product_card.jsx";

const ProductS1 = () => {
    return (
        <div style={{paddingTop: "150px"}}>
            <div className="current-container">
                <div className="row">
                    <div className="col-lg-4 p-5 pt-0">
                        <div className="production_s2_content_text">
                            <span style={{fontSize: "16px", color: "#1e1e1e", fontWeight: "700"}}>Get started</span>
                            <h1>Order a blank sample today</h1>
                            <div className="production_s2_content_text_box" style={{margin: "0"}}>
                                <p>Our products are classic unisex fits all made in Portugal with 100% organic cotton.
                                    Order a sample to try before you buy, and design your full order in the Assembly
                                    Studio.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-8 d-flex gap-3 flex-wrap">
                        {Production_s2_ind_db.map((product, index) => (
                            <div className={"production_s2_ind_item"} style={{width:'45%' , marginLeft:"10px"}}>
                                <Product_card product={product} key={index}/>
                            </div>

                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductS1;