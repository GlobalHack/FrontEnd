import React from 'react';
import { storiesOf, action } from '@kadira/storybook';

storiesOf('Login', module)
  .add('logged out', () => (
    <button onClick={action('clicked')}
      style={{
        backgroundColor: 'red' // just an example of using styles
      }}
    >Login</button>
  ))
  .add('logged in', () => (
    <button><a href="#">Logout</a></button>
  ));
