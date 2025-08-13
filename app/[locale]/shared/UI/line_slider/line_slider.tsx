import React from 'react';
import styles from './line_slider.module.scss';

interface Props {
    maxTime: number; // время в секундах
}

const LineSlider = ({ maxTime }: Props) => {
    return (
        <div className={styles.line}>
            <div
                style={{
                    animation: `fillAnimation ${maxTime}s linear infinite`,
                }}
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