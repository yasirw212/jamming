import React from 'react'
import './styles.css'
import { SpotifyContext } from '../../context/context'

const SearchBar = ({searchTracks, }) => {
  const {term, onChange, searchResults, getResults} = React.useContext(SpotifyContext);

  const search = React.useCallback(async () => {
    let results = await searchTracks(term);
    let arr = []
    
    await results.items.map(result => {
      const {album, artists, name} = result
      arr.push({album: album.name, name: name, artist: artists[0].name, inPlayList: false})
    })
    getResults(arr) 
  }, [searchTracks, term]);

  React.useEffect(() => {
    console.log(searchResults)
  },[searchResults])

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