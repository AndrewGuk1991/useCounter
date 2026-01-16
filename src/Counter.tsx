
import { useEffect, useState } from "react"

export const Counter = () => {
    const { count, inc, dec, reset, changeStep } = useCounter()

    return (
        <>
            <h2>{count}</h2>
            <button onClick={inc}>Увеличить</button>
            <button onClick={dec}>Уменьшить</button>
            <button onClick={reset}>Сбросить</button>
            <button onClick={changeStep}>Установить шаг 5</button>
        </>
    )
}

const useCounter = (startValue = 1, startStep = 1) => {
    const [step, setStep] = useState(startStep)
    const [count, setCount] = useState(startValue)

    useEffect(() => {
        setInterval(() => {
            setCount(0)
        }, 7000)
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

    return { count, inc, dec, reset, changeStep }
}