import React from 'react'
import { useIncrement } from '../../Hooks/useIncrement'

const Increment = () => {
    const [value, {incrementValue, decrementValue, reset}] = useIncrement({
        initialValue: 0,
        step: 10
    })

    return (
        <div>
            <button onClick={decrementValue}>-</button>
            {value}
            <button onClick={incrementValue}>+</button>
            <div>
                <button onClick={reset}>
                    Reset
                </button>
            </div>
        </div>
    )
}

export default Increment
