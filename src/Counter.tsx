
import { useEffect, useState } from "react"

export const Counter = () => {
    const { count, inc, dec, reset } = useCounter(0)

    return (
        <>
            <h2>{count}</h2>
            <button onClick={inc}>Увеличить</button>
            <button onClick={dec}>Уменьшить</button>
            <button onClick={reset}>Сбросить</button>
        </>
    )
}

const useCounter = (startValue = 0) => {
    const [count, setCount] = useState(startValue)

    useEffect(() => {
        setInterval(() => {
            setCount(0)
        }, 7000)
    }, [])

    const inc = () => {
        setCount(count + 1)
    }

    const dec = () => {
        setCount(count - 1)
    }

    const reset = () => {
        setCount(startValue)
    }

    return { count, inc, dec, reset }
}