import React, { useEffect, useRef } from 'react';
import { motion, useAnimation, useInView } from 'framer-motion';

const steps = [
    {
        title: "Индивидуальный подход к дизайну",
        description: `Разрабатываем дизайн, подбираем ткани и фурнитуру, согласовываем каждый элемент с заказчиком.
Можем работать как по вашему техзаданию, так и предложить собственные решения.`,
    },
    {
        title: "Стабильное и отлаженное производство",
        description: `После утверждения запускаем процесс в швейном цеху с использованием современных технологий.
Наша фабрика работает с 2011 года и выпускает продукцию для известных брендов.`,
    },
    {
        title: "Контроль на каждом этапе",
        description: `Качество проверяется в процессе и после пошива: чистка, упаковка и подготовка к отгрузке — под строгим контролем.
Мы используем систему внутреннего контроля, чтобы каждая партия соответствовала стандартам.`,
    },
    {
        title: "Опыт и доверие",
        description: `Более 12 лет на рынке и сотрудничество с 30+ брендами в странах СНГ — это не просто цифры, а подтверждённая надёжность.
Мы уверены в результате и даём 100% гарантию удовлетворения.`,
    },
];

const Timeline = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });
    const controls = useAnimation();
    const lineControls = useAnimation();

    useEffect(() => {
        if (isInView) {
            controls.start('visible');
            lineControls.start('expanded');
        }
    }, [isInView, controls, lineControls]);

    return (
        <div ref={ref} className="timeline">
            {steps.map((step, index) => (
                <motion.div
                    key={index}
                    initial="hidden"
                    animate={controls}
                    variants={{
                        visible: {
                            opacity: 1,
                            y: 0,
                            transition: { delay: index * 0.3, duration: 0.6 },
                        },
                        hidden: { opacity: 0, y: -50 },
                    }}
                    className="timeline_box"
                >
                    <div className="timeline_cycle">
                        {index + 1}
                    </div>

                    {/* Motion animation for line */}
                    <motion.div
                        className="timeline_line"
                        initial={{ height: '0%' }}
                        animate={lineControls}
                        variants={{
                            expanded: {
                                height: '30%',
                                transition: { delay: index * 0.3 + 0.5, duration: 0.6 },
                            },
                        }}
                    />

                    <div className="timeline_text">
                        <h3>{step.title}</h3>
                        <p>{step.description}</p>
                    </div>
                </motion.div>
            ))}
        </div>
    );
};

export default Timeline;
