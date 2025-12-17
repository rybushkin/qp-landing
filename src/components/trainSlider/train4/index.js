import React, {useEffect, useState} from 'react'
import styles from './Train4.module.css'
import BlurText from '../../../tools/blurText/index'

const Train4Content = ({currentSlide}) => {
    const [anim, setAnim] = useState(0);

    useEffect(() => {
        if(currentSlide === 4) {
            setAnim(prev => prev + 1)
        }
    }, [currentSlide])

    return (
        <div className={styles.content} key={anim}>
            <div className={styles.title}>
                <BlurText
                    text="Безопасность"
                    delay={50}
                    animateBy="words"
                    className={styles.titleText}
                />
            </div>
            <div className={styles.wrap}>
                <div className={styles.numbers}>
                    <div className={styles.item}>
                        <div className={styles.bottomText}>
                            <ul>
                                <li>
                                    <span>Система </span>
                                    <BlurText
                                        text="пожаротушения"
                                        delay={100}
                                        animateBy="words"
                                        className={styles.bold}
                                    />
                                </li>
                                <li>
                                    <span>Камеры </span>
                                    <BlurText
                                        text="видеонаблюдения"
                                        delay={150}
                                        animateBy="words"
                                        className={styles.bold}
                                    />
                                    <BlurText
                                        text="(до 5 на вагон)"
                                        delay={200}
                                        animateBy="words"
                                    />
                                </li>
                                <li>
                                    <BlurText
                                        text="Датчики"
                                        delay={250}
                                        animateBy="words"
                                        className={styles.bold}
                                    />
                                    <span> открытия дверей</span><br />
                                    <span>и электронные пломбы</span>
                                </li>
                                <li>
                                    <BlurText
                                        text="Сопровождение"
                                        delay={300}
                                        animateBy="words"
                                        className={styles.bold}
                                    />
                                    <br />
                                    <span>экспедиторами</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className={`${styles.item} ${styles.itemRight}`}>
                        <div className={styles.bottomText}>
                            <ul>
                                <li>
                                    <BlurText
                                        text="Кнопка экстренного вызова"
                                        delay={350}
                                        animateBy="words"
                                        className={styles.bold}
                                    />
                                </li>
                                <li>
                                    <BlurText
                                        text="Отсутствие остановок"
                                        delay={400}
                                        animateBy="words"
                                        className={styles.bold}
                                    />
                                    <span> в пути</span>
                                </li>
                                <li>
                                    <BlurText
                                        text="Страхование ответственности"
                                        delay={450}
                                        animateBy="words"
                                        className={styles.bold}
                                    /><br />
                                    <span> экспедитора +</span>
                                    <br />
                                    <span>опция доп.страховки</span>
                                    <br />
                                    <span>(0,03% от стоимости груза)</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export {Train4Content}
