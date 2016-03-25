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
			coachImg: './imgs/howe.jpg',
			captain: 'Tommy Elphick',
			captainImg: './imgs/elphick.jpg'
		},{
			name: 'Arsenal',
			crest: './imgs/01.png',
			color: 'ARS',
			coach: 'Arsene Wenger',
			coachImg: './imgs/wenger.jpg',
			captain: 'Mikel Arteta',
			captainImg: './imgs/arteta.jpg'
		},{
			name: 'Aston Villa',
			crest: './imgs/02.png',
			color: 'AST',
			coach: 'Remi Garde',
			coachImg: './imgs/garde.jpg',
			captain: 'Mical Richards',
			captainImg: './imgs/richards.jpg'
		},{
			name: 'Chelsea',
			crest: './imgs/03.png',
			color: 'CHE',
			coach: 'Guus Hiddink',
			coachImg: './imgs/hiddink.jpg',
			captain: 'John Terry',
			captainImg: './imgs/terry.jpg'
		},{
			name: 'Crystal Palace',
			crest: './imgs/15.png',
			color: 'CPFC',
			coach: 'Alan Pardew',
			coachImg: './imgs/pardew.jpg',
			captain: 'Jedinak',
			captainImg: './imgs/jedinak.jpg'
		},{
			name: 'Everton',
			crest: './imgs/04.png',
			color: 'EVE',
			coach: 'Roberto Martinez',
			coachImg: './imgs/martinez.jpg',
			captain: 'Phil Jagielka',
			captainImg: './imgs/jagielka.jpg'
		},{
			name: 'Leicester',
			crest: './imgs/12.png',
			color: 'LEC',
			coach: 'Claudio Ranieri',
			coachImg: './imgs/ranieri.jpg',
			captain: 'Wes Morgan',
			captainImg: './imgs/morgan.jpg'
		},{
			name: 'Liverpool',
			crest: './imgs/05.png',
			color: 'LIV',
			coach: 'Jurgen Klopp',
			coachImg: './imgs/klopp.jpg',
			captain: 'Jordan Henderson',
			captainImg: './imgs/henderson.jpg'
		},{
			name: 'Manchester City',
			crest: './imgs/06.png',
			color: 'MCFC',
			coach: 'Manuel Pellegrini',
			coachImg: './imgs/pellegrini.jpg',
			captain: 'Vincent Kompany',
			captainImg: './imgs/elphick.jpg'
		},{
			name: 'Manchester United',
			crest: './imgs/07.png',
			color: 'MUFC',
			coach: 'Louis van Gaal',
			coachImg: './imgs/van-gaal.jpg',
			captain: 'Wayne Rooney',
			captainImg: './imgs/rooney.jpg'
		},{
			name: 'Newcastle United',
			crest: './imgs/08.png',
			color: 'NEW',
			coach: 'Rafael Benitez',
			coachImg: './imgs/benitez.jpg',
			captain: 'Coloccini',
			captainImg: './imgs/coloccini.jpg'
		},{
			name: 'Norwich City',
			crest: './imgs/19.png',
			color: 'NOR',
			coach: 'Alex Neil',
			coachImg: './imgs/neil.jpg',
			captain: 'Russell Martin',
			captainImg: './imgs/martin.jpg'
		},{
			name: 'Southhampton',
			crest: './imgs/09.png',
			color: 'SOU',
			coach: 'Ronald Koeman',
			coachImg: './imgs/koeman.jpg',
			captain: 'Jose Fonte',
			captainImg: './imgs/fonte.jpg'
		},{
			name: 'Spurs',
			crest: './imgs/10.png',
			color: 'TOT',
			coach: 'Mauricio Pochettino',
			coachImg: './imgs/pochettino.jpg',
			captain: 'Hugo Lloris',
			captainImg: './imgs/lloris.jpg'
		},{
			name: 'Stoke City',
			crest: './imgs/17.png',
			color: 'STK',
			coach: 'Mark Hughes',
			coachImg: './imgs/hughes.jpg',
			captain: 'Ryan Shawcross',
			captainImg: './imgs/shawcross.jpg'
		},{
			name: 'Sunderland',
			crest: './imgs/13.png',
			color: 'SUN',
			coach: 'Sam Allardyce',
			coachImg: './imgs/allardyce.jpg',
			captain: "John O'Shea",
			captainImg: './imgs/oshea.jpg'
		},{
			name: 'Swansea',
			crest: './imgs/16.png',
			color: 'SWA',
			coach: 'Fancesco Guidolin',
			coachImg: './imgs/guidolin.jpg',
			captain: 'Ashley Williams',
			captainImg: './imgs/williams.jpg'
		},{
			name: 'Watford',
			crest: './imgs/20.png',
			color: 'WAT',
			coach: 'Quique Flores',
			coachImg: './imgs/flores.jpg',
			captain: 'Troy Deeney',
			captainImg: './imgs/deeney.jpg'
		},{
			name: 'West Brom',
			crest: './imgs/14.png',
			color: 'WBM',
			coach: 'Tony Pulis',
			coachImg: './imgs/pulis.jpg',
			captain: 'Darren Fletcher',
			captainImg: './imgs/fletcher.jpg'
		},{
			name: 'West Ham',
			crest: './imgs/11.png',
			color: 'WHM',
			coach: 'Slaven Bilic',
			coachImg: './imgs/bilic.jpeg',
			captain: 'Kevin Noal',
			captainImg: './imgs/nolan.jpg'
		}
	]
}

var element = React.createElement(Grid, options);
ReactDOM.render(element, document.querySelector('.grid'));
