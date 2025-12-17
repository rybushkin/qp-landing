import React, {useEffect, useState} from 'react'
import styles from "./Train3.module.css";
import BlurText from '../../../tools/blurText/index';

const Train3Content = ({currentSlide}) => {
    const [anim, setAnim] = useState(0);

    useEffect(() => {
        if(currentSlide === 3) {
            setAnim(prev => prev + 1)
        }
    }, [currentSlide])

    return (
        <div className={styles.content} key={anim}>
            <div className={styles.title}>
                <BlurText
                    text="Совокупная емкость"
                    delay={50}
                    animateBy="words"
                />
                <BlurText
                    text="в месяц"
                    delay={100}
                    animateBy="words"
                />
            </div>
            <div className={styles.numbers}>
                <div className={styles.number}>
                    <BlurText
                        text="22 500 м³"
                        delay={150}
                        animateBy="letters"
                        className={styles.bigNumber}
                    />
                    <BlurText
                        text="3 900 т"
                        delay={200}
                        animateBy="letters"
                        className={styles.bigNumber}
                    />
                </div>
            </div>
        </div>
    )
}

export {Train3Content}
