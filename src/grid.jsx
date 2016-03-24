var React = require('react');
var TeamThumbnail = require('./teamThumbnail.jsx');
var ColorThumbnail = require('./colorThumbnail.jsx');
var Updates = require('./updates.jsx');
var Counter = require('./counter.jsx');


module.exports = React.createClass({
	
	
	getInitialState: function(){
		return {
			win: false,
			matched: [],
			matchCount: 0,
			counterPercentage: 0,
			team: null,
			coach: null,
			coachName: null,
			teamName: null,
			labelOne: 'warning',
			labelTwo: 'X',
			shuffTeams: _.shuffle(this.props.teams),
			shuffCoaches: _.shuffle(this.props.teams)
			
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
		if (this.state.team === this.state.coach && this.state.team != null) {
			this.state.matched.push(this.state.team)
			this.setState({
				matchCount: this.state.matchCount + 1,
				counterPercentage: this.state.counterPercentage + 5,
				labelOne: 'success',
				labelTwo: '✓',
				team: null

			})
			console.log('match')
			console.log(this.state.matched)
		} else {
			console.log('no-match')
			this.setState({
				labelOne: 'danger',
				labelTwo: 'x',
			})
		}

		if (this.state.matched.length == 20) {
			alert('You Win!!!');
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

		
		if (this.state.team === this.state.coach && this.state.team != null) {
			this.state.matched.push(this.state.coach)
			this.setState({
				matchCount: this.state.matchCount + 1,
				counterPercentage: this.state.counterPercentage + 5,
				labelOne: 'success',
				labelTwo: '✓',
				team: null
			})
			alert(this.props.teams.shuffleArray())
			console.log('match')
		} else {
			console.log('no-match')
			this.setState({
				labelOne: 'danger',
				labelTwo: 'x',
			})
		}

		if (this.state.matched.length == 20) {
			alert('You Win!!!');
		}
	},

	componentDidUpdate: function(team,teamCoach){
	

	},

	render: function() {
		return (
			<div>
				<div className="center-block row">
					<Counter
						matchCount = {this.state.matchCount}
						counterPercentage = {this.state.counterPercentage}
					 />
					<div className="col-xs-4">
						<div className="logo"></div>
					</div>
					
					<Updates
						team={this.state.teamName}
						coach={this.state.coachName}
						className={"label label-" + this.state.labelOne}
						labelTwo={this.state.labelTwo}
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
		for (var key in this.state.shuffCoaches) {
			var teamCoach = this.state.shuffCoaches[key];
			teamCoach.key = key;

			coachGrid.push(
				<ColorThumbnail
					className={"front thumb thumbnail"+ (this.state.coach == teamCoach ? " chosen" : "")}
					toFlip = {"card" + (this.state.matched.includes(teamCoach) ? " flipped" : "")}
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
		for (var key in this.state.shuffTeams) {
			var team = this.state.shuffTeams[key];
			team.key = key;

			teamGrid.push(
				<TeamThumbnail
					className = {"front thumbnail thumb" + (this.state.team == team ? " chosen" : "")}
					toFlip = {"card" + (this.state.matched.includes(team) ? " flipped" : "")}
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