var React = require('react');
var ReactDOM = require('react-dom');
var Grid = require('./grid.jsx')

var options = {
	
	teams: [
		{
			name: 'AFC Bournemouth',
			crest: './imgs/600.png',
			color: 'AFCB',
		},{
			name: 'Arsenal',
			crest: './imgs/602.png',
			color: 'ARS',
		},{
			name: 'Aston Villa',
			crest: './imgs/603.png',
			color: 'AST',
		},{
			name: 'Chelsea',
			crest: './imgs/630.png',
			color: 'CHE',
		},{
			name: 'Crystal Palace',
			crest: './imgs/642.png',
			color: 'CPFC',
		},{
			name: 'Everton',
			crest: './imgs/650.png',
			color: 'EVE',
		},{
			name: 'Leicester',
			crest: './imgs/673.png',
			color: 'LEC',
		},{
			name: 'Liverpool',
			crest: './imgs/676.png',
			color: 'LIV',
		},{
			name: 'Manchester City',
			crest: './imgs/679.png',
			color: 'MCFC',
		},{
			name: 'Manchester United',
			crest: './imgs/680.png',
			color: 'MUFC',
		},{
			name: 'Newcastle United',
			crest: './imgs/688.png',
			color: 'NEW',
		},{
			name: 'Norwich City',
			crest: './imgs/691.png',
			color: 'NOR',
		},{
			name: 'Southhampton',
			crest: './imgs/713.png',
			color: 'SOU',
		},{
			name: 'Spurs',
			crest: './imgs/728.png',
			color: 'TOT',
		},{
			name: 'Stoke City',
			crest: './imgs/721.png',
			color: 'STK',
		},{
			name: 'Sunderland',
			crest: './imgs/722.png',
			color: 'SUN',
		},{
			name: 'Swansea',
			crest: './imgs/724.png',
			color: 'SWA',
		},{
			name: 'Watford',
			crest: './imgs/730.png',
			color: 'WAT',
		},{
			name: 'West Brom',
			crest: './imgs/734.png',
			color: 'WBM',
		},{
			name: 'West Ham',
			crest: './imgs/735.png',
			color: 'WHM',
		}
	]
}

var element = React.createElement(Grid, options);
ReactDOM.render(element, document.querySelector('.container'));
