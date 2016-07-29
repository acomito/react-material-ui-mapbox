// basic imports
import React from 'react';
import { Link, browserHistory } from 'react-router';
//modules
import { returnActiveSideNav } from '../../modules/active-helpers';
//material-ui stuff
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import Divider from 'material-ui/Divider';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import Avatar from 'material-ui/Avatar';



const styles = {
	overLayStyle: {
		position: "absolute",
	    bottom: 0,
	    right: 0,
	    left: 0,
	    paddingTop: 8,
	    background: "none",
	    height: "100%"
	},
	avatarStyles: {
		margin: "auto",

	}
};

const handleLogout = () => {
  Meteor.logout(() => browserHistory.push('/login'));
}

const AuthenticatedSideNav = ({currentPath}) => {
	return <div>
				<Link to="/documents"  onClick={close} > <MenuItem style={returnActiveSideNav(currentPath, '/documents')} >documents</MenuItem> </Link>
            	<Link to="/logout"   onClick={ () => {handleLogout()} } > <MenuItem style={returnActiveSideNav(currentPath, '/logout')} >logout</MenuItem> </Link>
            </div>
}

const PublicSideNav = ({currentPath}) => {
		return <div>
				<Link to="/signup"  onClick={close} > <MenuItem style={returnActiveSideNav(currentPath, '/signup')} >signup</MenuItem> </Link>
            	<Link to="/login"   onClick={close} > <MenuItem style={returnActiveSideNav(currentPath, '/login')} >login</MenuItem> </Link>
            </div>
}


export class SideNav extends React.Component {

  renderNavigation(hasUser, currentPath) {
    return hasUser ? <AuthenticatedSideNav currentPath={currentPath} /> : <PublicSideNav currentPath={currentPath} />;
  }

  render() {
  	const { isOpen, close, currentPath, hasUser } = this.props;
  	return <div>
          <Drawer open={isOpen} docked={false} onRequestChange={close}>
            	{ this.renderNavigation(hasUser, currentPath)}
          </Drawer>
        </div>
  }

}

SideNav.propTypes = {
  hasUser: React.PropTypes.object,
  close: React.PropTypes.func,
  isOpen: React.PropTypes.bool,
  currentPath: React.PropTypes.string,
  
};

