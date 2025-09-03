import React, {useEffect, useState} from 'react';

const CounterTest = () => {
    const [count, setCount] = useState(0);
    const [logs, setLogs] = useState<number[]>([]); // ТИПИЗАЦИЯ
    useEffect(() => {
        setLogs((prevLogs) => {
            const updated = [...prevLogs, count];
            if (updated.length > 5) updated.shift();
            return updated;
        });
        setInterval(() => {
            setLogs([])
        },10000)
    }, [logs, count]);
    return (
        <div>
            <button onClick={() => setCount((prev) => prev + 1)}>+</button>
            {count}
            <button onClick={() => {
                setCount((prev) => prev - 1)
            }}>-</button>
        </div>
    );
};

export default CounterTest;