import {  useState, useEffect } from "react";
import SearchResults from "./searchresults";
import MovieCard from "./moviecard";


export default function Main() {
    const [search, setMovieSearch] = useState("James Bond")
    const [movies, setMovies] = useState([])
    
    const pullMovies = async () => {
        const result = await fetch(`http://www.omdbapi.com/?s=${search}&type=movie&page=1&r=json&apikey=3ab58ea7`)
        const data = await result.json()
        
        if (data.Response === "True") {
            setMovies(data.Search.splice(0, 10))

        } else {
            alert("Please be more specific! ( Typing 3 or more characters helps)")
        }
    }

    useEffect(() => { pullMovies() }, [])

    return (
<>
            <SearchResults setMovieSearch={setMovieSearch} pullMovies={pullMovies} />
            <div className="movieContainer">
                {movies.map((movie, index) =>
                    (<MovieCard key={index} year={movie?.Year} title={movie?.Title} img={movie?.Poster}id={movie?.imdbID} />))}
            </div>
        </>
    )
}