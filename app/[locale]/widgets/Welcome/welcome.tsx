import React from 'react';
import Image from "next/image";
import styles from './welcome.module.scss';

const Welcome = () => {
    return (
        <section className={styles.section}>
            <div className={styles.imgWrapper}>
                <Image
                    src={'https://verbitsky-design-server.vercel.app/images/los-angeles/1-la.webp'}
                    alt={''}
                    fill
                    style={{ objectFit: 'cover', objectPosition: 'center' }}
                />
            </div>
            <div>
                {/* Другой контент */}
            </div>
        </section>
    );
};

export default Welcome;
