import React from 'react';
import '../App.css';

export class Content extends React.Component {

    render() {
        return (
            <div className="App">
                <h1>HELLO WORLD</h1>
                <h2>It is {new Date().toLocaleTimeString()}.</h2>
            </div>
        );
    }
} 