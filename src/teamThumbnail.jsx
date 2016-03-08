var React = require('react')


module.exports = React.createClass({

	handleClick: function(){
		this.props.whenItemClicked(this.props.team);
	},


	render: function(){
		return (
			<div className="col-xs-3 col-md-3" >
				<a 
					onClick={this.handleClick} href="#" 
					className = {this.props.className}
				>
					<img 
						src={this.props.crest} 
					/>
				</a>
			</div>
		)
	}
});