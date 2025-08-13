import React from 'react';
import styles from './slider_row.module.scss'
type ArrowButtonProps = {
    direction?: 'right' | 'left';
};

export const SliderRow: React.FC<ArrowButtonProps> = ({
                                                            direction = 'right',
                                                        }) => {
    return (
        <button className={styles.button} aria-label="Arrow button">
            {direction === 'left' ? "<" : ">"}
        </button>
    );
};

export default SliderRow;