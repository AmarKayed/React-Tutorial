import React from "react";
import { useState , useEffect} from "react";
import './CountButton.css'


const CountButton = (props) => {
    const [currentCount, setCurrectCount] = useState(0)

    const handleClick = () => {
        setCurrectCount(currentCount + props.incrementBy)
    }

    const buttonStyles = {
        background: props.background,
        borderRadius: "10px",
    }
    // This useEffect will call the function only once, when the app is rendered for the first time/when we refresh the page
    useEffect(() => {
        console.log('First Render')
    }, [])

    
    // This useEffect will call the function whenever the currentCount state is rerendered
    useEffect(() => {
        console.log(currentCount)
        if(currentCount == 10)
            alert("Count is 10!")
    }, [currentCount])

    return (
        <div>
            <button style = {buttonStyles} onClick={handleClick}>+{props.incrementBy}</button>
            <div className = "count-display">{currentCount}</div>  
        </div>
    )
}

export default CountButton;