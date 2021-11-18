import {React, useEffect, useState} from "react";
import { Helmet } from "react-helmet";
import { useLocation } from 'react-router-dom'
import Navbar from "../components/Navbar.js";
import Footer from "../components/Footer.js";
import GeneratePagination from "../components/Pagination.js";
import Filter from "../components/Filters.js";


var Page ; 

function MainContent(props) {
	return (
		<main>
			<div className="anime-list">
				{props.animeList.map(anime => (
					<AnimeCard
						anime={anime}
						key={anime.mal_id} />
				))}
			</div>
		</main>
	)
}

function AnimeCard({anime}) {
	return (
		<article className="anime-card">
			{/* <Link to ="Watch"> */}
			<a 
				href={anime.url + "/episode"} 
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

function Animelist(num) {
	var genre;
	var status;
	var page = "1";

	if(Page == "Directory"){
		genre = "";
		status= "";
	}else if(Page == "Emision"){
		genre = "";
		status= "&status=airing";
	}else{
		status= "";
		genre = "&genre=12";
	}
	const [animeList, SetAnimeList] = useState([]);

	useEffect(() => {
		FetchDefault();
	});

	const FetchDefault = async ()=>{
		let url = "https://api.jikan.moe/v3/search/anime?q=&order_by=members&sort=desc&page="+ page +"&limit=32" + genre + status;
		console.log(url);
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

function Directory(){
   	Page = useLocation().pathname.replace("/", "");
    Page = Page.replace(/([A-Z])/g, ' $1').trim();

    const MainSearch = "All Animes";

    useEffect(() => {   

		const PaginationContainer = document.querySelector('.pagination-container');
		const Button = PaginationContainer.querySelectorAll('.button');
		Button.forEach( item => {  
			item.addEventListener( 'click' , event => {   
				//Animelist(  item.firstChild.textContent  );
			})
		}); 

	}, [])

    return(
        <>
            <Helmet>
                <link rel="stylesheet" href="./Styles/Directory.css"/>
                <title>{Page} - CodeNime</title>
            </Helmet>
            <Navbar></Navbar>
            <main className="container">
                <div className="directory-navbar">  
                    <h1><i className="fab fa-sistrix"></i>{Page} - {MainSearch}</h1>
                    <Filter></Filter>
                </div>
                <section className="directory-content">
                    <div className="content-container">
                    {
						Animelist()
					}
                    </div>
                    {
						GeneratePagination(20)
					}
                </section>
            </main>
            <Footer></Footer>
        </>
    )
}

export default Directory;
    