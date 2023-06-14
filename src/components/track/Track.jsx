import React from 'react'
import { SpotifyContext } from '../../context/context'
import { Add } from '@mui/icons-material'
import { HorizontalRule } from '@mui/icons-material'
import { IconButton } from '@mui/material'
import {nanoid} from "nanoid"

const Track = ({track, name, artist, album, inPlayList}) => {
  const {addToPlaylist, removeFromPlaylist} = React.useContext(SpotifyContext)

  return (
    <div className='track-card-component' key={nanoid()}>
        <div className="text">
          <h3 className='track-title'>{name}</h3>
          <p className='track-subtext'>{`${artist} | ${album}`}</p>
        </div>
        {
          inPlayList ?
          <IconButton  onClick={() => removeFromPlaylist(track)} >
            <HorizontalRule sx={{color: '#d7d7d7', '&:hover':{background: 'rgba(255,255,255, 0.3)', borderRadius: '50%', padding: '.15em .075em'}}}  />
          </IconButton>
          :
          <IconButton onClick={() => addToPlaylist(track)} >
            <Add sx={{color: '#d7d7d7', '&:hover':{background: 'rgba(255,255,255, 0.3)', borderRadius: '50%', padding: '.15em .075em'}}} />
          </IconButton>
        }
    </div>
  )
}

export default Track