var React = require('react');
var ReactDOM = require('react-dom');
var Grid = require('./grid.jsx')

var options = {
	
	teams: [
		{
			name: 'AFC Bournemouth',
			crest: './imgs/18.png',
			color: 'AFCB',
		},{
			name: 'Arsenal',
			crest: './imgs/01.png',
			color: 'ARS',
		},{
			name: 'Aston Villa',
			crest: './imgs/02.png',
			color: 'AST',
		},{
			name: 'Chelsea',
			crest: './imgs/03.png',
			color: 'CHE',
		},{
			name: 'Crystal Palace',
			crest: './imgs/15.png',
			color: 'CPFC',
		},{
			name: 'Everton',
			crest: './imgs/04.png',
			color: 'EVE',
		},{
			name: 'Leicester',
			crest: './imgs/12.png',
			color: 'LEC',
		},{
			name: 'Liverpool',
			crest: './imgs/05.png',
			color: 'LIV',
		},{
			name: 'Manchester City',
			crest: './imgs/06.png',
			color: 'MCFC',
		},{
			name: 'Manchester United',
			crest: './imgs/07.png',
			color: 'MUFC',
		},{
			name: 'Newcastle United',
			crest: './imgs/08.png',
			color: 'NEW',
		},{
			name: 'Norwich City',
			crest: './imgs/19.png',
			color: 'NOR',
		},{
			name: 'Southhampton',
			crest: './imgs/09.png',
			color: 'SOU',
		},{
			name: 'Spurs',
			crest: './imgs/10.png',
			color: 'TOT',
		},{
			name: 'Stoke City',
			crest: './imgs/17.png',
			color: 'STK',
		},{
			name: 'Sunderland',
			crest: './imgs/13.png',
			color: 'SUN',
		},{
			name: 'Swansea',
			crest: './imgs/16.png',
			color: 'SWA',
		},{
			name: 'Watford',
			crest: './imgs/20.png',
			color: 'WAT',
		},{
			name: 'West Brom',
			crest: './imgs/14.png',
			color: 'WBM',
		},{
			name: 'West Ham',
			crest: './imgs/11.png',
			color: 'WHM',
		}
	]
}

var element = React.createElement(Grid, options);
ReactDOM.render(element, document.querySelector('.container'));
