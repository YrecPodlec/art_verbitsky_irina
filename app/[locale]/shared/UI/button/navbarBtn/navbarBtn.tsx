import React from 'react';
import Link from "next/link";
import styles from './navbarBtn.module.scss'
interface Props {
    text: string;
    href: string;
}
const NavbarBtn = ({text, href}: Props) => {
    return (
        <Link href={href} className={styles.navbarBtn}>
            {text}
        </Link>
    );
};

export default NavbarBtn;