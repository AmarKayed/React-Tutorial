import React from "react";
import { useState } from "react";



const CountButton = (props) => {
    const [currentCount, setCurrectCount] = useState(0)

    const handleClick = () => {
        setCurrectCount(currentCount + props.incrementBy)
    }

    const buttonStyles = {
        background: props.background,
        borderRadius: "10px",
    }

    return (
        <div>
            <button style = {buttonStyles} onClick={handleClick}>+{props.incrementBy}</button>
            <div>{currentCount}</div>  
        </div>
    )
}

export default CountButton;