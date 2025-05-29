import React, {useState} from 'react';
import {Collapse} from "antd";
import h_1 from "@/assets/home/h_s3/h_s3_1.jpg";
import h_2 from "@/assets/home/h_s3/h_s3_2.jpg";
import h_3 from "@/assets/home/h_s3/h_s3_3.jpg";


const items = [
    {
        key: '1',
        label: 'A one-stop solution',
        children: <p>Manage all your orders in one place. Forget the days of juggling multiple suppliers and
            manufacturers.

            Our process is dead easy and our customer support team is always available to help and keep you updated
            every step of the way.

            We take care of all the hassle for you so you can focus on what matters the most - your business.</p>,
    },
    {
        key: '2',
        label: 'Premium Quality',
        children: <p>We believe merch is not about placing your logo on a dubious quality tee that will end up in a
            landfill after a couple of uses. It’s about creating a physical connection with your community, a
            materialization of your business and its values. That is why all our items are made to last, providing the
            utmost quality you and your clients deserve.</p>,
    },
    {
        key: '3',
        label: 'Make it your own',
        children: <p>We offer an extensive range of customization options that elevates each garment to a true extension
            of your business. Over 2500 color Pantones, different washes, several printing and embroidery techniques and
            custom woven labels all contribute to creating your own vision.</p>,
    },
];

const imageMap = {
    '1': h_1,
    '2': h_2,
    '3': h_3,
};
const ProductionS1 = () => {
    const [activeKey, setActiveKey] = useState('1');

    const onChange = (key) => {
        if (!key || (Array.isArray(key) && key.length === 0)) return;
        setActiveKey(Array.isArray(key) ? key[0] : key);
    };
    return (
        <section className={"current-container production_s1"}>
            <div className="production_s1_title col-lg-6">
                <h1 className={"production_title"}>The new way to make merch</h1>
            </div>
            <div className="row">
                <div className="col-lg-5 mt-5 ">
                    <Collapse
                        accordion
                        activeKey={activeKey}
                        onChange={onChange}
                        items={items}
                        expandIconPosition={"end"}
                    />
                </div>
                <div className="col-lg-7 ">
                    <div className="production_s1_img">
                        <img src={imageMap[activeKey]} alt=""/>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ProductionS1;