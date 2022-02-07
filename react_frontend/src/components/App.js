import React from 'react'
import CountButton from './CountButton/CountButton'
import SearchBar from './SearchBar/SearchBar'


const dentalProducts = [
    'tooth paste',
    'tooth brush',
    'mouth wash',
    'dental floss',
    'mouth guard'
]

const sportsProducts = [
    "bike rack",
    "mountain bike",
    "soccer ball"
]

const App = () => {
    return(
        <div>
        {/* 
            <CountButton incrementBy = {1} background = "blue"/>
            <CountButton incrementBy = {5} background = "yellow"/>
            <CountButton incrementBy = {7} background = "red"/>
         */}
        {/* 
            <SearchBar products = {dentalProducts}/>
            <SearchBar products = {sportsProducts}/>
        */}

        <CountButton incrementBy = {1} background = "orange" />
        
        </div>
    )
}

export default App