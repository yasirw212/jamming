import React from "react";

const SpotifyContext = React.createContext()

function SpotifyContextProvider(props){
    const [accessToken, setAccessToken] = React.useState('')
    const [term, setTerm] = React.useState('')

    const onChange = (e) => {
        setTerm(prev => e.target.value)
        console.log(e.target.value)
      }

    return (
        <SpotifyContext.Provider value={{onChange: onChange, term: term}}>
            {props.children}
        </SpotifyContext.Provider>
    )
}

export {SpotifyContext, SpotifyContextProvider}