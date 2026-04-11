// Import React
import React from "react";

// Create About component
function About({ image = "SE/4_FrontEndDevelopmentReact1/2_2/react-components-props-vite-lab/images/demo.png", about }) {
    return (
        <aside id="about">
            <img src={image} alt="blog logo"></img>
            <p>{about}</p>
        </aside >

    );
}

// Export to make it globally available
export default About;