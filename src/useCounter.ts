import {useEffect, useState} from "react";

export const useCounter = (startValue: number = 0, startStep: number = 1, autoResetTime: number = 0) => {
    const [step, setStep] = useState(startStep)
    const [count, setCount] = useState(startValue)

    useEffect(() => {
        if (autoResetTime) {
            setInterval(() => {
                setCount(0)
            }, (autoResetTime * 1000))
        }
    }, [])

    const inc = () => {
        setCount(count + step)
    }

    const dec = () => {
        setCount(count - step)
    }

    const reset = () => {
        setCount(startValue)
    }

    const changeStep = () => {
        setStep(5)
        alert('Шаг изменен на 5')
    }

    return {count, inc, dec, reset, changeStep}
}