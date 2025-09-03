import React from 'react';
import styles from './paginationBtn.module.scss'

interface IProps {
    content: React.ReactNode,
    onClick?: () => void
}

const PaginationBtn = ({content, onClick}: IProps) => {
    return (
        <button className={styles.btn} onClick={onClick}>
            {content}
        </button>
    );
};

export default PaginationBtn;