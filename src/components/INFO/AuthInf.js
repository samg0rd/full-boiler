import React from 'react';

const AuthInf = () => {
    return (
        <div>
            <h3>AUTHENTICATION</h3>
            <div>
                <p>authentication can be a little tricky and time consuming.</p>
                <p>
                    so i defined a basic standard user authentication and token handling process which works out of the box 
                    (as you can see in the home page)
                </p>
                <p>
                    all you need to do is to change the endpoints defined in <strong>store/actions/auth.js</strong>
                    in the <strong>auth</strong> function (line <strong>49</strong>)
                </p>
                <p>you also probably need to customize the signup and signin forms inputs based on the required inputs you need for authentication.</p>
                <p>and also edit the header being sent with the post request defined in <strong>store/actions/auth.js</strong> on line <strong>6</strong> .</p>
                <p>right now it's set to a mock firebase backend defined by me. for testing it you can either sign up with a fake email and password and then sign in </p>
                <p>or just use sample email and password shown in the home auth component .</p>
                <p>if your endpoint requires a header attached to the post request you can edit the header variable on top of that file</p>
            </div>
        </div>
    );
};

export default AuthInf;