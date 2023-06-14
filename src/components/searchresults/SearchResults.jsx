import React from 'react'
import { SpotifyContext } from '../../context/context'
import './styles.css'
import { IconButton } from '@mui/material'
import { Add } from '@mui/icons-material'
import Tracklist from '../tracklist/Tracklist'
import Track from '../track/Track'
import musicImg from '../../assets/musicImg2.svg'
import './styles.css'
import {nanoid} from "nanoid"

const SearchResults = () => {
  const {searchResults, addToPlaylist} = React.useContext(SpotifyContext)

  return (
    <div className='search-results-container' >
      <h1 className='search-results-header'>Results</h1>
      <div className="results">
        {
          searchResults.length > 0 ?
            <Tracklist key={nanoid()} tracks={searchResults} />
          :
            <div className='waiting-container'>
              <img className='waiting-img' width={150} src={musicImg} alt="" />
              <p className='waiting-subtext'>Waiting on you...</p>
            </div>
        }
      </div>
    </div>
  )
}

export default SearchResults