import React from 'react';
import { browserHistory, Link } from 'react-router';
import { Meteor } from 'meteor/meteor';
import AppBar from 'material-ui/AppBar';
import FlatButton from 'material-ui/FlatButton';
import Popover from 'material-ui/Popover';
import Menu from 'material-ui/Menu';
import MenuItem from 'material-ui/MenuItem';
import ArrowDropDown from 'material-ui/svg-icons/navigation/arrow-drop-down';
import { returnActiveLink } from '../../modules/active-helpers';




const styles = {
  navLink: {
    color: "#ffffff"
  }
}

function UserNameDropDown(props) {
  
  const userName = () => {
      const user = Meteor.user();
      const name = user && user.profile ? user.profile.name : '';
      return user ? `${name.first} ${name.last}` : '';
    }

  return <FlatButton 
          label={userName()} 
          labelPosition="before" 
          style={styles.navLink}  
          icon={<ArrowDropDown />} 
          onTouchTap={props.handleTouchTap} 
          >
          </FlatButton>;
}

export class AuthenticatedNavigation extends React.Component {

  constructor(props) {
    super(props);
    this.state = { 
      open: false
    };
    this.handleRequestClose = this.handleRequestClose.bind(this);
    this.handleLogout = this.handleLogout.bind(this);
    this.handleTouchTap = this.handleTouchTap.bind(this);
  }

  handleTouchTap(event){
    // This prevents ghost click.
    event.preventDefault();

    this.setState({
      open: true,
      anchorEl: event.currentTarget,
    });
  }

handleLogout() {
  Meteor.logout(() => browserHistory.push('/login'));
}

  handleRequestClose(){
    this.setState({
      open: false,
    });
  }

  render() {
    const currentPath = this.props.currentPath;
    return <div className="navLinks" >
            <Link to="/">
              <FlatButton labelStyle={returnActiveLink(currentPath, '/')} style={styles.navLink} label="Index" />
            </Link>
            <Link to="/documents" >
              <FlatButton labelStyle={returnActiveLink(currentPath, '/documents')} style={styles.navLink} label="Documents" />
            </Link>
            <UserNameDropDown handleTouchTap={this.handleTouchTap} />
            <Popover
              open={this.state.open}
              anchorEl={this.state.anchorEl}
              anchorOrigin={{horizontal: 'left', vertical: 'bottom'}}
              targetOrigin={{horizontal: 'left', vertical: 'top'}}
              onRequestClose={this.handleRequestClose}
            >
              <Menu>
                <MenuItem primaryText="Logout" onTouchTap={ this.handleLogout }  />
              </Menu>
            </Popover>
        </div>
  }
  
}


AuthenticatedNavigation.propTypes = {
  hasUser: React.PropTypes.object,
  currentPath: React.PropTypes.string,
};
