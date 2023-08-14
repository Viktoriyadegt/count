import React from 'react';
import s from './App.module.css';
import {Counter} from "./Counter";

function App() {
    return (
        <div className={s.background}>
            <div className={s.app}>
                <Counter/>
            </div>
        </div>

    );
}

export default App;
