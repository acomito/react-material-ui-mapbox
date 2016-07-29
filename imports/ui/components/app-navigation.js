//basic imports
import React from 'react';
import { Link } from 'react-router';
//components
import { PublicNavigation } from './public-navigation';
import { AuthenticatedNavigation } from './authenticated-navigation';
import { SideNav } from './side-nav';
//material-ui stuff
import AppBar from 'material-ui/AppBar';
import Menu from 'material-ui/svg-icons/navigation/menu';
import IconButton from 'material-ui/IconButton';


const styles = {
  AppNavigation: {
    color: "#ffffff",
  },
  titleLink: {
    textDecoration: "none",
    color: "#ffffff"
  },
}

export class AppNavigation extends React.Component {
  
  constructor(props) {
    super(props);
    this.handleToggle = this.handleToggle.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.state = {open: false};
  }

  handleToggle() {
    this.setState({open: !this.state.open});
  }

  handleClose(){
    this.setState({open: false});
  } 

  renderNavigation(hasUser, currentPath) {
    return hasUser ? <AuthenticatedNavigation currentPath={currentPath} /> : <PublicNavigation currentPath={currentPath} />;
  }

  render() {
    return <div>
              <AppBar 
                title={<Link to="/" style={styles.titleLink}>Application Name</Link>}
                style={styles.AppNavigation}
                iconElementRight={ this.renderNavigation(this.props.hasUser, this.props.currentPath)}
                iconElementLeft={<IconButton onClick={this.handleToggle}><Menu className="mobileNav" color={"#FFFFFF"} /></IconButton>}
              />
              <SideNav isOpen={this.state.open} close={this.handleClose} hasUser={this.props.hasUser} currentPath={this.props.currentPath}/>
            </div>
  }
}


AppNavigation.propTypes = {
  hasUser: React.PropTypes.object,
  currentPath: React.PropTypes.string
};


