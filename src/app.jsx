var React = require('react');
var ReactDOM = require('react-dom');
var Grid = require('./grid.jsx')

var options = {
	
	teams: [
		{
			name: 'AFC Bournemouth',
			crest: './imgs/18.png',
			color: 'AFCB',
			coach: 'Eddie Howe',
			coachImg: './imgs/howe.jpg'
		},{
			name: 'Arsenal',
			crest: './imgs/01.png',
			color: 'ARS',
			coach: 'Arsene Wenger',
			coachImg: './imgs/wenger.jpg'
		},{
			name: 'Aston Villa',
			crest: './imgs/02.png',
			color: 'AST',
			coach: 'Remi Garde',
			coachImg: './imgs/garde.jpg'
		},{
			name: 'Chelsea',
			crest: './imgs/03.png',
			color: 'CHE',
			coach: 'Guus Hiddink',
			coachImg: './imgs/hiddink.jpg'
		},{
			name: 'Crystal Palace',
			crest: './imgs/15.png',
			color: 'CPFC',
			coach: 'Alan Pardew',
			coachImg: './imgs/pardew.jpg'
		},{
			name: 'Everton',
			crest: './imgs/04.png',
			color: 'EVE',
			coach: 'Roberto Martinez',
			coachImg: './imgs/martinez.jpg'
		},{
			name: 'Leicester',
			crest: './imgs/12.png',
			color: 'LEC',
			coach: 'Claudio Ranieri',
			coachImg: './imgs/ranieri.jpg'
		},{
			name: 'Liverpool',
			crest: './imgs/05.png',
			color: 'LIV',
			coach: 'Jurgen Klopp',
			coachImg: './imgs/klopp.jpg'
		},{
			name: 'Manchester City',
			crest: './imgs/06.png',
			color: 'MCFC',
			coach: 'Manuel Pellegrini',
			coachImg: './imgs/pellegrini.jpg'
		},{
			name: 'Manchester United',
			crest: './imgs/07.png',
			color: 'MUFC',
			coach: 'Louis van Gaal',
			coachImg: './imgs/van-gaal.jpg'
		},{
			name: 'Newcastle United',
			crest: './imgs/08.png',
			color: 'NEW',
			coach: 'Rafael Benitez',
			coachImg: './imgs/benitez.jpg'
		},{
			name: 'Norwich City',
			crest: './imgs/19.png',
			color: 'NOR',
			coach: 'Alex Neil',
			coachImg: './imgs/neil.jpg'
		},{
			name: 'Southhampton',
			crest: './imgs/09.png',
			color: 'SOU',
			coach: 'Ronald Koeman',
			coachImg: './imgs/koeman.jpg'
		},{
			name: 'Spurs',
			crest: './imgs/10.png',
			color: 'TOT',
			coach: 'Mauricio Pochettino',
			coachImg: './imgs/pochettino.jpg'
		},{
			name: 'Stoke City',
			crest: './imgs/17.png',
			color: 'STK',
			coach: 'Mark Hughes',
			coachImg: './imgs/hughes.jpg'
		},{
			name: 'Sunderland',
			crest: './imgs/13.png',
			color: 'SUN',
			coach: 'Sam Allardyce',
			coachImg: './imgs/allardyce.jpg'
		},{
			name: 'Swansea',
			crest: './imgs/16.png',
			color: 'SWA',
			coach: 'Fancesco Guidolin',
			coachImg: './imgs/howe.jpg'
		},{
			name: 'Watford',
			crest: './imgs/20.png',
			color: 'WAT',
			coach: 'Quique Flores',
			coachImg: './imgs/flores.jpg'
		},{
			name: 'West Brom',
			crest: './imgs/14.png',
			color: 'WBM',
			coach: 'Tony Pulis',
			coachImg: './imgs/pulis.jpg'
		},{
			name: 'West Ham',
			crest: './imgs/11.png',
			color: 'WHM',
			coach: 'Slaven Bilic',
			coachImg: './imgs/bilic.jpeg'
		}
	]
}

var element = React.createElement(Grid, options);
ReactDOM.render(element, document.querySelector('.grid'));
