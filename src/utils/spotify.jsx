const CLIENT_ID = 'b74541845f694f6fb6db626d99d9b5c9'
const CLIENT_SECRET = '179047804c7f4109b381086ff47756df'
const redirect_Uri = 'http://localhost:5173/callback/'
let accessToken;

const Spotify = {
  getAccessToken() {
    if (accessToken) {
        console.log(accessToken)
      return accessToken;
    } 
    const accessTokenMatch = window.location.href.match(/access_token=([^&]*)/);
    const expiresInMatch = window.location.href.match(/expires_in=([^&]*)/);
    if (accessTokenMatch && expiresInMatch) {
      accessToken = accessTokenMatch[1];
      const expiresIn = Number(expiresInMatch[1]);
      window.setTimeout(() => accessToken = '', expiresIn * 1000);
      window.history.pushState('Access Token', null, '/'); // This clears the parameters, allowing us to grab a new access token when it expires.
      console.log(accessToken)
      return accessToken;
    } else {
      const accessUrl = `https://accounts.spotify.com/authorize?client_id=${CLIENT_ID}&response_type=token&scope=playlist-modify-public&redirect_uri=${redirect_Uri}`;
      window.location = accessUrl;
    }
  },

    // getAccessToken: async () => {
    //     try {
    //       const response = await fetch(`https://accounts.spotify.com/api/token`, {
    //         method: 'POST',
    //         headers: {
    //           'Content-type': 'application/x-www-form-urlencoded'
    //          },
    //         body: `grant_type=client_credentials&client_id=${CLIENT_ID}&client_secret=${CLIENT_SECRET}`
    //       })
    //       if(response.ok){
    //         const jsonResponse = await response.json()
    //         console.log(jsonResponse)
    //         return jsonResponse
    //       }
          
    //     } 
    //     catch (error) {
    //       console.log(error)
    //     }
    //   },

    search: async (term) => {
        const accessToken = await Spotify.getAccessToken();
        try {
            const response = await fetch(`https://api.spotify.com/v1/search?type=track&q=${term}`, {
                headers: {
                Authorization: `Bearer ${accessToken}`
                }
            })
            if(response.ok){
                const jsonResponse = await response.json()
                // console.log(jsonResponse.tracks)
                return jsonResponse.tracks
                
            }
        } catch (error) {
            console.log(error)
        }   
    },

  
    // .then(response => {
    //     if(response.ok){
    //         console.log(response.json())
    //         let jsonResponse = response.json()
    //     }
    // })
    // .then(jsonResponse => {
    //     console.log(jsonResponse())
    //     if (!jsonResponse.tracks) {
    //         return [];
    //   }
    //   return jsonResponse.tracks.items.map(track => ({
    //     id: track.id,
    //     name: track.name,
    //     artist: track.artists[0].name,
    //     album: track.album.name,
    //     uri: track.uri
    //   }));
    // });
  

  savePlaylist(name, trackUris) {
    if (!name || !trackUris.length) {
      return;
    }

    const accessToken = Spotify.getAccessToken();
    const headers = { Authorization: `Bearer ${accessToken}` };
    let userId;

    return fetch('https://api.spotify.com/v1/me', {headers: headers}
    ).then(response => response.json()
    ).then(jsonResponse => {
      userId = jsonResponse.id;
      return fetch(`https://api.spotify.com/v1/users/${userId}/playlists`, {
        headers: headers,
        method: 'POST',
        body: JSON.stringify({name: name})
      }).then(response => response.json()
      ).then(jsonResponse => {
        const playlistId = jsonResponse.id;
        return fetch(`https://api.spotify.com/v1/users/${userId}/playlists/${playlistId}/tracks`, {
          headers: headers,
          method: 'POST',
          body: JSON.stringify({uris: trackUris})
        });
      });
    });
  }
};

export default Spotify;