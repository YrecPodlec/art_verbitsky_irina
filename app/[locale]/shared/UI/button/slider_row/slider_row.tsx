'use client'
import React from "react";
import styles from "./slider_row.module.scss";
import {useSlider} from "@/app/[locale]/features";

type ArrowButtonProps = {
    direction?: "right" | "left";
};

export const SliderRow: React.FC<ArrowButtonProps> = ({
                                                          direction = "right",
                                                      }) => {
    const { next, prev } = useSlider();

    const handleClick = () => {
        if (direction === "left") prev();
        else next();
    };

    return (
        <button
            onClick={handleClick}
            className={styles.button}
            aria-label={`Arrow ${direction}`}
        >
            {direction === "left" ? "<" : ">"}
        </button>
    );
};

export default SliderRow;
