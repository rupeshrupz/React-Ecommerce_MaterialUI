import React, { createContext, useState } from 'react'


export const SearchContext = createContext()

function SearchProvider({children})
{
    const [searchInput, setSearchInput] = useState('');

     return (
        <SearchContext.Provider  value={{searchInput,setSearchInput}}>
            {children}
        </SearchContext.Provider>
     )
}

export default SearchProvider