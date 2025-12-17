import React, {useEffect, useState} from 'react'
import styles from './Train5.module.css'
import BlurText from '../../../tools/blurText/index'

import Flag1 from '../../../assets/img/flag1.png';
import Flag2 from '../../../assets/img/flag2.png';
import Flag3 from '../../../assets/img/flag3.png';
import Flag4 from '../../../assets/img/flag4.png';
import Flag5 from '../../../assets/img/flag5.png';

const Train5Content = ({currentSlide}) => {
    const [anim, setAnim] = useState(0);

    useEffect(() => {
        if(currentSlide === 5) {
            setAnim(prev => prev + 1)
        }
    }, [currentSlide])

    return (
        <div className={styles.content} key={anim}>
            <div className={styles.title}>
                <BlurText
                    text="География перевозок"
                    delay={50}
                    animateBy="words"
                    className={styles.titleText}
                />
            </div>
            <div className={styles.wrap}>
                <div className={styles.numbers}>
                    <div className={styles.item}>
                        <img src={Flag1} className={styles.flag} alt="" />
                        <div className={styles.subtitle}>
                            <BlurText
                                text="Хуньчунь,"
                                delay={100}
                                animateBy="words"
                            />
                            <BlurText
                                text="Китай"
                                delay={150}
                                animateBy="words"
                            />
                        </div>
                        <div className={styles.subcontent}>
                            <BlurText
                                text="Консолидационный"
                                delay={200}
                                animateBy="words"
                            />
                            <BlurText
                                text="таможенный СВХ:"
                                delay={250}
                                animateBy="words"
                            />
                            <BlurText
                                text="ж/д, авто"
                                delay={300}
                                animateBy="words"
                            />
                        </div>
                    </div>

                    <div className={styles.item}>
                        <img src={Flag2} className={styles.flag} alt="" />
                        <div className={styles.subtitle}>
                            <BlurText
                                text="Владимир,"
                                delay={350}
                                animateBy="words"
                            />
                            <BlurText
                                text="Россия"
                                delay={400}
                                animateBy="words"
                            />
                        </div>
                        <div className={styles.subcontent}>
                            <BlurText
                                text="Консолидационный"
                                delay={450}
                                animateBy="words"
                            />

                            <BlurText
                                text="таможенный СВХ:"
                                delay={500}
                                animateBy="words"
                            />

                            <BlurText
                                text="ж/д, авто"
                                delay={550}
                                animateBy="words"
                            />
                        </div>
                    </div>

                    <div className={styles.item}>
                        <img src={Flag3} className={styles.flag} alt={""} />
                        <div className={styles.subtitle}>
                            <BlurText
                                text="Внуково,"
                                delay={600}
                                animateBy="words"
                            />
                            <BlurText
                                text="Москва, Россия"
                                delay={650}
                                animateBy="words"
                            />
                        </div>
                        <div className={styles.subcontent}>
                            <BlurText
                                text="Консолидационный"
                                delay={700}
                                animateBy="words"
                            />
                            <BlurText
                                text="таможенный СВХ:"
                                delay={750}
                                animateBy="words"
                            />

                            <BlurText
                                text="ж/д, авто"
                                delay={800}
                                animateBy="words"
                            />
                        </div>
                    </div>

                    <div className={styles.item}>
                        <img src={Flag4} className={styles.flag} alt={""} />
                        <div className={styles.subtitle}>
                            <BlurText
                                text="Аэропорт"
                                delay={850}
                                animateBy="words"
                            />
                            <BlurText
                                text="Стамбул, Турция"
                                delay={900}
                                animateBy="words"
                            />
                        </div>
                        <div className={styles.subcontent}>
                            <BlurText
                                text="Консолидационный"
                                delay={950}
                                animateBy="words"
                            />
                            <BlurText
                                text="таможенный СВХ:"
                                delay={1000}
                                animateBy="words"
                            />

                            <BlurText
                                text="ж/д, авто"
                                delay={1050}
                                animateBy="words"
                            />
                        </div>
                    </div>

                    <div className={styles.item}>
                        <img src={Flag5} className={styles.flag} alt={""} />
                        <div className={styles.subtitle}>
                            <BlurText
                                text="Дубай и пр."
                                delay={1100}
                                animateBy="words"
                            />
                        </div>
                        <div className={styles.subcontent}>
                            <BlurText
                                text="Консолидационный"
                                delay={1150}
                                animateBy="words"
                            />

                            <BlurText
                                text="таможенный СВХ:"
                                delay={1200}
                                animateBy="words"
                            />

                            <BlurText
                                text="ж/д, авто"
                                delay={1250}
                                animateBy="words"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export {Train5Content}
