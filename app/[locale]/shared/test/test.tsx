import React, {useEffect, useState} from 'react';

const Test = () => {
    const [count, setCount] = useState(0);
    const [step, setStep] = useState(1);
    const [jump, setJump] = useState(0); // для второго инпута
    useEffect(() => {
        const timer = setInterval(() => {
            setCount(prev => prev + step);
        }, 1000);

        return () => clearInterval(timer); // очищаем интервал при размонтировании
    }, [step]); // перезапускаем таймер, если изменился шаг
    return (
        <div>
            <input
                type="number"
                value={step} // текущее состояние
                onChange={(e) => setStep(Number(e.target.value))} // обновляем состояние при вводе
            />
            <button onClick={() => setCount(prev => prev + step)}>ПЛЮСИК</button>
            {count}
            <button onClick={() => setCount(0)}>СБРОС</button>
            <input
                type="number"
                value={jump}
                onChange={(e) => setJump(Number(e.target.value))}
            />
            <button onClick={() => setCount(prev => prev + jump)}>Скачок</button>
        </div>
    );
};

export default Test;