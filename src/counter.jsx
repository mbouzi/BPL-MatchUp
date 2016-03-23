var React = require('react');

module.exports = React.createClass({

	render: function(){

		var styles = {
			width: this.props.counterPercentage + '%'
		};

		return(
			<div className="progress">
			  <div className="progress-bar" role="progressbar" aria-valuenow={this.props.counterPercentage} aria-valuemin="0" aria-valuemax="100" style={styles} >
			    {this.props.matchCount}
			  </div>
			</div>
		)
	}
})