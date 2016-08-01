import React from 'react';
import 'flexboxgrid';
import { Meteor } from 'meteor/meteor';
import { Tracker } from 'meteor/tracker';

Meteor.startup(function() {
  Mapbox.load();
});

Tracker.autorun(function () {
  if (Mapbox.loaded()) {
    L.mapbox.accessToken = "pk.eyJ1IjoiYXJjb21pdG8iLCJhIjoiY2lyYjNobDNsMDE0d2cybTNkbXJpYWRzeCJ9.2uhkO2lcl4JkgUqr5VBrRQ";
	var map = L.mapbox.map("map", "arcomito.10epca2d");
 }
});

export class Map extends React.Component {



	render(){

		return <div id="map"></div>
	}
};
