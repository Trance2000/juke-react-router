import React from 'react';
import axios from 'axios';
import {Link} from 'react-router';

import Songs from './Songs';
import Albums from './Albums';

export default class Artist extends React.Component {


  componentDidMount () {
    this.props.getArtistsAlbumsAndSongs(this.props.routeParams.artistId);

  }

  render () {
    const selectedArtist = this.props.selectedArtist;
    const children = this.props.children;
    const propsToPassToChildren = {
      albums: this.props.albums,
      selectAlbum: this.props.selectAlbum,
      album: this.props.selectedAlbum,
      currentSong: this.props.currentSong,
      isPlaying: this.props.isPlaying,
      toggleOne: this.toggleOne,
      artists: this.props.artists,
      songs: this.props.currentSongList,
      selectedArtist: this.props.selectedArtist,
      getArtistsAlbumsAndSongs: this.props.getArtistsAlbumsAndSongs
    };
    console.log(this.props);
    return (
      <div>
        <h3>{ selectedArtist.name }</h3>
          <ul className="nav nav-tabs">
            <li><Link to={`/artists/${this.props.routeParams.artistId}/albums`}>ALBUMS</Link></li>
            <li><Link to={`/artists/${this.props.routeParams.artistId}/songs`}>SONGS</Link></li>
          </ul>
        { children && React.cloneElement(children, propsToPassToChildren) }
      </div>
    );
  }
}
