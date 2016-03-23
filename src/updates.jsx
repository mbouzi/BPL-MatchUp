var React = require('react');

module.exports = React.createClass({

	render: function(){
		return(
			<div className="col-xs-3">
				<div className="panel panel-info">
					<div className="panel-heading">
						<h3 className="panel-title">Team: {this.props.team}</h3>
					</div>
				</div>
				<div className="panel panel-info">
					<div className="panel-body">
						<h3 className="panel-title">Coach: {this.props.coach}</h3>
					</div>
				</div>
			</div>
		)
	}

})