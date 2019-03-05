import React from 'react';

const ReduxInf = () => {
    return (
        <div>
            <h3>REDUX</h3>
            <div>
                <p>redux is a predictable state container for JavaScript apps.</p>
                <p>it goes hand in hand with react so well that we almost hear react next to redux all the times</p>
                <p>also it can be an over kill for small applications, 90% of the times we need it in our projects.</p>
                <p>so we have it here configured out of the box with redux devtools set up so you can follow whatever happense to your state at a glance</p>                
            </div>
            <hr />
            <div>
                <h3>specifics</h3>
                <hr />
                <p>everything 'state related' is in <strong>store</strong> folder</p>
                <p> <strong>store/index.js : </strong> </p>
                <p>redux store created and exported from here</p>
                <p>also redux devtools has been set up in this file</p>
                <p>also redux thunk has been imported in this file . what redux thunk is? :) check its own section from the menu above ;)</p>
                <hr />
                <p> <strong>reducers folder</strong> </p>
                <p>for each container that has some state we make a file with the name of that container and put the state of that container in therte, here we have about.js and auth.js</p>
                <p>about.js contains the state of the about container and auth.js contains the state of the auth container</p>
                <p> <strong>reducers/index.js : </strong> </p>
                <p>here we combine our reducers, so we can access our states in our containers from a single combined state. we name our combined reducer "rootReducer" and at last we export it</p>
                <hr />
                <p> <strong>actions folder</strong> </p>
                <p> <strong>actions/actionTypes.js : </strong> </p>
                <p>we need an action to affect our state? so we have to define the type of that action and export it as default in this file</p>
                <p>then we are going to use these actionTypes where ever we need them (almost in evert container reducer and container action file)</p>
                <p> <strong>actions/index.js : </strong> </p>
                <p>do we need to dispatch any action in our container? when component mounts or when the user clicks on a button forexample?</p>
                <p>then we need to export that action from the related action file in this index file. pretty straightforward :D</p>
            </div>
        </div>
    );
};

export default ReduxInf;