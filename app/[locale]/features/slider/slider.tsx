'use client'
import React, {useCallback, useEffect} from 'react';
import {SliderContext} from "@/app/[locale]/features/slider/useSlider";
import {Pagination} from "@/app/[locale]/features";
import {LineSlider, SliderRow} from "@/app/[locale]/shared";
import styles from './slider.module.scss'
type SliderProps = {
    items: React.ReactNode[];
    maxTime?: number;
    arrows?: boolean;
    pagination?: boolean;
    progress?: boolean;
};
const Slider: React.FC<SliderProps> = ({items, maxTime, arrows = true, pagination = true, progress = true,}) => {
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
            <div className={styles.slider}>
                <div>{items[current]}</div>
                {arrows && (
                    <section className={styles.arrows}>
                        <SliderRow direction="left" />
                        <SliderRow direction="right" />
                    </section>
                )}
                {pagination && <Pagination/>}
                {progress && maxTime && (
                    <LineSlider key={current} maxTime={maxTime} current={current} />
                )}
            </div>
        </SliderContext.Provider>
    );
};

export default Slider;