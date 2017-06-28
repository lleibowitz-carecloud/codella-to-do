import React from 'react';
import ReactDOM from 'react-dom';
import ListForm from './App.js';
import { BrowserRouter as Router, Route, browserHistory, Switch, Link } from 'react-router-dom'
import './index.css'; 

// can talk about a URL make up? i.e Changing the Path
const Header = () => (
  <header>
    <nav>
    <span>CODeLLAbook</span>
      <ul>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/wall'>Wall</Link></li>
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

const Wall = () => (
  <div>
  <ListForm />
  </div>
)

const Home = () => (
  <div>
  <h1> This is our home page. Add pictures and gifs to talk about react. </h1>
  </div>
)

const Main = () => (
  <main>
    <Switch>
    <Route exact path='/' component={Home} />
    <Route path='/wall' component={Wall} />
    </Switch>
  </main>
)

ReactDOM.render((
  <Router history={browserHistory} >
  <App />
    </Router>),document.getElementById('root')
);
