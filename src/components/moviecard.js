import { useEffect, useState } from "react"

export default function MovieCard({ year, title, id, img }) {
    
    const [details, setDetails] = useState({})

    const getDetails = async () => {
        const result = await fetch(`http://www.omdbapi.com/?i=${id}&type=movie&r=json&apikey=3ab58ea7`)
        const data = await result.json()
        setDetails(data)
    }

    useEffect(() => {getDetails()}, [id])

    return (
        <article className="movieCard">

            <img src={img} alt={title} onError={({ currentTarget }) => {currentTarget.src = "https://cringemdb.com/img/movie-poster-placeholder.png";}} />
            
            <h3>{title}</h3>
            
            <li>Producer: {details.Director}</li>
            <li>Starring: {details.Actors}</li>
            <li>Genre: {details.Genre}</li>
            <li>Release year: {year}</li>
            
        </article>
    )
}