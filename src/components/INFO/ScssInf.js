import React from 'react';

const ScssInf = () => {
    return (
        <div>
            <h3>SCSS</h3>
            <div>
                <p>
                    <strong>SCSS</strong> is a preprocessor which lets you use features that aren't a part of the wider CSS standard yet, 
                    and provides better workflows for maintaining your stylesheets. ... Scss is an extension of the syntax of CSS. 
                    This means that every valid CSS stylesheet is a valid SCSS file with the same meaning.
                </p>
                <p>create-react-app doesn't support it out of the box. so i just added <strong>node-sass</strong> and thats pretty much it!</p>
                <p>
                    according to the css-module support of the create-react-app you can now just create a [name of the component].module.scss file for each 
                    component or container you have and put your nice SCSS code in there , only applied to that component.
                </p>
                <p>styles from a [name of the component].module.scss file must be imported to the related component with the following syntax :</p>
                <p>import classes from './Footer.module.scss';</p>
                <p>you can name you styles litteraly anything, i perefer to import them as "classes"</p>
                <p>they can be used like this --> </p>                
                <p>{'<html-element className={classes.class-name-defined-in-scss}>'}</p>
            </div>
        </div>
    );
};

export default ScssInf;