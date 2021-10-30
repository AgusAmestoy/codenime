import React from 'react'
import { Link } from 'react-router-dom'
function AnimeCard({anime}) {
	return (
		<article className="anime-card">
			{/* <Link to ="Watch"> */}
			<a 
				href={anime.url} 
				target="_blank" 
				rel="noreferrer">
				<figure>
					<img className="animg"
						src={anime.image_url}
						alt="Anime Image" />
				</figure>
				<label>{ anime.title }</label>
			</a>
			{/* </Link> */}
		</article>
	)
}

export default AnimeCard
