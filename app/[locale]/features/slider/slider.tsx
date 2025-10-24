'use client'
import React, {useCallback, useEffect} from 'react';
import {SliderContext} from "@/app/[locale]/features/slider/useSlider";
import {Pagination} from "@/app/[locale]/features";
import {LineSlider, SliderRow} from "@/app/[locale]/shared";
import styles from './slider.module.scss'
type SliderProps = {
    children: React.ReactNode;
    maxTime?: number;
    arrows?: boolean;
    // pagination?: boolean;
    // Пагинация со стрелками или стрелки без пагинации? пока они в связке, надо будет разделить - разделю
    // сейчас - убрал стрелки - убрал и пагинацию вместе
    progress?: boolean;
};
const Slider: React.FC<SliderProps> = ({children, maxTime, arrows = true, progress = true}) => {
    const items = React.Children.toArray(children); // преобразуем в массив
    const [current, setCurrent] = React.useState(0);
    const next = useCallback(() => {
        setCurrent(prev => (prev + 1) % items.length);
    }, [items.length]);
    const prev = useCallback(() => {
        setCurrent(prev => (prev - 1 + items.length) % items.length);
    }, [items.length]);
    useEffect(() => {
        if (!maxTime) return;

        const timer = setTimeout(() => {
            next();
        }, maxTime * 1000);

        return () => clearTimeout(timer); // очищаем при размонтировании или смене current
    }, [current, maxTime, next]);

    return (
        <SliderContext.Provider value={{items, current, setCurrent, next, prev, maxTime}}>
            <section className={styles.slider}>
                <div className={styles.childrenSlider}>{items[current]}</div>
                <div className={styles.uiSlider}>
                    {progress && maxTime && (
                        <LineSlider key={current} maxTime={maxTime} current={current} />
                    )}
                    {arrows && (
                        <section className={styles.arrows}>
                            <SliderRow direction="left" />
                             <Pagination/>
                            <SliderRow direction="right" />
                        </section>
                    )}
                </div>
            </section>
        </SliderContext.Provider>
    );
};

export default Slider;