import React from 'react'

import { useToggle } from "../../Hooks/useToggle.js"

const Toggle = () => {
    const { isToggled, toggleFn } = useToggle(false)
    return (
        <div>
            <button onClick={toggleFn}>
                Toggle
            </button>
            {isToggled && (
                <p>To be Toggled</p>
            )}
        </div>
    )
}

export default Toggle
