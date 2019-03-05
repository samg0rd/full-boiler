import React, { Component } from 'react';
import { connect } from 'react-redux';
import classes from './About.module.scss';
import * as actions from '../../store/actions/index';

// import info components
import AuthInf from '../../components/INFO/AuthInf';
import LayoutInf from '../../components/INFO/LayoutInf';
import NavInf from '../../components/INFO/NavInf';
import ReduxInf from '../../components/INFO/ReduxInf';
import RouterInf from '../../components/INFO/RouterInf';
import ScssInf from '../../components/INFO/ScssInf';
import ThunkInf from '../../components/INFO/ThunkInf';

class About extends Component {

    render() {

        let info = <h4 style={{textAlign: "center"}}>select subject from the menu above</h4>;

        if(this.props.RouterInfo){
            info = <RouterInf />
        }
        if(this.props.ReduxInfo){
            info = <ReduxInf />
        }
        if(this.props.ThunkInfo){
            info = <ThunkInf />
        }
        if(this.props.ScssInfo){
            info = <ScssInf />
        }
        if(this.props.NavigationInfo){
            info = <NavInf />
        }
        if(this.props.AuthInfo){
            info = <AuthInf />
        }
        if(this.props.LayoutInfo){
            info = <LayoutInf />
        }
            
        return (
            <div className={classes.About}>                
                <h2>all the documentation of the boilerplate should go here</h2>
                <h3>hope you enjoy it ;)</h3>
                <main>
                    <h4>table of content</h4>
                    <ul className={classes.About__list}>                        
                        <li className={this.props.RouterInfo ? [classes.About__listItem,classes.mark].join(' ') : classes.About__listItem} onClick={this.props.showRouterInfo}>router</li>
                        <li className={this.props.ReduxInfo ? [classes.About__listItem,classes.mark].join(' ') : classes.About__listItem} onClick={this.props.showReduxInfo}>redux</li>
                        <li className={this.props.ThunkInfo ? [classes.About__listItem,classes.mark].join(' ') : classes.About__listItem} onClick={this.props.showThunkInfo}>redux thunk</li>                        
                        <li className={this.props.ScssInfo ? [classes.About__listItem,classes.mark].join(' ') : classes.About__listItem} onClick={this.props.showScssInfo}>scss</li>
                        <li className={this.props.LayoutInfo ? [classes.About__listItem,classes.mark].join(' ') : classes.About__listItem} onClick={this.props.showLayoutInfo}>about layout container</li>
                        <li className={this.props.NavigationInfo ? [classes.About__listItem,classes.mark].join(' ') : classes.About__listItem} onClick={this.props.showNavigationInfo}>navigation</li>
                        <li className={this.props.AuthInfo ? [classes.About__listItem,classes.mark].join(' ') : classes.About__listItem} onClick={this.props.showAuthInfo}>athentication</li>                                                
                    </ul>
                </main>
                <section className={classes.About__info}>
                    {info}
                </section>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        RouterInfo: state.about.routerInfo,
        ReduxInfo : state.about.reduxInfo,        
        ThunkInfo: state.about.thunkInfo,
        ScssInfo: state.about.scssInfo,
        NavigationInfo: state.about.navigationInfo,
        AuthInfo: state.about.authenticationInfo,
        LayoutInfo: state.about.layoutInfo
    }
}

const mapDispatchToProps = dispatch => {
    return {
        showRouterInfo: () => dispatch(actions.showRouterInf()),
        showReduxInfo: () => dispatch(actions.showReduxInf()),
        showThunkInfo: () => dispatch(actions.showThunkInf()),
        showScssInfo: () => dispatch(actions.showScssInf()),
        showNavigationInfo: () => dispatch(actions.showNavigationInf()),
        showAuthInfo: () => dispatch(actions.showAuthInf()),
        showLayoutInfo: () => dispatch(actions.showLayoutInf()),
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(About);