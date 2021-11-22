/* eslint-disable eqeqeq */
import { React, useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import { useLocation } from 'react-router-dom';
import Navbar from '../components/Navbar.js';
import Footer from '../components/Footer.js';
import GeneratePagination from '../components/Pagination.js';
import Filter from '../components/Filters.js';

var Page;

function MainContent(props) {
	return (
		<main>
			<div className="anime-list">
				{props.animeList && props.animeList.map((anime) => <AnimeCard anime={anime} key={anime.mal_id} />)}
			</div>
		</main>
	);
}

function AnimeCard({ anime }) {
	return (
		<article className="anime-card">
			{/* <Link to ="Watch"> */}
			<a href={anime.url + '/episode'} target="_blank" rel="noreferrer">
				<figure>
					<img className="animg" src={anime.image_url} alt="Anime-Cover-Page" />
				</figure>
				<label>{anime.title}</label>
			</a>
			{/* </Link> */}
		</article>
	);
}

function Animelist({ pageContentParam }) {
	const [firstFetch, setFirstFetch] = useState(false);
	if (pageContentParam === undefined) {
		pageContentParam = '1';
	}
	let pageContent = pageContentParam;
	//console.log(pageContent);
	var excluir;
	var genre;
	var status;

	if (Page == 'Directory') {
		genre = '&genre=12';
		status = '';
		excluir = '&genre_exclude=1';
	} else if (Page == 'Emision') {
		genre = '&genre=12';
		status = '&status=airing';
		excluir = '&genre_exclude=1';
	} else {
		status = '';
		genre = '&genre=12';
		excluir = ''
	}
	const [animeList, SetAnimeList] = useState([]);

	useEffect(() => {
		if (!firstFetch) {
			FetchDefault();
		}
	});

	const FetchDefault = async () => {
		let url =
			'https://api.jikan.moe/v3/search/anime?q=&order_by=members&sort=desc&page=' +pageContent +'&limit=32' +genre + excluir + status ;
		console.log(url);
		const temp = await fetch(url).then((res) => res.json());

		SetAnimeList(temp.results);
		setFirstFetch(true);
	};

	return (
		<>
			<MainContent animeList={animeList}></MainContent>
		</>
	);
}

function Directory() {
	//const [pageContent, setPageContent] = useState(null);
	const [firstFetch, setFirstFetch] = useState(false);
	let PageApiContent = window.location.href.split('=')[1];

	Page = useLocation().pathname.replace('/', '');
	Page = Page.replace(/([A-Z])/g, ' $1')
		.trim()
		.replace(' ', '');
	console.log(Page);

	const MainSearch = 'All Animes';

	const changePage = (event) => {
		const content = event.target.textContent;
		if (PageApiContent === undefined) {
			PageApiContent = '1';
		}

		if (content !== '...') {
			console.log(PageApiContent);
			console.log(content);
			if (parseInt(PageApiContent) > 1 && content === 'back') {
				window.location.href = `/${Page}?page=${parseInt(PageApiContent) - 1}`;
			} else if (parseInt(PageApiContent) < 6 && content === 'next') {
				window.location.href = `/${Page}?page=${parseInt(PageApiContent) + 1}`;
			} else if (content !== 'back' && content !== 'next') {
				window.location.href = `/${Page}?page=${content}`;
			}
		}
	};

	useEffect(() => {
		if (firstFetch) {
			if (!PageApiContent) {
				PageApiContent = '1';
			}
			setFirstFetch(false);
		}

		const PaginationContainer = document.querySelector('.pagination-container');
		const Button = PaginationContainer.querySelectorAll('.button');
		Button.forEach((item) => {
			item.addEventListener('click', (event) => {
				changePage(event);
			});
		});

		return () => {
			Button.forEach((item) => {
				item.removeEventListener('click', (event) => {
					changePage(event);
				});
			});
		};
	}, []);

	return (
		<>
			<Helmet>
				<link rel="stylesheet" href="./Styles/Directory.css" />
				<title>{Page} - CodeNime</title>
			</Helmet>
			<Navbar></Navbar>
			<main className="container">
				<div className="directory-navbar">
					<h1>
						<i className="fab fa-sistrix"></i>
						{Page} - {MainSearch}
					</h1>
					<Filter></Filter>
				</div>
				<section className="directory-content">
					<div className="content-container">
						{!firstFetch && <Animelist pageContentParam={PageApiContent}></Animelist>}
					</div>
					<GeneratePagination currentPage={parseInt(PageApiContent)} PagesAmount={6} />
				</section>
			</main>
			<Footer></Footer>
		</>
	);
}

export default Directory;
