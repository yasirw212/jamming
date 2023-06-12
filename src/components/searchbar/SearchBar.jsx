import React from 'react'
import './styles.css'
import { SpotifyContext } from '../../context/context'

const SearchBar = ({searchTracks, }) => {
  const {term, onChange} = React.useContext(SpotifyContext);

  const search = React.useCallback(() => {
    searchTracks(term);
  }, [searchTracks, term]);

  const handleTermChange = React.useCallback((event) => {
    onChange(event);
  }, []);

  return (
    <div className="search-container">
         <input onChange={handleTermChange}  name="searchInput" id='search-input' className='search-input' type="text" placeholder='Find your favorite tracks...' minLength={2} required />
         <br />
         <button onClick={search}  className='submit-btn' type="submit" >Search</button>
    </div>
   
  );
};

export default SearchBar;