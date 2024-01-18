import React, {useEffect, useState} from 'react';

const getDigits2String = (num: number) => num < 10 ? "0" + num : num

export const Clock = (props: any) => {
    const [date, setDate] = useState(new Date())
    useEffect(() => {
        setInterval(() => {
            setDate(new Date())
        }, 1000)
    }, [])
    return (
        <div>
            <span>{getDigits2String(date.getHours())}</span> :
            <span>{getDigits2String(date.getMinutes())}</span> :
            <span>{getDigits2String(date.getSeconds())}</span>
        </div>
    );
};
