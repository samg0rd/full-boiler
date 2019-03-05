import React from 'react';

const ThunkInf = () => {
    return (        
        <div>
            <h3>REDUX-THUNK</h3>
            <div>
                <p>dispatching  <strong>actions</strong> in redux is <strong>synchronous</strong>.</p>
                <p>
                    In case if you are willing to address the asynchronous call,
                    like authenticating the user, sending or recieving data to or from the back end,
                    you can use the redux-thunk middleware or redux-saga.                    
                </p>
                <p>here i decided to add thunk because personally im more familiar with it. :)</p>                                
            </div>
        </div>
    );
};

export default ThunkInf;