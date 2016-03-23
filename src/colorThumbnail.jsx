var React = require('react')


module.exports = React.createClass({

	handleClick: function(){
		this.props.whenCoachItemClicked(this.props.team);
	},


	render: function(){
		return (
			<div className="card-container col-xs-3 col-lg-3" >
				<div className="card">
					<a 
						onClick={this.handleClick} 
						className = {this.props.className}
					>
						<img 
							src={this.props.coachImg} 
						/>
					</a>
					<a className="back">
						<img  src="imgs/premierleague.png" />
					</a>
				</div>
			</div>
			
		)
	}
});