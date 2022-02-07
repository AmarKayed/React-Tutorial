import React from 'react'
import CountButton from './CountButton/CountButton'
import SearchBar from './SearchBar/SearchBar'


const products = [
    'tooth paste',
    'tooth brush',
    'mouth wash',
    'dental floss',
    'mouth guard'
]

const App = () => {
    return(
        <div>
        {/* 
            <CountButton incrementBy = {1} background = "blue"/>
            <CountButton incrementBy = {5} background = "yellow"/>
            <CountButton incrementBy = {7} background = "red"/>
         */}

        <SearchBar products = {products}/>
        </div>
    )
}

export default App