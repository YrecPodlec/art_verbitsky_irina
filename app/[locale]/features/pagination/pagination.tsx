'use client'
import React, {useCallback} from "react";
import { useSlider } from "@/app/[locale]/features";
import {PaginationBtn} from "@/app/[locale]/shared";
import styles from './pagination.module.scss'
const Pagination: React.FC = () => {
    const { items, setCurrent } = useSlider();
    const handleClick = useCallback((i: number) => {
        setCurrent(i);
    }, [setCurrent]);
    return (
        <div>
            {
                items.length > 0 ?
                    <section className={styles.pagination}>
                        {
                            items.map((_, i) =>
                                <PaginationBtn key={i} onClick={() => handleClick(i)} content={i + 1} />
                            )
                        }
                    </section>
                    : <p>pagination doesnt work :(</p>
            }
        </div>
    );
};

export default Pagination;
