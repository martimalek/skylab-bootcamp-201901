import React, { useEffect } from 'react';
import { withRouter } from 'react-router-dom';
// import socketApi from '../../../services/socket';
import gameService from '../../../services/game';

function Start(props) {

	const {
		match: {
			params: { gameId },
		},
	} = props;

	
	useEffect(() => {
		gameService.onNextQuestion(() => {
			props.history.push(`/player/${gameId}/gameblock`);		
		});
	}, []);


	return (
		<div className="player-game player-game--green">
			<div className="player-game__getready">
				<h2>Get ready!</h2>
				<div className="loadingspinner"></div>
				<h4>Loading...</h4>
			</div>
		</div>
	);
}

export default withRouter(Start);
