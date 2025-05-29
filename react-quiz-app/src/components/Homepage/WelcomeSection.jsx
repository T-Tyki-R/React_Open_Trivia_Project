//imports
import React from 'react';

//component
const WelcomeSection = ({welcomeMessage, title, instructions}) => (
    <div>
        <h1>{welcomeMessage}</h1>
        <h2>{title}</h2>
        <p>{instructions}</p>
    </div>
);
//export
export default WelcomeSection;