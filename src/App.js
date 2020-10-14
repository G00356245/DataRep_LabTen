import React from 'react';
import './App.css';
import { Header } from './components/header';
import { Footer } from './components/footer';
import { Content } from './components/content';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav } from 'react-bootstrap';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';


class App extends React.Component {

  render() {
    return (
      <Router>
        <div className="App">
          <Navbar bg="primary" variant="dark">
            <Navbar.Brand href="/">Navbar</Navbar.Brand>
            <Nav className="mr-auto">
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/read">Read</Nav.Link>
              <Nav.Link href="/create">Create</Nav.Link>
            </Nav>
          </Navbar>
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
