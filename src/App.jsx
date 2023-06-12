import './styles/styles.css'
import Navbar from './components/navbar/Navbar'
import SearchBar from './components/searchbar/SearchBar'
import React from 'react'
import { SpotifyContext } from './context/context'
import Spotify from './utils/spotify'

function App() {
  const {onChange, term} = React.useContext(SpotifyContext)

  return (
    <div>
        <header>
          <Navbar />
        </header>
        <main className='background__gradient' style={{height: '100vh'}} >
          <SearchBar searchTracks={Spotify.search} onChange={onChange} term={term} />
        </main>
    </div>
  )
}

export default App
