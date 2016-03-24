var React = require('react');

module.exports = React.createClass({

	render: function(){

		var styles = {
			width: this.props.counterPercentage + '%'
		};

		return(
			<div className="col-xs-4 header">
				<div className="progress">
				  <div className="progress-bar" role="progressbar" aria-valuenow={this.props.counterPercentage} aria-valuemin="0" aria-valuemax="100" style={styles} >
				 	<p>{this.props.counterPercentage}%</p>
				  </div>
				</div>
				<button className="btn btn-primary" type="">
				  Matches <span className="badge">{this.props.matchCount}</span>
				</button>
				<h5>Click twice to confirm choice!</h5>
			</div>
		)
	}
})