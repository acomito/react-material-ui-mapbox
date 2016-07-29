import { composeWithTracker } from 'react-komposer';
import { Meteor } from 'meteor/meteor';
import { SideNav } from '../components/side-nav';

const composer = (props, onData) => {
  onData(null, { hasUser: Meteor.user() });
};

export default composeWithTracker(composer, {}, {}, { pure: false })(SideNav);
