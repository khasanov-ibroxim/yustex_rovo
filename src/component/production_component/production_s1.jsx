import React, {useState} from 'react';
import {Collapse} from "antd";
import h_1 from "@/assets/production/production_s1/DEW05831.jpg";
import h_2 from "@/assets/production/production_s1/DEW05859.jpg";
import h_3 from "@/assets/production/production_s1/DEW05840.jpg";


const items = [
    {
        key: '1',
        label: 'Цифровая печать',
        children: <p>Современное оборудование позволяет наносить чёткие, яркие изображения с высокой детализацией.</p>,
    },
    {
        key: '2',
        label: 'Экологичные чернила',
        children: <p>Мы используем безопасные, стойкие пигменты, подходящие даже для детской и повседневной одежды.</p>,
    },
    {
        key: '3',
        label: 'Контроль при сушке',
        children: <p>Температура и время сушки точно рассчитываются, чтобы сохранить яркость и долговечность принта.</p>,
    },
    {
        key: '4',
        label: 'Долговечный результат',
        children: <p>Печать не выцветает, не трескается и сохраняет внешний вид даже после множества стирок.</p>,
    },
];

const imageMap = {
    '1': h_1,
    '2': h_2,
    '3': h_3,
    '4': h_1,
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
                <h1 className={"production_title"}>Печать, которая работает на ваш стиль</h1>
                <p>От идеи до готового изделия — каждый этап под контролем.</p>
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