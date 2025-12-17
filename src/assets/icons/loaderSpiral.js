import React, { useRef, useEffect } from 'react';
import { gsap } from "gsap";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";

// Register the MotionPathPlugin
gsap.registerPlugin(MotionPathPlugin);

const LoaderSpiral = ({
                          height = 85,
                          strokeColor = "#080708",
                          strokeWidth = 10,
                          opacity = 1,
                          className = "",
                          style = {}
                      }) => {
    const containerStyle = {
        width: '110%',
        minWidth: '110vw',
        ...style
    };

    const circleRef = useRef(null);
    const svgRef = useRef(null);

    useEffect(() => {
        /*if (circleRef.current && svgRef.current) {
            // Animate the circle along the path
            gsap.to(circleRef.current, {
                motionPath: {
                    path: "#takeMe",
                    align: "#takeMe",
                    alignOrigin: [0.5, 0.5]
                },
                duration: 4,
                ease: "none",
                repeat: -1 // Infinite loop
            });
        }*/
    }, []);

    return (
        <div className={className} style={containerStyle}>
            <svg
                ref={svgRef}
                width={'100%'}
                height={0.121 * window.innerWidth  }
                viewBox="0 0 1280 51"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <defs>
                    <linearGradient id="animatedGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="#DF2A35">
                            <animate
                                attributeName="offset"
                                values="0;0.15;0"
                                dur="3s"
                                repeatCount="indefinite"
                            />
                        </stop>
                        <stop offset="30%" stopColor="#F9BA08">
                            <animate
                                attributeName="offset"
                                values="0.3;0.5;0.3"
                                dur="7s"
                                repeatCount="indefinite"
                            />
                        </stop>
                        <stop offset="50%" stopColor="#E7E8E6">
                            <animate
                                attributeName="offset"
                                values="0.5;0.65;0.5"
                                dur="7s"
                                repeatCount="indefinite"
                            />
                        </stop>
                        <stop offset="70%" stopColor="#F9BA08">
                            <animate
                                attributeName="offset"
                                values="0.7;0.85;0.7"
                                dur="7s"
                                repeatCount="indefinite"
                            />
                        </stop>
                        <stop offset="100%" stopColor="#DF2A35">
                            <animate
                                attributeName="offset"
                                values="1;0.8;1"
                                dur="10s"
                                repeatCount="indefinite"
                            />
                        </stop>
                    </linearGradient>
                </defs>
                <path
                    id="takeMe"
                    transform="translate(0,5)"
                    d="M0 21.5C14.2222 -1.83333 28.4444 -1.83333 42.6667 21.5C56.8889 44.8333 71.1111 44.8333 85.3333 21.5C99.5556 -1.83333 113.778 -1.83333 128 21.5C142.222 44.8333 156.444 44.8333 170.667 21.5C184.889 -1.83333 199.111 -1.83333 213.333 21.5C227.556 44.8333 241.778 44.8333 256 21.5C270.222 -1.83333 284.444 -1.83333 298.667 21.5C312.889 44.8333 327.111 44.8333 341.333 21.5C355.556 -1.83333 369.778 -1.83333 384 21.5C398.222 44.8333 412.444 44.8333 426.667 21.5C440.889 -1.83333 455.111 -1.83333 469.333 21.5C483.556 44.8333 497.778 44.8333 512 21.5C526.222 -1.83333 540.444 -1.83333 554.667 21.5C568.889 44.8333 583.111 44.8333 597.333 21.5C611.556 -1.83333 625.778 -1.83333 640 21.5C654.222 44.8333 668.445 44.8333 682.667 21.5C696.889 -1.83333 711.111 -1.83333 725.333 21.5C739.556 44.8333 753.778 44.8333 768 21.5C782.222 -1.83333 796.444 -1.83333 810.667 21.5C824.889 44.8333 839.111 44.8333 853.333 21.5C867.556 -1.83333 881.778 -1.83333 896 21.5C910.222 44.8333 924.444 44.8333 938.667 21.5C952.889 -1.83333 967.111 -1.83333 981.333 21.5C995.556 44.8333 1009.78 44.8333 1024 21.5C1038.22 -1.83333 1052.44 -1.83333 1066.67 21.5C1080.89 44.8333 1095.11 44.8333 1109.33 21.5C1123.56 -1.83333 1137.78 -1.83333 1152 21.5C1166.22 44.8333 1180.44 44.8333 1194.67 21.5C1208.89 -1.83333 1223.11 -1.83333 1237.33 21.5C1251.56 44.8333 1265.78 44.8333 1280 21.5"
                    // stroke={'#080708'}
                    stroke="url(#animatedGradient)"
                    strokeWidth={strokeWidth}
                    opacity={opacity}
                />
               {/* <circle
                    ref={circleRef}
                    r="15"

                    fill="#080708"
                    opacity="1"
                />*/}
            </svg>
        </div>
    );
};

export default LoaderSpiral;
