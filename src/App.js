import React, { Component } from 'react';
import { Route, Switch, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import './App.css';

// IMPORTING COMPONENTS
import Layout from './containers/Layout/Layout';
import Home from './containers/Home/Home';
import About from './containers/About/About';
import Auth from './containers/Auth/Auth';
import Logout from './containers/Auth/Logout/Logout';

// import required actions from the store 
import * as actions from './store/actions/index';



class App extends Component {

  // check if there is a token available on component did mount
  componentDidMount(){
    this.props.onTryAutoSignup();
  }

  render() {

    // Navigation links and routes defined here
    // they will be filled based on the user's authentication state
    let LINKS = null;
    let routes = null; 
    
    // USER IS AUTHENTICATED
    if ( this.props.isAuthenticated ) {

      LINKS = [
        { label: 'Home', to: '/' , exact: true},
        { label: 'about', to: '/about' },
        { label: 'logout', to: '/logout' },
      ]

      routes = (
        <Switch>                    
          <Route path="/logout" component={Logout} />
          <Route path="/about" component={About} />          
          <Route path="/" exact component={Home}/>
        </Switch>
      );

    }else{
      // USER IS NOT AUTHENTICATED
      LINKS = [
        { label: 'Home', to: '/' , exact: true},
        { label: 'about', to: '/about'},
      ]

      routes = (
        <Switch>
          <Route path="/" exact render={()=>{
            return this.props.isAuthenticated ?
            <Home />
            :
            <Auth />  
          }}/>        

          <Route path="/" exact component={Home} />        
          <Route path="/about" component={About} />   

        </Switch>
      );
    }

    return (
      <div className="App">
        <Layout navigationLinks={LINKS}>          
          {routes}
        </Layout>
      </div>
    );
  }
}

const mapStatetoProps = state => {
  return {
    isAuthenticated: state.auth.token !== null
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onTryAutoSignup: () => dispatch( actions.authCheckState() )
  }
}

export default withRouter(connect(mapStatetoProps,mapDispatchToProps)(App));
