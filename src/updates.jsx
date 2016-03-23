

module.exports = React.createClass({

	render: function(){
		return(
			<div className="panel panel-info">
				<div className="panel-heading">
					<h3 className="panel-title">{this.state.team}</h3>
				</div>
			</div>
			<div className="panel panel-info">
				<div className="panel-body">
					<h3 className="panel-title">{this.state.coach}</h3>
				</div>
			</div>
			
		)
	}

})