var React = require('react');
var TeamThumbnail = require('./teamThumbnail.jsx');

module.exports = React.createClass({
	

	render: function() {
		return (
			<div className="row">
			  {this.renderList()}
			</div>
		)
	},



	renderList: function(){

		var teamGrid = [];

		for (var key in this.props.teams) {
			var team = this.props.teams[key];
			team.key = key;

			teamGrid.push(
				<Thumbnail
					whenItemClicked={this.handleClick}
					team={team}
					crest={team.crest}
					key={key}
				/>
			)
		}

		
		return teamGrid
	}
})