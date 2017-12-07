import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
  Link,
  withRouter
} from 'react-router-dom';
import Home from './Home.js';
import List from './List.js';
import Cuisines from './Cuisines.js';
import Suggest from './suggestion/Suggest.js';
import PleaseLogin from './PleaseLogin.js';
import fire, { auth, provider } from './fire.js';
import './App.css';

class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      isLoggedIn: false,
      user: null,
      username: '',

    }
  }
  componentDidMount() {
    console.log('hey!')
    auth.onAuthStateChanged(user => {
      this.setState({
        user: user
      })
    })
  }
  handleLogout() {
    auth.signOut()
      .then(() => {
        this.setState({ user: null })
        this.props.history.push('/');

      })
  }
  handleLogin() {
    auth.signInWithPopup(provider)
      .then((result) => {
        const user = result.user;
        this.setState({
          user
        })
        console.log(this.props);
        console.log(this.state.user);
        this.props.history.push('/cuisines');

        const ref = fire.database().ref('users')
        const refChild = fire.database().ref('users/' + this.state.user.uid)
        refChild.on('value', snap => {
          if (snap.val !== null) {
            console.log('this user is registered!');
          }
          else {
            refChild.set({
              username: this.state.user.displayName,
              email: this.state.user.email,
              choices: [],
              zipCode: 90210
            });
          }
        })

      })
  }

  suggestProps() {
    return (
      <Suggest user={this.state.user} />
    )
  }

  render() {
    return (
      <div className="App container">
        <nav className="navbar navbar-toggleable-sm navbar-inverse bg-inverse text-white">
          <ul className="navbar-nav">
            <li className="nav-item"><Link to="/" className="nav-link">Home</Link></li>
            <li className="nav-item"><Link to="/cuisines" className="nav-link">Cuisines</Link></li>
            <li className="nav-item"><Link to="/list" className="nav-link">My List</Link></li>
          </ul>

          <ul className="navbar-nav ml-auto">
            {this.state.user ?
              <li className="nav-item username">{this.state.user.displayName}</li>
              :
              null
            }
            {this.state.user ?
              <img className="nav-item user-img" src={this.state.user.photoURL} />
              :
              null
            }
            {this.state.user ?
              <button className="nav-item btn-danger"
                onClick={e => { this.handleLogout(e) }}>Log out</button>
              :

              <button className="nav-item btn-success"
                onClick={e => { this.handleLogin(e) }}>Log in</button>

            }
          </ul>
        </nav>
        <Route exact path="/" facebookLogin={'test'} render={props => <Home handleLogin={() => { this.handleLogin() }} {...props} />} />

        {this.state.user ?
          <Route exact path="/cuisines/"
            render={props => <Cuisines {...props} user={this.state.user} />} />

          :
          <Route exact path="/cuisines/" component={PleaseLogin} />

        }
        {this.state.user ?
          <Route exact path="/cuisines/:subcuisine"
            render={props => <Cuisines {...props} user={this.state.user} />} />

          :
          <Route exact path="/cuisines/:subcuisine" component={PleaseLogin} />

        }
        <Route path="/cuisines/:subcuisine/suggest"
          render={props => <Suggest {...props} user={this.state.user} />} />
        {
          this.state.user ?
            <Route path="/list"
              render={props => <List {...props} user={this.state.user} />} />

            :
            <Route path="/list" component={PleaseLogin} />
        }

      </div>

    )
  }
}

export default withRouter(App);


/*
-quickstart on react app docs
-pluralsight react flux 1-6,
-all the pages with the routing
*/