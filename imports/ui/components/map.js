import React from 'react';
import 'flexboxgrid';
import { Meteor } from 'meteor/meteor';
import { Tracker } from 'meteor/tracker';

Meteor.startup(function() {
  Mapbox.load();
});

Tracker.autorun(function () {
  if (Mapbox.loaded()) {
    L.mapbox.accessToken = "";
	var map = L.mapbox.map("map", "");
 }
});

export class Map extends React.Component {



	render(){

		return <div id="map"></div>
	}
};
