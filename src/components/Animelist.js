import { useState, useEffect } from 'react';
import MainContent from "./MainContent";
import React from "react";


function Animelist() {
	const [animeList, SetAnimeList] = useState([]);
	var page = "5";

	useEffect(() => {
		FetchDefault();
	});

	const FetchDefault = async ()=>{
		let url = "https://api.jikan.moe/v3/search/anime?q=&order_by=members&sort=desc&page="+ page +"&limit=32&type=tv";
		const temp = await fetch(url)
			.then(res => res.json());

		SetAnimeList(temp.results);
	}
	

	
	return (
		<>
		<MainContent
			animeList={animeList}>
		</MainContent>
		</>
	);
}

export default Animelist;