import React from "react";

const SearchBar = (props) => {
  const {search, setSearch} = props;

  const handleSearchInput = (e) => {
    setSearch(e.target.value)
    console.log(`searchbar: ${search}`)
  }

  // console.log('render SearchBar component')

  return (
    <input className="form-search" type="text" value={search} onChange={handleSearchInput} placeholder="Search giphy"/>
  )
}

export default SearchBar;
