
import React from 'react';
import {NavbarBtn} from "@/app/[locale]/shared";
import styles from "./navbar.module.scss";
import Link from "next/link";
import Image from "next/image";
import {useTranslations} from "next-intl";
import {MenuNavBar} from "@/app/[locale]/features";

const Navbar = () => {
    const PagesLink = [
        { textKey: 'article', href: '/articles' },
        { textKey: 'article', href: '/articles' },
        { textKey: 'article', href: '/articles' },
    ];
    const t = useTranslations("navbar")
    return (
        <header className={styles.navbar}>
            <div>
                <Link href="/public">
                    <div className={styles.navbarLogo}>
                        <Image src={'/logo/Logo_white.webp'} alt={'logo'} fill style={{objectFit: 'cover'}}/>
                    </div>
                </Link>
            </div>
            <nav className={styles.nav}>
                {
                    PagesLink.map((item, i) => <div key={i}>
                        <NavbarBtn text={t(item.textKey)} href={item.href}/>
                    </div> )
                }
            </nav>
            <div className={styles.menu}>
                <MenuNavBar/>
            </div>
        </header>
    );
};

export default Navbar;