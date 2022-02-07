import React from "react";
import './SearchBar.css'
import { useState } from "react";

const products = [
    'tooth paste',
    'tooth brush',
    'mouth wash',
    'dental floss',
    'mouth guard'
]


const SearchBar = () => {
    const [searchValue, setSearchValue] = useState('')

    const handleInputChange = (event) => {
        console.log(event.target.value);
        setSearchValue(event.target.value);
    }

    const handleClearClick = () => {
        setSearchValue('')
    }

    return (
        <div>
            <input type = "text" value = {searchValue} onChange = {handleInputChange}></input>
            {searchValue && <button onClick = {handleClearClick}>clear</button>}
            {/* {searchValue} */}
            <ul>
                {products.map(value => {
                    return <li key = {value}>{value}</li>
                })}
            </ul>
        </div>
    )
}

export default SearchBar;