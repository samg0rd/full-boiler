import React from 'react';

const LayoutInf = () => {
    return (
        <div>
            <h3>Layout Container</h3>
            <div>
                <p>Layout container is the only container we import and use in our App.js file</p>
                <p>all the Routes ( defined in App.js ) are going to be rendered in this container</p>
                <p>header and footer are also defined in this container</p>
                <p>you dont really need to adjust this container that much except if you want to change the way header navigation nav items are being rendered</p>                
            </div>
        </div>
    );
};

export default LayoutInf;