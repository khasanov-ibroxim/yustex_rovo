import React, {useEffect, useState} from 'react';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import {Collapse} from 'antd';
import {Link} from "react-router-dom";

import h_1 from "@/assets/home/h_s3/top-view-hands-holding-color-palette.jpg";
import h_2 from "@/assets/home/h_s3/2O8A5113.jpg";
import h_3 from "@/assets/home/h_s3/sewing-machine-work-textile-fabric-nobody.jpg";
import h_4 from "@/assets/home/h_s3/DSC08732.jpg";
import h_5 from "@/assets/home/h_s3/DSC08582.jpg";

const items = [
    {
        key: '1',
        label: 'Точное соответствие',
        children: <p>Мы используем палитру Pantone© для точной передачи оттенков в печати.</p>,
    },
    {
        key: '2',
        label: 'Гармония в деталях',
        children: <p>Правильно подобранный цвет усиливает восприятие дизайна и добавляет профессионализма.</p>,
    },
    {
        key: '3',
        label: 'Тренды сезона',
        children: <p>Следим за обновлениями Pantone© и предлагаем актуальные цветовые решения.</p>,
    },
    {
        key: '4',
        label: 'Цвет как стиль',
        children: <p>Каждый оттенок способен задать настроение и подчеркнуть индивидуальность вашей продукции.</p>,
    },
];

const imageMap = {
    '1': h_2,
    '2': h_3,
    '3': h_4,
    '4': h_5,
};


const HomeS3 = () => {
    const [activeKey, setActiveKey] = useState('1');
    const [isLargeScreen, setIsLargeScreen] = useState(window.innerWidth > 1000);

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
                        <h1>Мир цвета Pantone©</h1>
                        <p>Цвет передаёт характер вашего бренда</p>
                        <Collapse
                            accordion
                            activeKey={activeKey}
                            onChange={onChange}
                            items={items}
                        />

                        <Link to="#">
                            Продукция <ArrowForwardIcon/>
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
