import React from 'react';
import ReactDOM from 'react-dom';
// import Main from './App';
import ListForm from './ListForm';
import { BrowserRouter as Router, Route, browserHistory, Switch, Link } from 'react-router-dom'
import './index.css'; 

const Header = () => (
  <header>
    <nav>
      <ul>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/lists'>All Lists</Link></li>
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

const Home = () => (
  <div>
  <h1> This is our Home Page </h1>
  <ListForm />
  </div>
)

const Lists = () => (
  <div>
  <h1> This is our Page to show all of our lists created </h1>
  </div>
)

const List = () => (
  <Switch>
    <Route exact path='/lists' component={Lists} />
    <Route path='lists/:name' component={List} />
  </Switch>
)

const Main = () => (
  <main>
    <Switch>
    <Route exact path='/' component={Home} />
    <Route path='/lists' component={Lists} />
    </Switch>
  </main>
)

ReactDOM.render((
  <Router history={browserHistory} >
  <App />
    </Router>),document.getElementById('root')
);
