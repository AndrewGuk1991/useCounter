import {useCounter} from "./useCounter.ts";

export const CounterWithoutAutoReset = () => {
    const {count, inc, dec, reset, changeStep} = useCounter(5, 5, 0)

    return (
        <div>
            <h2>{count}</h2>
            <h3>🔒 Без автосброса</h3>
            <button onClick={inc}>Увеличить</button>
            <button onClick={dec}>Уменьшить</button>
            <button onClick={reset}>Сбросить</button>
            <button onClick={changeStep}>Установить шаг 5</button>
        </div>
    )
}