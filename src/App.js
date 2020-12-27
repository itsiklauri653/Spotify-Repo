import './App.css';
import React, { useEffect, useState } from 'react'
import Login from "./components/Login/Login"
import { getTokenFromUrl } from './DataLayer/spotify';
import SpotifyWebApi from 'spotify-web-api-js';
import {useDataLayerValue} from './DataLayer/DataLayer'
import Player from './components/Player/Player';

const spotify = new SpotifyWebApi();

function App() {
  const [{ user, token }, dispatch] = useDataLayerValue();
  
  useEffect(() => {
    const hash = getTokenFromUrl();
    window.location.hash = ""
    const _token = hash.access_token;

    if(_token){
      dispatch({
        type:'SET_TOKEN',
        token:_token
      });

      spotify.setAccessToken(_token);

      spotify.getMe().then(user => {
        console.log('User',user)
        dispatch({
          type: 'SET_USER',
          user: user,
        });
      });

      spotify.getUserPlaylists().then((playlists) => {
        dispatch({
          type: "SET_PLAYLISTS",
          playlists: playlists
        })
      });

      spotify.getPlaylist('37i9dQZEVXcIJazRV9ISoM').then(response => 
        dispatch({
          type: "SET_DISCOVER_WEEKLY",
          discover_weekly: response
        })
      );
    }
  }, []);

  return (
    
    <div className="app">
      {
        token ? (
          <Player spotify={spotify}/>
        ) : (
          <Login/>
        )
      }
    </div>
  );
}

export default App;