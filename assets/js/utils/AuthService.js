import { EventEmitter } from 'events'
import Auth0Lock from 'auth0-lock'
import Auth0LockPasswordless from 'auth0-lock'
import { browserHistory } from 'react-router'

export default class AuthService extends EventEmitter {
  constructor(clientId, domain) {
    super();
    // Configure Auth0
    this.lock = new Auth0Lock(clientId, domain, {
      auth: {
        redirectUrl: window.location.origin + '/login',
        responseType: 'token'
      },
      languageDictionary: {
        title: "Cemaritan",
      },
      container: 'hiw-login-container',
      theme: {
        logo: '/images/cemaritan_logo_v.1.0_sm.png'
      },
      initialScreen: 'signUp',
      additionalSignUpFields: [
        {
          name: "firstName",
          placeholder: "Enter your first name",
          icon: "/images/badge-icon.ico",
        },
        {
          name: "lastName",
          placeholder: "Enter your last name",
          icon: "/images/badge-icon.ico",
        }
      ]
    });
    // Add callback for lock `authenticated` event
    this.lock.on('authenticated', this._doAuthentication.bind(this));
    // Add callback for lock `authorization_error` event
    this.lock.on('authorization_error', this._authorizationError.bind(this));
    // binds login functions to keep this context
    this.login = this.login.bind(this)
  }

  _doAuthentication(authResult) {
    // Saves the user token
    this.setToken(authResult.idToken);
    // navigate to the home route
    browserHistory.replace('/home');
    // Async loads the user profile data
    this.lock.getProfile(authResult.idToken, (error, profile) => {
      if (error) {
        console.log('Error loading the Profile', error);
      } else {
        this.setProfile(profile);
      }
    })
  }

  _authorizationError(error){
    // Unexpected authentication error
    console.log('Authentication Error', error);
  }

  login() {
    // Call the show method to display the widget.
    this.lock.show();
  }

  magiclink() {
    this.magiclink = new Auth0LockPasswordless();
    // Call the show method to display the widget.
    this.magiclink.magiclink()
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
    this.emit('profile_updated', null);
    browserHistory.replace('/login');
  }

  setProfile(profile){
    // Saves profile data to local storage, and triggers event to update UI
    if (profile) {
      localStorage.setItem('profile', JSON.stringify(profile))
    } else {
      localStorage.setItem('profile', '{}')
    }
    this.emit('profile_updated', profile)
  }

  getProfile(key){
    // Returns profile data from local storage
    var profile = localStorage.getItem('profile');
    if ( key && profile ) {
      return JSON.parse(profile)[key]
    } else {
      return JSON.parse(profile)
    }
  }
}
