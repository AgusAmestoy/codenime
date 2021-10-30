import { useState, useEffect } from 'react';
import MainContent from "./MainContent";

function Animelist() {
	const [animeList, SetAnimeList] = useState([]);

	useEffect(() => {
		FetchDefault();
	});
	
	const FetchDefault = async ()=>{
		let url = "https://api.jikan.moe/v3/search/anime?q=&order_by=members&sort=desc&page=1&limit=30&type=tv";
		const temp = await fetch(url)
			.then(res => res.json());

		SetAnimeList(temp.results);
	}
	

	
	return (
		<div className="Animelist">
			
			<div className="content-wrap">

				<MainContent
					animeList={animeList} />
			</div>
		</div>
	);
}

export default Animelist;