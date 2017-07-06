import React from 'react';
import ReactDOM from 'react-dom';
import AddPost from './App.js';
import { BrowserRouter as Router, Route, browserHistory, Switch, Link } from 'react-router-dom'
import './index.css'; 
import logo  from '../public/favicon.ico'
 
// can talk about a URL make up? i.e Changing the Path
const Header = () => (
  <header>
    <nav>
    <span>CODeLLAbook</span>
      <ul>
        <li><Link to='/'>Wall</Link></li>
        <li><Link to='/about'>About</Link></li>
      </ul>
    </nav>
  </header>
)

const App = () => (
  <div>
    <Header />
    <Main />
  </div>
)

// this is our component that holds the AddPost and ShowPosts components
const Wall = () => (
  <div>
  <AddPost />
  </div>
)

const About = () => (
  <div>
  <ul><img src={logo} alt="React.js logo" /><h1>React.js</h1>
  <li><h2>Built by Facebook, initial release in 2013</h2></li>
  <li><h2>It is a library, not a framework.</h2></li>
  <li><h2>Creates a "single page app"- different components are rendered.</h2></li>
  </ul>
  </div>
)

const Main = () => (
  <main>
    <Switch>
    <Route exact path='/' component={Wall} />
    <Route path='/about' component={About} />
    </Switch>
  </main>
)

ReactDOM.render((
  <Router history={browserHistory} >
  <App />
    </Router>),document.getElementById('root')
);
