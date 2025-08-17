import React, {useEffect, useState} from 'react';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import {Collapse} from 'antd';
import {Link} from "react-router-dom";

import h_1 from "@/assets/home/h_s3/top-view-hands-holding-color-palette.jpg";
import h_2 from "@/assets/home/h_s3/2O8A5113.jpg";
import h_3 from "@/assets/home/h_s3/sewing-machine-work-textile-fabric-nobody.jpg";
import h_4 from "@/assets/home/h_s3/DSC08732.jpg";
import h_5 from "@/assets/home/h_s3/DSC08582.jpg";
import {PRODUCT} from "@/utils/consts.jsx";
import {useTranslation} from "react-i18next";

const HomeS3 = () => {
    const [activeKey, setActiveKey] = useState('1');
    const [isLargeScreen, setIsLargeScreen] = useState(window.innerWidth > 1000);
    const { t } = useTranslation();
    const items = [
        {
            key: '1',
            label: t("home.home_s3.i1.t"),
            children: <p>{t("home.home_s3.i1.d")}</p>,
        },
        {
            key: '2',
            label: t("home.home_s3.i2.t"),
            children: <p>{t("home.home_s3.i2.d")}</p>,
        },
        {
            key: '3',
            label: t("home.home_s3.i3.t"),
            children: <p>{t("home.home_s3.i3.d")}</p>,
        },
        {
            key: '4',
            label: t("home.home_s3.i4.t"),
            children: <p>{t("home.home_s3.i4.d")}</p>,
        },
    ];

    const imageMap = {
        '1': h_2,
        '2': h_3,
        '3': h_4,
        '4': h_5,
    };


    useEffect(() => {
        const handleResize = () => {
            setIsLargeScreen(window.innerWidth > 1000);
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const getStyle = () => {
        if (!isLargeScreen) return {}; // Ekran kichik bo‘lsa, style bo‘lmasin
        if (imageMap[activeKey] === h_4) return {height: '800px'};
        if (imageMap[activeKey] === h_5) return {height: '800px'};
        return {};
    };
    const onChange = (key) => {
        if (!key || (Array.isArray(key) && key.length === 0)) return;
        setActiveKey(Array.isArray(key) ? key[0] : key);
    };
    console.log(imageMap[activeKey])
    return (
        <section className={"current-container"}>
            <div className="row">
                <div className="col-lg-4">
                    <div className="home_s3_left">
                        <h2>{t("home.home_s3.title")}</h2>
                        <p>{t("home.home_s3.subtitle")}</p>
                        <Collapse
                            accordion
                            activeKey={activeKey}
                            onChange={onChange}
                            items={items}
                        />

                        <Link to={PRODUCT}>
                            {t("home.home_s3.link")} <ArrowForwardIcon/>
                        </Link>
                    </div>
                </div>
                <div className="col-lg-8">
                    <div className="home_s3_right" style={getStyle()}>
                        <img src={imageMap[activeKey]} alt=""/>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HomeS3;
