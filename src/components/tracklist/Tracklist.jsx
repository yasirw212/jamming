import React from 'react'
import Track from '../track/Track'
import './styles.css'

const Tracklist = ({tracks}) => {
  return (
    <div>
      {tracks.map(track => <Track  track={track} name={track.name} artist={track.artist} album={track.album} inPlayList={track.inPlayList} />)}
    </div>
  )
}

export default Tracklist