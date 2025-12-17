import React, {useEffect, useState} from 'react'
import styles from './Train1.module.css'
import BlurText from '../../../tools/blurText/index'

const Train1Content = ({currentSlide}) => {

   const [anim, setAnim] = useState(0);

    useEffect(() => {
        if(currentSlide === 1) {
            setAnim(prev => prev + 1)
        }
    }, [currentSlide])



    return (
        <div className={styles.content} key={anim}>
            <div className={styles.title}>
                <BlurText
                    text="Подвижной состав"
                    delay={50}
                    animateBy="words"
                />
                <BlurText
                    text="Хуньчунь—Владимир—Москва"
                    delay={100}
                    animateBy="words"
                    className={styles.italic}
                />
            </div>
            <div className={styles.numbers}>
                <div className={styles.item}>
                    <BlurText
                        text="36"
                        delay={150}
                        animateBy="letters"
                        className={styles.number}
                    />
                    <BlurText
                        text="багажных вагонов"
                        delay={200}
                        animateBy="words"
                        className={styles.bottomText}
                    />
                </div>
                <div className={styles.item}>
                    <BlurText
                        text="20"
                        delay={250}
                        animateBy="letters"
                        className={styles.number}
                    />
                    <BlurText
                        text="вагонов с проводниками"
                        delay={300}
                        animateBy="words"
                        className={styles.bottomText}
                    />
                </div>
                <div className={styles.item}>
                    <BlurText
                        text="40"
                        delay={350}
                        animateBy="letters"
                        className={styles.number}
                    />
                    <BlurText
                        text="Экспедиторов"
                        delay={400}
                        animateBy="words"
                        className={styles.bottomText}
                    />
                </div>
            </div>
        </div>
    )
}

export {Train1Content}
