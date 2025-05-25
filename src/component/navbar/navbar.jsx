import React, { useEffect, useState } from 'react';
import "./navbar.css";
import { Link } from "react-router-dom";
import { CloseOutlined, MenuOutlined } from "@ant-design/icons";
import logo from "@/assets/logo.svg";
import { HOME, PRODUCT, PRODUCTION } from "@/utils/consts.jsx";

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isMobile, setIsMobile] = useState(window.matchMedia('(max-width: 1000px)').matches);
    const [scrollDirection, setScrollDirection] = useState('up');
    const [atTop, setAtTop] = useState(true);

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
        <nav className={`navbar ${scrollDirection === 'down' ? 'navbar--hidden' : ''} ${atTop ? 'navbar--transparent' : 'navbar--solid'}`}>
            <div className={"nav_full_box container-sm"}>
                <div className="nav_top_for_home">
                    <div className="nav_logo">
                        <img src={logo} alt="Logo" />
                    </div>
                </div>
                <div className={`nav_menu ${isMenuOpen ? 'open' : ''}`}>
                    <ul>
                        <li><Link to={HOME}>главная</Link></li>
                        <li><Link to={PRODUCTION}>производство</Link></li>
                        <li><Link to={PRODUCT}>продукция</Link></li>
                    </ul>
                </div>
                <div className="nav_end">
                    <div className="lang_nav" style={isMobile ? { display: "none" } : { display: "flex" }}>
                        <Link to={"#"} className="nav_end_btn">Contact</Link>
                    </div>
                    <div className="navburger" onClick={toggleMenu}>
                        {isMenuOpen ? <CloseOutlined /> : <MenuOutlined />}
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
