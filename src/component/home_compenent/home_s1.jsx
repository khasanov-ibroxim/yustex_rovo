import React, {useState, useRef} from 'react';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import {Link} from "react-router-dom";
import {Swiper, SwiperSlide} from "swiper/react";
import {Grid, Pagination, FreeMode, Mousewheel} from 'swiper/modules';
import {Home_s1_db} from "@/component/home_compenent/home_db/home_s1_db.jsx";

const HomeS1 = () => {
    const [showAll, setShowAll] = useState(false);
    const visibleItems = showAll ? Home_s1_db.slice(0, 20) : Home_s1_db.slice(0, 15);
    const swiperRef_s1 = useRef(null);

    const handleHover = (index) => {
        if (swiperRef_s1.current && swiperRef_s1.current.slideTo) {
            swiperRef_s1.current.slideTo(index - 1); // -1 markazga to‘g‘ri kelsin
        }
    };

    return (
        <section className={"home_s1"}>
            <div className="home_s1_top current-container">
                <div className="home_s1_top_left">
                    <span>Case Studies</span>
                    <h2>How the best brands use Assembly</h2>
                </div>
                <div className="home_s1_top_right">
                    <p>Brand is more important than ever, and clothes are the ultimate storytellers. See for yourself
                        how industry leaders are using merch to build brand and community.</p>
                    <Link to={"#"}>Discover more stories <ArrowForwardIcon/></Link>
                </div>
            </div>

            <div className="home_s1_content">
                <Swiper
                    onSwiper={(swiper) => (swiperRef_s1.current = swiper)}
                    slidesPerView={3.5}
                    grid={{
                        rows: Math.ceil(visibleItems.length / 5),
                    }}
                    freeMode={true}
                    spaceBetween={30}
                    pagination={{clickable: true, type: "progressbar"}}
                    modules={[Grid, Pagination, FreeMode, Mousewheel]}
                    mousewheel={{forceToAxis: true}}
                    breakpoints={{
                        320: {
                            slidesPerView: 1,

                        },
                        576: {
                            slidesPerView: 1.5,
                            grid: {
                                rows: Math.ceil(visibleItems.length / 2),
                            },
                        },
                        768: {
                            slidesPerView: 2.5,
                            grid: {
                                rows: Math.ceil(visibleItems.length / 3),
                            },
                        },
                        1024: {
                            slidesPerView: 3.5,
                            grid: {
                                rows: Math.ceil(visibleItems.length / 5),
                            },
                        },
                    }}
                    className="home_s1_swiper"
                >
                    {visibleItems.map((item, index) => (
                        <SwiperSlide
                            key={index}
                            onMouseEnter={() => handleHover(index)}
                            style={{
                                background: `url(${item.img_url})`,
                                backgroundSize: "cover",
                                backgroundPosition: "center",
                                borderRadius: "10px",
                                transition: "transform 1s ease, box-shadow 0.3s ease",
                            }}
                            className={"h1_swiper_item"}
                        >
                            <div className="h1_swiper_top">
                                <div className="h1_swiper_top_box">
                                    <div className="h1_swiper_top_element_1">{item.type_dress}</div>
                                    <div className="h1_swiper_top_element_2"><span
                                        style={{background: `${item.color_dress.color_code}`}}></span>{item.color_dress.color_name}
                                    </div>
                                </div>

                                <div className="h1_swiper_top_element_3">{item.print}</div>
                            </div>
                            <div className="h1_swiper_bottom">
                                <h3>Dinamo</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam distinctio, dolorum
                                    fugiat harum in quasi quos ratione unde voluptatum. </p>
                                <Link to={"#"} className="h1_swiper_bottom_link">Read more <ArrowForwardIcon/></Link>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>

            {!showAll && (
                <div className="load-more-btn" onClick={() => setShowAll(true)}>
                    <span>Load More</span>
                </div>
            )}
        </section>
    );
};

export default HomeS1;
