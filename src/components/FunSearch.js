import AnimeCard from './AnimeCard';

function FunSearch(props) {

    return(
            <main>
                <form 
                    
                    onSubmit={props.HandleSearch}>
                    <input className="Home-nav-search"
                        type="search"
                        placeholder="Search an anime..."
                        required
                        value={props.search}
                        onChange={e => props.SetSearch(e.target.value)}/>
                </form>
{/*                 <div className="anime-list">
                    {props.animeList.map(anime => (
                        <AnimeCard
                            anime={anime}
                            key={anime.mal_id} />
                    ))}
                </div> */}
            </main>
        )
}

export default FunSearch;