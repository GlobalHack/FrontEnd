import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import {white} from 'material-ui/styles/colors';
// import Mailbox from 'material-ui/svg-icons/communication/mail-outline';
import Menu from 'material-ui/svg-icons/navigation/menu';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import React, {PropTypes} from 'react';
import AuthService from '../../utils/AuthService';

class Header extends React.Component {
  static contextTypes = {
    router: PropTypes.object
  };

  constructor(props, context) {
    super(props, context);
    this.state = {
      profile: props.auth.getProfile()
    };
    props.auth.on('profile_updated', (newProfile) => {
      this.setState({profile: newProfile});
    });
  }

  static propTypes = {
    auth: PropTypes.instanceOf(AuthService)
  };

  logout() {
    this.props.auth.logout();
    this.context.router.push('/login');
  }

  render() {
    const {styles, handleChangeRequestNavDrawer} = this.props;

    const style = {
      appBar             : {
        position : 'fixed',
        top      : 0,
        overflow : 'hidden',
        maxHeight: 57
      },
      menuButton         : {
        marginLeft: 10
      },
      iconsRightContainer: {
        marginLeft: 20
      }
    };

    return (
      <div>
        <AppBar
          style={{...styles, ...style.appBar}}
          title={
            "Cemaritan"
          }
          iconElementLeft={
            <IconButton style={style.menuButton} onClick={handleChangeRequestNavDrawer}>
              <Menu color={white}/>
            </IconButton>
          }
          iconElementRight={
            <div style={style.iconsRightContainer}>
              {/*<IconMenu color={white}*/}
                        {/*iconButtonElement={*/}
                          {/*<IconButton><Mailbox color={white}/></IconButton>*/}
                        {/*}*/}
                        {/*targetOrigin={{horizontal: "right", vertical: "top"}}*/}
                        {/*anchorOrigin={{horizontal: "right", vertical: "bottom"}}*/}
              {/*>*/}
                {/*<MenuItem key={1} primaryText="Application 1"/>*/}
                {/*<MenuItem key={2} primaryText="Application 2"/>*/}
                {/*<MenuItem key={3} primaryText="Application 3"/>*/}
              {/*</IconMenu>*/}
              <IconMenu color={white}
                        iconButtonElement={
                          <IconButton><MoreVertIcon color={white}/></IconButton>
                        }
                        targetOrigin={{horizontal: "right", vertical: "top"}}
                        anchorOrigin={{horizontal: "right", vertical: "bottom"}}
              >
                <MenuItem primaryText="Sign out"
                          onClick={this.logout.bind(this)}
                />
              </IconMenu>
            </div>
          }
        />
      </div>
    );
  }
}

Header.propTypes = {
  styles                      : PropTypes.object,
  handleChangeRequestNavDrawer: PropTypes.func
};

export default Header;
