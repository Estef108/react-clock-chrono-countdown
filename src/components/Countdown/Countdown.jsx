import React, { useEffect, useState } from 'react';


const Countdown = () => {
    const [time, setTime] = useState("");
    useEffect(() => {
        const countdownDate = new Date("January 1, 2023 00:00:00").getTime();
        const x = setInterval(() => {
            const now = new Date().getTime();
            const distance = countdownDate - now;
            const days = Math.floor(distance / (1000 * 60 * 60 * 24));
            const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((distance % (1000 * 60)) / 1000);
            setTime(days + "d " + hours + "h " + minutes + "m " + seconds + "s ");

            if (distance < 0) {
                clearInterval(x);
                setTime("COUNTDOWN FINISHED");
            }
        }, 1000);
    }, [])

    return (
        <div className='countdown box'>
            <h2>Countdown to 2023</h2>
            <h3>{time}</h3>
        </div>
    )
}

export default Countdown
