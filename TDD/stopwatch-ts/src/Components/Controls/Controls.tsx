import { useState } from 'react'

type Props = {
    setTimeInSeconds: Function
}

export const Controls = (props: Props) => {

    const { setTimeInSeconds } = props;
    const [click, setClick] = useState<boolean>(false);
    const [intervalId, setIntervalId] = useState<number>(0);

    const handlePlayButton = () => {
        setClick(true);
        let interval: any = setInterval(() => {
            setTimeInSeconds((previousState: number) => previousState + 1);
        }, 1000);

        setIntervalId(interval);
    }
    const handleStopButton = () => {
        setClick(false);
        clearInterval(intervalId);
    }
    const handleResetButton = () => {
        setClick(false);
        clearInterval(intervalId);
        setTimeInSeconds(0);
    }
    return (
        <section>
            <button disabled={click} onClick={handlePlayButton}>Play</button>
            <button onClick={handleStopButton}>Stop</button>
            <button onClick={handleResetButton}>Reset</button>
        </section>
    )
}
