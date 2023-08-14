import React, {useState} from 'react';
import s from './App.module.css'

export const Counter = () => {
    let [count, setCount] = useState<number>(0)

    const incrementHandler = () => {
        return setCount(count+1)

    }

    const resetHandler = () => {
        setCount(0)
    }

    return (
        <div className={s.container1}>

                <div className={count>4?s.counterDisabled :s.counter }>
                    {count}
                </div>


<div className={s.container2}>
    <button className={count>4? s.disabled :s.button } disabled={count>4} onClick={incrementHandler}>inc</button>
    <button className={count<1? s.disabled : s.button } disabled={count<1} onClick={resetHandler}>reset</button>
</div>

        </div>
    );
};

