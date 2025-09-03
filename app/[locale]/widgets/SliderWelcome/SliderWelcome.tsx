'use client'
import React from 'react';
import {useSlider} from "@/app/[locale]/features";

const SliderWelcome = () => {
    const items = ['use1', 'use2', 'use3', 'use4', 'use5']
    const {current} = useSlider()
    return (
        <div key={current}>
            {items[current]}
        </div>
    );
};

export default SliderWelcome;