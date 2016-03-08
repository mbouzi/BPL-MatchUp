var React = require('react');
var TeamThumbnail = require('./teamThumbnail.jsx');
var ColorThumbnail = require('./colorThumbnail.jsx');

module.exports = React.createClass({
	
	shuffleArray: function (array) {
	    for (var i = array.length - 1; i > 0; i--) {
	        var j = Math.floor(Math.random() * (i + 1));
	        var temp = array[i];
	        array[i] = array[j];
	        array[j] = temp;
	    }
	    return array;
	},

	getInitialState: function(){
		return {
			win: false,
			matched: [],
			matchCount: 0,
			team: null,
			color: null
		};

	},

	

	handleTeamClick: function(team){
		this.setState({
			team: team
		},function(){
			 console.log(this.state.matched)
		})
		console.log('team: ', this.state.team)
		console.log('color ',this.state.color)
		if (this.state.team === this.state.color) {
			this.state.matched.push(this.state.team)
			this.forceUpdate();

			console.log('match')
			console.log(this.state.matched)
		} else {
			console.log('no-match')
		}

		if (this.state.matched.length == 20) {
			alert('you win');
		}

	},

	handleColorClick: function(teamColor){
		console.log('team: ', this.state.team)
		console.log('color ',this.state.color)
		this.setState({
			color: teamColor
		},function(){
			 console.log(this.state.matched)
		})

		
		if (this.state.team === this.state.color) {
			this.state.matched.push(this.state.color)
			this.forceUpdate();

			console.log('match')
		} else {
			console.log('no-match')
		}

		if (this.state.matched.length == 20) {
			alert('you win');
		}
	},

	componentDidUpdate: function(team,teamColor){
	

	},

	render: function() {
		return (
			<div>
				<div className="row">
					<div className="team-grid col-lg-6">
					  {this.renderTeamList()}
					</div>
					<div className="color-grid col-lg-6">
					  {this.renderColorList()}
					</div>
				</div>
			</div>
		)
	},

	renderColorList: function(){
		var colorGrid = [];

		for (var key in this.props.teams) {
			var teamColor = this.props.teams[key];
			teamColor.key = key;

			colorGrid.push(
				<ColorThumbnail
					className={teamColor.color + " color-thumb col-xs-3 col-md-3"+ (this.state.color == teamColor ? " chosen" : "") + (this.state.matched.includes(teamColor) ? " matched" : "")}
					color={teamColor.color}
					team={teamColor}
					whenColorItemClicked={this.handleColorClick}
					key={teamColor.key}
				/>
			)
		}

		
		return colorGrid
	},

	renderTeamList: function(){

		var teamGrid = [];

		for (var key in this.props.teams) {
			var team = this.props.teams[key];
			team.key = key;

			teamGrid.push(
				<TeamThumbnail
					className = {"thumbnail" + (this.state.matched.includes(team) ? " matched" : "") + (this.state.team == team ? " chosen" : "")}
					whenTeamItemClicked={this.handleTeamClick}
					team={team}
					crest={team.crest}
					key={key}
				/>
			)
		}

		
		return teamGrid
	}
})