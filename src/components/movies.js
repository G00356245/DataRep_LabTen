import React from 'react';
import { MovieItem } from './movieItem';

//Movies class
export class Movies extends React.Component {

    render() {
        //I'm not sure what this code does
        return this.props.movies.map((movie) => {
            return <MovieItem movie={movie}></MovieItem>
        })
    }
}