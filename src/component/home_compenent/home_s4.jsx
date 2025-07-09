import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import Skeleton from "@mui/material/Skeleton";

import h_1 from "@/assets/home/h_s4/image_2025-07-07_21-52-31.png";
import h_2 from "@/assets/home/h_s4/DEW05904.jpg";
import h_3 from "@/assets/home/h_s4/DEW05960.jpg";
import h_4 from "@/assets/home/h_s4/DEW06420.jpg";

const steps = [
    {
        id: 1,
        title: "Order a sample",
        description: "Try before you buy, it's that simple.",
    },
    {
        id: 2,
        title: "Explore design options",
        description:
            "Upload your artwork and choose your customization options. We’ll automatically give you a transparent price!",
    },
    {
        id: 3,
        title: "Add finishing touches",
        description:
            "Don't forget about adding a custom woven neck label. It's all in the details.",
    },
    {
        id: 4,
        title: "Your order is on it's way!",
        description:
            "Share your custom hoodies, tees, and caps with your community to expand your brand.",
    },
];

const HomeS4 = () => {
    const [currentStep, setCurrentStep] = useState(1);
    const [progressWidths, setProgressWidths] = useState(Array(steps.length).fill(0));
    const [imageLoaded, setImageLoaded] = useState(false);

    useEffect(() => {
        setImageLoaded(false); // Yangi rasm yuklanadi

        setProgressWidths(Array(steps.length).fill(0));
        const timer = setTimeout(() => {
            setProgressWidths((prev) => {
                const newProgress = [...prev];
                newProgress[currentStep - 1] = 100;
                return newProgress;
            });
        }, 50);

        const stepTimer = setTimeout(() => {
            setCurrentStep((prev) => (prev === steps.length ? 1 : prev + 1));
        }, 5000);

        return () => {
            clearTimeout(timer);
            clearTimeout(stepTimer);
        };
    }, [currentStep]);

    const handleStepClick = (id) => {
        setCurrentStep(id);
    };

    const currentImage =
        currentStep === 1 ? h_1 :
            currentStep === 2 ? h_2 :
                currentStep === 3 ? h_3 :
                    h_4;

    return (
        <section className="current-container" style={{ marginTop: "140px", marginBottom: "100px" }}>
            <div className="home_s1_top_left" style={{ marginBottom: "40px" }}>
                <span>How it works</span>
                <h2>Premium merch <br />now</h2>
                <Link to={"#"} style={{ color: "black", textDecoration: "none", fontWeight: "600" }}>
                    Check out our products now <ArrowForwardIcon style={{ marginLeft: "10px" }} />
                </Link>
            </div>

            <div className="d-flex flex-wrap border-bottom pb-4">
                {steps.map((step, index) => (
                    <div
                        key={step.id}
                        className="px-3 flex-fill col-lg-3"
                        onClick={() => handleStepClick(step.id)}
                        style={{ cursor: "pointer" }}
                    >
                        <div
                            className={`fw-bold ${currentStep === step.id ? "text-dark" : "text-secondary"}`}
                            style={{ fontSize: "20px" }}
                        >
                            {step.id}. {step.title}
                        </div>
                        <div className="progress mt-3 mb-3" style={{ height: "2px" }}>
                            <div
                                className="progress-bar"
                                role="progressbar"
                                style={{
                                    width: `${progressWidths[index]}%`,
                                    backgroundColor: currentStep === step.id ? "black" : "gray",
                                    transition: progressWidths[index] > 0 ? "width 5s linear" : "none",
                                }}
                            ></div>
                        </div>
                        <div
                            className="small mt-1 mb-2"
                            style={{
                                fontSize: "16px",
                                fontWeight: "600",
                                color: currentStep === step.id ? "black" : "gray",
                            }}
                        >
                            {step.description}
                        </div>
                    </div>
                ))}
            </div>

            <div className="home_s4_img mt-4">
                {!imageLoaded && (
                    <Skeleton
                        variant="rectangular"
                        width="100%"
                        height={500}
                        animation="wave"
                        style={{ borderRadius: "12px" }}
                    />
                )}
                <img
                    src={currentImage}
                    alt="step"
                    style={{
                        display: imageLoaded ? "block" : "none",
                        width: "100%",
                        borderRadius: "12px",
                        transition: "opacity 0.3s ease-in-out"
                    }}
                    onLoad={() => setImageLoaded(true)}
                />
            </div>
        </section>
    );
};

export default HomeS4;
