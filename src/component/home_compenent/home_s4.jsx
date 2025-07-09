import React, {useEffect, useState} from "react";
import {Link} from "react-router-dom";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import h_1 from "@/assets/home/h_s4/image_2025-07-07_21-52-31.png"
import h_2 from "@/assets/home/h_s4/DEW05904.jpg"
import h_3 from "@/assets/home/h_s4/DEW05960.jpg"
import h_4 from "@/assets/home/h_s4/DEW06420.jpg"

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
        description: "Don't forget about adding a custom woven neck label. It's all in the details.",
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
    const [progressWidths, setProgressWidths] = useState(
        Array(steps.length).fill(0)
    );

    useEffect(() => {
        // Progressni faqat hozirgi step uchun 0 dan 100 ga oshiramiz
        setProgressWidths(Array(steps.length).fill(0)); // Barchasini 0 ga qaytar
        const timer = setTimeout(() => {
            // Hozirgi step uchun progressni 100% qilamiz
            setProgressWidths((prev) => {
                const newProgress = [...prev];
                newProgress[currentStep - 1] = 100;
                return newProgress;
            });
        }, 50); // ozgina kechiktiramiz, 0% -> 100% transition ko'rinishi uchun

        // 5 sekunddan keyin stepni o'zgartiramiz
        const stepTimer = setTimeout(() => {
            setCurrentStep((prev) => (prev === steps.length ? 1 : prev + 1));
        }, 5000);

        return () => {
            clearTimeout(timer);
            clearTimeout(stepTimer);
        };
    }, [currentStep]);

    // Stepga bosilganda
    const handleStepClick = (id) => {
        setCurrentStep(id);
    };

    return (
        <section className="current-container" style={{marginTop: "140px" , marginBottom:"100px" }}>

            <div className="home_s1_top_left" style={{marginBottom: "40px"}}>
                <span>How it works</span>
                <h2>Premium merch <br/>now</h2>
                <Link to={"#"} style={{
                    color: "black",
                    textDecoration: "none",
                    fontWeight: "600"
                }}>Check out our products now <ArrowForwardIcon style={{marginLeft: "10px"}}/> </Link>
            </div>


            <div className="d-flex flex-wrap border-bottom pb-4" >
                {steps.map((step, index) => (
                    <div
                        key={step.id}
                        className="px-3 flex-fill col-lg-3"
                        onClick={() => handleStepClick(step.id)}
                        style={{cursor: "pointer"}}
                    >
                        <div
                            className={`fw-bold  ${
                                currentStep === step.id ? "text-dark" : "text-secondary"
                            }`}
                            style={{fontSize: "20px"}}
                        >
                            {step.id}. {step.title}
                        </div>
                        <div className="progress mt-3 mb-3" style={{height: "2px"}}>
                            <div
                                className="progress-bar"
                                role="progressbar"
                                style={{
                                    width: `${progressWidths[index]}%`,
                                    backgroundColor:
                                        currentStep === step.id ? "black" : "gray",
                                    transition:
                                        progressWidths[index] > 0
                                            ? "width 5s linear"
                                            : "none",
                                }}
                            ></div>
                        </div>

                        <div className=" small mt-1 mb-2" style={{
                            fontSize: "16px", fontWeight: "600",
                            color:
                                currentStep === step.id ? "black" : "gray",
                        }}>
                            {step.description}
                        </div>


                    </div>
                ))}
            </div>
            <div className="home_s4_img">
                <img   src={
                    currentStep === 1
                        ? h_1
                        : currentStep === 2
                            ? h_2
                            : currentStep === 3
                                ? h_3
                                : h_4
                } alt=""/>
            </div>
        </section>
    );
};

export default HomeS4;
