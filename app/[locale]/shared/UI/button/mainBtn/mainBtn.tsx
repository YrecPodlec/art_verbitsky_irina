import React from 'react';
interface Props {
    text: string;
}
import styles from './btn.module.scss';
const MainBtn = ({text}:Props) => {
    return (
        <button className={styles.btn}>
            {text}
        </button>
    );
};

export default MainBtn;