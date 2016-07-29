import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import 'flexboxgrid';

styles={
	raisedButtons: {
		width: "300px",
		margin: "30px 10px 10px 10px"
	},
}

export const Index = () => (
  	<div  className="row center-xs middle-xs" style={{padding: "100px 0px"}}>
		<div className="box">
	  		<h2>Base Material-UI</h2>
	    	<p>A Material-UI starting point for Meteor/React applications.</p>
			<RaisedButton style={styles.raisedButtons} secondary={true} label="Material-UI Base Documentation" href="https://github.com/acomito/base" />
	    	<RaisedButton style={styles.raisedButtons} label="Original Base Documentation" href="https://themeteorchef.com/base" />
	    	<p style={ { fontSize: '14px', color: '#aaa', marginTop: "20px" } }>forked from themeteorchef <a href="https://themeteorchef.com/base">base</a> at v4.5.0</p>
		</div>
  	</div>
);


