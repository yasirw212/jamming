import React from 'react'
import { SpotifyContext } from '../../context/context'
import { Add } from '@mui/icons-material'
import { HorizontalRule } from '@mui/icons-material'
import { IconButton } from '@mui/material'

const Track = ({track, name, artist, album, inPlayList}) => {
  const {addToPlaylist, removeFromPlaylist} = React.useContext(SpotifyContext)

  return (
    <div className='track-card-component'>
        <div className="text">
          <h3 className='title'>{name}</h3>
          <p className='subtext'>{`${artist} | ${album}`}</p>
        </div>
        {
          inPlayList ?
          <IconButton onClick={() => removeFromPlaylist(track)} >
            <HorizontalRule />
          </IconButton>
          :
          <IconButton onClick={() => addToPlaylist(track)} >
            <Add />
          </IconButton>
        }
    </div>
  )
}

export default Track