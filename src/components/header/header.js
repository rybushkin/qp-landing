import React, {useEffect, useRef, useState} from "react";
import "./header.css";
import Logo from "../../assets/icons/logoMain";
import AnimatedContent from "../../tools/animatedContent";

const isMobile = window.innerWidth <= 768;

const Header = () => {
    const headerRef = useRef(null);
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const closeMenu = () => {
        setIsMenuOpen(false);
    };

    const handleLinkClick = () => {
        setIsMenuOpen(false)
    };

    // Close menu when pressing Escape key
    useEffect(() => {
        const handleEscape = (e) => {
            if (e.key === 'Escape') {
                closeMenu();
            }
        };

        if (isMenuOpen) {
            document.addEventListener('keydown', handleEscape);
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }

        return () => {
            document.removeEventListener('keydown', handleEscape);
            document.body.style.overflow = 'unset';
        };
    }, [isMenuOpen]);

    useEffect(() => {
        const header = headerRef.current;

        const handleScroll = () => {
            const scrollY = window.scrollY;

            if (scrollY > 40) {
                header.classList.add('scrolled');
                setIsScrolled(true);
            } else {
                setIsScrolled(false)
                header.classList.remove('scrolled');
            }
        };

        window.addEventListener('scroll', handleScroll);
        // Trigger once on mount to set initial state
        handleScroll();

        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div>
            <header ref={headerRef} className="header">
                <Logo className="logo" height={68} />

                {isScrolled ? <AnimatedContent className="menu">
                    <a className="menuItem">О нас</a>
                    <a className="menuItem">Услуги</a>
                    <a className="menuItem">Тарифы</a>
                    <a className="menuItem">Контакты</a>
                </AnimatedContent>: null}

                {/* Desktop button - hidden on mobile */}
                {isScrolled ? <a href="#calculator" className="button">
                    Рассчитать стоимость
                </a> : null}

                {/* Mobile burger menu - visible on mobile when scrolled */}
                {isScrolled ?
                <button
                    className={`burger ${isMenuOpen ? 'open' : ''}`}
                    onClick={toggleMenu}
                    aria-label={isMenuOpen ? "Закрыть меню" : "Открыть меню"}
                >
                    <span></span>
                    <span></span>
                    <span></span>
                </button> : null}
            </header>

            {/* Mobile menu dropdown */}
            {isMobile ?
            <div className={`mobile-menu ${isMenuOpen ? 'open' : ''}`}>
                {/* Close button */}
                <button
                    className="mobile-menu-close"
                    onClick={closeMenu}
                    aria-label="Закрыть меню"
                >
                    <div className="mobile-menu-close-icon"></div>
                </button>

                <nav>
                    <ul>
                        <li><a href="#about" onClick={handleLinkClick}>О нас</a></li>
                        <li><a href="#services" onClick={handleLinkClick}>Услуги</a></li>
                        <li><a href="#portfolio" onClick={handleLinkClick}>Тарифы</a></li>
                        <li><a href="#contact" onClick={handleLinkClick}>Контакты</a></li>
                    </ul>
                    <a
                        href="#calculator"
                        className="button-mobile"
                        onClick={handleLinkClick}
                    >
                        Рассчитать стоимость
                    </a>
                </nav>
            </div>
                :null
            }
        </div>
    );
};

export default Header;
