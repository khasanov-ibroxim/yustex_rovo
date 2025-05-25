import React, { useEffect, useRef } from 'react';
import { motion, useAnimation, useInView } from 'framer-motion';

const steps = [
    {
        title: "Select a style with classic fits",
        description: "Choose from our range of pre-engineered garments to begin your new project. We specialize in classic styles — like t-shirts and hoodies — with regular to boxy fits.",
    },
    {
        title: "Start customization",
        description: "Choose from over 1000 dye colors and up to 24 neck label applications for an unmatched level of design precision.",
    },
    {
        title: "Real-time cost & delivery calculation",
        description: "Our control panel makes sure you never lose sight of time or budget, helping inform every design decision you make.",
    },
    {
        title: "Share and collaborate",
        description: "Garment production is often a team effort. With our sharing options you can easily present ideas for quick feedback or sign-off.",
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
