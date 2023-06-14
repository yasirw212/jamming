import React from 'react'
import SearchResults from '../../components/searchresults/SearchResults'
import Playlist from '../../components/playlist/Playlist'
import './styles.css'
import Spotify from '../../utils/spotify'



const TracksContainer = () => {

  return (
    <div className='tracks-container'>
        <SearchResults />
        <Playlist savePlaylist={Spotify.savePlaylist} />
    </div>    
  )
}

export default TracksContainer