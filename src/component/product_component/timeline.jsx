import React, { useEffect, useRef } from 'react';
import { motion, useAnimation, useInView } from 'framer-motion';
import {useTranslation} from "react-i18next";



const Timeline = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });
    const controls = useAnimation();
    const lineControls = useAnimation();
    const {t} = useTranslation();
    const steps = [
        {
            title: t("product.product_s3.i1.t"),
            description: t("product.product_s3.i1.d"),
        },
        {
            title: t("product.product_s3.i2.t"),
            description: t("product.product_s3.i2.d"),
        },
        {
            title: t("product.product_s3.i3.t"),
            description: t("product.product_s3.i3.d"),
        },
        {
            title: t("product.product_s3.i4.t"),
            description: t("product.product_s3.i4.d"),
        },
    ];
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
