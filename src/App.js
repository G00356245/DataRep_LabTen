import React from 'react';
import './App.css';
import { Header } from './components/header';// importing header from the header.js file in componenet 
import { Footer } from './components/footer';// importing Footer from the Footer.js file in componenet 
import { Content } from './components/content';// importing Component from the Component.js file in componenet 
import 'bootstrap/dist/css/bootstrap.min.css';// importing Bootstrap
import { Navbar, Nav } from 'react-bootstrap';// importing bootstrap navbar
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'; //importing a routing

//main class
class App extends React.Component {

  render() {
    return (
      //router added
      <Router> 
        <div className="App"> 
        {/* Navbar Added Here, display a navabr at eh top of the page, allows users to go to different components through headings. */}
          <Navbar bg="primary" variant="dark">
            <Navbar.Brand href="/">Navbar</Navbar.Brand>
            <Nav className="mr-auto">
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/read">Read</Nav.Link>
              <Nav.Link href="/create">Create</Nav.Link>
            </Nav>
          </Navbar>
         {/* Added a Switch, this allows the user to go from each component of the website without having to go to a different page. */} 
          <Switch>
            <Route path='/' component={Content} exact></Route>
            <Route path='/read' component={Header} exact></Route>
            <Route path='/create' component={Footer} exact></Route>
          </Switch>
        </div>
      </Router>
    );
  }
}
export default App; 
