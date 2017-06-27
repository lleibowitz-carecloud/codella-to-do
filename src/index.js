import React from 'react';
import ReactDOM from 'react-dom';
import ListForm from './App.js';
import { BrowserRouter as Router, Route, browserHistory, Switch, Link } from 'react-router-dom'
import './index.css'; 

// can talk about a URL make up? i.e Changing the Path
const Header = () => (
  <header>
    <nav>
    <span>CodedellaBook</span>
      <ul>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/lists'>Page 2</Link></li>
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
  <ListForm />
  </div>
)

const Lists = () => (
  <div>
  <h1> This is our second page </h1>
  </div>
)

// const List = () => (
//   <Switch>
//     <Route exact path='/lists' component={Lists} />
//     <Route path='lists/:name' component={List} />
//   </Switch>
// )

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
