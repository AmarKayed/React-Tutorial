import React from "react";
import { useState } from "react";



const CountButton = () => {
    const [currentCount, setCurrectCount] = useState(0)

    const handleClick = () => {
        setCurrectCount(currentCount + 1)
    }
    return (
        <div>
            <button onClick={handleClick}>+1</button>
            <div>{currentCount}</div>  
        </div>
    )
}

export default CountButton;