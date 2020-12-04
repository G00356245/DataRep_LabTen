import React from 'react';
import '../App.css';
import axios from 'axios';  //using axios, http requests to fetch or save data.

//Edit class
export class Edit extends React.Component {
    //added constructor.
    constructor() {
        super();   //this line of code is needed to use the form.

        //binding the methods so that it can execute when called.
        this.onSubmit = this.onSubmit.bind(this);
        this.onChangeTitle = this.onChangeTitle.bind(this);
        this.onChangeYear = this.onChangeYear.bind(this);
        this.onChangePoster = this.onChangePoster.bind(this);

        //stating the type of data that the users will input.
        this.state = {
            Title: '',
            Year: '',
            Poster: ''
        }
    }
    //using life cycyle hook, this will be called once the component is active in the view.
    componentDidMount() {
        console.log(this.props.match.params.id);

        axios.get('http://localhost:4000/api/movies/'+this.props.match.params.id)
            .then(response =>{
                this.setState({
                    _id:response.data._id,
                    Title:response.data.title,
                    Year:response.data.year,
                    Poster:response.data.poster
                })
            })
            .catch((error)=>{
                console.log(error);
            });
    }

    //method for calling the onchangeYear.
    onChangeYear(e) {
        this.setState({
            Year: e.target.value
        });
    }

    //method for calling the onchangePoster. 
    onChangePoster(e) {
        this.setState({
            Poster: e.target.value
        });
    }

    //method for calling the onchangetitle. 
    onChangeTitle(e) {
        this.setState({
            Title: e.target.value
        });
    }

    //method for onsubmit
    onSubmit(e) {
        e.preventDefault(); //stop the button from  being called multiple times.
        alert("Movie: " + this.state.Title + " " + this.state.Year + " " + this.state.Poster);  //this line will alert whenever the submit button is clicked.

        //making an object with the three values that is recieved.
        const newMovie = {
            title: this.state.Title,
            year: this.state.Year,
            poster: this.state.Poster,
            _id: this.state._id
        }

        //using axios put to call updated data for movies.
        axios.put('http://localhost:4000/api/movies/'+this.state._id, newMovie)
            .then(res => {
                console.log(res.data)
            })  //respond to console.
            .catch();

        // axios.post('http://localhost:4000/api/movies', newMovie) //post request, send data to the server.
        //     .then((res) => {
        //         console.log(res);
        //     })  //respond to console.

        //     .catch((error) => {
        //         console.log(error);
        //     }); //if .then does not work then error will be passed to console.
    }

    render() {
        //adding forms for movie title. year and poster to the edit page to be able to input data.
        //onSubmit allows for the submission of input data in the form.
        //added a submit button at the end so that the users is able to submit data by clicking the button.
        return (
            <div className='App'>
                <form onSubmit={this.onSubmit}>
                    <div className='form-group'>
                        <label>Add Movies Title: </label>
                        <input type='text'
                            className='form-control'
                            value={this.state.Title}
                            onChange={this.onChangeTitle}></input>
                    </div>

                    <div className='form-group'>
                        <label>Add Movie Year: </label>
                        <input type='text'
                            className='form-control'
                            value={this.state.Year}
                            onChange={this.onChangeYear}></input>
                    </div>

                    <div className='form-group'>
                        <label>Movies Poster: </label>
                        <textarea type='text'
                            className='form-control'
                            value={this.state.Poster}
                            onChange={this.onChangePoster}></textarea>
                    </div>

                    <div className='form-group'>
                        <input type='submit'
                            value='Update Data'
                            className='btn btn-primary'></input>
                    </div>
                </form>
            </div>
        );
    }
} 