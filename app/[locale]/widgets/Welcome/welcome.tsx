'use client'
import React from 'react';
import Image from "next/image";
import styles from './welcome.module.scss';
import {Slider} from "@/app/[locale]/features";

const Welcome = () => {
    const items = ['use1', 'use2', 'use3', 'use4', 'use5']
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
                <Slider items={items} pagination={true} progress={true} maxTime={10} arrows={true}/>
            </div>
        </section>
    );
};

export default Welcome;
