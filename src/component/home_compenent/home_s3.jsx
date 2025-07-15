import React, { useState } from 'react';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { Collapse } from 'antd';
import { Link } from "react-router-dom";

import h_1 from "@/assets/home/h_s3/h_s3_1.jpg";
import h_2 from "@/assets/home/h_s3/2O8A5113.JPG";
import h_3 from "@/assets/home/h_s3/sewing-machine-work-textile-fabric-nobody.jpg";

const items = [
    {
        key: '1',
        label: 'Мир цвета Pantone©',
        children: <p>Цвет — это язык, которым говорит ваш бренд.</p>,
    },
    {
        key: '2',
        label: 'Точное соответствие',
        children: <p>Мы используем палитру Pantone© для точной передачи оттенков в печати.</p>,
    },
    {
        key: '3',
        label: 'Гармония в деталях',
        children: <p>Правильно подобранный цвет усиливает восприятие дизайна и добавляет профессионализма.</p>,
    },
    {
        key: '4',
        label: 'Тренды сезона',
        children: <p>Следим за обновлениями Pantone© и предлагаем актуальные цветовые решения.</p>,
    },
    {
        key: '5',
        label: 'Цвет как стиль',
        children: <p>Каждый оттенок способен задать настроение и подчеркнуть индивидуальность вашей продукции.</p>,
    },
];

const imageMap = {
    '1': h_1,
    '2': h_2,
    '3': h_3,
    '4': h_1,
    '5': h_2,
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
                            Продукция <ArrowForwardIcon />
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
