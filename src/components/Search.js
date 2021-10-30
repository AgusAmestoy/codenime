import { useState, useEffect } from 'react';
import FunSearch from "./FunSearch";

function Search(){
    const [search, SetSearch] = useState("");
    const [animeList, SetAnimeList] = useState([]);

    const HandleSearch = e => {
		e.preventDefault();
		
		FetchAnime(search);
	}


    const FetchAnime = async (query) => {
		const temp = await fetch(`https://api.jikan.moe/v3/search/anime?q=${query}&order_by=popularity&sort=asc&limit=10`)
			.then(res => res.json());

		SetAnimeList(temp.results);
	}
    
    return (
		<div className="Home-nav-search">

				<FunSearch
					HandleSearch={HandleSearch}
					search={search}
					SetSearch={SetSearch}
					animeList={animeList} />
			</div>
		
	);
}
export default Search;