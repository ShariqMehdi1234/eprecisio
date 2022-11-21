import React from "react";
import HeaderPages from './HeaderPages';
import SpotifyPlaylistDashboardComponents from '../Components/SpotifyPlaylistDashboardComponents';

function SpotifyPlaylistDashboardPages() {
  return (
    <React.Fragment>
      <HeaderPages />
      <SpotifyPlaylistDashboardComponents />
    </React.Fragment>
  );
}

export default SpotifyPlaylistDashboardPages;
