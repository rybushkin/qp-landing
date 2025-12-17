import React, {useEffect, useState} from 'react'
import styles from "./Train6.module.css";
import BlurText from '../../../tools/blurText/index';

import Col1_1 from '../../../assets/img/col1_1.png';
import Col1_2 from '../../../assets/img/col1_2.png';
import Col2_1 from '../../../assets/img/col2_1.png';
import Col2_2 from '../../../assets/img/col2_2.png';
import Col3_1 from '../../../assets/img/col3_1.png';
import Col3_2 from '../../../assets/img/col3_2.png';

const Train6Content = ({currentSlide}) => {
    const [anim, setAnim] = useState(0);

    useEffect(() => {
        if(currentSlide === 6) {
            setAnim(prev => prev + 1)
        }
    }, [currentSlide])

    const columns = [
        [
            { image: Col1_1, title: "Маркетплейс-грузы", desc: "62Н и возвраты" },
        ],
        [
            { image: Col2_1, title: "Авиа", desc: "Быстрые отправки" },
        ],
        [
            { image: Col3_1, title: "Экспресс", desc: "Ускоренный режим" },
        ]
    ];

    return (
        <div className={styles.content} key={anim}>
            <div className={styles.title}>
                <BlurText
                    text="Грузы"
                    delay={50}
                    animateBy="words"
                    className={styles.titleText}
                />
            </div>
            <div className={styles.wrap}>
                {columns.map((column, columnIndex) => (
                    <div className={styles.numbers} key={columnIndex}>
                        {column.map((item, itemIndex) => (
                            <div className={styles.item} key={itemIndex}>
                                <img src={item.image} alt={item.title} className={styles.col} />
                                <div className={styles.itemsLeft}>
                                        <BlurText
                                            text={item.title}
                                            delay={100 + (columnIndex * 100) + (itemIndex * 50)}
                                            animateBy="words"
                                            className={styles.subTitle}
                                        />
                                        <BlurText
                                            text={item.desc}
                                            delay={150 + (columnIndex * 100) + (itemIndex * 50)}
                                            animateBy="words"
                                            className={styles.subDesc}
                                        />
                               </div>
                            </div>
                        ))}
                    </div>
                ))}
            </div>
        </div>
    )
}

export {Train6Content}
