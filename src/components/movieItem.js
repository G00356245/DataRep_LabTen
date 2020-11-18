import React from 'react';
import Card from 'react-bootstrap/Card'; //imported card from bootstrap

//MoveItem class
export class MovieItem extends React.Component {

    render() {
        return (
            //added card from bootstrap, this allows the movie posters to have a card layout look on the website.
            <div>
                <Card>
                    <Card.Header>{this.props.movie.title}</Card.Header>
                    <Card.Body>
                        <blockquote className="blockquote mb-0">
                            <img src={this.props.movie.poster} width="200" height="200"></img>
                            <footer className="blockquote-footer">
                                {this.props.movie.year}
                            </footer>
                        </blockquote>
                    </Card.Body>
                </Card>
            </div>
        );
    }
}