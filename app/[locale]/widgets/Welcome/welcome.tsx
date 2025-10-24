import React from 'react';
import Image from "next/image";
import styles from './welcome.module.scss';
import {Slider} from "@/app/[locale]/features";
import {WelcomeGet} from "@/app/[locale]/entities";
import {MainBtn} from "@/app/[locale]/shared";

export const Welcome = async () => {
    const data = await WelcomeGet()
    console.log(data)
    const photos = [
        'https://verbitsky-design-server.vercel.app/images/miami/1.webp',
        'https://verbitsky-design-server.vercel.app/images/los-angeles/1-la.webp',
        'https://verbitsky-design-server.vercel.app/images/dubai/1-dubai.webp',
        'https://verbitsky-design-server.vercel.app/images/river-park/9.webp',


    ]
    return (
        <section className={styles.section}>
            <div className={styles.block1Welcome}>
                <div className={styles.logoVerbitsky}>
                    <h1>Verbitsky</h1>
                    <h2>Irina</h2>
                </div>
                <Slider progress={true} maxTime={10} arrows={false}>
                    {/*{*/}
                    {/*    photos.map((image, i) => <Image key={i}*/}
                    {/*        src={image}*/}
                    {/*        alt={''}*/}
                    {/*        fill*/}
                    {/*        style={{ objectFit: 'cover', objectPosition: 'center' }}*/}
                    {/*    />)*/}
                    {/*}*/}
                    <Image
                           src={'https://verbitsky-design-server.vercel.app/images/miami/1.webp'}
                           alt={''}
                           fill
                           style={{ objectFit: 'cover', objectPosition: 'center',
                               filter: 'brightness(50%)',
                    }}
                    />
                    <Image
                        src={'https://verbitsky-design-server.vercel.app/images/los-angeles/1-la.webp'}
                        alt={''}
                        fill
                        style={{ objectFit: 'cover', objectPosition: 'center',
                            filter: 'brightness(50%)',
                        }}
                    />
                    <Image
                        src={'https://verbitsky-design-server.vercel.app/images/dubai/1-dubai.webp'}
                        alt={''}
                        fill
                        style={{ objectFit: 'cover', objectPosition: 'center',
                            filter: 'brightness(50%)',
                        }}
                    />
                    <Image
                        src={'https://verbitsky-design-server.vercel.app/images/river-park/9.webp'}
                        alt={''}
                        fill
                        style={{ objectFit: 'cover', objectPosition: 'center',
                            filter: 'brightness(50%)',
                        }}
                    />
                </Slider>
            </div>
            <div className={styles.block2Welcome}>
                <div className={styles.IrinaPhoto}>
                    <Image
                        src={'https://verbitsky-design-server.vercel.app/images/los-angeles/1-la.webp'}
                        alt={''}
                        fill
                        style={{ objectFit: 'cover', objectPosition: 'center' }}
                    />
                </div>
                <div className={styles.blockBtns}>
                    <MainBtn text={'text'}/>
                </div>
            </div>
        </section>
    );
};