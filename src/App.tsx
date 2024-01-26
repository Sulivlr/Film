import React, { useState } from 'react';
import Movie, { Movie } from "./assets/types";
import MovieForm from "./MovieForm";

const App: React.FC = () => {
    const [movies, setMovies] = useState<Movie[]>([]);
    const [movieTitle, setMovieTitle] = useState<string>('');

    const addMovie = () => {
        if (movieTitle.trim() !== '') {
            const newMovie: Movie = {
                id: Math.random(),
                title: movieTitle.trim(),
            };
            setMovies((prevMovies) => [...prevMovies, newMovie]);
            setMovieTitle('');
        }
    }

    const deleteMovie = (id: number) => {
        setMovies((prevMovies) => prevMovies.filter((movie) => movie.id !== id));
    };

    return (
        <div>
            <input
                type="text"
                value={movieTitle}
                onChange={(e) => setMovieTitle(e.target.value)}
            />
            <button onClick={addMovie}>Добавить фильм</button>
            <MovieForm movies={movies} onDelete={deleteMovie} />

            <ul>
                {movies.map((movie) => (
                    <li key={movie.id}>{movie.title}</li>
                ))}
            </ul>
        </div>
    );
};

export default App;
