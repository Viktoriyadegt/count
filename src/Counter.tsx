import React from 'react';
import s from './App.module.css'
import Display from "./Display";
import Button from "./Button";

export type CounterType = {
    maxValue: number
    minValue: number
    reset: () => void
    increment: () => void
    count: number
}

export const Counter = (props: CounterType) => {

    return (
        <div className={s.container1}>

            <div className={props.count >= props.maxValue ? s.counterDisabled : s.counter}>
               <Display count={props.count}/>
            </div>


            <div className={s.container2}>
                <Button title={'inc'}
                        callback={props.increment}
                        className={props.count >= props.maxValue ? s.disabled : s.button}
                        disabled={props.count >= props.maxValue}
                />
                <Button title={'reset'}
                        callback={props.reset}
                        className={props.count === props.minValue ? s.disabled : s.button}
                        disabled={props.count === props.minValue}
                />

            </div>

        </div>
    );
};

