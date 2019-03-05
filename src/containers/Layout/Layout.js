import React, { Component } from 'react';
import Navigation from '../../components/Navigation/Navigation';
import Footer from '../../components/Footer/Footer';

import classes from './Layout.module.scss';


class Layout extends Component {

  render() {    
    return (
      <div className={classes.Layout}>
        <Navigation links={this.props.navigationLinks}/>    
        <div className={classes.Layout__container}>    
          {this.props.children}
        </div>
        <Footer />
      </div>
    );
  }
}

export default Layout;