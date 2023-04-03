export default function SearchResults({ pullMovies, setMovieSearch }) {
    
    const searchHandler = (event) => {
        setMovieSearch(event.target.value)
    }


    const submitHandler = (event) => {
        event.preventDefault()
    }


    return (
        <form class="searchForm" onSubmit={submitHandler}>
            <input type="search" placeholder="Search movie.." minLength={3} onChange={searchHandler}/>
            <button type="submit" onClick={pullMovies} className="searchB">Search</button>
        </form>
    )
}