import { composeWithTracker } from 'react-komposer';
import { Map } from '../components/map.js';
import { Loading } from '../components/loading.js';
import { Meteor } from 'meteor/meteor';



const composer = (params, onData) => {
    const data = "Hello World"
    onData(null, { data });
};

export default composeWithTracker(composer, Loading)(Map);