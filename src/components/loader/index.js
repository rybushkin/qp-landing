import React, { useEffect, useRef, useState } from 'react';
import { gsap } from "gsap";
import styles from './Loader.module.css';
import LoaderSpiral from "../../assets/icons/loaderSpiral";

const GSAPLoader = ({ onComplete }) => {
    const loaderRef = useRef(null);
    const [shouldRemove, setShouldRemove] = useState(false);

    useEffect(() => {
        if (onComplete) {
            gsap.to(loaderRef.current, {
                opacity: 0,
                duration: 1,
                delay: 2,          // <- waits 2 seconds before fading out
                ease: "power2.out",
                onComplete: () => {
                    setTimeout(() => {
                        setShouldRemove(true)
                    }, 200)
                }
            });
        }

        return () => {}
    }, [onComplete]);


    if (shouldRemove) {
        return null;
    }

    return (
        <div
            ref={loaderRef}
            className={onComplete ? `${styles.gsapLoader} ${styles.empty}` : styles.gsapLoader}
        >
            <div className="loader-content">
                <LoaderSpiral />
            </div>
        </div>
    );
};

export default GSAPLoader;
