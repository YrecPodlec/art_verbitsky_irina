'use client'
import React, {useCallback, useEffect, useState} from 'react';

const TestPagination = () => {
    const items = ['test1', 'test2', 'test3', 'test4', 'test5'];
    const [current, setCurrent] = useState(0);
    const handleClick = useCallback((i: number) => {
        setCurrent(i);
    }, [setCurrent]);
    return (
        <div>
            <div>{current}</div>
            {
                items.length > 0 ?
                    <div>
                        {
                            items.map((_, i) =>
                            <div key={i}>
                                <button onClick={() => handleClick}>
                                    {i + 1}
                                </button>
                            </div>)
                        }
                    </div>
                    : <p>NOTHING</p>
            }
        </div>
    );
};

export default TestPagination;