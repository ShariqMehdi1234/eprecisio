import React from "react";
import { Routes, Route } from "react-router-dom";
import HomePages from './Pages/HomePages';
import InstagramDashboardPages from './Pages/InstagramDashboardPages';
import SpotifyArtistsDashboardPages from './Pages/SpotifyArtistsDashboardPages';
import SpotifyPlaylistDashboardPages from './Pages/SpotifyPlaylistDashboardPages';

function App() {
  return (
    <React.Fragment>
      <Routes>
        <Route path="/" element={<HomePages />} />
        <Route path="/instagram-dashboard" element={<InstagramDashboardPages />} />
        <Route path="/spotify-artists-dashboard" element={<SpotifyArtistsDashboardPages />} />
        <Route path="/spotify-playlist-dashboard" element={<SpotifyPlaylistDashboardPages />} />
      </Routes>
    </React.Fragment>
  );
}

export default App;
