import React, { Component } from 'react';
import Login from '../Login'
import Register from '../Register'
import Search from '../Search'
import Artists from '../Artists'
import Albums from '../Albums'
import Tracks from '../Tracks'
import Song from '../Song'
import logic from '../../logic'
import '../Search/index.sass'

class App extends Component {
  state = { loginFeedback: '', registerFeedback: '', searchFeedback: '', registerVisible: false, loginVisible: true, searchVisible: false, artistsVisible: false, albumsVisible: false, tracksVisible: false, songVisible:false, artists: [], albums: [], tracks: [], song: {}, popover: [] }

  toggleHidden = () => {
      this.setState({
          registerVisible: false,
          loginVisible: true
      })
  }


  handleLogout = () => {
      this.setState({
          searchVisible: false,
          artistsVisible: false,
          albumsVisible: false,
          tracksVisible: false,
          loginVisible: true
      })
  }

  handleAlbumsBack = () => {
      this.setState({
          albumsVisible: false,
          artistsVisible: true
      })
  }

  handleTracksBack = () => {
      this.setState({
          tracksVisible: false,
          albumsVisible: true
      })
  }

  handleSongBack = () => {
      this.setState({
          songVisible: false,
          tracksVisible: true
      })
  }

  loginHidden = () => {
      this.setState({
          loginVisible: false,
          registerVisible: true
      })
  }

  handleSearch = (query) => {
      try {
          logic.searchArtists(query, (error, artists) => {
              if (error) {
                  console.error(error.message)
                  this.setState({ searchFeedback: error.message })
              } else {
                  this.setState({ artistsVisible: true, artists})
                  this.setState({ searchFeedback: '' })
              }
          })
      } catch ({message}) {
          this.setState({ searchFeedback: message, artistsVisible: false, albumsVisible: false, tracksVisible: false, songVisible: false })
      }
  }
  handleAlbum = (artistId) => {
      try {
          logic.retrieveAlbums(artistId, (error, albums) => {
              if (error) {
                  console.error(error.message)
              } else {
                  this.setState({ albumsVisible: true, artistsVisible: false, albums})
              }
          })
      } catch ({message}) {
          console.error(message)
      }
  }
  handleTrack = (albumId) => {
      try {
          logic.retrieveTracks(albumId, (error, tracks) => {
              if (error) {
                  console.error(error.message)
              } else {
                  this.setState({ albumsVisible: false, tracksVisible: true,tracks})
              }
          })
      } catch ({message}) {
          console.error(message)
      }
  }
  handleSong = (trackId) => {
      try {
          logic.retrieveSong(trackId, (error, song) => {
              if (error) {
                  console.error(error.message)
              } else {
                  this.setState({ tracksVisible: false, songVisible: true, song})
              }
          })
      } catch ({message}) {
          console.error(message)
      }
  }


  handleRegister = (name, surname, email, password, passwordConfirm) => {
      try {
          logic.register(name, surname, email, password, passwordConfirm, () => {
              console.log('You have been successfully registered')

              this.setState({ registerFeedback: '' })
          })
      } catch ({message}) {
          this.setState({ registerFeedback: message })
      }
  }

  handleArtistsBack = () => {
      this.setState({ artistsVisible: false})
  }

  handleLogin = (email, password) => {
      try {
          logic.login(email, password, user => {
              console.log(user)

              window.actualUser = user

              this.setState({ loginFeedback: '' })
          })
          this.setState({
              loginVisible: false,
              searchVisible: true
          })
      } catch ({ message }) {
          this.setState({ loginFeedback: message })
      }
  }
  handleFavourite = (id) => {
      const email = window.actualUser.email
      logic.toggleFavourite(id, email, () => {
          console.log('Added to favourites')
      })
  }
  
  render() {

      const { state : { artists, albums, tracks, song, loginFeedback, registerFeedback, searchFeedback, registerVisible, loginVisible, searchVisible, artistsVisible, albumsVisible, tracksVisible, songVisible }, handleLogin, handleRegister, handleSearch, handleAlbum, handleTrack, handleSong, handleArtistsBack, handleLogout, handleAlbumsBack, handleTracksBack, handleSongBack, handleFavourite } = this

      return <main className="app">
      {loginVisible && <Login onLogin={handleLogin} onToRegister={this.loginHidden} feedback={loginFeedback}/>}
      {registerVisible && <Register onRegister={handleRegister} onToLogin={this.toggleHidden} feedback={registerFeedback}/>}
      {searchVisible && <Search onSearch={handleSearch} feedback={searchFeedback} logOut={handleLogout}/>}
      {artistsVisible && <Artists artists={artists} onArtist={handleAlbum} goArtistsBack={handleArtistsBack}/>}
      {albumsVisible && <Albums albums={albums} onAlbum={handleTrack} goAlbumsBack={handleAlbumsBack}/>}
      {tracksVisible && <Tracks tracks={tracks} onTrack={handleSong} goTracksBack={handleTracksBack}/>}
      {songVisible && <Song song={song} goSongBack={handleSongBack} addFavourite={handleFavourite}/>}
      
      </main>
  }
}

export default App;
