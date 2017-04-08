import {grey900, lightBlue800} from 'material-ui/styles/colors';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

const themeDefault = getMuiTheme({
  palette     : {
    primary1Color: lightBlue800
  },
  appBar      : {
    height: 57
    //color: lightBlue800
  },
  drawer      : {
    width: 230,
    color: grey900
  },
  raisedButton: {
    primaryColor: lightBlue800
  }
});

export default themeDefault;
