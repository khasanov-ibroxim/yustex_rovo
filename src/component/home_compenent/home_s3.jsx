import React, { useState } from 'react';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { Collapse } from 'antd';
import { Link } from "react-router-dom";

import h_1 from "@/assets/home/h_s3/h_s3_1.jpg";
import h_2 from "@/assets/home/h_s3/h_s3_2.jpg";
import h_3 from "@/assets/home/h_s3/h_s3_3.jpg";

const items = [
    {
        key: '1',
        label: 'Pantone© colors',
        children: <p>Match any reference, using either one of our pre-selected colors or any Pantone hue.</p>,
    },
    {
        key: '2',
        label: 'Fabric options',
        children: <p>Choose from a wide range of high-quality fabrics suited for your needs.</p>,
    },
    {
        key: '3',
        label: 'Logo Embroidery',
        children: <p>Add your own logo with our precise embroidery technology.</p>,
    },
];

const imageMap = {
    '1': h_1,
    '2': h_2,
    '3': h_3,
};

const HomeS3 = () => {
    const [activeKey, setActiveKey] = useState('1');

    const onChange = (key) => {
        if (!key || (Array.isArray(key) && key.length === 0)) return;
        setActiveKey(Array.isArray(key) ? key[0] : key);
    };

    return (
        <section className={"current-container"}>
            <div className="row">
                <div className="col-lg-4">
                    <div className="home_s3_left">
                        <h1>Everything you need in one place</h1>

                        <Collapse
                            accordion
                            activeKey={activeKey}
                            onChange={onChange}
                            items={items}
                        />

                        <Link to="#">
                            Discover more in our Studio now <ArrowForwardIcon />
                        </Link>
                    </div>
                </div>
                <div className="col-lg-8">
                    <div className="home_s3_right">
                        <img src={imageMap[activeKey]} alt="" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HomeS3;
