import React, {useState} from 'react';
import {Collapse} from "antd";
import h_1 from "@/assets/production/production_s3/DEW06342.jpg";
import h_2 from "@/assets/production/production_s3/DEW06362.jpg";
import h_3 from "@/assets/production/production_s3/DEW06335.jpg";
import h_4 from "@/assets/production/production_s3/DEW06330.jpg";


const items = [
    {
        key: '1',
        label: 'The same supply chain used by leading fashion brands',
        children: <p>Assembly is part of the Rovo group, the leading full-service fashion company in Portugal, with over
            20 years of experience producing collections for top fashion brands worldwide.</p>,
    },
    {
        key: '2',
        label: 'Swift communication',
        children: <p>No more endless e-mail threads and unanswered questions. Your account manager is your person of
            contact for all communications and is ready to assist you throughout the order process.</p>,
    },
    {
        key: '3',
        label: 'Made in Portugal',
        children: <p>Benefit from the technical know-how and innovation of the Portuguese textile landscape. Ensure that
            your items are ethically produced according to highly efficient processes, in compliance with the latest
            European regulations on social and environmental responsibility.</p>,
    },
    {
        key: '4',
        label: 'Quality control',
        children: <p>Premium merch is all about quality, durability and ensuring your vision comes to life exactly as
            you expected. That’s where our highly specialized QC department comes into the equation. Accompanying
            production in loco and reviewing samples and production orders to guarantee everything is as it should be -
            perfect.</p>,
    },
];

const imageMap = {
    '1': h_1,
    '2': h_2,
    '3': h_3,
    '4': h_4,
};
const ProductionS3 = () => {
    const [activeKey, setActiveKey] = useState('1');

    const onChange = (key) => {
        if (!key || (Array.isArray(key) && key.length === 0)) return;
        setActiveKey(Array.isArray(key) ? key[0] : key);
    };
    return (
        <section className={"current-container production_s1"}>
            <div className="production_s1_title col-lg-6">
                <h1 className={"production_title"}>Why choose Assembly?</h1>
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

export default ProductionS3;