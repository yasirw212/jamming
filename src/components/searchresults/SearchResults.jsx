import React from 'react'
import { SpotifyContext } from '../../context/context'
import './styles.css'
import { IconButton } from '@mui/material'
import { Add } from '@mui/icons-material'
import Tracklist from '../tracklist/Tracklist'

const SearchResults = () => {
  const {searchResults, addToPlaylist} = React.useContext(SpotifyContext)

  return (
    <div className='search-results-container' >
      <h1>Results</h1>
      <div className="results">
        <Tracklist tracks={searchResults} />
      </div>
    </div>
  )
}

export default SearchResults