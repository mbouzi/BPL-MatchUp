var React = require('react');

module.exports = React.createClass({

	render: function(){
		return(
			<div className="progress">
			  <div className="progress-bar" role="progressbar" aria-valuenow={this.counterPercentage} aria-valuemin="0" aria-valuemax="100" style={this.props.style} >
			    {this.counter}
			  </div>
			</div>
		)
	}
})