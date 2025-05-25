import React, { useEffect, useState } from 'react';
import header_element_img from "@/assets/home/h_s4/h_s4_1.jpg";
import {useMediaQuery} from "@mui/material";

const HomeHeaderElement = () => {
    const [widthPercent, setWidthPercent] = useState(50);
    const media1000 = useMediaQuery('(max-width: 1000px)');

    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.scrollY;
            const maxScroll = 600; // bu qiymatni kerakligicha sozlang
            const percent = Math.min(100, 50 + (scrollTop / maxScroll) * 50);
            setWidthPercent(percent);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div className="home_header_element" style={{background:"white" , height:`${media1000 ?  50 : widthPercent}vh`}}>
            <img src={header_element_img} alt="" style={{ width: `${media1000 ?  100 : widthPercent}%`, transition: 'width 0.3s ease' }} />
        </div>
    );
};

export default HomeHeaderElement;
