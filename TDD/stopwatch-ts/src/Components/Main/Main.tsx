import React, { useEffect, useState } from 'react'
import './Main.css';

import { Controls } from './../Controls/Controls';

import { CalculateTime } from './../../Services/CalculateTime';

export const Main = () => {

    const [timeInSeconds, setTimeInSeconds] = useState<number>(0);
    const [timerArray, setTimerArray] = useState<Array<number | string>>([]);


    useEffect(() => {
        const timeArray: Array<number | string> = CalculateTime(timeInSeconds);
        setTimerArray(timeArray);
    }, [timeInSeconds])

    return (
        <>
            <section className="timer">
                <div>
                    <p className="timerText">{timerArray[0]}</p>
                    <p className="timerText">Hours</p>
                </div>
                <span className="timerColon">:</span>
                <div>
                    <p className="timerText">{timerArray[1]}</p>
                    <p className="timerText">Minutes</p>
                </div>
                <span className="timerColon">:</span>
                <div>
                    <p className="timerText">{timerArray[2]}</p>
                    <p className="timerText">Seconds</p>
                </div>
            </section>
            <Controls setTimeInSeconds={setTimeInSeconds} />
        </>
    )
}
