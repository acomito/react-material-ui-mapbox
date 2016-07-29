import { Bert } from 'meteor/themeteorchef:bert';
import './routes.js';
import injectTapEventPlugin from 'react-tap-event-plugin';


// setup bert alert config
Bert.defaults.style = 'growl-top-right';

// Needed for onTouchTap // http://stackoverflow.com/a/34015469/988941 //http://www.material-ui.com/#/get-started/installation
injectTapEventPlugin();