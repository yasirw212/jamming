import './styles/styles.css'
import Navbar from './components/navbar/Navbar'
import SearchBar from './components/searchbar/SearchBar'
import React from 'react'
import { SpotifyContext } from './context/context'
import Spotify from './utils/spotify'
import SearchResults from './components/searchresults/SearchResults'
import TracksContainer from './containers/trackscontainer/TracksContainer'

function App() {
  const {onChange, term} = React.useContext(SpotifyContext)

  return (
    <div>
        <header>
          <Navbar />
        </header>
        <main className='background__gradient' >
          <SearchBar searchTracks={Spotify.search} onChange={onChange} term={term} />
          <TracksContainer />
        </main>
    </div>
  )
}

export default App
