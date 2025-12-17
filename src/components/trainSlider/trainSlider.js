import React, {useEffect, useRef, useState} from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./trainSlider.css";

// import DoorLogo from '../../assets/icons/doorLogo';
import WaveDivider from '../../assets/icons/spiralLogo'

import Train1 from "../../assets/trains/train1.png";
import Train2 from "../../assets/trains/train2.png";
import Train3 from "../../assets/trains/train3.png";
import Train4 from "../../assets/trains/train4.png";
import Train5 from "../../assets/trains/train5.png";
import Train6 from "../../assets/trains/train6.png";
import Train7 from '../../assets/trains/train7.png';
import {Train1Content} from "./train1";
import {Train2Content} from "./train2";
import {Train3Content} from "./train3";
import {Train4Content} from "./train4";
import {Train5Content} from "./train5";
import {Train6Content} from "./train6";
import {Train7Content} from "./train7";

const isMobile = window.innerWidth <= 768;

const firstSlideWidthTranslate = isMobile ? '-70vw' : '-12vw';

const firstWagonHeight = (window.innerHeight) * 0.405;
const firstSlideWidth = isMobile ? window.innerWidth * 0.7 : window.innerWidth * 0.1;
const slideWidth = isMobile ? window.innerWidth : window.innerWidth ;


const SliderSection = ({setIsLoading}) => {
    const containerRef = useRef(null);
    const trackRef = useRef(null);
    const backgroundRef = useRef(null);
    // const doorRef = useRef();
    const [currentSlide, setCurrentSlide] = useState(0);

    /*useEffect(() => {
        if (currentSlide !== null && currentSlide !== 0) {
            scrollToSlide(currentSlide);
        }
    }, [currentSlide]);


    const scrollToSlide = (slideNumber) => {
        if (!trackRef.current || slideNumber === 0) return;

        let target = 0;

        if(slideNumber > 0) {
            target =  window.innerWidth* 0.6  + window.innerWidth * (slideNumber - 1)
        }

        gsap.to(window, { duration: 0.5, scrollTo: target });
    };*/

    /*const checkCurrentSlide = useCallback(() => {
        const slides = [1, 2, 3, 4, 5, 6, 7];

        // Проверяем blank-first - активен когда его центр на 20% от левого края
        const blankFirstElement = document.querySelector('.blank-first');
        if (blankFirstElement) {
            const rect = blankFirstElement.getBoundingClientRect();
            const elementCenter = rect.left + rect.width / 2;
            const targetPosition = window.innerWidth * 0.2;

            if (Math.abs(elementCenter - targetPosition) < window.innerWidth * 0.2) {
                // МГНОВЕННО скрываем все контенты при обнаружении blank-first
                setCurrentSlide(0);
                return 0;
            }
        }

        // Дополнительная проверка: если мы явно в начале (первый слайд еще не в центре)
        const firstSlideElement = document.querySelector('.slide1');
        if (firstSlideElement) {
            const rect = firstSlideElement.getBoundingClientRect();
            const slideCenter = rect.left + rect.width / 2;
            const viewportCenter = window.innerWidth / 2;

            // Если первый слайд еще не достиг центра (мы скроллим назад в начало)
            if (slideCenter > viewportCenter + window.innerWidth * 0.4) {
                setCurrentSlide(0);
                return 0;
            }
        }

        const activeSlide = slides.find(slideNumber => {
            const slideElement = document.querySelector(`.slide${slideNumber}`);
            if (!slideElement) return false;

            const rect = slideElement.getBoundingClientRect();
            const slideCenter = rect.left + rect.width / 2;
            const viewportCenter = window.innerWidth / 2;


            return Math.abs(slideCenter - viewportCenter) < window.innerWidth * 0.2;
        });

        if (activeSlide) {
            setCurrentSlide(activeSlide);
        }

        return activeSlide;
    }, []);*/

    useEffect(() => {
        // 🔹 Анимация только для первого поезда
        if(isMobile) {
            gsap.fromTo(
                ".slide1 img",
                { height: '150dvh', zIndex: 2100, x: '-73vw', y: "40vh" },
                {
                    height: `146px`,  /*362px',*/
                    y: 1,
                    x: 0,
                    zIndex: 2100,
                    ease: "power2.out",
                    scrollTrigger: {
                        trigger: ".blank-first",
                        start: "top top",
                        end: "+=50",
                        scrub: 2,
                    }
                }
            );
            gsap.fromTo(
                ".train1title",
                { opacity: 1,   y: "80px", x: firstSlideWidthTranslate},
                {
                    opacity: 0,
                    ease: "power2.out",
                    scrollTrigger: {
                        trigger: ".blank-first",
                        start: "top top",
                        end: "+=50",
                        scrub: 1,
                    }
                }
            );
        }
        else {
            gsap.fromTo(
                ".slide1 img",
                { height: '150dvh', zIndex: 100, x: "-10vw", y: "50vh" },
                {
                    height: `${firstWagonHeight}px`,  /*362px',*/
                    y: 0,
                    x: 0,
                    ease: "power2.out",
                    scrollTrigger: {
                        trigger: ".slide1",
                        start: "top top",
                        end: "+=50",
                        scrub: 2,
                    }
                }
            );

            gsap.fromTo(
                ".train1title",
                { opacity: 1,   y: "20vh", x: '-10vw'},
                {
                    opacity: 0,
                    ease: "power2.out",
                    scrollTrigger: {
                        trigger: ".slide1",
                        start: "top top",
                        end: "+=50",
                        scrub: 2,
                    }
                }
            );

            gsap.fromTo(
                ".door",
                { opacity: 1,   y: "80vh", x: firstSlideWidthTranslate, scale: 1},
                {
                    opacity: 0,
                    scale: 0.4,
                    x: 0,
                    ease: "power2.out",
                    scrollTrigger: {
                        trigger: ".blank-first",
                        start: "top top",
                        end: "+=50",
                        scrub: 2,
                    }
                }
            );
        }

            gsap.fromTo(
                ".absolute-content",
                { opacity: 0 },
                {
                    opacity: 0,
                    ease: "power2.out",
                    scrollTrigger: {
                        trigger: ".blank-first",
                        start: "top top",
                        end: "+=50vw",
                        scrub: 1,
                        invalidateOnRefresh: true
                    }
                }
            );

        const context = gsap.context(() => {
            const scrollDistance = trackRef.current.scrollWidth - window.innerWidth;

            /*ScrollTrigger.normalizeScroll(true);*/
            // Set up scroll listener to check current slide
            ScrollTrigger.create({
                id: "horizontal-scroll",
                trigger: containerRef.current,
                start: "top top",
                snap: {
                    snapTo: (value, self) => {
                        // const slideWidth = window.innerWidth;
                        // const firstSlideWidth = slideWidth * 0.1; // 60vw

                        const slidePositions = [
                            0, // Start of first slide (60vw)
                            firstSlideWidth, // End of first slide, start of second
                            firstSlideWidth + slideWidth,
                            firstSlideWidth + slideWidth * 2,
                            firstSlideWidth + slideWidth * 3,
                            firstSlideWidth + slideWidth * 4,
                            firstSlideWidth + slideWidth * 5,
                            firstSlideWidth + slideWidth * 6,
                            firstSlideWidth + slideWidth * 7,
                            // End of last slide
                        ];
                        const curValue = (value*scrollDistance);
                        let closestIndex = 0;
                        // Find closest slide position
                        const closest = slidePositions.reduce((prev, curr, index) => {
                            if (Math.abs(curr - curValue) < Math.abs(prev - curValue)) {
                                closestIndex = index; // Update the index
                                return curr;
                            }
                            return prev;
                        });
                        const velocity = Math.abs(self.getVelocity());
                        const isLowVelocity = velocity < 100;
                        // Set current slide when velocity is low AND we're near the center
                        if (isLowVelocity) {
                            // Use setTimeout to avoid potential React batching issues
                            //setTimeout(() => {
                                setCurrentSlide(closestIndex);
                            //}, 100);
                        }
                        // Only snap if velocity is low (user is not actively scrolling fast)
                        if (Math.abs(self.getVelocity()) < 100) {
                            return closest / scrollDistance;
                        }
                    },
                    duration: { min: 0.5, max: 1 },
                    ease: "power2.out"
                },
                end: `+=${scrollDistance}`,
                onUpdate: (self) => {
                    if(self.progress < 0.005) {
                        setCurrentSlide(0)
                    }
                },
                onLeave: () => {
                    setCurrentSlide(0)
                }
            });

            gsap.to(trackRef.current, {
                x: -scrollDistance,
                ease: "none",
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: "top top",
                    end: `+=${scrollDistance}`,
                    pin: true,
                    scrub: isMobile ? 2 : 0.2,
                    anticipatePin: 0,
                    pinSpacing: true,
                    invalidateOnRefresh: true,
                }
            });
        });

        return () => {
            context.revert();
            ScrollTrigger.getAll().forEach(t => t.kill());
        };
    }, []);

    // You can use this useEffect to react to slide changes
    useEffect(() => {
        // Останавливаем все текущие анимации контента
        /*gsap.set(".absolute-content", {
            opacity: 0,
            filter: "blur(10px)",
            pointerEvents: 'none'
        });
        gsap.killTweensOf(".absolute-content");*/


        if (currentSlide === 0) {
            // Мы в blank-first - скрываем ВЕСЬ контент включая Train1Content
            gsap.to(".absolute-content", {
                opacity: 0,
                duration: 0.3,
                filter: "blur(10px)",
                pointerEvents: 'none',
                ease: "power2.out"
            });
        }else if (currentSlide > 0) {
            // Hide all non-active content
            gsap.to(".absolute-content:not(.content" + currentSlide + ")", {
                opacity: 0,
                duration: 0.4,
                filter: "blur(10px)",
                pointerEvents: 'none'
            });

            // Show current slide content
            gsap.to(`.content${currentSlide}`, {
                opacity: 1,
                duration: 0.8,
                filter: "blur(0px)",
                pointerEvents: 'auto',
                ease: "power2.out"
            });
        } else {
            // Hide all content
            gsap.to(".absolute-content", {
                opacity: 0,
                duration: 0.4,
                filter: "blur(10px)",
                pointerEvents: 'none'
            });
        }
    }, [currentSlide]);


    /*useEffect(() => {
        const ctx = gsap.context(() => {
            // Дополнительная анимация самой двери
            gsap.fromTo(doorRef.current, {y: "80vh",},{
                y: "80vh",
                duration: 2,
                repeat: -1,
                yoyo: true,
                ease: "sine.inOut",
                rotation: 0.5
            });

        }, doorRef);

        return () => ctx.revert();
    }, []);*/

    return (
        <section className="slider-section" ref={containerRef}>
            <div className="animated-background" ref={backgroundRef} />
            <div className="absolute-content content1 blurred-text">
                <Train1Content currentSlide={currentSlide} />
            </div>
            <div className="absolute-content content2 blurred-text">
                <Train2Content currentSlide={currentSlide} />
            </div>
            <div className="absolute-content content3 blurred-text">
                <Train3Content currentSlide={currentSlide} />
            </div>
            <div className="absolute-content content4 blurred-text">
                <Train4Content currentSlide={currentSlide} />
            </div>
            <div className="absolute-content content5 blurred-text">
                <Train5Content currentSlide={currentSlide} />
            </div>
            <div className="absolute-content content6 blurred-text">
                <Train6Content currentSlide={currentSlide} />
            </div>
            <div className="absolute-content content7 blurred-text">
                <Train7Content currentSlide={currentSlide} />
            </div>
            <WaveDivider className="bottom" />
            <div className="slider-track" ref={trackRef}>
                <div className={'blank-first'}>
                    <div className="floor" />
                </div>
                {[Train1, Train2, Train3, Train4, Train5, Train6, Train7].map((img, i) => {
                    /*let Content;

                    switch(i) {
                        case 0: Content = Train1Content; break;
                        case 1: Content = Train2Content; break;
                        case 2: Content = Train3Content; break;
                        case 3: Content = Train4Content; break;
                        case 4: Content = Train5Content; break;
                        case 5: Content = Train6Content; break;
                        default: Content = () => null;
                    }*/

                    return(
                        <div data-speed="0.3" className={`slide slide${i + 1}`} id={`slideID-${i+1}`} key={i}>
                            <img src={img} onLoad={() => {
                                if(i === 1) {
                                setTimeout(() => {
                                setIsLoading(false);
                                }, 1500);}
                                }
                            } alt={`train${i + 1}`} className={"train"} />
                            {i === 0 &&
                                <>
                                <div className={'train1title'}>
                                    Логистика на скорости<br />новых измерений
                                    <div className={'train1description'}>
                                        Международный мультимодальный сервис<br />
                                        Китай → Россия → Air Cargo Hubs
                                    </div>
                                </div>
                                {/*{isMobile ? null :  <DoorLogo ref={doorRef} className="door" size={100} alt={''} />}*/}
                            </>
                            }
                            <div className="floor" />
                        </div>
                    )
                })}
                <div className={'blank-last'}>
                    <div className="floor" />
                </div>
            </div>
            {/*<div className="bottom">
                2025 (с) ООО «Квантумпост» <br />
                info@qntmpst.com
            </div>*/}
        </section>
    );
};

export default SliderSection;
