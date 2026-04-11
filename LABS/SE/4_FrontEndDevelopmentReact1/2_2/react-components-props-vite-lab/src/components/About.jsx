// Import React
import React from "react";

// Create About component
function About({ image = "https://via.placeholder.com/215", about }) {
    return (
        <aside id="about">
            <img src={image} alt="blog logo" />
            <p>{about}</p>
        </aside >

    );
}

// Export to make it globally available
export default About;