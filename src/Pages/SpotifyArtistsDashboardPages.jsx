import React from "react";
import HeaderPages from './HeaderPages';
import SpotifyArtistsDashboardComponents from '../Components/SpotifyArtistsDashboardComponents';

function SpotifyArtistsDashboardPages() {
  return (
    <React.Fragment>
      <HeaderPages />
      <SpotifyArtistsDashboardComponents />
    </React.Fragment>
  );
}

export default SpotifyArtistsDashboardPages;
