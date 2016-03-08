var React = require('react')


module.exports = React.createClass({

	handleClick: function(){
		this.props.whenColorItemClicked(this.props.team);
	},


	render: function(){
		return (
			<a href="#" 
				onClick={this.handleClick}
				className={this.props.className}>
			</a>
		)
	}
});