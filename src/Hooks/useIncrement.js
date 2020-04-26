import { useState } from "react"

export const useIncrement = ({initialValue = 0, maxValue = 100, minValue = 0, step = 1}) => {
    const [value, setValue] = useState(initialValue)

    function incrementValue() {
        setValue(prevState => prevState + step >= maxValue ? maxValue : prevState + step)
    }

    function decrementValue() {
        setValue(prevState => prevState - step <= minValue ? minValue : prevState - step)
    }

    function reset() {
        setValue(initialValue)
    }

    return [value, {incrementValue,  decrementValue, reset}]
}