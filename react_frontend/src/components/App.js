import React from 'react'
import CountButton from './CountButton/CountButton'
import SearchBar from './SearchBar/SearchBar'


const App = () => {
    return(
        <div>
        {/* 
            <CountButton incrementBy = {1} background = "blue"/>
            <CountButton incrementBy = {5} background = "yellow"/>
            <CountButton incrementBy = {7} background = "red"/>
         */}

        <SearchBar />
        </div>
    )
}

export default App