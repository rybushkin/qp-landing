import React, {useEffect, useState} from 'react'
import styles from './Train2.module.css'
import BlurText from '../../../tools/blurText/index'


const Train2Content = ({currentSlide}) => {
    const [anim, setAnim] = useState(0);

    useEffect(() => {
        if(currentSlide === 2) {
            setAnim(prev => prev + 1)
        }
    }, [currentSlide])

    return (
        <div className={styles.content} key={anim}>
            <div className={styles.title}>
                <BlurText
                    text="Вместимость"
                    delay={50}
                    animateBy="words"
                    className={styles.titleText}
                />
            </div>
            <div className={styles.numbers}>
                <div className={styles.item}>
                    <div className={styles.number}>
                        <BlurText
                            text="150 м³"
                            delay={100}
                            animateBy="letters"
                        />
                        <BlurText
                            text="25 т"
                            delay={150}
                            animateBy="letters"
                        />
                    </div>
                    <BlurText
                        text="багажных вагонов"
                        delay={200}
                        animateBy="words"
                        className={styles.bottomText}
                    />
                </div>
                <div className={styles.item}>
                    <div className={styles.number}>
                        <BlurText
                            text="200 м³"
                            delay={250}
                            animateBy="letters"
                        />
                        <BlurText
                            text="35 т"
                            delay={300}
                            animateBy="letters"
                        />
                    </div>
                    <BlurText
                        text="вагонов с проводниками"
                        delay={350}
                        animateBy="words"
                        className={styles.bottomText}
                    />
                </div>
            </div>
        </div>
    )
}

export {Train2Content}
