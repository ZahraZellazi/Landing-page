import React from 'react';
import './SearchBar.css';
import { IoSearch } from "react-icons/io5";

const SearchBar = () => {
    return (
        <div className="search-container">
            <input type="search" id="search-input" placeholder="Search..." />
            <button type="submit" id="search-button">
                <IoSearch />
            </button>
        </div>
    );
}

export default SearchBar;
