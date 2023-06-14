import React from "react";

const SpotifyContext = React.createContext()

function SpotifyContextProvider(props){
    const [accessToken, setAccessToken] = React.useState('')
    const [term, setTerm] = React.useState('')
    const [searchResults, setSearchResults] = React.useState([])
    const [playlist, setPlaylist] = React.useState([])

    const onChange = (e) => {
        setTerm(prev => e.target.value)
        console.log(e.target.value)
      }

    const getResults = (results) => {
        setSearchResults(prev => results)
    }

    const addToPlaylist = (track) => {
        track.inPlayList = true
        setPlaylist(prev => [...prev, track])
        console.log(playlist)
    }

    const removeFromPlaylist = (track) => {
        track.inPlayList = false
        let arr = playlist
        setPlaylist(prev => arr.filter(item => item.name !== track.name) )
    }

    return (
        <SpotifyContext.Provider value={{onChange: onChange, term: term, searchResults: searchResults, getResults: getResults, addToPlaylist: addToPlaylist, removeFromPlaylist: removeFromPlaylist, playlist: playlist, setPlaylist: setPlaylist }}>
            {props.children}
        </SpotifyContext.Provider>
    )
}

export {SpotifyContext, SpotifyContextProvider}