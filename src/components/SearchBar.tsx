import { useState } from 'react'
import SearchIcon from './icons/SearchIcon'
import './SearchBar.css'

const SearchBar = () => {
    const [searchBarSelected, setSearchBarSelected] = useState(false)
    return (
        <div className={searchBarSelected ? 'searchBar selected' : 'searchBar'}>
            <div style={{color: searchBarSelected ? '#1DA1F2' :'#8899A6'}}>
                <SearchIcon />
            </div>
            <input type="text"
                placeholder="Search Twitter"
                onSelect={e =>setSearchBarSelected(true)}
                onBlur={e =>setSearchBarSelected(false)}>    
            </input>
        </div>
    )
}

export default SearchBar