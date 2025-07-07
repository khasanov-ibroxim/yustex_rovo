import React, { useState } from 'react';
import { Link } from "react-router-dom";
import "./product_card.css";

const ProductCard = ({ product, key , height , width}) => {
    const [isHovered, setIsHovered] = useState(false);

    const imgChecker = () => {
        if (Array.isArray(product.img_url)) {
            return isHovered ? product.img_url[1] : product.img_url[0];
        } else {
            return product.img_url;
        }
    };

    return (
        <div
            key={key}
            className="product_card"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            style={{
                backgroundImage: `url(${imgChecker()})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                height: height ? `${height}` : `90vh`,
                width: width ? `${width}` : `100%`,

            }}
        >
            <div className="product_card_top">
                <div className="product_card_top_title">{product?.title}</div>
                <div className="product_card_top_price">{product?.price ?  `from ${product?.price}€` : ""} </div>
            </div>
            <div className="product_card_bottom">
                <Link to="#">Order simple</Link>
            </div>
        </div>
    );
};

export default ProductCard;
