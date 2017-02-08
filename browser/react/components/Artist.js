import React from 'react';
import axios from 'axios';
import Songs from './Songs';
import Albums from './Albums';

export default class Artist extends React.Component {

  componentDidMount () {
    this.props.getArtistsAlbumsAndSongs(this.props.routeParams.artistId);

  }

  render () {
    return (
      <div>
        <h3>{this.props.selectedArtist.name}</h3>
        <Albums albums={this.props.albums} />
        <Songs songs={this.props.currentSongList} currentSong={this.props.currentSong}/>
      </div>
    );
  }
}
