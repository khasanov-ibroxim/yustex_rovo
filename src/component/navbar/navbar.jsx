import React, {useEffect, useState} from 'react';
import "./navbar.css";
import {Link} from "react-router-dom";
import {CloseOutlined, DownOutlined, MenuOutlined} from "@ant-design/icons";
import {BRAND_AKYUS, COMPANY, CONTACT, HOME, PRODUCT, PRODUCTION} from "@/utils/consts.jsx";
import logo from "@/assets/logoYustex.png"
import {Dropdown, Space} from "antd";
import {languages} from "@/utils/lang/langs.jsx";
import {useTranslation} from "react-i18next";
import {useLanguage} from "@/utils/lang/LangContext.jsx";

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isMobile, setIsMobile] = useState(window.matchMedia('(max-width: 1000px)').matches);
    const [scrollDirection, setScrollDirection] = useState('up');
    const [atTop, setAtTop] = useState(true);
    const {handleLanguageChange, selectedLanguage} = useLanguage();
    const {t} = useTranslation();

    useEffect(() => {
        const handleResize = (e) => {
            setIsMobile(e.matches);
        };

        const windowMatch = window.matchMedia('(max-width: 1000px)');
        windowMatch.addEventListener('change', handleResize);
        return () => windowMatch.removeEventListener('change', handleResize);
    }, []);

    // Scroll event
    useEffect(() => {
        let lastScrollY = window.scrollY;

        const handleScroll = () => {
            const currentScrollY = window.scrollY;
            if (currentScrollY > lastScrollY && currentScrollY > 100) {
                setScrollDirection('down');
            } else {
                setScrollDirection('up');
            }
            setAtTop(currentScrollY < window.innerHeight); // 100vh dan kichik bo‘lsa true
            lastScrollY = currentScrollY;
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <nav
            className={`navbar ${scrollDirection === 'down' ? 'navbar--hidden' : ''} ${atTop ? 'navbar--transparent' : 'navbar--solid'}`}>
            <div className={"nav_full_box current-container"}>
                <div className="nav_top_for_home">
                    <Link to={HOME} className="nav_logo" onClick={() =>{
                        window.scrollTo({top: 0, behavior: "smooth"});
                        setIsMenuOpen(false);
                    }}>
                        <img src={logo} alt=""/>
                    </Link>
                </div>
                <div className={`nav_menu ${isMenuOpen ? 'open' : ''}`}>
                    <ul>
                        <li><Link to={COMPANY} onClick={() => {
                            window.scrollTo({top: 0, behavior: "smooth"});
                            setIsMenuOpen(false);
                        }}>{t("navbar.company")}</Link></li>
                        <li className={"dropdown_nav"}><Link to={"#"}>{t("navbar.brand")}</Link>
                            <ol className={"dropdown_menu"}>
                                <li><Link onClick={() => {
                                    window.scrollTo({top: 0, behavior: "smooth"});
                                    setIsMenuOpen(false);
                                }} to={BRAND_AKYUS}>Akyus</Link></li>
                                <li><Link onClick={() => {
                                    window.scrollTo({top: 0, behavior: "smooth"});
                                    setIsMenuOpen(false);
                                }} to={"#"}>Liberty</Link></li>
                                <li><Link onClick={() => {
                                    window.scrollTo({top: 0, behavior: "smooth"});
                                    setIsMenuOpen(false);
                                }} to={"#"}>Магазины</Link></li>
                            </ol>
                        </li>
                        <li><Link to={PRODUCTION}
                                  onClick={() => {
                                      window.scrollTo({top: 0, behavior: "smooth"});
                                      setIsMenuOpen(false);
                                  }}>{t("navbar.production")}</Link></li>
                        <li><Link to={PRODUCT}
                                  onClick={() => {
                                      window.scrollTo({top: 0, behavior: "smooth"});
                                      setIsMenuOpen(false);
                                  }}>{t("navbar.product")}</Link></li>
                        <li><Link to={"https://tashkent.hh.uz/"}>{t("navbar.vacancy")}</Link></li>
                        <li style={isMobile ? {display: "flex"} : {display: "none"}}>
                            <Link to={CONTACT}
                                  onClick={() => {
                                      window.scrollTo({top: 0, behavior: "smooth"});
                                      setIsMenuOpen(false);
                                  }}
                                  className="nav_end_btn">{t("navbar.contact")}</Link>
                        </li>
                    </ul>
                </div>
                <div className="nav_end">
                    <div className="lang_nav">
                        <Dropdown
                            menu={{
                                items: languages,
                                onClick: handleLanguageChange,
                            }}
                            trigger={["click"]}
                        >
                            <a onClick={(e) => e.preventDefault()}>
                                <Space>
                                    {selectedLanguage.label} <DownOutlined/>
                                </Space>
                            </a>
                        </Dropdown>
                    </div>

                    <div style={isMobile ? {display: "none"} : {display: "flex"}}>
                        <Link to={CONTACT}
                              onClick={() =>{
                                  window.scrollTo({top: 0, behavior: "smooth"});
                                  setIsMenuOpen(false);
                              }}
                              className="nav_end_btn">{t("navbar.contact")}</Link>
                    </div>

                    <div className="navburger" onClick={toggleMenu}>
                        {isMenuOpen ? <CloseOutlined/> : <MenuOutlined/>}
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
