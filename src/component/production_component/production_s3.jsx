import React, {useState} from 'react';
import {Collapse} from "antd";
import h_1 from "@/assets/production/production_s3/DEW06342.jpg";
import h_2 from "@/assets/production/production_s3/DEW06362.jpg";
import h_3 from "@/assets/production/production_s3/DEW06333.jpg";
import h_4 from "@/assets/production/production_s3/DEW06330.jpg";


const items = [
    {
        key: '1',
        label: 'Многоуровневая проверка',
        children: <p>Каждое изделие проходит контроль на всех этапах производства — от сырья до упаковки.</p>,
    },
    {
        key: '2',
        label: 'Обученные специалисты',
        children: <p>За качеством следят опытные контролёры с профильной подготовкой и вниманием к деталям.</p>,
    },
    {
        key: '3',
        label: 'Современные стандарты',
        children: <p>Мы работаем по внутренним регламентам и международным требованиям к качеству одежды.</p>,
    },
    {
        key: '4',
        label: 'Финальная инспекция',
        children: <p>Перед отправкой вся продукция проходит итоговую проверку на соответствие размеру, швам и внешнему виду.</p>,
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
                <h1 className={"production_title"}>Как мы гарантируем качество?</h1>
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