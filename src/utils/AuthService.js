import Auth0Lock from 'auth0-lock';
import {EventEmitter} from 'events';
import {browserHistory} from 'react-router';
import {isTokenExpired} from './jwtHelper';

export default class AuthService extends EventEmitter {
  constructor(clientId, domain, initialScreen) {
    super();
    // Configure Auth0
    this.lock = new Auth0Lock(clientId, domain, {
      auth: {
        redirectUrl: `${window.location.origin}/login`,
        responseType: 'token',
        params: {
          scope: 'openid uid org'
        }
      },
      languageDictionary: {
        title: "Cemaritan"
      },
      container: 'hiw-login-container',
      theme: {
        logo: '/images/cemaritan_logo_v.1.0_sm.png'
      },
      initialScreen: initialScreen,
      additionalSignUpFields: [
        {
          name: "firstName",
          placeholder: "Enter your first name",
          icon: "/images/badge-icon.ico"
        },
        {
          name: "lastName",
          placeholder: "Enter your last name",
          icon: "/images/badge-icon.ico"
        }
      ]
    });
    // Add callback for lock `authenticated` event
    this.lock.on('authenticated', this._doAuthentication.bind(this));
    // Add callback for lock `authorization_error` event
    this.lock.on('authorization_error', this._authorizationError.bind(this));
    // binds login functions to keep this context
    this.login = this.login.bind(this);
  }

  _doAuthentication(authResult) {
    // Saves the user token
    this.setToken(authResult.idToken);
    // navigate to the home route
    browserHistory.replace('/');
    // Async loads the user profile data
    this.lock.getProfile(authResult.idToken, (error, profile) => {
      if (error) {
        console.log('Error loading the Profile', error);
      } else {
        this.setProfile(profile);
      }
      window.location.reload();
    });
  }

  _authorizationError(error) {
    // Unexpected authentication error
    console.log('Authentication Error', error);
  }

  login() {
    // Call the show method to display the widget.
    this.lock.show();
  }

  loggedIn() {
    // Checks if there is a saved token and it's still valid
    const token = this.getToken();
    return !!token && !isTokenExpired(token);
  }

  setProfile(profile) {
    // Saves profile data to localStorage
    localStorage.setItem('profile', JSON.stringify(profile));
    // Triggers profile_updated event to update the UI
    this.emit('profile_updated', profile);
  }

  getProfile() {
    // Retrieves the profile data from localStorage
    const profile = localStorage.getItem('profile');
    return profile ? JSON.parse(localStorage.profile) : {};
  }

  setToken(idToken) {
    // Saves user token to localStorage
    localStorage.setItem('jwt', idToken);
  }

  getToken() {
    // Retrieves the user token from localStorage
    return localStorage.getItem('jwt');
  }

  logout() {
    // Clear user token and profile data from localStorage
    localStorage.removeItem('jwt');
    localStorage.removeItem('profile');
  }
};
