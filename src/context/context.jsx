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
        track.inPlaylist = true
        setPlaylist(prev => [...prev, track])
        console.log(playlist)
    }

    const removeFromPlaylist = (track) => {
        track.inPlaylist = false
        let arr = searchResults
        let index = arr.findIndex(item => item.name == track.name)
        arr.splice(index, 1)
        setSearchResults(prev => arr)
    }

    return (
        <SpotifyContext.Provider value={{onChange: onChange, term: term, searchResults: searchResults, getResults: getResults, addToPlaylist: addToPlaylist, removeFromPlaylist: removeFromPlaylist }}>
            {props.children}
        </SpotifyContext.Provider>
    )
}

export {SpotifyContext, SpotifyContextProvider}