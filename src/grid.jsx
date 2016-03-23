var React = require('react');
var TeamThumbnail = require('./teamThumbnail.jsx');
var ColorThumbnail = require('./colorThumbnail.jsx');
var Updates = require('./updates.jsx');
var Counter = require('./counter.jsx');

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
			coach: null,
			coachName: null,
			teamName: null
			
		};

	},

	

	handleTeamClick: function(team){
		this.setState({
			team: team,
			teamName: team.name
		},function(){
			 console.log(this.state.matched)
		})
		console.log('team: ', this.state.teamName)
		console.log('coach: ',this.state.coachName)
		if (this.state.team === this.state.coach) {
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

	handleCoachClick: function(teamCoach){
		console.log('team: ', this.state.teamName)
		console.log('coach ',this.state.coachName)
		this.setState({
			coach: teamCoach,
			coachName: teamCoach.coach
		},function(){
			 console.log(this.state.matched)
		})

		
		if (this.state.team === this.state.coach) {
			this.state.matched.push(this.state.coach)
			this.forceUpdate();

			console.log('match')
		} else {
			console.log('no-match')
		}

		if (this.state.matched.length == 20) {
			alert('you win');
		}
	},

	componentDidUpdate: function(team,teamCoach){
	

	},

	render: function() {
		return (
			<div>
				<div className="center-block row">
					<div className="col-xs-3">
						<Counter
							
						 />
					</div>
					<div className="col-xs-3">
						<img src="imgs/logo.png"/>
					</div>
					
					<Updates
						team={this.state.teamName}
						coach={this.state.coachName}
					 />


				</div>
				<div className="row">
					<div className="team-grid col-xs-6">
					  {this.renderTeamList()}
					</div>
					<div className="color-grid col-xs-6">
					  {this.renderCoachList()}
					</div>
				</div>
			</div>
		)
	},



	renderCoachList: function(){
		var coachGrid = [];

		for (var key in this.props.teams) {
			var teamCoach = this.props.teams[key];
			teamCoach.key = key;

			coachGrid.push(
				<ColorThumbnail
					className={"front thumb thumbnail"+ (this.state.coach == teamCoach ? " chosen" : "") + (this.state.matched.includes(teamCoach) ? " flipped" : "")}
					coachImg={teamCoach.coachImg}
					team={teamCoach}
					whenCoachItemClicked={this.handleCoachClick}
					key={teamCoach.key}
				/>
			)
		}

		
		return coachGrid
	},

	renderTeamList: function(){

		var teamGrid = [];

		for (var key in this.props.teams) {
			var team = this.props.teams[key];
			team.key = key;

			teamGrid.push(
				<TeamThumbnail
					className = {"front thumbnail thumb" + (this.state.matched.includes(team) ? " flipped" : "") + (this.state.team == team ? " chosen" : "")}
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