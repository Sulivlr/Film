import React from "react";

export interface Props {
    movie: Movie;
    addMovie: React.MouseEventHandler;
}

export interface Movie {
    id: number;
    title: string;
}

export interface propsMovieTitle {
    title: string;
}