import React from 'react';

const NavInf = () => {
    return (
        <div>
            <h3>Layout Container</h3>
            <div>
                <p>navigation links are being rendered based the objects in LINKS array defined in App.js file.</p>
                <p>this array is then passed to the layout container and then to the Navigation component.</p>
                <p>there we render NavLinks for each object in the LINKS array.</p>
                <p>if you want to add a navigation item just add an object with the following pattern to the LINKS array in App.js and it will be automatically rendered</p>
                <p>{'{ label: "[MY DESIRED NAME]", to: "/my-desired-name" exact="true" }'}</p>
                <p>P.S: exact is an optional property :)</p>
            </div>
        </div>
    );
};

export default NavInf;