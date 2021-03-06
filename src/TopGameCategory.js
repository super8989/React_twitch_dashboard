import React, { useState, useEffect } from "react";
import axios from "axios";

import "./TopGameCategory.css";

function TopGameCategory() {
	const [topGames, setTopGames] = useState([]);
	const API = "https://api.twitch.tv/helix/games/top";
	// const GET_CLIPS = "https://api.twitch.tv/helix/clips?id=";
	const CLIENT_ID = "mt5146rna7y3m6wlfvy2yvtq8matpa";

	useEffect(() => {
		getTwitch();
	}, []);

	console.log(topGames);

	async function getTwitch() {
		try {
			const response = await axios.get(API, {
				headers: { "Client-ID": CLIENT_ID }
			});
			setTopGames(response.data.data);
			console.log(response);
		} catch (error) {
			console.error(error);
		}
	}

	const handleClick = e => {
		console.log("clicked");
	};

	const _boxArt = url =>
		url.replace("{width}", "300").replace("{height}", "400");

	return (
		<div className='TopGameCategory-container'>
			{topGames.map(game => (
				<div key={game.id} onClick={handleClick}>
					<h1>{game.name}</h1>
					<img src={_boxArt(game.box_art_url)} alt={game.name} />
				</div>
			))}
		</div>
	);
}

export default TopGameCategory;
