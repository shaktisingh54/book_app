import React from 'react';

import "./styles/SearchBox.css";

const SearchBox = ({ searchChange }) => {

        return ( 
            <div>
                <input 
                className = "searchbox" 
                type = "search" 
                placeholder = "Search"
                onChange = { searchChange }
                />
            </div>
         );
}
 
export default SearchBox;