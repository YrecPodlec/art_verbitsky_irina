'use client'
import React, {createContext, useContext} from 'react';

export interface SliderContextValue {
    items: React.ReactNode[];                                  // контент слайдов
    current: number;                                           // активный индекс
    setCurrent: React.Dispatch<React.SetStateAction<number>>;  // ручная смена
    next: () => void;                                          // вперёд
    prev: () => void;                                          // назад
    maxTime?: number;                                          // для прогресс-бара (опционально)
}

export const SliderContext = createContext<SliderContextValue | null>(null);

export function useSlider() {
    const ctx = useContext(SliderContext);
    if (!ctx) {
        throw new Error('useSlider must be used inside <SliderContext.Provider>');
    }
    return ctx;
}