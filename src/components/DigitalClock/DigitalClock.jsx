import React, {useState, useEffect} from 'react'

const DigitalClock = () => {
    const [clockState, setClockState] = useState();

    useEffect( () => {
        setInterval(() => {
            const date = new Date();
            setClockState(date.toLocaleTimeString());
        }, 1000);
    })

    return (
        <div className='digital-clock box'>
            <h2>Digital Clock</h2>
            <h3>{clockState}</h3>
        </div>
    )
}

export default DigitalClock
