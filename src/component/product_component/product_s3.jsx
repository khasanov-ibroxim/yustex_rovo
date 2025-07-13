import React from 'react';
import Timeline from "./timeline.jsx"
import pr_s3_gif from "@/assets/product/product_s3/product_s3_gif.gif"
const ProductS3 = () => {
    return (
        <section style={{background: "#efefef" , marginBottom:"0 !important" , paddingBottom:"100px"}} >
            <div className="current-container pt-5 pb-5">
                <div className="row flex-wrap">
                    <div className="col-lg-5 ">
                        <div className="pr-s3-title">
                            <span>Полный цикл производства — <br/>от идеи до готовой продукции</span>
                            <h1>Нам доверяют бренды, потому что мы ценим качество, сроки и партнёрство.</h1>
                        </div>
                    </div>
                    <div className="col-lg-7 ">
                        <Timeline/>
                    </div>
                </div>
            </div>
            <div className="container-fluid">
                <img src={pr_s3_gif} alt="" className={"pr-s3-gif"}/>
            </div>
        </section>
    );
};

export default ProductS3;