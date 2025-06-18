import React from 'react'

const Search = ({searchTerm, setSearchTerm}) => {
  return (
    <div className='search'>
        <div>
            <img src="search.svg" alt="search" />
        </div>

        <input type="text" name="" id="" placeholder='Search movies' value={searchTerm}
        onChange={(event) => setSearchTerm(event.target.value)}
        />

    </div>
  )
}

export default Search