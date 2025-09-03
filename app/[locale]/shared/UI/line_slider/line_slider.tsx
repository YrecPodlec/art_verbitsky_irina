'use client'
import React from "react";
import styles from "./line_slider.module.scss";

interface LineSliderProps {
    maxTime: number;
    current?: number; // если хочешь использовать key внутри
}

const LineSlider: React.FC<LineSliderProps> = ({ maxTime, current }) => {
    return (
        <div className={styles.line}>
            <div
                key={current} // сброс анимации при смене слайда
                className={styles.progress}
                style={{ animation: `fillAnimation ${maxTime}s linear forwards` }}
            />
            <style>
                {`
          @keyframes fillAnimation {
            from { width: 0%; }
            to { width: 100%; }
          }
        `}
            </style>
        </div>
    );
};

export default LineSlider;
