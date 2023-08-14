import React, {useState} from 'react';
import s from './App.module.css';
import {Counter} from "./Counter";

function App() {
    let [count, setCount] = useState<number>(0)

    const maxValue = 5
    const minValue = 0

    const increment = () => {
        return setCount(count+1)
    }

    const reset = () => {
        setCount(minValue)
    }

    return (
        <div className={s.background}>
            <div className={s.app}>
                <Counter count={count}
                         maxValue={maxValue}
                         minValue={minValue}
                         increment={increment}
                         reset={reset}/>
            </div>
        </div>

    );
}

export default App;
