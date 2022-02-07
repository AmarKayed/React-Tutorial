import React from 'react'
import CountButton from './CountButton'


const App = () => {
    return(
        <div>
            <CountButton incrementBy = {1} background = "blue"/>
            <CountButton incrementBy = {5} background = "yellow"/>
            <CountButton incrementBy = {7} background = "red"/>
        </div>
    )
}

export default App