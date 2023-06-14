import React from 'react'
import Tracklist from '../tracklist/Tracklist'
import { SpotifyContext } from '../../context/context'
import {nanoid} from "nanoid"

const Playlist = ({savePlaylist}) => {
  const {playlist, setPlaylist} = React.useContext(SpotifyContext)

  const submitPlaylist = () => {
    const title = document.getElementById('playlist-title').value
    savePlaylist(title, playlist)
    setPlaylist(prev => [])
  }

  return (
    <div className='playlist-container' >
      <div>
        <input className='playlist-title' name='playlist-title' id='playlist-title' type="text" placeholder='Name Your Playlist' />
        <Tracklist key={nanoid()} tracks={playlist} />
      </div>
      <button onClick={submitPlaylist} className='playlist-btn'>SAVE TO SPOTIFY</button>
    </div>
  )
}

export default Playlist