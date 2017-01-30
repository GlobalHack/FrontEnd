import Auth0Lock from 'auth0-lock'
import { browserHistory } from 'react-router'

export default class AuthService {
  constructor(clientId, domain) {
    // Configure Auth0
    this.lock = new Auth0Lock(clientId, domain, {
      auth: {
        redirectUrl: window.location.origin + '/login',
        responseType: 'token'
      }
    })
    // Add callback for lock `authenticated` event
    this.lock.on('authenticated', this._doAuthentication.bind(this))
    // binds login functions to keep this context
    this.login = this.login.bind(this)
  }

  _doAuthentication(authResult) {
    // Saves the user token
    var _this = this
    this.setToken(authResult.accessToken)

    // navigate to the home route
    this.lock.getUserInfo(authResult.accessToken, (error, info) => {
      if ( ! error ) {
        _this.setProfile(info)
        browserHistory.replace('/home')
      }
    })
  }

  login() {
    // Call the show method to display the widget.
    this.lock.show()
  }

  loggedIn() {
    // Checks if there is a saved token and it's still valid
    return !!this.getToken()
  }

  setToken(idToken) {
    // Saves user token to local storage
    localStorage.setItem('id_token', idToken)
  }

  getToken() {
    // Retrieves the user token from local storage
    return localStorage.getItem('id_token')
  }

  logout() {
    // Clear user token and profile data from local storage
    localStorage.removeItem('id_token');
    localStorage.setItem('profile', '{}');
    browserHistory.replace('/login')
  }

  setProfile(profile){
    // Saves profile data to local storage, and triggers event to update UI
    if (profile) {
      localStorage.setItem('profile', JSON.stringify(profile))
    } else {
      localStorage.setItem('profile', '{}')
    }
  }

  getProfile(key){
    // Returns profile data from local storage
    var profile = localStorage.getItem('profile')
    if ( key && profile ) {
      return JSON.parse(profile)[key]
    } else {
      return JSON.parse(profile)
    }
  }
}
