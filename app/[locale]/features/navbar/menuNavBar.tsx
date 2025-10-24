'use client'
import React from 'react';
import styles from './menu.module.scss'
const MenuNavBar = () => {

    const [clicked, setClicked] = React.useState(false);
    return (
        <button onClick={() => setClicked(prevState => !prevState)}
                className={styles.btnClick}>
            {clicked ? 'Close' : 'Menu'}
        </button>
    );
};

export default MenuNavBar;